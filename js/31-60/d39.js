/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function (L, R) {
  let count = 0;
  let isPrime = (num) => {
    if (num === 0 || num === 1) {
      return false;
    } else if (num === 2) {
      return true;
    } else {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    }
  };
  for (let i = L; i <= R; i++) {
    let oneLen = i.toString(2).replace(/0/g, '').length;
    isPrime(oneLen) && count++;
  }
  return count;
};

// 作者：tricell
// 链接：https://leetcode-cn.com/problems/prime-number-of-set-bits-in-binary-representation/solution/zhuan-huan-er-jin-zhi-qiu-1de-chang-du-b-8h0w/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
