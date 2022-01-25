const arr = [1, 2, [3, 4, [5, 6, [7, 8]]]];
const arr2 = [1, {
  a: 2,
  b: 21,
}, [3, 4, [5, 6, [7, 8]]]];
const b = arr + '';
// console.info(b); // 
// console.info(arr.toString());
console.info(arr2.toString());
// console.info(arr.valueOf()); // [ 1, 2, [ 3, 4, [ 5, 6, [Array] ] ] ]

/*
公司的公众号

美团技术沙龙
推荐的 
变化的 
github 
linux 
*/