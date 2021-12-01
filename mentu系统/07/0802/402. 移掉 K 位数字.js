/**
 * 参考学习 https://leetcode-cn.com/problems/remove-k-digits/solution/dan-diao-zhan-tan-xin-shuang-96yi-shang-dvtf9/
 * 通过 https://leetcode-cn.com/problems/remove-k-digits/submissions/
 * @param {string} num
 * @param {number} k
 * @return {string}
 * 单调栈
 */
var removeKdigits = function (num, k) {
  let n = num.length;
  if (n <= k || n === 1) return '0';
  // 处理数字最前面是0的情况
  const handleStr = (str) => {
    let i = 0;
    while (str[i] == 0) i++; // 字符串与数字比较，不能使用全等
    if (i == str.length) return '0';
    return str.slice(i);
  }
  let stack = [];
  let count = 0;
  for (let i = 0; i < n; i++) {
    while (stack.length && stack[stack.length - 1] > num[i]) { // 留下最小值
      stack.pop();
      count++;
      if (count === k) {
        // 将栈里面的元素和没有入栈的元素进行拼接最后处理返回
        return handleStr(stack.join('') + num.slice(i));
      }
    }
    stack.push(num[i]);
  }
  // num 是 12345678 , conut < k 直接从尾部截取
  if (count < k) return handleStr(stack.join('').slice(0, count - k));
};