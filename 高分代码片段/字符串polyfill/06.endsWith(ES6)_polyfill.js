// 这个方法已经加入到 ECMAScript 6 标准当中，但是可能还没有在所有的  JavaScript 实现中可用。然而，你可以通过如下的代码片段扩展 String.prototype.endsWith() 实现兼容：

if (!String.prototype.endsWith) {
	String.prototype.endsWith = function(search, this_len) {
		if (this_len === undefined || this_len > this.length) {
			this_len = this.length;
		}
		return this.substring(this_len - search.length, this_len) === search;
	};
}