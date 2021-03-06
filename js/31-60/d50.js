// 淹没与 (i, j) 相邻的陆地，并返回淹没的陆地面积
const dfs = (grid, i, j) => {
  let m = grid.length,
    n = grid[0].length;
  if (i < 0 || j < 0 || i >= m || j >= n) {
    // 超出索引边界
    return 0;
  }
  if (grid[i][j] == 0) {
    // 已经是海水了
    return 0;
  }
  // 将 (i, j) 变成海水
  grid[i][j] = 0;
  // 淹没上下左右的陆地
  return (
    dfs(grid, i + 1, j) + // 上
    dfs(grid, i - 1, j) + // 下
    dfs(grid, i, j - 1) + // 左
    dfs(grid, i, j + 1) + // 右
    1
  );
};
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let m = grid.length,
    n = grid[0].length;
  // 记录岛屿的最大面积
  let count = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == 1) {
        // 淹没岛屿，并更新最大岛屿面积
        count = Math.max(count, dfs(grid, i, j));
      }
    }
  }
  return count;
};

// 作者：angela-x
// 链接：https://leetcode-cn.com/problems/max-area-of-island/solution/dfsjie-jue-dao-yu-de-zui-da-mian-ji-by-a-vjom/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
