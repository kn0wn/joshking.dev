export function useFormatDate() {
  function formatDate(date: string) {
    return new Date(date).toISOString().split("T")[0];
  }

  return {
    formatDate,
  };
}
