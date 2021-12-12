/**
 * 通过 https://leetcode-cn.com/problems/super-ugly-number/submissions/
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function (n, primes) {
  const res = [1];
  const points = new Array(primes.length).fill(0);// 创建一个数组，赋值
  let min, map;
  for (let i = 1; i < n; i++) {
    map = primes.map((primes, index) => res[points[index]] * primes);
    min = Math.min.apply(null, map);//Math.min.apply 求最小值
    //去重
    primes.forEach((primes, index) => {
      if (map[index] === min) points[index]++;
    })
    res.push(min);
  }
  return res[n - 1];
};