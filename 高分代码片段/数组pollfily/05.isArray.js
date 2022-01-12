// http://louiszhai.github.io/2017/04/28/array/#Array%E6%9E%84%E9%80%A0%E5%99%A8

if (!Array.isArray){
  Array.isArray = function(arg){
    return Object.prototype.toString.call(arg) === '[object Array]';
    // return Object.prototype.toString.apply(arg) === '[object Array]';
  };
}