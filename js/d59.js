function knightProbability(n, k, row, column) {
  const dirs = [
    [-1, -2],
    [-2, -1],
    [1, 2],
    [2, 1],
    [-1, 2],
    [2, -1],
    [-2, 1],
    [1, -2],
  ];
  // cache[i][j][step]表示在step步时位于i,j位置仍在棋盘的概率
  const cache = new Array(n)
    .fill(0)
    .map(() => new Array(n).fill(0).map(() => new Array(k + 1).fill(-1)));
  const dfs = (i, j, step) => {
    if (i < 0 || i >= n || j < 0 || j >= n) {
      // 出界，概率为0
      return 0;
    }
    if (step === 0) {
      // 最后一步仍未出界，概率为1
      return 1;
    }
    if (cache[i][j][step] !== -1) {
      // 有缓存的结果，直接返回
      return cache[i][j][step];
    }
    let sum = 0;
    for (let dir of dirs) {
      const [x, y] = dir;
      sum += dfs(i + x, j + y, step - 1);
    }
    // 在step步数时当前位置的概率和除以总数即是当前位置的概率
    cache[i][j][step] = sum / dirs.length;
    return cache[i][j][step];
  };
  return dfs(row, column, k);
}

// 作者：rookieey
// 链接：https://leetcode-cn.com/problems/knight-probability-in-chessboard/solution/ji-yi-hua-dfschao-guo-100-by-rookieey-j5ub/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
