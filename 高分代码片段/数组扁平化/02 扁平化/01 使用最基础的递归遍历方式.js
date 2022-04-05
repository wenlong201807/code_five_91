
/*
使用基础遍历的方式，然后遍历的item项是否为数组，
如果是数组递归执行扁平化函数，并把执行的结果与之前contact，
如果item项非数组，则直接将值push到最初定义的数组中
*/
let array = [1, [2, 34, [12, 4]], 23];
function flatten(array) {
  let result = [];
  for (const item of array) {
    if (Array.isArray(item)) {
      result = result.concat(flatten(item));
    } else {
      result.push(item);
    }
  }
  return result;
}
console.log(flatten(array));
