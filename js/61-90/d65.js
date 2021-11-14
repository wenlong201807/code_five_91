var findContentChildren = function (g, s) {
  g = g.sort((a, b) => a - b);
  s = s.sort((a, b) => a - b);
  let result = 0;
  let index = s.length - 1;
  for (let i = g.length - 1; i >= 0; i--) {
    if (index >= 0 && s[index] >= g[i]) {
      result++;
      index--;
    }
  }
  return result;
};

// 作者：carlsun-2
// 链接：https://leetcode-cn.com/problems/assign-cookies/solution/dai-ma-sui-xiang-lu-dai-ni-xue-tou-tan-x-6jsc/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
