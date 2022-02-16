/**
 * 通过 https://leetcode-cn.com/problems/k-th-symbol-in-grammar/submissions/
 * @param {number} n
 * @param {number} k
 * @return {number}
 * 依据题意的要求发现
 * 对题目里面给出的k进行奇偶判断：期数，则对2整除。余数+1。去找上一行的余数+1个数
 */
var kthGrammar = function (N, K) {
  if (N === 1) return 0;
  if (K % 2 === 0) {
    return kthGrammar(N - 1, K / 2) === 0 ? 1 : 0;
  } else {
    return kthGrammar(N - 1, Math.floor(K / 2) + 1);
  }
};

/**
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var kthGrammar = function (N, K) {
  if (N === 1) return 0;

  // 计算当前行的长度：2的N-1次方
  var length = 2 ** (N - 1);

  // 如果K大于长度的一半，就是K所在位置是后半段
  if (K > length / 2) {
    // 先得到上一行的值，位置是K相对于后半段的位置
    var val = kthGrammar(N - 1, K - length / 2);

    // 然后把值反过来
    return val === 0 ? 1 : 0;
  }
  // 否则前半部分
  else {
    // 值就是上一行K位置的值
    return kthGrammar(N - 1, K);
  }
};

// 作者：zITy
// 链接：https://leetcode-cn.com/problems/k-th-symbol-in-grammar/solution/zhao-gui-lu-hou-ban-bu-fen-shi-qian-ban-wahnd/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
