/**
 * 通过 https://leetcode-cn.com/problems/water-and-jug-problem/submissions/
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 * 按照示例1 x=5，y=3,z=4
 * 1 先装满5L壶的水，装满3L的壶， 5->2   3->3
 * 2 3L的壶清空，5L的水倒入3L壶的水 5->0  3->2
 * 3 再装满5L壶的水，装满3L的壶， 5->4  3->3
 */
var canMeasureWater = function (x, y, z) {
  if (x + y < z) return false;
  if (z === 0) return true;
  if (x === 0) return y === z;
  if (y === 0) return x === z;

  function shuihui (a, b) {
    let min = Math.min(a, b);
    while (min) {
      if (a % min === 0 && b % min === 0) return min;
      min--;
    }
    return 1;
  }

  return z % shuihui(x, y) === 0;
};