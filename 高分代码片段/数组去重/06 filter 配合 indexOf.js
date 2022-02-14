function unique(arr) {
  return arr.filter(function (item, index, arr) {
    //当前元素，在原始数组中的第一个索引==当前索引值，否则返回当前元素
    //不是那么就证明是重复项，就舍弃
    return arr.indexOf(item) === index;
  });
}
