var beautifulArray = function (n) {
  const map = new Map();
  map.set(1, [1]); // 初始化，也是截止条件
  const recursion = (n) => {
    if (map.has(n)) return map.get(n); // 递归的终止条件
    // 奇数放在左侧 -- 按照数组长度排列好漂亮数组后，然后再通过 2N-1 的方式转成当前层的奇数
    const left = recursion((n + 1) >> 1).map((item) => item * 2 - 1);
    const right = recursion(n >> 1).map((item) => item * 2);
    const ret = [...left, ...right];
    map.set(n, ret);
    return ret;
  };
  return recursion(n);
};

// 作者：jzsq_lyx
// 链接：https://leetcode-cn.com/problems/beautiful-array/solution/fen-zhi-by-jzsq_lyx-qi3m/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
