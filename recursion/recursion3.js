let arr = [5, 2, 0, 3, 6, 7];

function oddSum(n) {
  let isOdd = arr[n] % 2 == 1;
  if (n == 0) return isOdd ? arr[n] : 0;
  return (isOdd ? arr[n] : 0) + oddSum(n - 1);
}

console.log(oddSum(arr.length - 1));
