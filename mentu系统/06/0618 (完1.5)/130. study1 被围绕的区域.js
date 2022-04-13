/**
 * 通关 https://leetcode-cn.com/problems/surrounded-regions/submissions/
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 * dfs + 标记 'no' 
 */
var solve = function (board) {
  const m = board.length;
  const n = board[0].length;
  if (m == 0) return;

  const dfs = (i, j) => { // 去找到标记的no
    if (i < 0 || j < 0 || i == m || j == n) {
      return;
    }

    if (board[i][j] === 'O') {
      board[i][j] = 'no';
      dfs(i + 1, j);
      dfs(i - 1, j);
      dfs(i, j + 1);
      dfs(i, j - 1);
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i == 0 || i == m - 1 || j == 0 || j == n - 1) {
        if (board[i][j] == 'O') {// 最外层
          dfs(i, j)
        }
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] == 'no') {
        board[i][j] = 'O'
      } else if (board[i][j] == 'O') {
        board[i][j] = 'X'
      }
    }
  }
};

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve2 = function (board) {
  let m = board.length;
  let n = board[0].length;
  // let visit = new Array(m).fill().map(_=>new Array(n).fill('X'));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      //查看矩阵边上的元素，等于O的 并且没被访问的元素。
      if ((i == 0 || j == 0 || i == m - 1 || j == n - 1) && board[i][j] == 'O') {
        find(i, j);
      } else {
        continue;
      }
    }
  }

  //把board中不为1的全部变为‘X’, 等于1的变为‘O’
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      board[i][j] = board[i][j] == 1 ? 'O' : 'X';
    }
  }
  return;

  function find (sx, sy) {
    if (sx < 0 || sy < 0 || sx >= m || sy >= n || board[sx][sy] != 'O') {
      return;
    }
    //标记已访问
    board[sx][sy] = 1;
    find(sx + 1, sy);
    find(sx - 1, sy);
    find(sx, sy - 1);
    find(sx, sy + 1);
  }
};

// 作者：jingyuanyang
// 链接：https://leetcode-cn.com/problems/surrounded-regions/solution/130-bei-wei-rao-de-qu-yu-dfshe-bing-cha-z4oqx/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。