// 时间复杂度：O(NlogN)     148ms      50%
// 空间复杂度：O(logN)      45.6MB     46.88%
const sortArray = (
  nums,
  left = 0,
  right = nums.length - 1
) => {
  if (left >= right) return nums;
  let i = left;
  let j = right - 1;
  while (i <= j) {
    if (nums[i] > nums[right]) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      j--;
    } else {
      i++;
    }
  }
  j++;
  [nums[j], nums[right]] = [nums[right], nums[j]];
  sortArray(nums, left, j - 1);
  sortArray(nums, j + 1, right);
  return nums;
};

// 作者：acejs
// 链接：https://leetcode-cn.com/problems/sort-an-array/solution/ce-shi-jiu-chong-pai-xu-suan-fa-ji-dui-y-y7zm/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
