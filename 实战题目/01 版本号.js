let version = ['1.22.300', '1.10.1', '1.90.2', '2.1', '0.9', '2.2', '1.22.90', '2.19']
let version1 = ['9.2.30', '1.0.912', '1.10.12', '2.1', '0.9.13', '1.12.90']
let version2 = ['1.22.10', '4.10.91', '0.10.9', '2.1', '0.9.1', '1.2.90']


//假定字符串的每节数都在5位以下
function toNum(a){
  var a=a.toString();
  //也可以这样写 var c=a.split(/\./);
  var c=a.split('.');
  var num_place=["","0","00","000","0000"],r=num_place.reverse();
  for (var i=0;i<c.length;i++){ 
      var len=c[i].length;       
      c[i]=r[len]+c[i];  
  } 
  var res= c.join(''); 
  return res; 
} 
function cpr_version(a,b){ 
  var _a=toNum(a),_b=toNum(b);   
  if(_a==_b) console.log("版本号相同！版本号为："+a);    
  if(_a>_b) console.log("版本号"+a+"是新版本！"); 
  if(_a<_b) console.log("版本号"+b+"是新版本！"); 
}
var a="2.2.3";b="2.1.15";    
cpr_version(a,b);