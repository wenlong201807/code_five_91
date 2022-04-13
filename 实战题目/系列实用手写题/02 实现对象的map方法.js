// https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/431

Object.prototype.map = function (cb) {
  const obj = this;
  const result = {};
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      const item = cb(key, obj[key]);
      result[key] = item;
    }
  }
  return result;
};

const test1 = {
  a: 2,
  b: 3,
  c: 4,
  d: 5,
};
const r1 = test1.map((key, value) => {
  if (value % 2 === 0) {
    return value / 2;
  }
  return value;
});
console.log(r1)
// r1 :  {a: 1, b: 3, c: 2, d: 5}

// const test2 = {
//   a: 2,
//   b: 3,
//   c: 4,
//   d: 5,
// };
// const r2 = test2.map((key, val) => {
//   return ++val;
// });
// r2: {a: 3, b: 4, c: 5, d: 6}
