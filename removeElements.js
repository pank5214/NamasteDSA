function removeElement(nums, val) {
  let pointer = 0;
  for (let i = 0; i < nums.length; i++) {
    // shifts element to left if is not equal to val
    if (nums[i] != val) {
      nums[pointer] = nums[i];
      pointer++;
    }
  }
  return pointer;
}

console.log(removeElement([0, 0, 1, 1, 1, 2, 2, 3, 3, 4], 1));
