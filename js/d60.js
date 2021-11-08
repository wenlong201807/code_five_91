/*
边界条件，如果 desiredTotal 不比给出的可选最大值大，那么第一次就可以选中
首项加末项 * 项数 / 2 求的可选值之和，如果 sum 比 desiredTotal 小，那么就必输
用 dfs 递归，入参是当前的累加和 sum 和当前取值的状态 state，返回值当前状态【sum,state】下的结果，类型是 boolean
这里 state 用的是二进制位运算来保存取值情况，取值每一个二进制位代表对应的值，比方说 2 对应 10 ， 3对应 100，如果1，2，3 都取值了，对应的是 111;
每一次递归都必须进行一次长为 maxChoosableInteger 的遍历，用位运算判断对应的数字是否已经被使用，如果使用了，就直接跳过，因为不能重复取，如果合规，则判断当前 state 下的结果，并用 map 保存起来
如果取的 i+sum >= desiredTotal,则直接取值就可以，或者我取了 i之后，下一次递归必为 false，也代表当前状态必赢，返回 true，其他情况都是 false 了
最后返回递归后的最终结果
*/
// 464. 我能赢吗

var canIWin = function (maxChoosableInteger, desiredTotal) {
  if (desiredTotal <= maxChoosableInteger) return true; // 目标值不大于最大可选值
  const sum = ((maxChoosableInteger + 1) * maxChoosableInteger) / 2; // 首项加末项 * 项数 / 2
  if (sum < desiredTotal) return false;
  // map 的 key 是当前状态 state 下的结果，value 是一个 boolean
  const map = new Map();
  const dfs = (sum, state) => {
    if (map.has(state)) return map.get(state); //已经算过了，就返回之前的结果
    // 每一次都要从 [1,maxChoosableInteger] , 如果已经存在，则跳过
    for (let i = 1; i <= maxChoosableInteger; i++) {
      if ((1 << i) & state) continue; // 已经存在过了

      // 判断结果 -- 如果 sum+i 就达标了，或者我选择了 i，最后递归出来的结果是 false ，则我取 i 得到的结果是 true
      if (i + sum >= desiredTotal || !dfs(sum + i, (1 << i) | state)) {
        map.set(state, true);
        return true;
      }
    }
    map.set(state, false);
    return false;
  };
  return dfs(0, 0); // 从 0 开始启动
};

// 作者：jzsq_lyx
// 链接：https://leetcode-cn.com/problems/can-i-win/solution/dfs-by-jzsq_lyx-enfz/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
