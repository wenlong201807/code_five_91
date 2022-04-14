/*

第一题、数组排重（25分） 
输入一个数组，把重复的元素去掉，输出不重复的元素 
样例1 
输入：1 2 3 4 4 5 5 6 7 8 9 9 
输出：1 2 3 4 5 6 7 8 9 
样例2 
输入：1 1 1 1 1 1 2 3 9 9 9 9 9 5 4 
输出：1 2 3 9 5 4 

const arr = [1, 2, 3, 4, 4, 5, 5, 6, 7, 8, 9, 9]
const newArr = [...new Set(ar)]

第二题、唯一出现（25分） 
输入一个数组，输出仅出现一次的元素 
样例1 
输入：1 2 3 4 4 5 5 6 7 8 9 9 
输出：1 2 3 6 7 8 
样例2 
输入：1 1 1 1 1 1 2 3 9 9 9 9 9 5 4 
输出：2 3 5 4 

const map = new Map();
const arr = [1, 2, 3, 4, 4, 5, 5, 6, 7, 8, 9, 9 ]
const resultArr = [];
for(let i =0; i<arr.length; i++) {
  if(map.has(arr[i])){
    map.set(arr[i], map.get(arr[i]) + 1)
  } else {
    map.set(arr[i], 1)
  }
}

for(let [key, val] of map) {
  if (value === 1) {
    resultArr.push(k)
  }
}
console.log(resultArr)


第三题-设计题（50分） 
假设有一个绘图程序；该程序需要创建“圆形”（circle）“三角形”（triangle）和“方型”（square）等“基本图形”，每一张“图”（graph）在当前的需求定义下均由以上三种基本图形构成。 
请您使用C++，Java，Python等任意OOP编程语言，或者建模语言UML，设计若干个类来表达： 
以上三种“基本图形” 
由以上三种图形构成的“图” 
已知需要创建的“基本图形”的集合，如何创建一张“图”的方法 
由于需求变更，“基本图形”新增了“菱形”(diamond)


*/


// 题一
const arr1 = [1, 2, 3, 4, 4, 5, 5, 6, 7, 8, 9, 9]
const newArr = [...new Set(arr1)]
console.log(newArr)

// 题二
const map = new Map();
const arr = [1, 2, 3, 4, 4, 5, 5, 6, 7, 8, 9, 9 ]
const resultArr = [];
for(let i =0; i<arr.length; i++) {
  if(map.has(arr[i])){
    map.set(arr[i], map.get(arr[i]) + 1)
  } else {
    map.set(arr[i], 1)
  }
}

for(let [key, val] of map) {
  if (val === 1) {
    resultArr.push(key)
  }
}
// console.log(resultArr)

// 题三
class GraphDynamic {
  constructor(options) {
    const { type = 'circle' } = options || {};
    this.dynamicGraph(type);
  }

  dynamicGraph(type) {
    // 具体组合基本图形
  }

  circle(){
    // 基本图形 -> 圆
  }

  triangle(){
    // 基本图形 -> 三角形
  }

  square(){
    // 基本图形 -> 正方形
  }
}
