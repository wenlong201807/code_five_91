const dfs = (s, k) => {
  if (!s) return 0;
  const cnt = new Array(26).fill(0);
  // 统一当前片段中字符出现频度
  for (const ch of s) {
    cnt[ch.charCodeAt() - 'a'.charCodeAt()]++;
  }

  for (let i = 0; i < 26; i++) {
    if (cnt[i] && cnt[i] < k) {
      const tokens = s.split(String.fromCharCode(i + 'a'.charCodeAt()));
      let ret = 0;
      for (const token of tokens) {
        const len = dfs(token, k);
        ret = Math.max(len, ret);
      }
      return ret;
    }
  }
  return s.length;
};

/**
 * 通过 https://leetcode-cn.com/problems/longest-substring-with-at-least-k-repeating-characters/submissions/
 * @param {string} s
 * @param {number} k
 * @return {number}
 * 分治，递归
 */
var longestSubstring = function (s, k) {
  const n = s.length;
  // 用递归，对原始字符切割
  return dfs(s, k)
};