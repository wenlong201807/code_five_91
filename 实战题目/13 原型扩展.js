// 实现 (5).add(3).minus(2) 功能
// 例： 5 + 3 - 2，结果为 6

// https://juejin.cn/post/6844903821420789767#heading-13

Number.prototype.add = function (n) {
  return this.valueOf() + n;
};
Number.prototype.minus = function (n) {
  return this.valueOf() - n;
};

console.log((5).add(3).minus(2)); // 6
