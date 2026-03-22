/** Appends `?ref=joshking.dev` (or `&ref=…`) on outbound URLs for attribution. */
const REF_KEY = "ref";
const REF_VALUE = "joshking.dev";

export function withSiteRef(href: string): string {
  const t = href.trim();
  if (!t || t.startsWith("mailto:") || t.startsWith("javascript:")) return t;

  const normalized = t.startsWith("//") ? `https:${t}` : t;

  let url: URL;
  try {
    url = new URL(normalized);
  } catch {
    return href;
  }

  const host = url.hostname.toLowerCase();
  if (host === "joshking.dev" || host === "www.joshking.dev" || host === "localhost") {
    return href;
  }

  url.searchParams.set(REF_KEY, REF_VALUE);

  if (t.startsWith("//")) {
    return `//${url.host}${url.pathname}${url.search}${url.hash}`;
  }
  return url.toString();
}
