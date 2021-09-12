/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var interchangeableRectangles1 = function (rectangles) {
  let num = 0;
  for (let i = 0; i < rectangles.length; i++) {
    let one = rectangles[i][0] / rectangles[i][1];

    for (let j = i + 1; j < rectangles.length; j++) {
      let two = rectangles[j][0] / rectangles[j][1];
      // console.log('one == two:', one, two)
      if (one == two) {
        num = num + 1;
      }
    }
  }

  // console.log('num:', num)
  return num;
};
var interchangeableRectangles = function (rectangles) {
  let num = 0;
  for (let i = 0; i < rectangles.length; i++) {
    let one = rectangles[i][0] / rectangles[i][1];
    rectangles[i] = one;
  }

  for (let i = 0; i < rectangles.length; i++) {
    let one = rectangles[i];

    for (let j = i + 1; j < rectangles.length; j++) {
      let two = rectangles[j];
      // console.log('one == two:', one, two)
      if (one == two) {
        num = num + 1;
      }
    }
  }

  // console.log('rectangles:', rectangles)
  // console.log('num:', num)
  return num;
};

// 通过
// https://leetcode-cn.com/contest/weekly-contest-258/problems/number-of-pairs-of-interchangeable-rectangles/
var interchangeableRectangles3 = function (rectangles) {
  let map = new Map();
  let num = 0;
  for (let i = 0; i < rectangles.length; i++) {
    let one = rectangles[i][0] / rectangles[i][1];
    rectangles[i] = one;

    if (map.has(one)) {
      map.set(one, map.get(one) + 1)
    } else {
      map.set(one, 1)
    }
  }

  map.forEach((value, key) => {
    console.log(value, key)
    for (let i = 0; i < value; i++) {
      num += i
    }
  })

  return num;
};

const rectangles = [
  [4, 8],
  [3, 6],
  [10, 20],
  [15, 30],
];
// console.time('one');
// interchangeableRectangles1(rectangles);
// console.timeEnd('one');
// console.time('two');
// interchangeableRectangles(rectangles);
// console.timeEnd('two');
interchangeableRectangles3(rectangles);
