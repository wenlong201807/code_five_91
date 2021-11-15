var swimInWater = function (grid) {
  let ARR = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  //记录所有已经访问过的点
  let dp = new Array(grid.length)
    .fill(0)
    .map((i) => new Array(grid[0].length).fill(0));
  let result = 0;
  let stack = [[0, 0]];

  while (stack.length > 0) {
    let [row, col] = stack.shift();
    //用以记录当前已经保存的所有能走的点
    result = Math.max(result, grid[row][col]);

    if (row === grid.length - 1 && col === grid[0].length - 1) {
      //达到终点结束遍历
      break;
    }
    for (let [dr, dc] of ARR) {
      let [nr, nc] = [dr + row, dc + col];
      if (
        nr < grid.length &&
        nr >= 0 &&
        nc < grid[0].length &&
        nc >= 0 &&
        !dp[nr][nc]
      ) {
        dp[nr][nc] = 1;
        //此处若使用二分查找插入还能对时间进行优化
        stack.push([nr, nc, grid[nr][nc]]);
      }
    }
    //排序还能使用二分插入法进行优化
    stack.sort((a, b) => a[2] - b[2]);
  }
  return result;
};

// 作者：wanyan
// 链接：https://leetcode-cn.com/problems/swim-in-rising-water/solution/you-xian-dui-lie-fa-yi-ji-wei-he-hui-xiang-dao-you/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
