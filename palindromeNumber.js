function isPalindromeNumber(n) {
  if (n < 0) return false;
  let original = n;
  let reversed = 0;
  while (n > 0) {
    let remainder = n % 10;
    reversed = 10 * reversed + remainder;
    n = Math.floor(n / 10);
  }
  return reversed === original;
}

console.log(isPalindromeNumber(120981));
console.log(isPalindromeNumber(12344321));
