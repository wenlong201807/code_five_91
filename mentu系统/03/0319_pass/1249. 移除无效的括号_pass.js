/**
 * 通过 https://leetcode-cn.com/problems/minimum-remove-to-make-valid-parentheses/submissions/
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  // 记录需要删除的多余括号的索引
  // leftDel,rightDel 分别存放 '(', ')'
  let leftDel = [], rightDel = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      leftDel.push(i);
    } else if (s[i] === ')') {
      // 如果有对应的 '(' ，从删除列表中移除
      // 否则 ')' 是多余的，加入右括号的删除列表
      if (leftDel.length) {
        leftDel.pop();
      } else {
        rightDel.push(i)
      }
    }
  }

  // 根据记录删除
  const res = [...s], del = leftDel.concat(rightDel);
  for (let i = 0; i < del.length; i++) {
    res[del[i]] = '';
  }

  return res.join('');
};