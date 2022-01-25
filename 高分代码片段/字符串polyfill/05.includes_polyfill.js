// 实际上，Firefox 18~39中该方法的名称为contains，由于bug 1102219的存在，它被重命名为includes() 。目前只有Chrome v41+和Firefox v40+版本浏览器实现了它，如需在其它版本浏览器中使用该方法，请参考 Polyfill。

// 
// 这个方法已经被加入到 ECMAScript 6 标准中，但未必在所有的 JavaScript 实现中都可以使用。然而，你可以轻松地 polyfill 这个方法：


if (!String.prototype.includes) {
  String.prototype.includes = function(search, start) {
    'use strict';
    if (typeof start !== 'number') {
      start = 0;
    }

    if (start + search.length > this.length) {
      return false;
    } else {
      return this.indexOf(search, start) !== -1;
    }
  };
}