// 桶排序

// 插入排序参考资料  https://zhuanlan.zhihu.com/p/75575670
/*
2. 桶排序（Bucket Sort）
桶排序是计数排序的升级版，也采用了分治思想。

思想

将要排序的数据分到有限数量的几个有序的桶里。
每个桶里的数据再单独进行排序（一般用插入排序或者快速排序）。
桶内排完序之后，再把每个桶里的数据按照顺序依次取出，组成的序列就是有序的了。

桶排序利用了函数的映射关系，高效与否的关键就在于这个映射函数的确定。

为了使桶排序更加高效，我们需要做到这两点：

在额外空间充足的情况下，尽量增大桶的数量。
使用的映射函数能够将输入的 N 个数据均匀的分配到 K 个桶中。
桶排序的核心：就在于怎么把元素平均分配到每个桶里，合理的分配将大大提高排序的效率。
*/
// 快速排序(三路快排)
const quickSort = (arr, left, right) => {
  let len = arr.length,
    partitionIndex;
  left = typeof left != 'number' ? 0 : left;
  right = typeof right != 'number' ? len - 1 : right;

  if (left < right) {
    partitionIndex = partition(arr, left, right);
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
};
const partition = (arr, left, right) => {
  //分区操作
  let pivot = left, //设定基准值（pivot）
    index = pivot + 1;
  for (let i = index; i <= right; i++) {
    if (arr[i] < arr[pivot]) {
      swap(arr, i, index);
      index++;
    }
  }
  swap(arr, pivot, index - 1);
  return index - 1;
};

const swap = (arr, i, j) => {
  // let temp = arr[i];
  // arr[i] = arr[j];
  // arr[j] = temp;
  [arr[j], arr[i]] = [arr[i], arr[j]]
};

// 桶排序
const bucketSort3 = (array, bucketSize) => {
  if (array.length === 0) {
    return array;
  }

  let i = 0;
  let minValue = array[0];
  let maxValue = array[0];
  // 确定数组中真实的最大值，和最小值
  for (i = 1; i < array.length; i++) {
    if (array[i] < minValue) {
      minValue = array[i]; //输入数据的最小值
    } else if (array[i] > maxValue) {
      maxValue = array[i]; //输入数据的最大值
    }
  }

  //桶的初始化
  const DEFAULT_BUCKET_SIZE = 5; //设置桶的默认数量为 5
  bucketSize = bucketSize || DEFAULT_BUCKET_SIZE;
  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  const buckets = new Array(bucketCount);
  for (let i = 0; i < buckets.length; i++) {
    buckets[i] = [];
  }
  // debugger
  console.info('buckets:', buckets);

  //利用映射函数将数据分配到各个桶中
  for (let i = 0; i < array.length; i++) {
    buckets[Math.floor((array[i] - minValue) / bucketSize)].push(array[i]);
  }
  // debugger
  console.info('buckets:', buckets);

  array.length = 0;
  for (let i = 0; i < buckets.length; i++) {
    quickSort(buckets[i]); //对每个桶进行排序，这里使用了快速排序（每个桶最多DEFAULT_BUCKET_SIZE个元素）
    for (let j = 0; j < buckets[i].length; j++) {
      array.push(buckets[i][j]);
    }
  }
  
  return array;
};

const array = [64, 6, 58, 5, 19, 10, 32, 25, 73, 52];
// const array = [4, 6, 8, 5, 9, 1, 2, 5, 3, 2];
console.time('桶排序耗时');
console.log('桶排序结果:', bucketSort3(array));
console.timeEnd('桶排序耗时');
