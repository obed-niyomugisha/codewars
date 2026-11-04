export function partsSums(ls: number[]): number[] {
    const sums = [];
    let sum = ls.reduce((sum, num) => sum + num, 0);
    sums.push(sum);
​
    for (const num of ls) {
        sums.push(sum - num);
        sum -= num;
    }
​
    return sums;
}