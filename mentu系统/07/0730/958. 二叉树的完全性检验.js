var countNodeNum = function (root) {
  if (root === null) return 0;
  return countNodeNum(root.left) + countNodeNum(root.right) + 1;
}

// k=2m-1;
var judge = function (root, n, m) {
  if (root === null) {
    return n === 0;
  }
  if (n === 0) return false;
  if (n == 1) return root.left === null && root.right === null;
  let k = Math.max(0, 2 * m - 1);
  let l = Math.min(m, n - k), r = n - k - l;
  return judge(root.left, (k - 1) / 2 + l, m / 2) && judge(root.right, (k - 1) / 2 + r, m / 2);
}

/**通过 https://leetcode-cn.com/problems/check-completeness-of-a-binary-tree/submissions/
 * @param {TreeNode} root
 * @return {boolean}
 * 中序遍历：左根右
 */
var isCompleteTree = function (root) {
  if (root === null) return true;
  let n = countNodeNum(root), m = 1, cnt = 1;
  while (cnt + 2 * m <= n) {
    m *= 2;
    cnt += m;
  }
  return judge(root, n, m);
};