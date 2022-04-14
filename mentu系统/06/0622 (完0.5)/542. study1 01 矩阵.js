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
      for (let i = 0; i < len; i++) {
        let top = queue.shift();
        if (top[0] + 1 < n && ans[top[0] + 1][top[1]] === -1) {
          queue.push([top[0] + 1, top[1]]);
          ans[top[0] + 1][top[1]] = dist;
        }
      }
    }
  }
};

// 参考学习
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  let m = mat.length,
    n = mat[0].length;
  // 目标结果
  let dist = new Array(m)
    .fill(0)
    .map(() => new Array(n).fill(Number.MAX_SAFE_INTEGER));
  // 如果 (i, j) 的元素为 0，那么距离为 0
  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++) if (mat[i][j] == 0) dist[i][j] = 0;

  // 只有 水平向右移动 和 竖直向下移动，递归的顺序是从左到右，从上到下
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 水平向左 是由同行左侧的元素递推算出来的
      if (i - 1 >= 0) dist[i][j] = Math.min(dist[i][j], dist[i - 1][j] + 1);
      // 垂直向下，是由同列上行的元素递推算出来的
      if (j - 1 >= 0) dist[i][j] = Math.min(dist[i][j], dist[i][j - 1] + 1);
    }
  }
  // 只有 水平向左移动 和 竖直向上移动，递归的顺序是从右到左，从下到上
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      // 水平向右 是由同行右侧的元素递推算出来的
      if (i + 1 < m) dist[i][j] = Math.min(dist[i][j], dist[i + 1][j] + 1);
      // 垂直向下，是由同列下行的元素递推算出来的
      if (j + 1 < n) dist[i][j] = Math.min(dist[i][j], dist[i][j + 1] + 1);
    }
  }
  return dist;
};

// 作者：angela-x
// 链接：https://leetcode-cn.com/problems/01-matrix/solution/2chong-ti-jie-si-lu-yan-du-you-xian-sou-3cshu/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
