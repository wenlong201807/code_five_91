/**
 * 题目
 * 参考资料
 https://leetcode-cn.com/problems/number-of-boomerangs/solution/bie-ren-ti-jie-de-zhu-jie-ban-javascript-bm7z/
 * @param {number[][]} points
 * @return {number}
 * 1.
 遍历points，将每个点作为顶点，计算其他点到顶点的距离，保存相同距离点的数量在map中
   2. 遍历每个map，若与顶点相同距离的点的个数大于1，则计算组成回旋镖的数量
   3. 一共num，其中挑2个出来，有num*(num-1)个可能
 */
// 计算两点距离的平方
const getD = ([a1, a2], [b1, b2]) => (b1 - a1) ** 2 + (b2 - a2) ** 2;

const numberOfBoomerangs = points => {
  // 肯定组成不了回旋镖
  if (points.length < 3) return 0;

  const map = {};
  let res = 0;

  points.forEach((a, i) => {
    // 遍历时，将每个点作为顶点
    map[a] = {};
    // 再次遍历，得到其余的点到顶点的距离
    points.forEach((b, j) => {
      // 排除与自身的点
      if (i !== j) {
        // 计算距离
        const d = getD(a, b);
        // 将距离保存
        map[a][d] = (map[a][d] || 0) + 1;
      }
    });
    // 遍历顶点map
    for (const item in map[a]) {
      // 与顶点相同距离的点的个数
      const num = map[a][item];
      // num>1，才能和顶点组成回旋镖
      // 一共num，其中挑2个出来，有num*(num-1)个可能
      if (num > 1) res += num * (num - 1);
    }
  });

  return res;
};
