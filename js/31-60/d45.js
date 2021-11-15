/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, t) {
  // 需要的
  let need = {};
  // 窗口中的字符
  let window = {};
  for (let a of t) {
    // 统计需要的字符
    need[a] = (need[a] || 0) + 1;
  }
  // 左右指针
  let left = 0,
    right = 0;
  let valid = 0;
  let res = [];
  while (right < s.length) {
    // 即将移入窗口的字符
    let c = s[right];
    // 右移窗口
    right++;
    if (need[c]) {
      // 当前字符在需要的字符中，则更新当前窗口统计
      window[c] = (window[c] || 0) + 1;
      if (window[c] == need[c]) {
        // 当前窗口和需要的字符匹配时，验证数量增加1
        valid++;
      }
    }
    while (right - left >= t.length) {
      if (valid == Object.keys(need).length) {
        res.push(left);
      }
      let d = s[left];
      left++;
      if (need[d]) {
        if (window[d] == need[d]) {
          valid--;
        }
        window[d]--;
      }
    }
  }
  return res;
};

// 作者：angela-x
// 链接：https://leetcode-cn.com/problems/find-all-anagrams-in-a-string/solution/du-shi-hua-dong-chuang-kou-de-tong-yong-och3n/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
