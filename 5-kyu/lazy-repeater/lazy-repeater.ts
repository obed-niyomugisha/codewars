export function makeLooper(str: string) {
  const array = [...str];
  let index = 0;
​
  return function () {
    return array[index++ % array.length];
  };
}