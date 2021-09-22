/**
 * 题目 https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
 * 参考资料 https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/solution/dai-ma-sui-xiang-lu-qiu-shu-de-zui-da-sh-f988/
 * 
 * 通过 https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/submissions/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// var maxDepth = function(root) {
//   if (!root) return root;

//   return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
// };
/*
修改内容
大小按钮的埋点参数补充排行榜类型名字 typeName":"Limousine"
英德国详情页 
未登录，点击收藏 登陆后返回排行榜页面，参数复原
more按钮的弹框  在页面上下滑动时，未关闭状态 鼠标移入时，为手型
url中 makeName  bodyType 多余参数去除，英德
小标题文案内容更新，m端剧中，英德
more弹框，居中覆盖在原来tag栏 pcm 英德
排行榜类型，只有一个按钮时，宽度减小
车卡，tag 框，m 端上下对齐
详情页 英德文案，样式更新
*/