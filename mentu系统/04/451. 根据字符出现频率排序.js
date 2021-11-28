/**
 * 题目 https://leetcode-cn.com/problems/sort-characters-by-frequency/
 * 通过 https://leetcode-cn.com/problems/sort-characters-by-frequency/submissions/
 * 
 * @param {string} s
 * @return {number}
 */
var frequencySort = function (s) {
  // debugger
  let map = new Map()
  let ans = '';
  for (let w of s) {
    map.set(w, (map.get(w) || 0) + 1);
  }

  map = new Map([...map].sort((v1, v2) => v2[1] - v1[1]))
  console.log(map)

  for (let [k, v] of map) {
    console.log('k, v:', k, v)
    for (let i = 0; i < v; i++) {
      ans += k;
    }
  }

  console.log(ans)
  return ans;
};

const s = "tree"
frequencySort(s)