function swap(nums, i, j) {
  [nums[i], nums[j]] = [nums[j], nums[i]];
}

function bobleSort(nums) {
  for (i = 0; i < nums.length; i++) {
    for (j = 1; j < nums.length; j++) {
      if (nums[j - 1] > nums[j]) {
        swap(nums, j - 1, j);
      }
    }
  }
  console.info(nums);
  return nums;
}

function bobleSort2(nums) {
  let sorted = true;
  for (i = 0; i < nums.length - 1; i++) {
    sorted = true;
    for (j = 1; j < nums.length - i; j++) {
      if (nums[j - 1] > nums[j]) {
        swap(nums, j - 1, j);
        sorted = false;
      }
      if (sorted) break;
    }
  }
  console.info(nums);
  return nums;
}

// const nums = [1,3,2,5,4,7,6,9,8]; // first: 6.524ms second: 0.282ms
const nums = [1,3,5,7,9,11,13,15,17]; // first: 6.391ms second: 0.434ms

console.time('first');
bobleSort(nums);
console.timeEnd('first');

console.time('second');
bobleSort2(nums);
console.timeEnd('second');