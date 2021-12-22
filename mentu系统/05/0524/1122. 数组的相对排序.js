/**
 * 通过 https://leetcode-cn.com/problems/relative-sort-array/submissions/
 * 01：21：05 结束
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  // 取值是[1,1000] ，所以数组长度是1005，里面的数据就够用了
  // 下标表示数字，值表示数字出现的次数
  let arr = new Array(1005).fill(0);
  let res = [];

  // 记录数字出现的次数
  for (let i = 0; i < arr1.length; i++) {
    arr[arr1[i]] += 1;
  }
  // 按照arr2 出现的顺序，将arr1 重新归置，放到结果数组res里面
  for (let i = 0; i < arr2.length; i++) {
    while (arr[arr2[i]]--) {
      res.push(arr2[i]);
    }
  }
  // 剩余的数字按照从小到大的顺序放到结果数组的后面
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= 0) continue;
    while (arr[i]--) {
      res.push(i);
    }
  }
  return res;
};