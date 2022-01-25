// trim() 方法是 ECMAScript 5.1 标准加入的，它并不支持IE9以下的低版本IE浏览器，如需支持，请参考以下兼容写法：

if(!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g,'');
  };
}