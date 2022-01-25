// Microsoft's JScript 不支持负的 start 索引。如果你想充分利用该方法的功能，则需要使用下面的兼容性代码修复此 bug：

// only run when the substr function is broken
if ('ab'.substr(-1) != 'b')
{
  /**
   *  Get the substring of a string
   *  @param  {integer}  start   where to start the substring
   *  @param  {integer}  length  how many characters to return
   *  @return {string}
   */
  String.prototype.substr = function(substr) {
    return function(start, length) {
      // did we get a negative start, calculate how much it is
      // from the beginning of the string
      if (start < 0) start = this.length + start;

      // call the original function
      return substr.call(this, start, length);
    }
  }(String.prototype.substr);
}