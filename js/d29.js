let findJudge = function (N, trust) {
  //构造0-N个节点的图
  let graph = Array.from({ length: N + 1 }, () => ({
    outDegree: 0,
    inDegree: 0,
  }));
  trust.forEach(([a, b]) => {
    graph[a].outDegree++;
    graph[b].inDegree++;
  });
  return graph.findIndex(({ outDegree, inDegree }, index) => {
    //剔除0
    return index != 0 && outDegree === 0 && inDegree === N - 1;
  });
};

// 参考学习：https://leetcode-cn.com/problems/find-the-town-judge/solution/liang-chong-fang-shi-zhao-dao-xiao-zhen-de-fa-guan/
