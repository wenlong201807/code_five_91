class Solution {
  solve(nums) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    if (n <= 3) return 0;

    let left = 0,
      right = nums[n - 1] - nums[0];
    while (left < right) {
      let mid = (left + right) >>> 1;
      if (this.check(nums, mid)) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return left / 2;
  }
  check(arr, diameter) {
    let start = arr[0],
      end = start + diameter;
    let cnt = 0;
    for (let i = 0; i < 3; i++) {
      let index = this.find_right(arr, end);
      if (index === arr.length) return true;
      start = arr[index];
      end = start + diameter;
    }
    return false;
  }
  find_right(arr, value) {
    const n = arr.length;
    let left = 0,
      right = n;
    while (left < right) {
      let mid = (left + right) >>> 1;
      if (arr[mid] <= value) left = mid + 1;
      else right = mid;
    }
    return left;
  }
}
