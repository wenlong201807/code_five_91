//使用indexof
function unique(arr) {
  var uniqueArr = []; // 新数组
  for (let i = 0; i < arr.length; i++) {
    if (uniqueArr.indexOf(arr[i]) === -1) {
      //indexof返回-1表示在新数组中不存在该元素
      uniqueArr.push(arr[i]); //是新数组里没有的元素就push入
    }
  }
  return uniqueArr;
}
// 使用includes
function unique(arr) {
  var uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    //includes 检测数组是否有某个值
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]); //
    }
  }
  return uniqueArr;
}
