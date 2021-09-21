/**
 * 题目 https://leetcode-cn.com/problems/delete-node-in-a-bst/
 * 参考学习 https://leetcode-cn.com/problems/delete-node-in-a-bst/solution/dai-ma-sui-xiang-lu-dai-ni-xue-tou-er-ch-tpqu/
 * 
 * 通过 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// 未通过
const preorder = (root) => {
  let temp = root.left;
  while (temp.right) temp = temp.right;
  return temp;
}
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (root === null) return root;
  if (key < root.val) {
    root.left = deleteNode(root.left, key)
  } else if (key > root.val) {
    root.right = deleteNode(root.right, key)
  } else {
    if (root.left === null || root.right === null) {
      let temp = root.left ? root.left : root.right;
      return temp;
    } else {
      let temp = preorder(root, key);
      root.val = temp.val;
      root.left = deleteNode(root.left, temp.val)
    }
  }

  return root;
};

// 参考学习 
// 链接：https://leetcode-cn.com/problems/delete-node-in-a-bst/solution/dai-ma-sui-xiang-lu-dai-ni-xue-tou-er-ch-tpqu/

var deleteNode = function (root, key) {
  if (root === null)
    return root;
  if (root.val === key) {
    if (!root.left)
      return root.right;
    else if (!root.right)
      return root.left;
    else {
      let cur = root.right;
      while (cur.left) {
        cur = cur.left;
      }
      cur.left = root.left;
      root = root.right;
      delete root;
      return root;
    }
  }
  if (root.val > key)
    root.left = deleteNode(root.left, key);
  if (root.val < key)
    root.right = deleteNode(root.right, key);
  return root;
};

