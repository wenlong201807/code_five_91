# 题目名称

- [Shortest-Cycle-Containing-Target-Node](https://binarysearch.com/problems/Shortest-Cycle-Containing-Target-Node)

## 解题思路

```javascript

参考学习

```

### 代码块

```javascript

const shortestCircle = (graph, target) => {
  let seen  = false;
  for (let i = 0; i < graph.length; i ++ ) {
    if (graph[i][0] === target ) {
      seen = true; 
      targetPos = i
    }
    if (!graph[i][0]) return -1
  }
  return graph.length 
};

```

### 时间复杂度和空间复杂度

- 时间复杂度 O(n)
- 空间复杂度 O(1)
