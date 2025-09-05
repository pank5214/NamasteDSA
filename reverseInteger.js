function reverseInteger(n) {
  let original = n;
  let rev = 0;
  n = Math.abs(n);
  while (n > 0) {
    let rem = n % 10;
    rev = rev * 10 + rem;
    n = Math.floor(n / 10);
  }
  return original < 0 ? -rev : rev;
}

console.log(reverseInteger(-23907));
