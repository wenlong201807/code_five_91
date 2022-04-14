/**
 * @param {string} s
 * @return {string[]}
 * 通关 https://leetcode-cn.com/problems/repeated-dna-sequences/submissions/
 */
var findRepeatedDnaSequences = function (s) {
  if (s.length < 11) return [];

  let n = s.length, 
  map = new Map(), 
  left = 0, 
  rigth = 10, 
  res = [];
  while (rigth <= n) {
    let cur = s.substring(left, rigth);
    map.set(cur, map.has(cur) ? map.get(cur) + 1 : 1);
    left++;
    rigth++;
  }

  for (let [k, v] of map) {
    if (v > 1) res.push(k)
  }

  return res;
};