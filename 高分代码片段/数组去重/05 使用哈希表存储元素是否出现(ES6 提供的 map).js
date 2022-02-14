function unique(arr) {
  let map = new Map();
  let uniqueArr = new Array();  // 数组用于返回结果
  for (let i = 0; i < arr.length; i++) {
    if(map.has(arr[i])) {  // 如果有该key值
      map.set(arr[i], true); 
    } else { 
      map.set(arr[i], false);   // 如果没有该key值
      uniqueArr.push(arr[i]);
    }
  } 
  return uniqueArr ;
}
// Map 对象保存键值对，与对象类似。但 map 的键可以是任意类型，对象的键只能是字符串类型。

// 如果数组中只有数字也可以使用普通对象作为哈希表。