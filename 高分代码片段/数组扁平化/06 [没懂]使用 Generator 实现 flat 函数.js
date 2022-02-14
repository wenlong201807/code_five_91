function* flat(arr, num) {
  if (num === undefined) num = 1;
  for (const item of arr) {
    if (Array.isArray(item) && num > 0) {   // num > 0
      yield* flat(item, num - 1);
    } else {
      yield item;
    }
  }
}
const arr = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5, "string", { name: "弹铁蛋同学" }]
// 调用 Generator 函数后，该函数并不执行，返回的也不是函数运行结果，而是一个指向内部状态的指针对象。
// 也就是遍历器对象（Iterator Object）。所以我们要用一次扩展运算符得到结果
flat(arr, Infinity)   
// [1, 2, 3, 4, 1, 2, 3, 1, 2, 3, 1, 2, 3, 5, "string", { name: "弹铁蛋同学" }];
