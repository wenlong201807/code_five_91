

// Array.of用于将参数依次转化为数组中的一项，然后返回这个新数组，而不管这个参数是数字还是其它

if (!Array.of){
  Array.of = function(){
    return Array.prototype.slice.call(arguments);
  };
}