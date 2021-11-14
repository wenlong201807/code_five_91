# 题目名称

- [416. 分割等和子集](https://leetcode-cn.com/problems/partition-equal-subset-sum/)

## 解题思路

```javascript

参考学习

```

### 代码块

```javascript

var canPartition = function (nums) {
  const sum = (nums.reduce((p, v) => p + v));
  if (sum & 1) return false;
  const dp = Array(sum / 2 + 1).fill(0);
  for (let i = 0; i < nums.length; i++) {
    for (let j = sum / 2; j >= nums[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
      if (dp[j] === sum / 2) {
        return true;
      }
    }
  }
  return dp[sum / 2] === sum / 2;
};

```

### 时间复杂度和空间复杂度

- 时间复杂度 O(n)
- 空间复杂度 O(1)
