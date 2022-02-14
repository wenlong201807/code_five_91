Array.prototype.myFind = function (callbackFn) {
  var _arr = this,
    thisArg = arguments[1] || window;
  // 遇到回调返回true，直接返回该数组元素
  // 如果循环执行完毕，意味着所有回调返回值为false，最终结果为undefined
  for (var i = 0; i < _arr.length; i++) {
    // 回调函数执行为false，函数中断
    if (callbackFn.call(thisArg, _arr[i], i, _arr)) {
      return _arr[i];
    }
  }
  return undefined;
};
