/**
 * 00:00:00 - 01:16:32
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
// 通过，测试用例不正常
var rand10 = function () {
  while (true) {
    let num = (rand7() - 1) * 7 + rand7();
    if (num <= 40) return (num % 10) + 1;
    num = (num - 40 - 1) * 7 + rand7();
    if (num <= 60) return (num % 10) + 1;
    num = (num - 60 - 1) * 7 + rand7();
    if (num <= 20) return (num % 10) + 1;
  }
  // return num;
};

// 通过
var rand10 = function () {
  while (true) {
    let random = rand7() * 7 - rand7();
    if (random < 40) {
      return (random % 10) + 1;
    }
  }
};

// 作者：RocTian
// 链接：https://leetcode-cn.com/problems/implement-rand10-using-rand7/solution/yong-rand7-shi-xian-rand10-by-roctian-okjj/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
