/**
 * 通关 https://leetcode-cn.com/problems/making-file-names-unique/submissions/
 * @param {string[]} names
 * @return {string[]}
 */
var getFolderNames = function (names) {
  let d = {}, ans = [];
  debugger
  for (const f of names) {
    let s = f;
    while (s in d) {
      s = f + '(' + d[f] + ')';
      ++d[f]
    }
    d[s] = 1;
    ans.push(s)
  }
  return ans;
};

const names = ["gta","gta(1)","gta","avalon"];
getFolderNames(names)