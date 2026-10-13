export function openOrSenior(data: [number, number][]) {
  return data.map(([age, handicap]) => {
    if (age < 55 || handicap <= 7) {
      return "Open";
    }
​
    return "Senior";
  });
}