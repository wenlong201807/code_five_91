# 题目名称

- [1.合并两个有序链表](https://leetcode-cn.com/problems/merge-two-sorted-lists/)

## 解题思路

```javascript

1.读题
2.答题

```

### 代码块

```javascript
class Solution {
  solve(graph, target) {
    let result = 0;
    let visited = new Set([]);
    let check = [target];
    let length = check.length;
    while (length > 0) {
      result++;
      for (let i = 0; i < length; i++) {
        let vertex = check.shift();
        for (let nextNode of graph[vertex]) {
          if (nextNode === target) {
            return result;
          } else {
            if (!visited.has(nextNode)) {
              visited.add(nextNode);
              check.push(nextNode);
            }
          }
        }
      }
      length = check.length;
    }
    return -1;
  }
}
```

### 时间复杂度和空间复杂度

- 时间复杂度 O(n)
- 空间复杂度 O(1)
