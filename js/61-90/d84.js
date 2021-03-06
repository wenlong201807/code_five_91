/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  //获取偏移表
  function calShiftMat(st) {
    let dic = new Map();
    for (let i = st.length - 1; i >= 0; i--) {
      if (dic.get(st[i]) == undefined) {
        dic.set(st[i], st.length - i);
      }
      dic.set('ot', st.length + 1);
    }
    return dic;
  }

  //其他情况判断
  if (needle.length > haystack.length) return -1;
  if (needle == '') return 0;

  //偏移表预处理
  let dic = calShiftMat(needle);
  let idx = 0;

  while (idx + needle.length <= haystack.length) {
    //待匹配字符串
    let str_cut = haystack.slice(idx, idx + needle.length);

    //判断是否匹配
    if (str_cut == needle) {
      return idx;
    } else {
      //边界处理
      if (idx + needle.length >= haystack.length) {
        return -1;
      }
      //不匹配情况下，根据下一个字符的偏移，移动idx
      let cur_c = haystack[idx + needle.length];
      if (dic.get(cur_c) != undefined) idx += dic.get(cur_c);
      else idx += dic.get('ot');
    }
  }
  return idx + needle.length >= haystack.length ? -1 : idx;
};

// 作者：chen-ke-jie-ryan
// 链接：https://leetcode-cn.com/problems/implement-strstr/solution/sundaysuan-fa-javascript-by-chen-ke-jie-zvbzc/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
