let array = [1, [2, 34, [12, 4]], 23];
function flatten(array) {
  let result = JSON.stringify(array); // JSON.stringify 转换后的结果 '[1,[2,34,[12,4]],23]'
  result = result.replace(/(\[|\])/g, "");
  result = "[" + result + "]";
  return JSON.parse(result);
}
console.log(flatten(array));
