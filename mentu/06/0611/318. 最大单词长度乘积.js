/**
 * 题目 https://leetcode-cn.com/problems/maximum-product-of-word-lengths/
 * 通关 
 * @param {string[]} words
 * @return {number}
 * 暴力解法
 * 将全部的单词转换成一个26位的二进制向量，然后进行一个与& 运算
 * charCodeAt
 */
var maxProduct = function (words) {
  // 获取字母与a 的插值数字
  const getCharAt = function (char) {
    return char.charCodeAt(0) - 'a'.charCodeAt(0);
  }

  let n = words.length, lens = [], masks = [];
  for (let i = 0; i < n; i++) {
    let len = words[i].length;
    lens.push(len);// 存储每一个单词的长度
    let mask = 0;
    // 每个单词转化成二进制 掩码，并进行计算
    for (let j = 0; j < len; j++) {
      mask |= 1 << getCharAt(words[i][j]);
    }
    masks.push(mask);
  }

  let max = 0;
  for (let k = 0; k < n; k++) {
    for (let m = k + 1; m < n; m++) {
      // 两个二级制数据是否存在相同的位
      if ((masks[k] & masks[m]) === 0) {
        max = Math.max(max, lens[k] * lens[m]);
      }
    }
  }

  return max;
};

// console.info()
const words = ["abcw", "baz", "foo", "bar", "xtfn", "abcdef"];
maxProduct(words)

/**
 * @param {string[]} words
 * @return {number}
 * 通关 
 */

var maxProduct2 = function (words) {
  let len = words.length;
  let max = 0;
  let bits = new Array(len).fill(0);

  // 构建每一个单词的二进制值
  for (let i = 0; i < len; i++) {
    let word = words[i];
    for (let j = 0; j < word.length; j++) {
      bits[i] |= 1 << (word[j].charCodeAt() - 97);
    }
  }

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if ((bits[i] & bits[j]) === 0) {
        max = Math.max(max, words[i].length * words[j].length);
      }
    }
  }

  return max;
};

// 作者：ignore_express
// 链接：https://leetcode-cn.com/problems/maximum-product-of-word-lengths/solution/js-li-yong-26-chang-du-de-er-jin-zhi-shu-f0kp/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。