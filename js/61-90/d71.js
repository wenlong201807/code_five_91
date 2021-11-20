/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  let diff = 0;
  for (const num of nums) diff ^= num;
  diff &= -diff;
  let ans1 = (ans2 = 0);
  for (const num of nums) {
    if ((num & diff) > 0) ans1 ^= num;
    else ans2 ^= num;
  }
  return [ans1, ans2];
};

// 作者：himymBen
// 链接：https://leetcode-cn.com/problems/single-number-iii/solution/pythonjavajavascript-yi-huo-xing-zhi-fen-uro1/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
