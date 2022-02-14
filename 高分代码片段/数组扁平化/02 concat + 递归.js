
const arr2 = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5, "string", { name: "弹铁蛋同学" }, () => { console.log(66); const a = 8; const b = a + 1; return b; }];
// concat + 递归
function flat(arr) {
  let arrResult = [];
  arr.forEach(item => {
    if (Array.isArray(item)) {
      // console.log(item, '----', arguments.callee.toString()) arguments.callee === flat(arr)
      // arrResult = arrResult.concat(arguments.callee(item));   // 递归
      // 或者用扩展运算符
      // arrResult.push(...arguments.callee(item));
      arrResult.push(...flat(item));
    } else {
      arrResult.push(item);
    }
  });
  
  return arrResult;
}
// flat(arr2)
console.log(flat(arr2))
// [1, 2, 3, 4, 1, 2, 3, 1, 2, 3, 1, 2, 3, 5, "string", { name: "弹铁蛋同学" }];
const a3 = (arr2+'').split(',')
// console.log(a3)