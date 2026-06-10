/** Mask source only. Color comes from CSS `background-color`. */
const MASK_COLOR = '000000';

/** Simple Icons CDN blocks some brands (e.g. LinkedIn); Iconify serves them instead. */
const ICONIFY_FALLBACKS: Record<string, string> = {
  linkedin: `https://api.iconify.design/simple-icons:linkedin.svg?color=%23${MASK_COLOR}`,
};

export function brandIconUrl(slug: string): string {
  return ICONIFY_FALLBACKS[slug] ?? `https://cdn.simpleicons.org/${slug}/${MASK_COLOR}`;
}
