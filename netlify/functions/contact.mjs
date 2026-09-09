const MAX_BODY_BYTES = 10_000;
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 5_000;
const FIELDS = new Set(['form-name', 'bot-field', 'name', 'email', 'message']);
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function response(status, message) {
  return Response.json({ error: message }, { status });
}

export function validateContactSubmission(values) {
  const name = values.name.trim();
  const email = values.email.trim();
  const message = values.message.trim();

  if (!name || !message) return { error: 'Name and message are required.' };
  if (!email || !EMAIL_PATTERN.test(email)) return { error: 'A valid email address is required.' };
  if (
    name.length > MAX_NAME_LENGTH ||
    email.length > MAX_EMAIL_LENGTH ||
    message.length > MAX_MESSAGE_LENGTH
  ) {
    return { error: 'One or more fields are too long.' };
  }

  return { name, email, message };
}

export default async function handler(request) {
  if (request.method !== 'POST') {
    return response(405, 'Method not allowed.');
  }

  const contentType = request.headers.get('content-type') || '';
  const [mediaType, ...parameters] = contentType.split(';').map((part) => part.trim());
  if (
    mediaType.toLowerCase() !== 'application/x-www-form-urlencoded' ||
    parameters.some((parameter) => !/^charset=(utf-8|utf8)$/i.test(parameter))
  ) {
    return response(415, 'Unsupported media type.');
  }

  const declaredLength = Number(request.headers.get('content-length'));
  if (Number.isFinite(declaredLength) && declaredLength > MAX_BODY_BYTES) {
    return response(413, 'Payload too large.');
  }

  let body;
  try {
    body = await request.text();
  } catch {
    return response(400, 'Unable to read submission.');
  }

  if (new TextEncoder().encode(body).byteLength > MAX_BODY_BYTES) {
    return response(413, 'Payload too large.');
  }

  const params = new URLSearchParams(body);
  for (const [key] of params) {
    if (!FIELDS.has(key) || params.getAll(key).length !== 1) {
      return response(400, 'Malformed submission.');
    }
  }

  if (params.get('form-name') !== 'contact') {
    return response(400, 'Malformed submission.');
  }

  if (params.get('bot-field')) {
    return new Response(null, { status: 204 });
  }

  const result = validateContactSubmission({
    name: params.get('name') || '',
    email: params.get('email') || '',
    message: params.get('message') || '',
  });
  if ('error' in result) {
    return response(422, result.error);
  }

  const forwarded = new URLSearchParams({
    'form-name': 'contact',
    name: result.name,
    email: result.email,
    message: result.message,
  });

  try {
    const formsResponse = await fetch(new URL('/', request.url), {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: forwarded.toString(),
      redirect: 'manual',
    });

    if (formsResponse.status >= 400) {
      return response(502, 'Unable to submit the form.');
    }
  } catch {
    return response(502, 'Unable to submit the form.');
  }

  return new Response(null, { status: 204 });
}
