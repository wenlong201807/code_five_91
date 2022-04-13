// https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/39
// let a1 = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'];
// let a2 = ['A', 'B', 'C', 'D'].map((item) => {
//   return item + 3;
// });

// let a3 = [...a1, ...a2].sort().map((item) => {
//   if (item.includes('3')) {
//     return item.split('')[0];
//   }
//   return item;
// });

// console.log(a3);

var a1 = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'];
var a2 = ['A', 'B', 'C', 'D'];
var j = -1;
var arr = [];
for (let i = 0; i < a1.length; i++) {
  if (i % 2 === 0) {
    j++;
    arr = arr.concat(a1.slice(i, i + 2).concat(a2[j]));
  }
}
console.log(arr);
