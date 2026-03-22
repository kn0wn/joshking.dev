const WHITESPACE_RE = /\s/;
const WHITESPACE_ONLY_RE = /^\s+$/;

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
  const { animation = "slideUp", duration = 150, easing = "ease", delay = 0 } = opts;
  let s = `--sd-animation:sd-${animation};--sd-duration:${duration}ms;--sd-easing:${easing}`;
  if (delay > 0) s += `;--sd-delay:${delay}ms`;
  return s;
}

export interface StreamConfig {
  worksStartIndex: number;
  baseStagger: number;
  worksStagger: number;
}

/** Matches Vue `useStreamDelay` / `delayMs` behavior. */
export function calcDelay(
  wordIndex: number,
  config: StreamConfig | undefined,
  fallbackStagger: number,
): number {
  const c = config;
  if (!c || c.worksStartIndex <= 0) return wordIndex * fallbackStagger;
  const w0 = c.worksStartIndex;
  const b = c.baseStagger;
  const f = c.worksStagger;
  if (wordIndex < w0) return wordIndex * b;
  return w0 * b + (wordIndex - w0) * f;
}

export function tokenizeText(text: string, startIndex: number) {
  const parts: string[] = [];
  let current = "";
  let inWhitespace = false;

  for (const char of text) {
    const isWs = WHITESPACE_RE.test(char);
    if (isWs !== inWhitespace && current) {
      parts.push(current);
      current = "";
    }
    current += char;
    inWhitespace = isWs;
  }
  if (current) parts.push(current);

  let wordIdx = startIndex;
  return parts.map((part) => {
    const isWord = !WHITESPACE_ONLY_RE.test(part);
    const index = isWord ? wordIdx : 0;
    if (isWord) wordIdx++;
    return { text: part, isWord, index };
  });
}

/** Sequential word indices like Vue `useStreamCursor`. */
export function createStreamCursor(startIndex: number) {
  const segments: number[] = [];
  return {
    next(wordCount: number): number {
      const idx = segments.length;
      segments.push(wordCount);
      let cursor = startIndex;
      for (let i = 0; i < idx; i++) cursor += segments[i]!;
      return cursor;
    },
    total(): number {
      return segments.reduce((s, v) => s + v, 0);
    },
    end(): number {
      return startIndex + segments.reduce((s, v) => s + v, 0);
    },
  };
}
