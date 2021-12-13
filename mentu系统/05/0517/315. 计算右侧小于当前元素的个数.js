/**
 * 超时
 * @param {number[]} nums
 * @return {number[]}
 */

function countSmaller (nums) {
  if (!nums.length) return [];
  let objArr = [];// 存储 值和下标
  let resArray = [];// 存放次数
  for (let i = 0; i < nums.length; i++) {
    const ele = nums[i];
    let obj = {
      num: ele,
      index: i,
    }
    resArray.push(0);
    objArr.push(obj)
  }
  sliceArray(objArr);
  return resArray;

  function sliceArray (nums) {
    let mid = nums.length >> 1;
    let left = nums.slice(0, mid);
    let right = nums.slice(mid, nums.length);
    if (nums.length === 1) return nums;
    return merge(sliceArray(left), sliceArray(right))
  }

  function merge (left, right) {
    let res = [];
    // 声明一个指针，指向后面有序的数组
    let j = 0;
    while (left.length && right.length) {
      if (left[0].num > right[0].num) {
        res.push(right[0]);
        right.shift();
        j++;
      } else {
        resArray[left[0].index] += j;// 前面有序数组元素出列，，数一数后面有序数组已经出列了多少位
        res.push(left[0]);
        left.shift();
      }
    }
    while (left.length) {
      resArray[left[0].index] += j;
      res.push(left[0]);
      left.shift();
    }
    while (right.length) {
      res.push(right[0]);
      right.shift();
      j++;
    }
    return res;
  }
};