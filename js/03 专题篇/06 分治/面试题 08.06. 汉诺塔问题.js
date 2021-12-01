// interface StackItem {
//   n: number;
//   src: number[];
//   cache: number[];
//   target: number[];
// }

function hanota(A, B, C) {
  const stack = [
    { n: A.length,
      src: A, cache: B,
      target: C,
    }
  ];
  while (stack.length) {
    const top = stack.pop();
    if (top.n === 1) top.target.push(top.src.pop());
    else {
      stack.push({
        n: top.n - 1,
        src: top.cache,
        cache: top.src,
        target: top.target,
      });
      stack.push({ n: 1, src: top.src, cache: top.cache, target: top.target });
      stack.push({
        n: top.n - 1,
        src: top.src,
        cache: top.target,
        target: top.cache,
      });
    }
  }
}

// 作者：hermitsun
// 链接：https://leetcode-cn.com/problems/hanota-lcci/solution/yong-zhen-zheng-de-zhan-shi-xian-yi-nuo-ta-by-herm/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。