/*
实现思路：创建一个栈的结构，一个空数组，然后遍历栈结构，
判断如果是数组,使用扩展运算符展开再次扔入栈中，
如果不是就往新创建的数组头部增加
*/

function flatten(arr) {
  let res = [];
  const stack = [].concat(arr);
  console.log("哈哈哈", stack);
  while (stack.length > 0) {
    console.log(stack.length, stack);
    const item = stack.pop();
    if (Array.isArray(item)) {
      // 用扩展运算符展开一层
      stack.push(...item);
    } else {
      item !== undefined && res.unshift(item);
    }
  }
  return res;
}
console.log(flatten(array));
