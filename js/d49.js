var solveNQueens = function (n) {
  function isValid(row, col, chessBoard, n) {
    for (let i = 0; i < row; i++) {
      if (chessBoard[i][col] === 'Q') {
        return false;
      }
    }

    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (chessBoard[i][j] === 'Q') {
        return false;
      }
    }

    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (chessBoard[i][j] === 'Q') {
        return false;
      }
    }
    return true;
  }

  function transformChessBoard(chessBoard) {
    let chessBoardBack = [];
    chessBoard.forEach((row) => {
      let rowStr = '';
      row.forEach((value) => {
        rowStr += value;
      });
      chessBoardBack.push(rowStr);
    });

    return chessBoardBack;
  }

  let result = [];
  function backtracing(row, chessBoard) {
    if (row === n) {
      result.push(transformChessBoard(chessBoard));
      return;
    }
    for (let col = 0; col < n; col++) {
      if (isValid(row, col, chessBoard, n)) {
        chessBoard[row][col] = 'Q';
        backtracing(row + 1, chessBoard);
        chessBoard[row][col] = '.';
      }
    }
  }
  let chessBoard = new Array(n).fill([]).map(() => new Array(n).fill('.'));
  backtracing(0, chessBoard);
  return result;
};

// 作者：carlsun-2
// 链接：https://leetcode-cn.com/problems/n-queens-ii/solution/52-nhuang-hou-iihui-su-fa-jing-dian-wen-ti-xiang-j/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
