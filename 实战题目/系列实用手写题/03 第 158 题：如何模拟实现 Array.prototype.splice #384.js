// https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/384

Array.prototype._splice = function (start, deleteCount, ...args) {
  // 处理start值
  if (start < 0) {
    if (Math.abs(start) > this.length - 1) {
      start = 0;
    } else {
      start += this.length;
    }
  }
  // 处理deleteCount值
  deleteCount = typeof deleteCount !== 'undefined' ? deleteCount : this.length;
  // 处理args值
  args = args.length ? args : [];
  // 处理特殊情况
  if (start > this.length - 1) {
    this.concat(args);
    return [];
  }
  /**
   * 思路
   * 先把原数组值取出，原数组清空
   * 先入栈不需要处理的数组前部分元素
   * 然后把需要加入的args
   * 最后入栈数组后部分元素
   * 返回中间删掉的元素组成的数组
   */
  let arr = [...this];
  this.length = 0; // 清空
  // 先入栈前部分元素
  let i = 0;
  while (i < start) {
    this.push(arr.shift());
    i++;
  }
  // 入栈args
  args.forEach((item) => this.push(item));
  // 入栈后部分元素
  arr.forEach((item, index) => {
    if (index >= deleteCount) {
      this.push(item);
      delete arr[index];
    }
  });
  // 返回删除部分
  return arr;
};
