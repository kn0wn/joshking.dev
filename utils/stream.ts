export function countWords(s: string | null | undefined): number {
  if (!s) return 0;
  return s.trim().split(/\s+/).filter(Boolean).length;
}

export function sdStyle(opts: {
  animation?: string;
  duration?: number;
  easing?: string;
  delay?: number;
}): string {
  const {
    animation = "slideUp",
    duration = 150,
    easing = "ease",
    delay = 0,
  } = opts;
  let s = `--sd-animation:sd-${animation};--sd-duration:${duration}ms;--sd-easing:${easing}`;
  if (delay > 0) s += `;--sd-delay:${delay}ms`;
  return s;
}
