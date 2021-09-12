/*
sliding window
1.创建一个set
2.两个指针
第一个指向字符串的开头 j
第二个 随着for循环遍历字符串 i
3.如果set里面没有s[i] 说明目前为止还没有重复的字符，把s[i] 添加到set里，然后更新最大不重复字符的数量。
4.如果set里面有s[i] ，则从set里开始删除s[j] ，并且递增j ,在检查set是否有s[i], 如此反复直到set里没有s[i]为止
5.重复步骤3和4，直到遍历完整个字符串。
*/
var lengthOfLongestSubstring = function (s) {
  let set = new Set();
  let i = 0;
  let j = 0;
  let maxLen = 0;
  const len = s.length;

  while (i < len) {
    if (set.has(s[i])) {
      while (set.has(s[i])) {
        set.delete(s[j])
        j++;
      }
    }

    set.add(s[i])
    maxLen = Math.max(maxLen, set.size)
    i++
  }

  return maxLen;
};