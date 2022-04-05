let array = [1, [2, 34, [12, 4]], 23];
function flatten(array) {
  while (array.findIndex((item) => Array.isArray(item) > 0)) {
    array = [].concat(...array);
  }
  return array;
}
console.log(flatten(array));
