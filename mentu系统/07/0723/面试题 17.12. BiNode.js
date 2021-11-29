/**
 * 通过 https://leetcode-cn.com/problems/binode-lcci/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 * 有错误？？？
 */
var converBiNode = function (root) {
  //新建一个节点，作为初始空节点的上一个节点
  let preNode = new TreeNode(0)
  const res = preNode;
  // 中序遍历 左根右
  function inorder (root) {
    if (!root) return null;
    inorder(root.left)
    // 将当前根节点的左节点 赋值为null
    root.left = null;
    // 上一个节点的右节点指向当前节点
    preNode.right = root;
    // 更新上一个节点，方便下一步操作
    preNode = root;
    inorder(root.right)
  }
  inorder(root)

  return res.right;
}

// 参考学习
var convertBiNode = function (root) {
  let dummy = new TreeNode(-1);
  let pre = dummy;
  const dfs = node => {
    if (!node) return;
    dfs(node.left);
    pre.right = node;
    node.left = null;
    pre = pre.right;
    dfs(node.right);
  }
  dfs(root);
  return dummy.right;
};

// 作者：azecode
// 链接：https://leetcode-cn.com/problems/binode-lcci/solution/mian-shi-ti-1712-js-zhong-xu-bian-li-di-3shmn/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。