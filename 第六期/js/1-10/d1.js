/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function (A, K) {
  var array = K.toString().split('').map(Number);
  var pro = 0;

  for (var i = 1; i <= array.length; i++) {
    if (i > A.length) {
      // 如果K长度较大，则剩余的数直接加到A数组前
      A.unshift(array[array.length - i] + pro);
    } else {
      A[A.length - i] = A[A.length - i] + array[array.length - i] + pro;
    }

    pro = 0;

    if (A[A.length - i] >= 10) {
      A[A.length - i] = A[A.length - i] % 10;
      pro = 1;
    }
  }
  // 如果K遍历完，pro不为0，则取i值继续在A数组中进位
  while (pro) {
    if (i > A.length) {
      A.unshift(pro);
    } else {
      A[A.length - i] += pro;
    }

    pro = 0;

    if (A[A.length - i] >= 10) {
      A[A.length - i] = A[A.length - i] % 10;
      pro = 1;
    }

    i++;
  }

  return A;
};

// 作者：a-mao-da-ma
// 链接：https://leetcode-cn.com/problems/add-to-array-form-of-integer/solution/shu-zu-xing-shi-de-zheng-shu-jia-fa-by-a-oaws/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
