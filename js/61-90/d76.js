var findCircleNum = function (isConnected) {
  const rows = isConnected.length;
  const visited = new Set(); //记录是否访问过
  let count = 0; //省份数量
  for (let i = 0; i < rows; i++) {
    if (!visited.has(i)) {
      //如果没访问过
      dfs(isConnected, visited, rows, i); //深度优先遍历
      count++; //省份数量+1
    }
  }
  return count;
};

const dfs = (isConnected, visited, rows, i) => {
  for (let j = 0; j < rows; j++) {
    if (isConnected[i][j] == 1 && !visited.has(j)) {
      //如果i，j相连接
      visited.add(j);
      dfs(isConnected, visited, rows, j); //递归遍历
    }
  }
};

// 作者：chen-wei-f
// 链接：https://leetcode-cn.com/problems/number-of-provinces/solution/547-sheng-fen-shu-liang-bing-cha-ji-by-c-88qs/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
