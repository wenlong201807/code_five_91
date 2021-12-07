/*
 * @lc app=leetcode id=378 lang=javascript
 *
 * [378] Kth Smallest Element in a Sorted Matrix
 */
function notGreaterCount(matrix, target) {
  // 等价于在matrix 中搜索mid，搜索的过程中利用有序的性质记录比mid小的元素个数

  // 我们选择左下角，作为开始元素
  let curRow = 0;
  // 多少列
  const COL_COUNT = matrix[0].length;
  // 最后一列的索引
  const LAST_COL = COL_COUNT - 1;
  let res = 0;

  while (curRow < matrix.length) {
    // 比较最后一列的数据和target的大小
    if (matrix[curRow][LAST_COL] < target) {
      res += COL_COUNT;
    } else {
      let i = COL_COUNT - 1;
      while (i < COL_COUNT && matrix[curRow][i] > target) {
        i--;
      }
      // 注意这里要加1
      res += i + 1;
    }
    curRow++;
  }

  return res;
}
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  if (matrix.length < 1) return null;
  let start = matrix[0][0];
  let end = matrix[matrix.length - 1][matrix[0].length - 1];
  while (start < end) {
    const mid = start + ((end - start) >> 1);
    const count = notGreaterCount(matrix, mid);
    if (count < k) start = mid + 1;
    else end = mid;
  }
  // 返回start,mid, end 都一样
  return start;
};

// 作者：fe-lucifer
// 链接：https://leetcode-cn.com/problems/kth-smallest-element-in-a-sorted-matrix/solution/er-fen-cha-zhao-378-you-xu-ju-zhen-zhong-di-kxiao-/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
