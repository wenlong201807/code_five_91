test(x);
test(y);
test(z);
test(m);
test(n);
let z = 0;
var x = (y = z++);
if (x) {
  let m = 3;
  var n = 4;
}
test(x);
test(y);
test(z);
test(m);
test(n);

var test = function (v) {
  try {
    console.log(v);
  } catch (e) {
    console.log('error');
  }
};
