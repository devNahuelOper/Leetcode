function removeDuplicates(nums) {
  if (!nums.length) return 0;
  let [i, j] = [0, 1];

  while (j < nums.length) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
    j++;
  }

  return i + 1;
}

console.log(removeDuplicates([1,1,2]));