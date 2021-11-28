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
 * @return {number}
 * 给整个树做一个编号，从左到右，从上到下开始。
 * root 的编号为1，那么root 的左子树编号就是2，右子树就是3.
 * root.left 的index = root的index*2 root.right 的index = root 的 index*2+1
 * 然后定义一个变量 max 来记录宽度的最大值。每一层的序号详见完毕后 和max 进行比较取最大值。
 * width = rightIndex - leftIndex + 1;
 */
var widthOfBinaryTree = function (root) {
  if (!root) return 0;
  // 定义一个二维数组，存储当前层的序号和存入的节点
  let max = 1n, que = [[0n, root]];
  while (que.length) {
    let width = que[que.length - 1][0] - que[0][0] + 1n;
    if (width > max) max = width;
    let temp = [];
    for (const [i, q] of que) {
      q.left && temp.push([i * 2n, q.left]);
      q.right && temp.push([i * 2n + 1n, q.right]);
    }

    que = temp;
  }

  return Number(max);
};