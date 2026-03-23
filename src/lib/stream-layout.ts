import { WORK_ITEMS } from "./work-items";
import { countWords, createStreamCursor, type StreamConfig } from "./stream";

/** Must match `SdText` in Navigation (name + two icon slots in the stream). */
export const NAV_NAME_TEXT = "josh king";
const NAV_ICON_SLOTS = 2;

const LABEL_WHO = "Who.";
const HEADLINE = "Technical architect.";
const BODY = "Based in London, United Kingdom.";

/** Word indices 0–1: name; 2–3: social icons (same stagger slots as before). */
export function getNavStreamWordCount(): number {
  return countWords(NAV_NAME_TEXT) + NAV_ICON_SLOTS;
}

export function getWhoTotalWords(): number {
  const s = createStreamCursor(0);
  s.next(countWords(LABEL_WHO));
  s.next(countWords(HEADLINE));
  s.next(countWords(BODY));
  return s.end();
}

export function getWhereTotalWords(): number {
  const s = createStreamCursor(0);
  s.next(countWords("Where."));
  for (const item of WORK_ITEMS) {
    s.next(countWords(item.company));
    s.next(countWords(item.role));
    s.next(countWords(item.timeline));
  }
  return s.end();
}

export function buildStreamConfig(): StreamConfig {
  const navWords = getNavStreamWordCount();
  const whoTotal = getWhoTotalWords();
  const whereTotal = getWhereTotalWords();
  const worksStartIndex = navWords + whoTotal + whereTotal;
  return {
    worksStartIndex,
    baseStagger: 40,
    worksStagger: 10,
  };
}
