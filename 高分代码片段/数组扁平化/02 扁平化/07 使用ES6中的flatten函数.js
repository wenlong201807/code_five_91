/*
实现思路: 直接使用ES6提供的flatten函数实现扁平化 
flatten的语法是 arr.flatten([depth]) depth可以传递数组的展开深度，
(默认不填时，数值是1)，即展开一层数组。

Infinity 代表不论多少层都展开，
同时也可以设置其他的整数，展开固定的层数
*/

let array = [1, [2, 34, [12, 4]], 23];
function flatten(array) {
  return array.flat(Infinity);
}
console.log(flatten(array));
