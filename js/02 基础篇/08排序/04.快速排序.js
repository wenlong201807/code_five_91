// 参考学习 前端学习数据结构与算法系列(八)：快速排序与三路快排
// https://mp.weixin.qq.com/s?__biz=MzA5NTcxOTcyMg==&mid=2247486493&idx=1&sn=1abd086a893d134d46c18412f76c41e4&chksm=90ba5458a7cddd4e937b8c998878519bdd97014d1211c6b1c548d39e409f1632c99ff2ce6b14&cur_album_id=1329929666165276672&scene=189#wechat_redirect

/**
 * 快速排序:
 * @param arr 需要进行快速排序的数组
 * @returns {*[]|*}
 */
const quickSort = function (arr) {
  if (arr.length < 2) return arr;
  // 随机选择0～arr.length之间选一个基准值
  // 细节优化 time: 8.274ms time: 7.222ms
  const pivot = Math.floor(Math.random() * arr.length);
  // const pivot = Math.floor(arr.length / 2); // 固定选取中间值时，总耗时最少 time: 6.518ms
  // 声明两个数组，分别用于存放比基准值小的数据和比基准值大的数据
  let minArr = [];
  let maxArr = [];
  // 根据基准值填充数组
  for (let i = 0; i < arr.length; i++) {
    // 大于基准值就放maxArr里
    if (arr[i] >= arr[pivot] && i !== pivot) {
      maxArr.push(arr[i]);
    }
    // 小于基准值就放minArr里
    if (arr[i] < arr[pivot] && i !== pivot) {
      minArr.push(arr[i]);
    }
  }
  // 分别对基准值划分出来的数组递归调用快速排序，然后合并数组
  return [...quickSort(minArr), arr[pivot], ...quickSort(maxArr)];
};

const dataArr = [3, 5, 8, 1, 2, 9, 4, 7, 6];
console.time('time');
console.log(quickSort(dataArr));
console.timeEnd('time');

