/**
 * 题目 https://leetcode-cn.com/problems/bst-sequences-lcci/
 * 参考资料 https://leetcode-cn.com/problems/bst-sequences-lcci/solution/js-bfsdfs-liang-jie-fa-by-la-vie-est-bel-nx7i/
 * 通关 https://leetcode-cn.com/problems/bst-sequences-lcci/submissions/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const mergeSequences = (arr1, arr2) => {
  let i = 0;
  let ret = [[arr1, 0]]
  while (i < arr2.length) {
    let cur = arr2[i];
    let tmp = []
    i++;
    for (let [r, start] of ret) {
      for (let j = start; j <= r.length; j++) {
        tmp.push([r.slice(0, j).concat([cur]).concat(r.slice(j)), j + 1])
      }
    }
    ret = tmp
  }
  return ret.map(x => x[0])
}
var BSTSequences = function (root) {
  if (root === null) return [[]]
  let res = []
  let l_arr = BSTSequences(root.left)
  let r_arr = BSTSequences(root.right)
  for (let ls of l_arr) {
    for (let rs of r_arr) {
      let buff = mergeSequences(ls, rs)
      for (let f of buff) {
        res.push([root.val].concat(f))
      }
    }
  }

  return res
};