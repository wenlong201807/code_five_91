// https://juejin.cn/post/6844903821420789767#heading-13


var a = {n: 1};
var b = a; // {n: 1};

a.x = a = {n: 2} // 这一行等效于下面两行：.运算符高于=运算符
// a.x = {n: 2};
// a = {n: 2};


console.log(a.x) 	// {n: 2}
console.log(b.x) // undefined
console.log('a:', a)
console.log('b:', b)

/*

xx1 = {n: 1, x: undefined}
xx2 = {n: 2}

a -> xx2
b -> xx1

a.x = undefined
a -> xx2
*/
