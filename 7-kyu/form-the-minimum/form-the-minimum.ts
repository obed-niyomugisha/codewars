export const minValue = (values: number[]): number => {
  const uniqueValues = [...new Set([...values])];
  return Number(uniqueValues.sort((a,b) => a - b).join(''));
};