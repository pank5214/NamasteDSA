function removeDuplicates(nums) {
  let pointerPosition = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[pointerPosition]) {
      pointerPosition = pointerPosition + 1;
      nums[pointerPosition] = nums[i];
    }
  }
  return pointerPosition + 1;
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
