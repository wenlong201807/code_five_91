/**
 * 通关 https://leetcode-cn.com/problems/restore-ip-addresses/submissions/
 * @param {string} s
 * @return {string[]}
 * 由于需要找出所有可能复原出来的ip地址，因此可以考虑使用回溯的方法，
 * 队所有可能的字符串分割方式进行搜索，并筛选出满足要求的作为答案。
 */
var restoreIpAddresses = function (s) {
  const SEG_COUNT = 4;
  const segments = new Array(SEG_COUNT);
  const ans = [];
  const dfs = (s, segId, segStart) => {
    //如果找到了4段ip地址，并且遍历完了字符串，那么就是一种答案
    if (segId === SEG_COUNT) {
      if (segStart === s.length) {
        ans.push(segments.join('.'))
      }
      return;// 不写会出错： 最后一段的数字，不能有小数点：.在数字中可以表示小数点。歧义来源
    }
    // 如果还灭有找到4段ip地址，就已经遍历完了字符串，那么提前回溯
    if (segStart === s.length) {
      return;
    }

    // '0.0.0.0'
    // 由于不能有前导0，如果当前数字为0，那么这一段ip地址只能为0
    if (s.charAt(segStart) === '0') {
      segments[segId] = 0;
      dfs(s, segId + 1, segStart + 1);
    }

    // 一般情况下的组合ip地址 
    // 一般情况下，枚举每一种可能性并递归
    let addr = 0;
    for (let segEnd = segStart; segEnd < s.length; ++segEnd) {
      addr = addr * 10 + (s.charAt(segEnd) - '0');
      if (addr > 0 && addr <= 0xFF) { // 0-255 之间的
        segments[segId] = addr;
        dfs(s, segId + 1, segEnd + 1);
      } else {
        break;// 小于0或者大于255的跳过
      }
    }
  }

  dfs(s, 0, 0);
  return ans;
};