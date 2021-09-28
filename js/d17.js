/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
 var serialize = function(root) {
    
};

/**
 * 题目 https://leetcode-cn.com/problems/serialize-and-deserialize-binary-tree/
 * 参考学习 https://leetcode-cn.com/problems/serialize-and-deserialize-binary-tree/solution/shou-hui-tu-jie-gei-chu-dfshe-bfsliang-chong-jie-f/
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
// /**
//  * Encodes a tree to a single string.
//  *
//  * @param {TreeNode} root
//  * @return {string}
//  */
var serialize = function (root) {
  if (root === null) {
    return root;
  }
  const result = [];
  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    if (node) {
      queue.push(node.left);
      queue.push(node.right);
    }
    result.push(node ? node.val : null);
  }
  return result.join(",");
};

//       1
//   2      3
// 4   5

// r: 1,2,3,4,5,null,null,null,null,null,null
// q: 
/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (!data) {
    return null;
  }
  let serializeList = data.split(",");
  const val = serializeList.shift()
  let root = new TreeNode(val);
  let queue = [root];
  while (queue.length) {
    const node = queue.shift();
    if (node) {
      const leftVal = serializeList.shift();
      const rightVal = serializeList.shift();
      node.left = leftVal ? { val: leftVal } : null;
      node.right = rightVal ? { val: rightVal } : null;
      queue.push(node.left);
      queue.push(node.right);
    }
  }
  return root;
};


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */