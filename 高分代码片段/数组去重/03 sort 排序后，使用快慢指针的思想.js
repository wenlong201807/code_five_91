function unique(arr) {
  arr.sort((a, b) => a - b);
  var slow = 1,
    fast = 1;
  while (fast < arr.length) {
    if (arr[fast] != arr[fast - 1]) {
      arr[slow++] = arr[fast];
    }
    ++fast;
  }
  arr.length = slow;
  return arr;
}
// Sort 方法用于从小到大排序(返回一个新数组)，其参数中不带以上回调函数就会在两位数及以上时出现排序错误(如果省略，元素按照转换为的字符串的各个字符的 Unicode 位点进行排序。两位数会变为长度为二的字符串来计算)。