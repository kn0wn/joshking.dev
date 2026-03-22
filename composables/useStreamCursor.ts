import {
  computed,
  type ComputedRef,
  type MaybeRefOrGetter,
  toValue,
} from "vue";

/**
 * Allocates sequential word indices for streaming animations.
 * Each `next(count)` returns a computed start index for that segment.
 */
export function useStreamCursor(startIndex: MaybeRefOrGetter<number> = 0): {
  next: (wordCount: MaybeRefOrGetter<number>) => ComputedRef<number>;
  total: ComputedRef<number>;
  end: ComputedRef<number>;
} {
  const segments: MaybeRefOrGetter<number>[] = [];

  function next(wordCount: MaybeRefOrGetter<number>): ComputedRef<number> {
    const idx = segments.length;
    segments.push(wordCount);
    return computed(() => {
      let cursor = toValue(startIndex);
      for (let i = 0; i < idx; i++) cursor += toValue(segments[i]!);
      return cursor;
    });
  }

  const total = computed((): number =>
    segments.reduce<number>((s, v) => s + toValue(v), 0)
  );
  const end = computed(() => toValue(startIndex) + total.value);

  return { next, total, end };
}
