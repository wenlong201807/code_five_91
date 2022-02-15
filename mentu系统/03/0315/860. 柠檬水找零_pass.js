/**
 * 通过 https://leetcode-cn.com/problems/lemonade-change/submissions/
 * @param {number[]} bills
 * @return {boolean}
 * 1 假设没有5元的钞票，是无法找零的，程序结束
 * 2 如果是20元，找俩个的方式可以分为两种：
 *   一种是需要一张十元钞票和一张五元钞票，另一种是需要三张五元钞票
 * 3 由于五元钞票用到的情况比较多，所有要尽可能的保留五元的钞票
 * 所以优先使用十元加五元的找零组合。
 * 
 * 如果我们的五元钞票和十元钞票各有一张，我们就能够进行找零。
 * 
 * 每一位顾客支付给我们的金额，进行判断。
 * 如果是五元的，我们不需要进行找零，直接+1
 */
var lemonadeChange = function (bills) {
  let five = 0; ten = 0;
  for (const bill of bills) {
    if (bill === 5) five++;
    if (bill === 10) {
      ten++;
      five--;
    }
    if (bill === 20) {
      if (ten && five) {
        ten--;
        five--;
      } else if (five >= 3) {
        five -= 3;
      } else {
        return false;
      }
    }
    if (ten < 0 || five < 0) {
      return false;
    }
  }
  return true;
};