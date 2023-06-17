// assumes arr is sorted.

export default function binarySearch(
  haystack: number[],
  needle: number,
): boolean {
  let low = 0;
  let hi = haystack.length;

  while (low < hi) {
    const m = Math.floor(low + (hi - low) / 2);
    const v = haystack[m];

    if (v === needle) {
      return true;
    } else if (v > needle) {
      hi = m;
    } else {
      low = m + 1;
    }
  }

  return false;
}
