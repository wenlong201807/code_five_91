const frequencySort = (s) => {
  let res = '';
  const map = new Map();

  // 遍历s，统计计数
  for (let char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  // map根据次数排序，返回数组
  const countArr = [...map].sort((a, b) => b[1] - a[1]);

  for (const [char, count] of countArr) {
    // 利用repeat()方法，对char重复count次
    res += char.repeat(count);
  }

  return res;
};

// 作者：lzxjack
// 链接：https://leetcode-cn.com/problems/sort-characters-by-frequency/solution/maptong-ji-ji-shu-javascript-by-lzxjack-m2lu/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
