var maxVowels = function (s, k) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let count = 0,
    l = 0,
    r = 0;
  while (r < k) {
    vowels.has(s[r]) && count++;
    r++;
  }
  let max = count;
  while (r < s.length) {
    vowels.has(s[r]) && count++;
    vowels.has(s[l]) && count--;
    l++;
    r++;
    max = Math.max(max, count);
  }
  return max;
};

// 作者：suukii
// 链接：https://leetcode-cn.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/solution/hua-dong-chuang-kou-chao-hao-li-jie-de-ti-jie-ding/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
