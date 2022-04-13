// https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/293
// 处理数组和类数组（有iterable接口的数据结构）

var intersect;
function fn2(...arg) {
  debugger
  intersect = arg.reduce((total, next) => {
    return [...total].filter((item) => new Set(next).has(item));
  });
}
var a = [1, 2, 3, 5];
var b = [2, 4, 5, 1];
var c = [1, 3, 5];
// fn2(a, b, c);
// console.log(intersect);
// [1,5]

// a = new Set([1, 2, 3, 5]);
// b = new Set([2, 4, 5, 1]);
// c = new Set([1, 3, 5]);
fn2(a, b, c);
console.log(intersect);
//[1,5]
