# 题目名称

- [Number of Operations to Decrement Target to Zero](https://binarysearch.com/problems/Number-of-Operations-to-Decrement-Target-to-Zero)

## 解题思路

```javascript

参考学习

```

### 代码块

```javascript

const minOperations = function (nums, x) {
  let len = nums.length,
    best = 0;
  for (let i = 1; i < len; i++) nums[i] += nums[i - 1];
  let y = nums[len - 1] - x;
  if (y < 0) return -1;
  if (y === 0) return len;
  for (let i = -1, j = (l = 0); i < len - best && l <= x; l = nums[++i]) {
    while (nums[j] - l < y) j++;
    if (nums[j] - l === y) best = Math.max(best, j - i);
  }
  return best > 0 ? len - best : -1;
};

```

### 时间复杂度和空间复杂度

- 时间复杂度 O(n)
- 空间复杂度 O(1)
