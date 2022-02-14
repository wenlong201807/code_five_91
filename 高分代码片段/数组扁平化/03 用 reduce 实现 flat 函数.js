
// 我见过很多的面试官都很喜欢点名道姓的要面试者直接用 reduce 去实现 flat 函数。想知道为什么？文章后半篇我们考虑数组空位的情况的时候就知道为啥了。其实思路也是一样的。

const arr = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5, "string", { name: "弹铁蛋同学" }]

// 首先使用 reduce 展开一层
arr.reduce((pre, cur) => pre.concat(cur), []);
// [1, 2, 3, 4, 1, 2, 3, [1, 2, 3, [1, 2, 3]], 5, "string", { name: "弹铁蛋同学" }];

// 用 reduce 展开一层 + 递归
const flat = arr => {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flat(cur) : cur);
  }, []);
};
// [1, 2, 3, 4, 1, 2, 3, 1, 2, 3, 1, 2, 3, 5, "string", { name: "弹铁蛋同学" }];
