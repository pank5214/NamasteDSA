function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let curr = arr[i],
      prevIndex = i - 1;
    while (arr[prevIndex] > curr && prevIndex >= 0) {
      arr[prevIndex + 1] = arr[prevIndex];
      prevIndex--;
    }
    arr[prevIndex + 1] = curr;
  }
  return arr;
}

console.log(insertionSort([9, 3, 7, 4, 1, 2]));
