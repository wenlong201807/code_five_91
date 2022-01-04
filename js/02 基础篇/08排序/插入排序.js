function sortArray(nums) {
  const n = nums.length;
  for (let i = 1; i < n; i++) {
    // debugger
    t = nums[i];
    j = i - 1;
    while (j > -1 && nums[j] > t) {
      // debugger
      nums[i] = nums[j]; // 与下一行等效
      // nums[j + 1] = nums[j];
      j -= 1;
    }
    nums[j + 1] = t;
  }
  console.info(nums);
  return nums;
}

const nums = [3, 2, 1];
// const nums = [1,3,2,5,4,7,6,9,8];
// sortArray(nums);

// 参考学习
// https://mp.weixin.qq.com/s?__biz=MzA5NTcxOTcyMg==&mid=2247484312&idx=1&sn=fecd82cdf62dc86b093a92f4715c4bba&chksm=90ba5bdda7cdd2cb00e712f7f6c238b2299013b9402f42c9dc6688e92cfc05d295cb5f1aa56b&cur_album_id=1329929666165276672&scene=189#wechat_redirect
/*
插入排序
概念
从序列左端开始依次对数据进行排序的算法称为插入排序。

特点
序列中的数据分为两个区域：已排序区域和未排序区域
从序列的最左侧开始定义排序区域
已排序区域的数据按照从小到达的顺序进行排列
元素比较时，首先用未排序区域的第一个元素与已排序区域的最后一个元素进行比较【核心点】

具体执行步骤 [5, 3, 4, 7, 2, 8, 6, 9, 1]
1. 假设，最左边的数字5已完成排序，将5归入已排序区域
2. 从未排序区域中，取出最左侧的数字3，将它与已排序区域的数字进行比较。
3. 若左边的数字更大，就交换这两个数字，重复该操作，直到左边已归位的数字比取出的数字更小，或者取出的数字已经被移到整个序列的最左边为止。
4. 操作结束，此时已排序区域的数字为3和5
5. 重复步骤2，取出数字4，将它先和已排序区域的数字5进行比较
6. 5>4，所以交换这两个数字。交换后再把4和左边的3进行比较，发现3<4，符合了步骤3中描述的左边已归位的数字比取出的数字更小，所以操作结束
7. 操作结束，此时已排序区域的数字:3,4,5
8. 重复步骤2，取出数字7，将它先和已排序区域的数字5进行比较，发现5<7
9. 当遇到取出的数字首次与比较，排序区域的数字小于取出的数字时，不需要任何操作，直接将取出的数字放入已排序区域即可。
10. 重复上述操作，直到所有数字都放入已排序区域内，即排序完成。

实现思路
声明一个函数，参数为一个数组
声明未排序区域数组，并将传进来的参数给该数组赋值
声明已排序区域数组，并初始化该数组的0号元素为未排序区域数组的0号元素
正向遍历未排序数组，起始位置为该数组的1号元素
将当前遍历到的值加进已排序区域
对已排序区域进行反向遍历，起始位置为该数组的倒数第二个元素
获取当前新插入元素在已排序区域的位置
对已排序区域新插入进来的值与当前遍历到的元素进行大小判断
如果新插入的值小于当前遍历到的值则进行位置互换
接下来，我们用JavaScript根据实现思路来实现下插入排序。
*/
/*
 * 1. 已排序区域的默认值为数组的0号元素
 * 2. 未排序区域为数组的1号元素至数组的末尾
 * 3. 给已排序区域新增未排序区域最左侧的值
 * 4. 反向遍历已排序区域的数据
 * 5. 将新插入的数据和当前遍历到的数据进行大小比较
 * 6. 如果新插入的数据小于当前遍历到的数据则交换位置
 * */

const insertSort = function (arr) {
  // 未排序区域
  let unsortedArea = arr;
  // 已排序区域
  let sortedArea = [arr[0]];
  for (let i = 1; i < unsortedArea.length; i++) {
    // 已排序区域新增当前未排序区域最左侧的值
    sortedArea.push(unsortedArea[i]);
    // 反向遍历已排序区域的值，将已排序区域的值进行排序
    for (let j = sortedArea.length - 2; j >= 0; j--) {
      // 当前插入值在已排序区域的位置
      let insertIndex = sortedArea.getArrayIndex(unsortedArea[i]);
      // 对已排序区域新插入进来的值与当前循环到的元素进行大小判断
      if (unsortedArea[i] < sortedArea[j]) {
        [sortedArea[insertIndex], sortedArea[j]] = [
          sortedArea[j],
          sortedArea[insertIndex],
        ];
      }
    }
  }
  return sortedArea;
};

// 原型添加查找索引函数
Array.prototype.getArrayIndex = function (obj) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === obj) {
      return i;
    }
  }
  return -1;
};

// const arrData = [5, 8, 9, 2, 3, 6, 1, 0, 7];
// console.log(insertSort(arrData));

// 按照上述思路，进行优化，简版
/*
插入排序
概念
从序列左端开始依次对数据进行排序的算法称为插入排序。

特点
序列中的数据分为两个区域：已排序区域和未排序区域
从序列的最左侧开始定义排序区域
已排序区域的数据按照从小到达的顺序进行排列
元素比较时，首先用未排序区域的第一个元素与已排序区域的最后一个元素进行比较【核心点】

具体执行步骤 [5, 3, 4, 7, 2, 8, 6, 9, 1]
1. 假设，最左边的数字5已完成排序，将5归入已排序区域
2. 从未排序区域中，取出最左侧的数字3，将它与已排序区域的数字进行比较。
3. 若左边的数字更大，就交换这两个数字，重复该操作，直到左边已归位的数字比取出的数字更小，或者取出的数字已经被移到整个序列的最左边为止。
4. 操作结束，此时已排序区域的数字为3和5
5. 重复步骤2，取出数字4，将它先和已排序区域的数字5进行比较
6. 5>4，所以交换这两个数字。交换后再把4和左边的3进行比较，发现3<4，符合了步骤3中描述的左边已归位的数字比取出的数字更小，所以操作结束
7. 操作结束，此时已排序区域的数字:3,4,5
8. 重复步骤2，取出数字7，将它先和已排序区域的数字5进行比较，发现5<7
9. 当遇到取出的数字首次与比较，排序区域的数字小于取出的数字时，不需要任何操作，直接将取出的数字放入已排序区域即可。
10. 重复上述操作，直到所有数字都放入已排序区域内，即排序完成。
*/
const insertSortFast = (arr) => {
  // 未排序区域
  let unsortedArea = arr;
  // 已排序区域
  let sortedArea = arr;
  let j = 0;

  for (let i = 1; i < unsortedArea.length; i++) {
    j = i - 1;
    let curData = unsortedArea[i];
    while(j >= 0) {
      const sortCurData = sortedArea[j];
      if (sortedArea[j] > curData) {
        j--;
      }else {
        sortedArea[j] = curData;
        unsortedArea[i] = sortCurData;
      }
    }
  }

  return sortedArea
};

// const arrData = [5, 8, 9, 2, 3, 6, 1, 0, 7];
// const arrData = [1, 4, 9, 8, 3, 6, 5, 0, 7];
// const arrData = [1, 4, 9, -8, 3, 6, -5, 0, 7];
const arrData = [5, 3, 4, 7, 2, 8, 6, 9, 1];
console.log(insertSort(arrData));