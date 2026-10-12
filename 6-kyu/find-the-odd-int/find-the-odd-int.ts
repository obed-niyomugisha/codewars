export const findOdd = (integers: number[]) => {
  const integer_occurence_map = new Map<number, number>();
​
  for (const integer of integers) {
    const occurence = integer_occurence_map.get(integer);
​
    if (occurence) {
      integer_occurence_map.set(integer, occurence + 1);
    } else {
      integer_occurence_map.set(integer, 1);
    }
  }
​
  for (const [integer, occurence] of integer_occurence_map) {
    if (occurence % 2) return integer;
  }
};