
/**
 * 参考学习
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
// 小根堆
var topKFrequent = function (words, k) {
  let wordObj = {}

  // 建立一个字典记录单词出现的频率
  for (let k of words) {
    wordObj[k] = (wordObj[k] || 0) + 1
  }
  let arr = []

  // 小根堆的方式维护前k个单词
  for (let key in wordObj) {
    if (arr.length < k) {
      arr.push([key, wordObj[key]])
      swim(arr, arr.length - 1)
    } else if (!compartor(arr[0], [key, wordObj[key]])) {
      arr[0] = [key, wordObj[key]]
      sink(arr, 0, k)
    }
  }

  // 排序返回
  return arr.sort((a, b) => compartor(a, b) ? -1 : 1).map(v => v[0])
};

// 小根堆上浮
function swim (arr, len) {
  let p = 0
  while (len) {
    p = (len - 1) >> 1

    if ((len & 1) === 0 && compartor(arr[len], arr[len - 1])) len--

    if (!compartor(arr[p], arr[len])) break
    [arr[p], arr[len]] = [arr[len], arr[p]]
    len = p
  }
}
// 小根堆下沉
function sink (arr, i, len) {
  let k = 0
  while (2 * i + 1 < len) {
    k = 2 * i + 1
    if (k < (len - 1) && compartor(arr[k], arr[k + 1])) k++

    if (!compartor(arr[i], arr[k])) break
    [arr[i], arr[k]] = [arr[k], arr[i]]
    i = k
  }
}

// 比较大小
function compartor (a, b) {
  if (a[1] > b[1]) {
    return true
  }
  if (a[1] === b[1] && a[0] < b[0]) {
    return true
  }
  return false
}

// 作者：half2half
// 链接：https://leetcode-cn.com/problems/top-k-frequent-words/solution/xiao-ding-dui-de-you-xian-dui-lie-by-tho-fikc/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。