export function alphabetPosition(text: string) {
  const result = [];
  const textLength = text.length;
  const upperCaseText = text.toUpperCase();
​
  for (let i = 0; i < textLength; i++) {
    const charCode = upperCaseText.charCodeAt(i);
    const pos = charCode - 64;
​
    if (pos < 1 || pos > 26) continue;
​
    result.push(pos);
  }
​
  return result.join(" ");
}