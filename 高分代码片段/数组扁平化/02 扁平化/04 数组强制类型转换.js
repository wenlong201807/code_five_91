function flatten(array) {
  return array
    .toString()
    .split(",")
    .map((item) => Number(item)); // 'array.toString() 转换后的结果 1,2,34,12,4,23'
}
console.log(flatten(array));
