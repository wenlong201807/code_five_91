/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 * 最终的目的，就是找一个从根节点的数值。累加到某一个叶子节点的数值的和等于targetSum 
 * 因此，可以将targetSum 减去当前节点的值，然后触底给当前节点的子节点
 * 如果当前节点没有子节点，就要判断targetSum 是否为0，如果为零，就证明至少有一条路
 * 如果没有一个到达叶子节点为0的情况，证明没有符合条件的路径
 * 详见 0401 门徒算法
 */
var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  if (!root.left && !root.right) return targetSum === root.va;
  // targetSum -= root.val;
  return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right,targetSum - root.val);
};

// if (!root) return false;
// if (!root.left && !root.right && targetsum === root.val) return true;
// return haspathsum(root.left, targetsum - root.val) || haspathsum(root.right, targetsum - root.val);

var pathsum = function (root, targetsum) {
  //递归方法
  let respath = [], curpath = [];
  // 1. 确定递归函数参数
  const traveltree = function (node, count) {
    curpath.push(node.val);
    count -= node.val;
    if (node.left === null && node.right === null && count === 0) {
      respath.push([...curpath]);
    }
    node.left && traveltree(node.left, count);
    node.right && traveltree(node.right, count);
    let cur = curpath.pop();
    count -= cur;
  }
  if (root === null) {
    return respath;
  }
  travelTree(root, targetSum);
  return resPath;
};

// 作者：carlsun-2
// 链接：https://leetcode-cn.com/problems/path-sum/solution/dai-ma-sui-xiang-lu-112-lu-jing-zong-he-y07ca/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。