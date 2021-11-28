/**
 * @param {number[][]} mat
 * @return {number[][]}
 * 跳过 https://leetcode-cn.com/problems/01-matrix/
 */
var updateMatrix = function (mat) {
  if (!mat.length || !mat[0].length) return null;
  let n = mat.length;
  let m = mat[0].length;
  let ans = new Array(n);
  let queue = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (mat[i][j] === 0) {
        ans[i][j] = 0;
        queue.push([i, j]);
      }
    }
    let dist = 0;
    while (queue.length) {
      let len = queue.length;
      dist++;
      for (let i = 0; i < len; i++){
        let top = queue.shift();
        if (top[0] + 1 < n && ans[top[0] + 1][top[1]] === -1) {
          queue.push([top[0] + 1, top[1]]);
          ans[top[0] + 1][top[1]] = dist;
        }
      }
    }
  }
};