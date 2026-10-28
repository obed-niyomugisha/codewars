export function positiveSum(arr:number[]):number {
  return arr.reduce((sum, num) => sum + (num > 0 ? num : 0), 0);
}