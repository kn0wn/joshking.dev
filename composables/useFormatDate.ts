export function useDateUtils() {
  function format(date: string) {
    return new Date(date).toISOString().split("T")[0];
  }

  function parse(date: string) {
    return new Date(date);
  }

  return {
    format,
    parse,
  };
}
