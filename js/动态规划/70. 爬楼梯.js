// 通过
function climbStairs(n) {
  if (n == 1) return 1;
  const dp = new Array(n);
  dp[0] = 1;
  dp[1] = 2;

  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[dp.length - 1];
}

// 未通过：超时
function climbStairs(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;
  return climbStairs(n - 1) + climbStairs(n - 2);
}

// 通过 https://leetcode-cn.com/problems/climbing-stairs/submissions/
/*
滚动数组优化
爬楼梯我们并没有必要使用一维数组，而是借助两个变量来实现的，空间复杂度是 O(1)

记忆化递归和动态规划除了一个用递归一个用迭代，其他没差别。那两者有啥区别呢？我觉得最大的区别就是记忆化递归无法使用滚动数组优化。
*/
function climbStairs(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  let a = 1;
  let b = 2;
  let temp;

  for (let i = 3; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }

  return temp;
}

// 方法4 使用滚动数组优化
// https://leetcode-cn.com/problems/climbing-stairs/submissions/
// 因此我的建议就是没空间优化需求直接就记忆化，否则用迭代 dp。
const memo = {};
function climbStairs(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;
  if (n in memo) return memo[n];
  const ans = climbStairs(n - 1) + climbStairs(n - 2);
  memo[n] = ans;
  return ans;
}

// 再次强调一下：

// 如果说递归是从问题的结果倒推，直到问题的规模缩小到寻常。 那么动态规划就是从寻常入手， 逐步扩大规模到最优子结构。

// 记忆化递归和动态规划没有本质不同。都是枚举状态，并根据状态直接的联系逐步推导求解。

// 动态规划性能通常更好。 一方面是递归的栈开销，一方面是滚动数组的技巧。




// 区间 DP 的特点：

// 合并：即将两个或多个部分进行整合，当然也可以反过来；
// 特征：能将问题分解为能两两合并的形式；
// 求解：对整个问题设最优值，枚举合并点，将问题分解为左右两个部分，最后合并两个部分的最优值得到原问题的最优值。