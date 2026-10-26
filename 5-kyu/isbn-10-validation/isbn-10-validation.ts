export function validISBN10(isbn: string) {
  if (isbn.length !== 10) return false;
  const isbnArray = [...isbn];
​
  const sum = isbnArray.reduce((prev, curr, index) => {
    const num = Number(curr);
​
    if (Number.isNaN(num)) {
      return prev + 1;
    }
​
    return prev + num * (index + 1);
  }, 0);
​
  return sum % 11 == 0;
}