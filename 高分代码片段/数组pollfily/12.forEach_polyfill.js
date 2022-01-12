Array.prototype.myForEach = function(callback, thisArg) {
  debugger

  var T, k;

  if (this == null) {
    throw new TypeError(' this is null or not defined');
  }
  // 参考资料 https://stackoverflow.com/questions/44079391/what-is-the-purpose-of-doing-objectthis/44080309
  // In strict mode, a primitive this will not be coerced to an object.
  var O = Object(this);// 这个怎么来的 Object？

  var len = O.length >>> 0;
  // 借助右移位运算符 用零填充 len 左边空出的位，这样做的好处是如果 length 未定义就取0.
  // 参考学习 https://www.zhihu.com/question/20693429
  // 优势： 这么写确实比 var len = this.length || 0; （parseInt?）要好很多，在遇到意外的 this 时，它不会返回 { }、[ ] 等意外的值。（IE 6+ 支持）
  if (typeof callback !== "function") {
    throw new TypeError(callback + ' is not a function');
  }

  if (arguments.length > 1) {
    T = thisArg;
  }
  k = 0;
  while (k < len) {
    var kValue;
    if (k in O) {
      kValue = O[k];
      callback.call(T, kValue, k, O); // 第一个参数为this指向
    }
    k++;
  }
};

const arr = [1, 2, 3];
const obj = { a:6 };
arr.myForEach((item,ind) => {
  console.info(item, ind, obj, this);
}, obj);

console.info(Object([2,3]))
