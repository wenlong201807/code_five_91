// 由最开始我们总结的 flat 特性知道，flat 函数执行是会跳过空位的。ES5 大多数数组方法对空位的处理都会选择跳过空位包括：forEach(), filter(), reduce(), every() 和 some() 都会跳过空位。
// 所以我们可以利用上面几种方法来实现 flat 跳过空位的特性

// reduce + 递归
Array.prototype.fakeFlat = function(num = 1) {
  if (!Number(num) || Number(num) < 0) {
    return this;
  }
  let arr = [].concat(this);
  return num > 0
    ? arr.reduce(
        (pre, cur) =>
          pre.concat(Array.isArray(cur) ? cur.fakeFlat(--num) : cur),
        []
      )
    : arr.slice();
};
const arr = [1, [3, 4], , ,];
arr.fakeFlat()
// [1, 3, 4]

// foEach + 递归
Array.prototype.fakeFlat = function(num = 1) {
  if (!Number(num) || Number(num) < 0) {
    return this;
  }
  let arr = [];
  this.forEach(item => {
    if (Array.isArray(item)) {
      arr = arr.concat(item.fakeFlat(--num));
    } else {
      arr.push(item);
    }
  });
  return arr;
};
const arr = [1, [3, 4], , ,];
arr.fakeFlat()
// [1, 3, 4]


// 作者：弹铁蛋同学
// 链接：https://juejin.cn/post/6844904025993773063
// 来源：稀土掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。