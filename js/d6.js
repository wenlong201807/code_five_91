/**
 * 题目 https://leetcode-cn.com/problems/max-chunks-to-make-sorted-ii/
 * 参考 https://leetcode-cn.com/problems/max-chunks-to-make-sorted-ii/solution/768-zui-duo-neng-wan-cheng-pai-xu-de-kuai-iihua-do/#%E6%96%B9%E6%B3%95-1-%E6%BB%91%E5%8A%A8%E7%AA%97%E5%8F%A3
 * 
 * 通关[缺少题解] https://leetcode-cn.com/problems/max-chunks-to-make-sorted-ii/submissions/
 * @param {number[]} arr
 * @return {number}
 */
 var maxChunksToSorted = function (arr) {
  const sorted = [...arr];
  sorted.sort((a, b) => a - b);

  let count = 0,
      sum1 = 0,
      sum2 = 0;

  for (let i = 0; i < arr.length; i++) {
      sum1 += arr[i];
      sum2 += sorted[i];

      if (sum1 === sum2) {
          count++;
          sum1 = sum2 = 0; // 这行不要也可以啦
      }
  }

  return count;
};