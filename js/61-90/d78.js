var makeConnected = function (n, connections) {
  if (connections.length < n - 1) {
    return -1;
  }
  let groupNum = n;
  let parent = new Array(n);

  const findRoot = (x) => {
    if (x == parent[x]) {
      return x;
    }
    parent[x] = findRoot(parent[x]);
    return parent[x];
  };

  for (let i = 0; i < parent.length; i++) {
    parent[i] = i;
  }

  for (let i = 0; i < connections.length; i++) {
    const aRoot = findRoot(connections[i][0]);
    const bRoot = findRoot(connections[i][1]);
    if (aRoot != bRoot) {
      groupNum--;
      parent[aRoot] = bRoot;
    }
  }
  return groupNum - 1;
};

// 作者：xiao_ben_zhu
// 链接：https://leetcode-cn.com/problems/number-of-operations-to-make-network-connected/solution/shou-hua-tu-jie-kao-cha-bing-cha-ji-1319-u9nb/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
