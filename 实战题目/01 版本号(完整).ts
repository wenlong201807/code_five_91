/**
 * 
 * @param arr 要排序的字符串版本号数组
 * @param deep 版本号深度默认深度3, 1.0是一个深度，2.0.0两个深度，3.0.0三个深度
 * @returns 返回一个排序好的字符串版本号数组
 */
// 版本号排序
function versionSort(arr: string[], deep = 3) {
  // 判断为空情况
  if (arr.length <= 1) return arr;
  if(!Array.isArray(arr)){
    throw new Error('参数必须为数组')
  }
  let newArr = arr.map(item => item.split('.'));
  let temObj: any = {};
  newArr.forEach(item => {
    if (!(item[0] in temObj)) {
      temObj[item[0]] = { index1: [item] }
    } else {
      temObj[item[0]]['index1'].push(item)
    }
  })
  for (let i = deep - 1; i > 0; i--) {
    for (let key in temObj) {
      temObj[key]['index1'].sort((a: any, b: any) => {
        if (a[2] - i > b[i] - 0) {
          return 1;
        } else if (a[i] - 0 < b[i] - 0) {
          return -1;
        } else {
          return 0;
        }
      })
    }
  }
  // 将数组拼接返回
  return Object.values(temObj).map((item: any) => item.index1).map(item => item.map((item: any) => item.join('.'))).flat(Infinity)
}

let version = ['1.22.300', '1.10.1', '1.90.2', '2.1', '0.9', '2.2', '1.22.90', '2.19']
let version1 = ['9.2.30', '1.0.912', '1.10.12', '2.1', '0.9.13', '1.12.90']
let version2 = ['1.22.10', '4.10.91', '0.10.9', '2.1', '0.9.1', '1.2.90']

console.log(versionSort(version))
console.log(versionSort(version1))
console.log(versionSort(version2))
