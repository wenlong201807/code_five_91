function unique(arr) {
  const result = new Set(arr);
  return [...result];
  //使用扩展运算符将Set数据结构转为数组
}
// Set 中的元素只会出现一次，即 Set 中的元素是唯一的。