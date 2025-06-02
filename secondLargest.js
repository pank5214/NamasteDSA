function findSecondLargest(arr) {
  if (arr.length < 2) return null;
  let firstLargest = -Infinity,
    secondLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] != firstLargest)  secondLargest = arr[i];
  }
  return secondLargest;
}

let arr = [2, 5, 1, 11, 11, 8, 11];

console.log(findSecondLargest(arr));
