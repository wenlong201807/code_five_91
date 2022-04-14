/**
 * 通关
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let i = 0,
    j = matrix[0].length - 1;
  debugger;
  while (i < matrix.length && j >= 0) {
    // i,j 等于待查找的值
    if (matrix[i][j] === target) return true;
    if (matrix[i][j] < target) {
      i += 1;
    } else {
      j -= 1;
    }
  }
  return false;
};

// 方法二 没通过 考虑边界不周到
var searchMatrix2 = function (matrix, target) {
  debugger;
  let l = 0;
  let r = matrix[0].length - 1;
  let mid = 0;
  const oneArr = matrix[0] || [];
  debugger;
  while (l <= r) {
    debugger;
    mid = Math.floor((l + r) / 2);
    if (oneArr[mid] === target) {
      return true;
    }
    if (oneArr[mid] > target) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  debugger;
  l = l >= 1 ? l - 1 : 0;

  // 如果没有找到，说明不在第一行，可能在下面某一行
  for (let k = 0; k < matrix.length; k++) {
    debugger;
    if (matrix[k][l] === target) {
      return true;
    }
  }

  return false;
};

// const matrix = [
//   [1, 4, 7, 11, 15],
//   [2, 5, 8, 12, 19],
//   [3, 6, 9, 16, 22],
//   [10, 13, 14, 17, 24],
//   [18, 21, 23, 26, 30],
// ];
// const target = 5;

// const matrix =[[5],[6]]
// const target = 6

// 此样板通不过
const matrix = [
  [1,2,3,4,5],
  [6,7,8,9,10],
  [11,12,13,14,15],
  [16,17,18,19,20],
  [21,22,23,24,25]
]
const target = 19
searchMatrix2(matrix, target);
// searchMatrix(matrix, target);

// 通过
var searchMatrix3 = function (matrix, target) {
  for (const row of matrix) {
    const index = search(row, target);
    if (index >= 0) {
      return true;
    }
  }
  return false;
};

const search = (nums, target) => {
  let low = 0,
    high = nums.length - 1;
  while (low <= high) {
    const mid = (high + low) >> 1;
    // const mid = Math.floor((high + low) / 2);
    // const mid = Math.floor((high - low) / 2) + low;
    const num = nums[mid];
    if (num === target) {
      return mid;
    } else if (num > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
};
// console.log(searchMatrix3(matrix, target));
// 作者：LeetCode-Solution
// 链接：https://leetcode-cn.com/problems/search-a-2d-matrix-ii/solution/sou-suo-er-wei-ju-zhen-ii-by-leetcode-so-9hcx/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
