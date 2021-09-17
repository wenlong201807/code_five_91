/**
 * 题目 https://leetcode-cn.com/problems/reverse-prefix-of-word/
 * 通关 https://leetcode-cn.com/problems/reverse-prefix-of-word/solution/5867-fan-zhuan-dan-ci-qian-zhui-by-zhu-w-w0t2/
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
  if (!word.includes(ch)) return word;

  let newStr = '';
  let endInd = word.length;
  for (let i = 0; i < word.length; i++) {
    newStr = word[i] + newStr;
    if (word[i] === ch) {
      endInd = i;
      break;
    }
  }

  newStr = newStr + word.slice(endInd + 1);

  return newStr;
};
const word = 'abcdefd';
const ch = 'd';
reversePrefix(word, ch);
