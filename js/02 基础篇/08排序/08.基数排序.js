// 参考学习 https://www.cnblogs.com/onepixel/articles/7674659.html#4%E5%B8%8C%E5%B0%94%E6%8E%92%E5%BA%8Fshell-sort

/*
10、基数排序（Radix Sort）
基数排序是按照低位先排序，然后收集；再按照高位排序，然后再收集；依次类推，直到最高位。有时候有些属性是有优先级顺序的，先按低优先级排序，再按高优先级排序。最后的次序就是高优先级高的在前，高优先级相同的低优先级高的在前。

10.1 算法描述
取得数组中的最大数，并取得位数；
arr为原始数组，从最低位开始取每个位组成radix数组；
对radix进行计数排序（利用计数排序适用于小范围数的特点）；

10.4 算法分析
基数排序基于分别排序，分别收集，所以是稳定的。但基数排序的性能比桶排序要略差，每一次关键字的桶分配都需要O(n)的时间复杂度，而且分配之后得到新的关键字序列又需要O(n)的时间复杂度。假如待排数据可以分为d个关键字，则基数排序的时间复杂度将是O(d*2n) ，当然d要远远小于n，因此基本上还是线性级别的。

基数排序的空间复杂度为O(n+k)，其中k为桶的数量。一般来说n>>k，因此额外空间需要大概n个左右。
*/
// 此版本有错误
var counter = [];
function radixSort(arr, maxDigit) {
  var mod = 10;
  var dev = 1;
  for (var i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
    for (var j = 0; j < arr.length; j++) {
      var bucket = parseInt((arr[j] % mod) / dev);
      if (counter[bucket] == null) {
        counter[bucket] = [];
      }
      counter[bucket].push(arr[j]);
    }
    var pos = 0;
    for (var j = 0; j < counter.length; j++) {
      var value = null;
      if (counter[j] != null) {
        while ((value = counter[j].shift()) != null) {
          arr[pos++] = value;
        }
      }
    }
  }
  console.info('排序后arr:', arr);
  return arr;
}

const arr = [8, 90, 15, 77, 2, 33, 5, 45, 6, 10];
const maxDigit = 9;
// const arr = [8, 9, 1, 7, 2, 3, 5, 4, 6, 0];
// const maxDigit = 9;
radixSort(arr, maxDigit);

// 正确版本
// 基数排序
function radix_sort (A) {
  const max = Math.max(...A); // 获取当前数组中最大值
  const buckets = Array.from({length:10},() => []); // 生成二维数组的方式
  // 有效位数
  let m = 1
  while (m < max) {
    // 将数组放入桶中
    A.forEach(number => {
      const digist = ~~( (number%(m*10))/m )// ～～ === Math.floor()
      buckets[digist].push(number)
    })
    // 从桶中取出元素
    let j = 0
    buckets.forEach(bucket => {// 二维数组，每个桶为子数组，可能有多个值，先进先出
      while (bucket.length > 0) {
        A[j++] = bucket.shift()
      }
    })
    // 下一个位置
    m*=10// 个位，十位，百位
  }
}

const A = [8, 96, 15, 72, 2, 36, 5, 49, 6, 10];
// const A = [8, 90, 15, 77, 2, 33, 5, 45, 6, 10];
// const A = [10,200,13,12,7,88,91,24]
radix_sort(A)
console.log(A)