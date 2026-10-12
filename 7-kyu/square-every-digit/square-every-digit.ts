export class Kata {
  static squareDigits(num: number) {
    const digits = [...`${num}`];
    const result = [];
    
    for (const digit of digits) {
      const square = (+digit) ** 2;
      result.push(square);
    }
    
    return +result.join('');
  }
}