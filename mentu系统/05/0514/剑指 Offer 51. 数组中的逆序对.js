/**
 * 通过 https://leetcode-cn.com/problems/shu-zu-zhong-de-ni-xu-dui-lcof/submissions/
 * @param {number[]} nums
 * @return {number}
 */
let temp = [];// 因为用到的是归并排序，归并排序得用到一个额外的存储树叫temp；
var reversePairs = function (nums) {
  // 把temp的存储大小扩展成和nums的一样大
  while (temp.length < nums.length) temp.push(0);
  // 对应下标
  return countReversePairs(nums, 0, nums.length - 1);// 首尾下标传进去
};

var countReversePairs = function (nums, leftRoot, rightRoot) {// 待排序数组，从l-r的统计区间
  if (leftRoot >= rightRoot) return 0;// 空区间/值包含一个元素的区间的时候，逆序对的个数为0
  let mid = (leftRoot + rightRoot) >> 1;// 右移动1位就是除以2，计算中间数的位置
  let ans = 0;
  ans += countReversePairs(nums, leftRoot, mid);// 左边逆序对的个数
  ans += countReversePairs(nums, mid + 1, rightRoot);// 右边逆序对的个数
  // 加上和跨两边的逆序对的数量
  let k = leftRoot, p1 = leftRoot, p2 = mid + 1;// 分别指向左右区间的第一位
  while ((p1 <= mid) || (p2 <= rightRoot)) {// 第一区间不为空，第二个区间不为空
    if ((p2 > rightRoot) || (p1 <= mid && nums[p1] <= nums[p2])) {// 第一区间的元素放进来
      temp[k++] = nums[p1++];
    } else {
      temp[k++] = nums[p2++];
      ans += (mid - p1 + 1);
    }
  }
  for (let i = 0; i <= rightRoot; i++) nums[i] = temp[i]; return ans;

}