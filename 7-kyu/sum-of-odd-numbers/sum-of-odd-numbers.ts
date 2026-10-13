export function rowSumOddNumbers(n: number) {
  let sum = 0;
  let m = n ** 2 - n + 1;
​
  for (let index = 0; index < n; index++) {
    sum += m;
    m += 2;
  }
​
  return sum;
}