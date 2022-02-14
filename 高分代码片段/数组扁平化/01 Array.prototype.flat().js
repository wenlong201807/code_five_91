// 注：数组拍平方法 Array.prototype.flat() 也叫数组扁平化、数组拉平、数组降维。 本文统一叫：数组拍平

// 不传参数时，默认“拉平”一层
// animals.flat();
// 传入一个整数参数，整数即“拉平”的层数
// animals.flat(2);
// Infinity 关键字作为参数时，无论多少层嵌套，都会转为一维数组
// animals.flat(Infinity);
// 传入 <=0 的整数将返回原数组，不“拉平”
// animals.flat(0);
// animals.flat(-10);
// 如果原数组有空位，flat()方法会跳过空位。
// 无案例



// 同上面
// Array.prototype.flat()  特性总结

// Array.prototype.flat() 用于将嵌套的数组“拉平”，变成一维的数组。该方法返回一个新数组，对原数据没有影响。
// 不传参数时，默认“拉平”一层，可以传入一个整数，表示想要“拉平”的层数。
// 传入 <=0 的整数将返回原数组，不“拉平”
// Infinity 关键字作为参数时，无论多少层嵌套，都会转为一维数组
// 如果原数组有空位，Array.prototype.flat() 会跳过空位。

// 判断元素是数组的方案

// instanceof
// constructor
// Object.prototype.toString
// isArray

// const arr = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5, "string", { name: "弹铁蛋同学" }];
// arr instanceof Array
// true
// arr.constructor === Array
// true
// Object.prototype.toString.call(arr) === '[object Array]'
// true
// Array.isArray(arr)
// true

// 弊端
// instanceof 操作符是假定只有一种全局环境，如果网页中包含多个框架，多个全局环境，如果你从一个框架向另一个框架传入一个数组，那么传入的数组与在第二个框架中原生创建的数组分别具有各自不同的构造函数。（所以在这种情况下会不准确）

// typeof 操作符对数组取类型将返回 object

// 因为constructor 可以被重写，所以不能确保一定是数组。
// const str = 'abc';
// str.constructor = Array;
// str.constructor === Array 
// true

// 作者：弹铁蛋同学
// 链接：https://juejin.cn/post/6844904025993773063
// 来源：稀土掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。













