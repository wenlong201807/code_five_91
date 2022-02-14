
// 参考学习 https://github.com/NieZhuZhu/Blog/issues/1

// 对于 undefined、任意的函数以及 symbol 三个特殊的值分别作为对象属性的值、数组元素、单独的值时 JSON.stringify() 将返回不同的结果。

// 首先，我们来复习一下知识点，看一道非常简单的面试题目：请问下面代码会输出什么？

const data = {
  a: "aaa",
  b: undefined,
  c: Symbol("dd"),
  fn: function() {
    return true;
  }
};
JSON.stringify(data); // 输出：？

// "{"a":"aaa"}"


// JSON.stringify() 第一大特性总结
// undefined、任意的函数以及 symbol 作为对象属性值时 JSON.stringify() 对跳过（忽略）它们进行序列化

// undefined、任意的函数以及 symbol 作为数组元素值时，JSON.stringify() 将会将它们序列化为 null

// undefined、任意的函数以及 symbol 被 JSON.stringify() 作为单独的值进行序列化时，都会返回 undefined

