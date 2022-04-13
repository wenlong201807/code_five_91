for (var j = 0; j < 4; j++) {
  let i = j;
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
// for (var i = 0; i < 4; i++) {
//   let k = i;
//   setTimeout(() => {
//     console.log(k);
//   }, 1000);
// }
// for (var i = 0; i < 4; i++) {
//   ((i) => {
//     setTimeout(() => {
//       console.log(i);
//     }, 1000);
//   })(i);
// }
// for (var i = 0; i < 4; i++) {
//   setTimeout((i) => {
//     console.log(i);
//   }, 1000, i);
// }
// for (let i = 0; i < 4; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }
