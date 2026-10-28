export function persistence(num: number): number {
  let result = 0;
  
  while (num > 9) {
    num = [...String(num)].reduce((prod, n) => prod * Number(n), 1);
    result++;
  }
  
  return result;
}