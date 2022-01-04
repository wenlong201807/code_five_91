// 参考学习 https://mp.weixin.qq.com/s?__biz=MzA5NTcxOTcyMg==&mid=2247484312&idx=1&sn=fecd82cdf62dc86b093a92f4715c4bba&chksm=90ba5bdda7cdd2cb00e712f7f6c238b2299013b9402f42c9dc6688e92cfc05d295cb5f1aa56b&cur_album_id=1329929666165276672&scene=189#wechat_redirect

/*
选择排序
前言
选择排序，作为经典的排序算法。与冒泡排序一样，在面试中也常常会被问到，如果你没有掌握，那面试也就结束了😅

本文采用图文的方式讲解选择排序的特点，分步骤讲解js的实现思路以及相对应的代码，欢迎各位感兴趣的开发者阅读本文😋

概念
从待排序的数据中寻找最小值，将其与序列最左边的数字进行交换，重复这一操作的算法即选择排序。

特点
线性查找数组中的最小值
找到最小值后与序列中的比较值进行交换
交换完毕后1轮结束
新的一轮比较值的位置为当前轮数
重复上述操作，直至比较到序列的最后一个元素。
*/

/*
实现思路
声明一个函数，参数为一个数组
遍历数组，将数组中的值与其之后的元素进行比较，找到最小值
找到最小值后，将当前比较的值与最小值进行位置互换
直至遍历到最后一个元素，排序结束。
接下来，我们用JavaScript根据实现思路来实现下选择排序。
*/
/**
 * 1. 从数组的0号元素开始和之后的元素进行大小比较
 * 2. 找到最小值后，将最小值与当前比较值进行位置互换
 * 3. 重复上述操作，当前轮数则为比较元素的位置，直至最后一轮的比较
 */

const selectSort = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    // 设定为最小值
    let min = arr[i];
    // 设定为最小值位置
    let minIndex = i;
    // 比较次数
    let round = 0;
    for (let j = i + 1; j < arr.length; j++) {
      round++;
      if (min > arr[j]) {
        // 如果最小值大于当前比较值，则进最小值赋值当前遍历到的值
        min = arr[j];// 真实的最小值
        minIndex = j;// 真实最小值对应的小标
      }
    }
    console.log(`第${i + 1}轮结束: ${arr},最小值${min},最小值位置${minIndex},共比较${round}次`);
    // 位置互换
    [arr[i], arr[minIndex]] = [min, arr[i]]; // 最核心的步骤
  }
  return arr;
};

const arrData = [4, 6, 7, 8, 9, 1, 2, 3, 4];
console.log(selectSort(arrData));
