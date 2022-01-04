// 原型链脑图 https://blog.csdn.net/z93701081/article/details/94741442
function F() {
  console.info('普通函数上的this指向该函数的原型F.prototype:', this);
  this.f(); // f
}
Function.prototype.b = function() { // 所有函数的原型，均有此方法
 console.info('b')
}
Object.prototype.o = function() { // 所有函数的原型|| 也是所有对象的原型，均有此方法和属性
 console.info('o')
}
F.prototype.f = function() {// 某个具体的函数，可以有自己的原型
 console.info('f')
}
var c = new F() // c是实例对象，不是函数，则没有zui顶部公共函数的原型方法
console.info('c:', c); // c: F {}
// c.b()   // TypeError: c.b is not a function 对象不能使用函数的原型，除非通过自己的this
c.o()   // o
F.b()   // b
// F.f()   // TypeError: F.f is not a function 函数名不能调用自己原型上的方法或属性，除非通过自己的this
F.o()   // o 函数可以调用大对象的属性或方法，因为函数本质上也是对象，对象的原型是Object