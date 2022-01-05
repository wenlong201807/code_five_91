// 参考学习 https://mp.weixin.qq.com/s?__biz=MzA5NTcxOTcyMg==&mid=2247484451&idx=1&sn=a4acf836d74ceb6adbded954319182d9&chksm=90ba5c66a7cdd570a707d00a092621cf8a006d1da8eca6c05a4fa8a4dd9c9547c1160bafd1b3&cur_album_id=1329929666165276672&scene=189#wechat_redirect

// 交换数组位置函数
const swap = function (arr, max, i) {
  [arr[max], arr[i]] = [arr[i], arr[max]];
};

/*
 * 1. 从一个节点出发
 * 2. 从它的左子树和右子树中选择一个较大值
 * 3. 将较大值与这个节点进行位置交换
 * 上述步骤,就是一次heapify的操作
 * */

// n为树的节点数，i为当前操作的节点 (找到这颗树里的最大节点)
const heapify = function (tree, n, i) {
  if (i >= n) {
    // 结束递归
    return;
  }
  // 找到左子树的位置
  let leftNode = 2 * i + 1;
  // 找到右子树的位置
  let rightNode = 2 * i + 2;

  /*
     1. 找到左子树和右子树位置后，必须确保它小于树的总节点数
     2. 已知当前节点与它的左子树与右子树的位置，找到最大值
  */
  // 设最大值的位置为i
  let max = i;
  // 如果左子树的值大于当前节点的值则最大值的位置就为左子树的位置
  if (leftNode < n && tree[leftNode] > tree[max]) {
    max = leftNode;
  }
  // 如果右子树的值大于当前节点的值则最大值的位置就为右子树的位置
  if (rightNode < n && tree[rightNode] > tree[max]) {
    max = rightNode;
  }

  /*
   * 1. 进行大小比较后，如果最大值的位置不是刚开始设的i，则将最大值与当前节点进行位置互换
   * */
  if (max !== i) {
    console.info('max,i:', max, i);
    // 交换位置
    swap(tree, max, i);
    // 递归调用，继续进行heapify操作
    heapify(tree, n, max);
  }
};

// 测试下heapify函数
// const dataArr = [23,15,34,11,23,4,19,80];
// 我们假设当前操作节点为数组的0号元素，我们对0号元素进行一次heapify才做
// heapify(dataArr,dataArr.length,0);
// 打印结果
// console.log(dataArr);

/*
将乱序数据构建成一个堆
通常情况下，我们的数据是乱序的，没有规律可言，此时我们就需要将这些数据构建成堆，heapify实现堆的构建前提是:知道当前操作节点的位置，此时我们从数据的最后一个节点的父节点出发，进行heapify操作，直至当前操作节点为数组的0号元素时，那么这组数据就成了一个最大堆。

接下来，我们整理下实现思路：

找到树的最后一个节点
根据数组实现堆中所讲的，寻找父节点位置的公式，根据公式我们就可以找到当前操作节点的父节点
从树最后一个节点的父节点开始进行heapify操作,直至当前操作节点为0
接下来，我们将上述思路转化为代码:
*/
/*
 * 将完全二叉树构建成堆
 * 1. 从树的最后一个父节点开始进行heapify操作
 * 2. 树的最后一个父节点 = 树的最后一个子结点的父节点
 * */
const buildHeap = function (tree, n) {
  // 最后一个节点的位置 = 数组的长度-1
  const lastNode = n - 1;
  // 最后一个节点的父节点
  const parentNode = Math.floor((lastNode - 1) / 2);
  // 从最后一个父节点开始进行heapify操作
  for (let i = parentNode; i >= 0; i--) {
    heapify(tree, n, i);
  }
};
// 测试下buildHeap函数
// const dataArr = [23,15,34,11,23,4,19,80];
// buildHeap(dataArr,dataArr.length);
// console.log(dataArr);

/*
实现堆排序
我们将最大堆构建完成后，根据最大堆的特性可知：堆的顶点为这个堆的最大值，我们将这个值取出，然后将堆的最后一个节点移动至堆的顶部，然后调用heapify，重新构建堆，直至最大堆中的数据全部被取出则排序完成。

接下来，我们整理下实现思路：

将数据先构建成一个最大堆
从堆的最后一个节点出发，将其与树的根节点进行位置交换
交换完毕后，调用heapify重新调整堆。
排序好一个数后，我们的数组长度就会-1，则调用swap和heapify时,树的高度就是当前循环到的i的值。

*/
// 堆排序函数
const heapSort = function (tree, n) {
  // 构建堆
  buildHeap(tree, n);
  // 从最后一个节点出发
  for (let i = n - 1; i >= 0; i--) {
    // 交换根节点和最后一个节点的位置
    swap(tree, i, 0);
    // 重新调整堆
    heapify(tree, i, 0);
  }
};
const dataArr = [23, 80, 67, 11, 23, 4, 19, 60];
// const dataArr = [23, 15, 34, 11, 23, 4, 19, 80];
heapSort(dataArr, dataArr.length);
console.log(dataArr);
