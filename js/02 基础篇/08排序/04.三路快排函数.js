// 参考学习
// https://mp.weixin.qq.com/s?__biz=MzA5NTcxOTcyMg==&mid=2247486493&idx=1&sn=1abd086a893d134d46c18412f76c41e4&chksm=90ba5458a7cddd4e937b8c998878519bdd97014d1211c6b1c548d39e409f1632c99ff2ce6b14&cur_album_id=1329929666165276672&scene=189#wechat_redirect

/**
 *
 * @param arr 需要进行三路快排的数组
 * @param L 数组的起始位置
 * @param R 数组的末尾位置
 * @returns {{lt: *, gt: *}}
 * 
 * 定义初始值是个难点
将数组中的0号元素设为基准值(piovt)，设为p，将元素分为小于p,等于p，大于p三个部分。【结果数据模型】
元素i指向当前进行比较的元素，L为数组的起点，R为数组的末尾。
区间[L+1,lt]是「小于」p的元素，
区间[lt+1,i-1]是「等于」p的元素，
从右侧的R往内，形成的区间[gt,R]存放的是「大于」P的元素。
 
* 实现思路如下：
如果当前i指向的元素等于p，则i+1
如果当前i指向的元素小于p，则将lt+1处的元素与索引i处的值进行交换，然后lt+1,并且i+1
如果当前i指向的元素大于p，则将gt-1处的元素与索引i处的值进行交换，然后gt-1
最后当i走到gt处时，即gt==i时；那就说明，除了第一个元素之外，其余的空间已经分区完毕，只要将首个元素与lt处的元素进行交换，然后lt-1；我们就形成了想要的三个区间，小于p，等于p，大于p


实现分区函数，用于返回：小于p,和大于p的元素区间信息
 */
const partition = function (arr, L, R) {
  // 基准值为数组的零号元素，确保i可以连续运行，不需要跳着走
  let p = arr[L];
  // 左区间的初始值: L 数组起点
  let lt = L;
  // 右区间的初始值: R+1 数组终点
  let gt = R + 1;
  for (let i = L + 1; i < gt; ) {
    // for循环的变种写法
    if (arr[i] === p) {
      // 当前i指向的元素等于p
      i++;
    } else if (arr[i] > p) {
      // 当前i指向的元素大于p，将gt-1处的元素与当前索引处的元素交换位置，gt--
      [arr[gt - 1], arr[i]] = [arr[i], arr[gt - 1]];
      gt--;
      // i++; 此处的值刚刚被更新过，新调换到i位置的值，需要重新比较
    } else {
      // 当前i指向的元素小于p，将lt+1处的元素与当前索引处的元素交换位置，lt+1，i+1
      // [arr[lt + 1], arr[i]] = [arr[i], arr[lt + 1]]; // 刚好指向同一个位置
      lt++;
      i++;
    }
  }

  // i === gt 时
  // i走向gt处，除了基准值外的元素，其余的空间已经分区完毕，交换基准值与lt处的元素，lt-1，最终得到我们需要的三个区间
  [arr[L], arr[lt]] = [arr[lt], arr[L]];
  lt--;
  // console.log(`三路快排后的数组: ${arr}`);
  return { lt: lt, gt: gt }; // 实现内部变量的动态调整，纯函数的演绎
};

// const dataArr1 = [3, 5, 8, 1, 2, 9, 4, 7, 6];
// console.log(partition(dataArr1, 0, dataArr1.length - 1));

// 实现三路快排函数
const threeWayFastRow = function (arr, L, R) {
  // 当前数组的起始位置大于等于数组的末尾位置时退出递归
  if (L >= R) {
    return false;
  }
  let obj = partition(arr, L, R);
  console.info('obj:', obj);
  // 递归执行: 将没有大于p,和小于p区间的元素再进行三路快排
  threeWayFastRow(arr, L, obj.lt);
  threeWayFastRow(arr, obj.gt, R);
  // console.info('元素组排序后:', arr);
};

console.time("三路快排");
const dataArr3 = [3,5,8,1,2,9,4,7,6];
threeWayFastRow(dataArr3,0,dataArr3.length - 1);
console.log(`三路快排完成: ${dataArr3}`);
console.timeEnd("三路快排");

// 普通快排序
/**
 * 快速排序:
 * @param arr 需要进行快速排序的数组
 * @returns {*[]|*}
 */
const quickSort = function (arr) {
  if (arr.length < 2) return arr;
  // 随机选择0～arr.length之间选一个基准值
  const pivot = Math.floor(Math.random() * arr.length);
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

// 随机生成10000个乱序元素的数组，用快速排序和三路快排进行测试
/**
 * 生成一个随机数组
 * @param count
 * @returns {[]}
 */
const randomArray = function (count) {
  let arr = [];
  for (let i = 0; i < count; i++) {
    arr[i] = Math.floor(Math.random() * 50 + 1);
  }
  return arr;
};

// ****普通快排其他部分省略****

// 生成数组
// const dataArr4 = randomArray(10000);
// console.time('普通快排');
// quickSort(dataArr4);
// console.timeEnd('普通快排');

// ****三路快排其他部分省略****

// 生成数组
// const dataArr4 = randomArray(10000);
// console.time('三路快排');
// threeWayFastRow(dataArr4, 0, dataArr4.length - 1);
// console.timeEnd('三路快排');
