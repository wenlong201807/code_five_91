/*
1.创建一个hashmap， 把括号配对放进去
2.创建一个stack（数组），for循环遍历字符串，对于每一个字符串，
  如果map里面有这个key，那说明它是一个左括号，从map里取的相对应的右括号，把它push进stack里，
  否则的话，它就是右括号，需要pop出stack里的第一个字符，然后看它是否等于当前的字符，如果不相符，则返回false。
3.循环结束后， 如果stack不为空，说明还剩下一些左括号没有被闭合，返回false，否则返回true。
*/
/**
 * @param {string} s
 * @return {boolean}
 */
// 通过 https://leetcode-cn.com/problems/valid-parentheses/solution/you-xiao-gua-hao-by-zhu-wen-long-2-ct2j/
var isValid = function (s) {
  const map = new Map();
  map.set("{", "}");
  map.set("[", "]");
  map.set("(", ")");

  const stack = [];
  for(let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      stack.push(map.get(s[i]))
    } else {
      if (s[i] !== stack.pop()) {
        return false;
      }
    }
  }

  if (stack.length) {
    return false;
  }

  return true;
};

const s = "()[]{}";
const res = isValid(s);
console.log('res:', res);