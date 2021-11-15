/**
 * @param {string} moves
 * @return {boolean}
 */
 const judgeCircle = (moves) => {
  let up = 0, down = 0, left = 0, right = 0;
  for (let i = 0; i < moves.length; i++) {
    switch (moves[i]) {
      case 'U':
        up++;
        down--;
        break;
      case 'D':
        down++;
        up--;
        break;
      case 'L':
        left++;
        right--;
        break;
      case 'R':
        right++;
        left--;
        break;
      default:
        break;
    }
  }
  return up === down && down === left && left === right && right === 0;
};

// 作者：jsliang
// 链接：https://leetcode-cn.com/problems/robot-return-to-origin/solution/javascript-zuo-biao-fa-yi-dong-fa-by-jsliang/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。