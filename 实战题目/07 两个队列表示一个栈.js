// 参考学习 https://www.yisu.com/zixun/183850.html

var arr1 = [];
var arr2 = [];
function Queue(arr) {
  this.push = function (element) {
    return arr.push(element);
  };
  this.pop = function () {
    return arr.shift();
  };
  this.size = function () {
    return arr.length;
  };
  this.display = function () {
    console.log(arr);
  };
}
var queue1 = new Queue(arr1);
queue1.push(1);
queue1.push(4);
queue1.push(5);
queue1.push(7);
// queue1.display();
var queue2 = new Queue(arr2);

//利用两个队列实现栈。放在数组中打印
var res = [],
  k = 0;
while (queue1.size() != 0) {
  var len = queue1.size();
  for (var i = 0; i < len - 1; i++) {
    queue2.push(queue1.pop());
  }
  // 打印queue1最后一个元素，并出队
  res[k] = queue1.pop();
  ++k;
  // 队列2的元素放置到队列1中
  for (var i = 0; i < len - 1; i++) {
    queue1.push(queue2.pop());
  }
}
console.log("res:" + res);


//利用两个队列实现栈。单个弹出
while (queue1.size() != 0) {
  var len = queue1.size();
  for (var i = 0; i < len - 1; i++) {
    queue2.push(queue1.pop());
  }
  // 打印queue1最后一个元素，并出队
  console.log(queue1.pop());
  // 队列2的元素放置到队列1中
  for (var i = 0; i < len - 1; i++) {
    queue1.push(queue2.pop());
  }
}
