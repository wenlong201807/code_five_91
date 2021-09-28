/**
 * 题目 https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-hou-xu-bian-li-xu-lie-lcof/
 * 
 * @param {number[]} postorder
 * @return {boolean}
 * 后序遍历 左 右 根
 */
const inorder = (nums, l, r, p) => {
  if (l > r) return true;
  let ind = l;
  while (nums[ind] < nums[r]) ++ind;
  if (!inorder(nums, l, ind - 1, p)) return false;
  if (p !== -1 && nums[r] <= nums[p]) return false;
  p = r;
  if (!inorder(nums, ind, r - 1, p)) return false;
  return true;
}
var verifyPostorder = function (postorder) {
  let pre = -1;
  return inorder(postorder, 0, postorder.length - 1, pre)
};