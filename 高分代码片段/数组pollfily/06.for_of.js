// http://louiszhai.github.io/2017/04/28/array/#Array%E6%9E%84%E9%80%A0%E5%99%A8

// 数组推导
for (i of [1, 2, 3]) {
  for (j of [10, 100]) {
    console.info(i * j)
  }
}
//[10, 100, 20, 200, 30, 300]
