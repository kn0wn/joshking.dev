export const STREAM_DELAY_KEY = "stream-delay-motion";

export interface StreamDelayConfig {
  /** Global word index where Works. / project copy begins (who + where word counts). */
  worksStartIndex: number;
  baseStagger: number;
  worksStagger: number;
}

/**
 * Cumulative animation delay for the homepage word stream: slower before Works, faster from Works onward.
 * Without `provide`, delays are `wordIndex * fallbackStagger` (same as `SdText`’s stagger prop).
 */
export function useStreamDelay() {
  const config = inject<Ref<StreamDelayConfig> | undefined>(
    STREAM_DELAY_KEY,
    undefined
  );

  function delayMs(wordIndex: number, fallbackStagger = 40): number {
    const c = config?.value;
    if (!c || c.worksStartIndex <= 0)
      return wordIndex * fallbackStagger;

    const w0 = c.worksStartIndex;
    const b = c.baseStagger;
    const f = c.worksStagger;
    if (wordIndex < w0) return wordIndex * b;
    return w0 * b + (wordIndex - w0) * f;
  }

  return { delayMs };
}
