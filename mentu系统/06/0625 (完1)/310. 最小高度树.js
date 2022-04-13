/**
 * 通关 https://leetcode-cn.com/problems/minimum-height-trees/submissions/
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
  // check
  if (n === 1 || edges.length === 0) return [0];

  let root, len = edges.length, inDegs = new Array(n);
  do {
    // update length of edges
    edges.length = len;
    inDegs.fill(0);
    for (let edge of edges) {
      inDegs[edge[0]]++;
      inDegs[edge[1]]++;
    }

    len = 0;
    for (let edge of edges) {
      // overwrite the value of edges if none of the edges's nodes is leaf
      if (inDegs[edge[0]] > 1 && inDegs[edge[1]] > 1) edges[len++] = edge;
      else if (inDegs[edge[0]] > 1) root = edge[0];
      else if (inDegs[edge[1]] > 1) root = edge[1];
    }
  } while (len) // when len is 0,the edges hold the previous values

  if (edges.length === 1) return edges[0]; // case 1
  return [root];// case 2
};

