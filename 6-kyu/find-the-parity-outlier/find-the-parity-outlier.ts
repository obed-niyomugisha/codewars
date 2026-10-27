export function findOutlier(integers: number[]) {
  let evenNumbers: number[] = [];
  let oddNumbers: number[] = [];
​
  integers.forEach((int) => {
    if (int % 2) oddNumbers.push(int);
    else evenNumbers.push(int);
  });
​
  if (oddNumbers.length == 1) {
    return oddNumbers[0];
  } else {
    return evenNumbers[0];
  }
}