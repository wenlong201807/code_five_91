/**
 * @param {number[]} digits
 * @return {number[]}
 */
// 通过 https://leetcode-cn.com/problems/plus-one/
var plusOne1 = function (digits) {
  let len = digits.length - 1
  for (let i = len; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++
      return digits
    } else {
      digits[i] = 0
    }
  }
  return [1, ...new Array(len + 1).fill(0)]
};

// 递归版
// 通过 https://leetcode-cn.com/problems/plus-one/submissions/
function addOne (arr, index) {
  if (index === -1) return arr.unshift(1);// 如果数组的第一位+1 也等于10，再数组的头部插入1
  if (arr[index] + 1 === 10) {
    // 当前个位+1，等于10 往前进一位，个位等于0。 例子：129+1=130
    arr[index] = 0;
    addOne(arr, index - 1);
  } else {// 加完1 不等于10，照常加1，返回。
    arr[index] += 1;
    return arr;
  }
}

var plusOne = function (digits) {
  let index = digits.length - 1;// 找到当前数组的最后一个元素的下标
  addOne(digits, index);// 进入递归，传入数组，和数组的倒数第一个数
  return digits;
};