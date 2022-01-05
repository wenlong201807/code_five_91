// 参考学习 https://mp.weixin.qq.com/s?__biz=MzA5NTcxOTcyMg==&mid=2247484451&idx=1&sn=a4acf836d74ceb6adbded954319182d9&chksm=90ba5c66a7cdd570a707d00a092621cf8a006d1da8eca6c05a4fa8a4dd9c9547c1160bafd1b3&cur_album_id=1329929666165276672&scene=189#wechat_redirect

/*
概念
归并排序算法会将序列分成长度相同的两个子序列，当无法继续往下分时(每个子序列都只有一个数据时)，就对子序列进行归并。

归并是指把两个排序好的子序列，合并成一个有序序列。该操作会一直重复执行，直到所有子序列都归并为一个整体为止。

归并排序与堆排序的时间复杂度都为O(nlogn)

归并的实现
正如归并图解所描述，要实现两个数组的合并，前提是两组数据中的数据已经排列按照从小到大的顺序进行排列。

声明归并函数：

参数arr为两组从小到大排序的数组，将其合并成一个以后的数组。
参数L为数组的起点索引
参数M为数组的中间点(分割点),用于标识两组从小到大排序的数组，M左边的数据为一个数组(leftArr)，M本身以及它右边的数据为一个数组(rightArr)。
参数R为数组的终点索引
分别计算左、右数组的长度

左边数组的长度为M - L
右边数组的长度为R - M + 1
声明左、右数组，初始化其长度

根据中间值，分别将arr中的数据填充到左、右数组

左数组: 从L填充到M(不包含M)
右数组: 从M(包含M)填充到R
将两组数据进行合并(从小到大进行排序)

如果左侧数组的数据已经比较完，右侧数组的数据还未比较完，则arr的k项就为右侧数组的剩余项。
如果右侧数组的数据已经比较完，左侧数组的数据还未比较完，则arr的k项就为左侧数组的剩余项。
当前遍历到左侧数组的数据 < 当前遍历到的右侧数组的数据，则arr的k项为当前左侧数组的数据。i自增，k自增。
当前遍历到左侧数组的数据 > 当前遍历到的右侧数组的数据，则arr的k项为当前右侧数组的数据。j自增，k自增。
i指向左侧数组的每一项
j指向右侧数组的每一项
k指向合并后的数组的每一项
声明3个变量：i, j, k

将左侧数组的每一项数据与右侧数组的每一项数据进行大小比较

判断左、右数组是否比较完成

接下来，我们将上述思路用代码实现:
*/

/**
 * 归并函数
 * @param arr
 * @param L 数组的起点
 * @param M 数组的分割点
 * @param R 数组的终点
 */
const merger = function (arr, L, M, R) {
  // 左边数组大小和右边数组大小
  let left_size = M - L;
  let right_size = R - M + 1;
  // 声明左边数组和右边数组
  let leftArr = new Array(left_size);
  let rightArr = new Array(right_size);
  let i, j, k;

  // 填充左数组(从L开始到M结束)
  for (i = L; i < M; i++) {
    leftArr[i - L] = arr[i];
  }
  // 填充右数组(从M开始到R结束)
  for (i = M; i <= R; i++) {
    rightArr[i - M] = arr[i];
  }

  // 数组合并
  i = 0;
  j = 0;
  k = L;
  while (i < left_size && j < right_size) {
    // 如果左边数组的i项小于右边数组的j项，则数组的k项就为左边数组的i项。否则数组的k项就为右边数组的j项
    if (leftArr[i] < rightArr[j]) {
      arr[k] = leftArr[i];
      i++;
      k++;
    } else {
      arr[k] = rightArr[j];
      j++;
      k++;
    }
  }
  // 当右边数组到顶部后，左边数组还未到顶部，则将剩余元素放进arr中
  while (i < left_size) {
    arr[k] = leftArr[i];
    i++;
    k++;
  }
  // 当左边数组到顶部后，右边数组还未到顶部，则将剩余元素放进arr中
  while (j < right_size) {
    arr[k] = rightArr[j];
    j++;
    k++;
  }
};

// const dataArr = [2,8,9,10,4,5,6,7];
/*测试合并*/
// merger(dataArr,0,4,7);
// 合并后的数据
// console.log(dataArr);

/*
归并排序的实现
实现归并排序，我们首先需要计算出数组的中间值，然后将乱序的数组进行分割(分割到无法继续分割位置),分割完毕后，将分割的两组数据进行合并，递归操作即可完成归并排序。

计算中间值: (L + R) / 2
分割左、右数组
合并分割后的数据
递归操作(直至L = R)
接下来，我们看下代码的实现:
*/

const mergerSort = function (arr, L, R) {
  if (L === R) {
    // 数据已经切割完毕
    return false;
  } else {
    // 计算中间值(向下取整)
    let M = Math.floor((L + R) / 2);
    // 分割后,把左边的数据进行一次归并排序
    mergerSort(arr, L, M);
    // 对右边的数据进行一次归并排序
    mergerSort(arr, M + 1, R);
    // 合并两边的数据
    merger(arr, L, M + 1, R);
  }
};

// const dataArr = [6, 4, 3, 7, 5, 1, 2];
/*测试排序*/
// mergerSort(dataArr, 0, dataArr.length - 1);
// 合并后的数据
// console.log(dataArr);


// 额外瞎搞
let a;
let b = '不知名的前端';
let c = null;
let d = 0;
let e;
e = a?.b ?? c ?? d?.a ?? b; // 不知名的前端
e ??= a?.b ?? c ?? d?.a ?? b; // SyntaxError: Unexpected token '??='
console.info(e);
