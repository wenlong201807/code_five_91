// https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/296

// const a = new Intl.NumberFormat().format(100000000000).replace(/,/g, '.');

function addCommaIntoStringNumber(sNumber, splitNumber = 3) {
  if (sNumber.length <= splitNumber) {
    return sNumber;
  }
  let result = [];
  let sNumberQuene = sNumber.split('');
  let index = 1;
  let sNumberLength = sNumber.length;
  debugger;
  while (sNumberLength--) {
    result.unshift(sNumberQuene.pop());
    if (index++ === splitNumber) {
      result.unshift(',');
      index = 1;
    }
  }
  return result.join('').startsWith(',', '');
}

console.log(addCommaIntoStringNumber('100000'));

// str.split("").reverse().reduce((prev, cur, index) => (index + 1) % 3 == 0 ? '.' + cur + prev : cur + prev)

// 参考 https://www.cnblogs.com/allen2333/p/9835654.html
// console.log('100000000000'.replace(/(?!^)(?=(\d{3})+$)/g,','))

// var reg = /(\B)(?=(\d{3})+$)/g;
// console.log("1000000000".replace(reg, '.'));  // 1.000.000.000