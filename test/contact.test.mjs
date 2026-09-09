import assert from 'node:assert/strict';
import test from 'node:test';
import handler, { validateContactSubmission } from '../netlify/functions/contact.mjs';

const valid = { name: '  Bhargesh Patel ', email: ' bhargesh@example.com ', message: ' Hello ' };

test('normalizes a valid submission', () => {
  assert.deepEqual(validateContactSubmission(valid), {
    name: 'Bhargesh Patel',
    email: 'bhargesh@example.com',
    message: 'Hello',
  });
});

for (const [name, values] of [
  ['blank', { name: '', email: '', message: '' }],
  ['whitespace-only', { name: '  ', email: 'person@example.com', message: '\n\t' }],
  ['invalid email', { name: 'Bhargesh', email: 'not-an-email', message: 'Hello' }],
  ['oversized name', { name: 'a'.repeat(101), email: 'person@example.com', message: 'Hello' }],
  ['oversized message', { name: 'Bhargesh', email: 'person@example.com', message: 'a'.repeat(5001) }],
]) {
  test('rejects a ' + name + ' submission', () => {
    assert.ok('error' in validateContactSubmission(values));
  });
}

test('rejects unsupported methods and content types', async () => {
  assert.equal((await handler(new Request('https://example.test/contact'))).status, 405);
  assert.equal(
    (await handler(new Request('https://example.test/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: '{}',
    }))).status,
    415,
  );
});

test('absorbs honeypot submissions without forwarding', async () => {
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async () => { throw new Error('must not forward'); };
  try {
    const response = await handler(new Request('https://example.test/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: 'form-name=contact&bot-field=bot&name=Bot&email=bot%40example.com&message=Hello',
    }));
    assert.equal(response.status, 204);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test('forwards normalized valid submissions to Netlify Forms', async () => {
  const originalFetch = globalThis.fetch;
  let forwarded;
  globalThis.fetch = async (url, options) => {
    forwarded = { url: String(url), options };
    return new Response(null, { status: 200 });
  };
  try {
    const response = await handler(new Request('https://example.test/.netlify/functions/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: 'form-name=contact&bot-field=&name=+Bhargesh+&email=+bhargesh%40example.com+&message=+Hello+',
    }));
    assert.equal(response.status, 204);
    assert.equal(forwarded.url, 'https://example.test/');
    assert.equal(forwarded.options.body, 'form-name=contact&name=Bhargesh&email=bhargesh%40example.com&message=Hello');
  } finally {
    globalThis.fetch = originalFetch;
  }
});
