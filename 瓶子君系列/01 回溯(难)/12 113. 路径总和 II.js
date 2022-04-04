/*
1 找的还是 root - leaf 的路径，但是这一次要把找的所有符合要求的路径都保存起来
2 时间复杂度 {O(n)}O(n)
*/

var pathSum = function (root, targetSum) {
  const ret = [];

  const dfs = (root, arr, sum) => {
    if (!root) return;
    sum += root.val;
    arr = [...arr, root.val];
    if (!root.left && !root.right && sum == targetSum) {
      ret.push(arr);
    }
    if (root.left) dfs(root.left, [...arr], sum);
    if (root.right) dfs(root.right, [...arr], sum);
  };

  dfs(root, [], 0);

  return ret;
};

const root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
// 输出：[[5,4,11,2],[5,8,4,5]]

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/path-sum-ii
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
