/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 通关https://leetcode-cn.com/problems/find-bottom-left-tree-value/submissions/
 * @param {TreeNode} root
 * @return {number}
 * 找值，深度离不开，层级，最大深度，递归去找， 遍历每一层的左子树
 * 左根右 中序遍历
 * 根左右 前序遍历
 * 左右根  后续遍历
 * 
 * 搜索
 * 1 使用前序遍历，优先进行左边搜索，判断当前是否是最大深度，当前节点是否是最左边的节点。
 * 2 可以设置2个全局变量，一个记录最大深度，一个记录当前深度。当节点是叶子节点，且其所处深度比已记录的最大深度大时，更新最左值和最大深度值
 * 3 同深度下只会进行一次值的更新，由于是前序遍历，这唯一一次更新的最左值就是此深度下最左边的值
 * 4 这样递归完成后，就找到这棵树最坐下角的值了。
 */
var findBottomLeftValue = function (root) {
  let maxLevel = -Infinity;// 最大深度
  let curLevel = 0, maxleftval = 0;// 当前深度，最左边的值，必须要有初始值
  let qian = function (node) {
    if (!node) return;
    // 深度递增 
    curLevel++; // 必须要有初始值否则增加无效
    // 当前节点是叶子节点,当前深度是一个大值，最左边的节点就是它本身
    // 同一层深度下，使用前序遍历，优先搜索到的是最左边的节点
    // 同深度情况下，判断语句只需要一次
    if (curLevel > maxLevel && !node.left && !node.right) {
      maxLevel = curLevel;
      maxleftval = node.val;
    }
    // 分别去遍历左子树和右子树
    node.left && qian(node.left);
    node.right && qian(node.right);
    // 回溯，深度是递减的，往上找的过程
    curLevel--;
  };
  // 从根节点往下遍历
  qian(root)
  return maxleftval;
};