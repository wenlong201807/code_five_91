// 学习资料 共4题 https://mp.weixin.qq.com/s/dHYECQ3Rsq0FYxOqOaHeHw
// 题目 https://leetcode-cn.com/problems/remove-k-digits/

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  const stack = [];
  const remain = num.length - k;
  for (let i = 0; i < num.length; i++) {
    while (k && stack.length && stack[stack.length-1] > num[i]) {
      stack.pop();
      k -= 1;
    }
    stack.push(num[i]);
  }
  console.log('stack:', stack);
  // return stack.join('');
};
// const num = '1432219'
// const k = 3
const num = "10200"
const k = 1
removeKdigits(num, k)