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

添加标签 <meta name="robots" content="noindex, follow">
英文符号 tag中货币单位 £15k-£20k
详情页，排行榜页 bodyStyle 德国同名(单复数形式) 英国默认原样
测试链接 https://test-www-yesauto-de.corpautohome.com/kaufen/detail/29800/64447?pvareaid=6839685&thumb=true
more按钮 与左侧相邻的tag不重叠 
测试链接 https://test-www-yesauto-uk.corpautohome.com/buy/rankinglist?isNew=1&stockId=1847006&makeId=549&modelId=28&detailPrice=13600&dataTypeId=10&type=price&price=10000-15000&pvareaid=6851486&bodyStyle=Hatchback&makeName=BMW
英国无车卡时，默认文案 We couldn't find any results for your search. Please try a different search.
测试链接 https://test-www-yesauto-uk.corpautohome.com/buy/rankinglist?isNew=1&stockId=471479&makeId=200004&modelId=200264&detailPrice=5990&dataTypeId=9&type=make&price=200264&pvareaid=6851486&makeName=Audi
无tag时，tag 不显示
测试链接 https://test-www-yesauto-de.corpautohome.com/buy/rankinglist?pvareaid=6851486&makeName=Ford&isNew=1&stockId=29800&makeId=2000145&modelId=200274&bodyStyle=Limousinen&detailPrice=5575&dataTypeId=9&type=make&price=200101
*/