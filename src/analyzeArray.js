function analyzeArray(arr) {
  const length = arr.length;
  const average = arr.reduce((total, val) => (total += val), 0) / length;
  const min = arr.reduce((min, val) => (val < min ? val : min));
  const max = arr.reduce((max, val) => (val > max ? val : max));
  return { average, min, max, length };
}
export { analyzeArray };
