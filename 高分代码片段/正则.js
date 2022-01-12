var str = '123abc789',
  s;
//没有使用环视,abc直接被替换s = str.replace(/abc/,456);console.log(s); //123456789
//使用了顺序肯定环视,捕获到了a前面的位置,所以abc没有被替换,只是将3替换成了3456
s = str.replace(/3(?=abc)/, 3456);
console.log(s); //123456abc789
//使用了顺序否定环视,由于3后面跟着abc,不满意条件,故捕获失败,所以原字符串没有被替换
s = str.replace(/3(?!abc)/, 3456);
console.log(s); //123abc789

// 作者：路易斯
// 链接：https://juejin.cn/post/6844903469824868365

/*
var str = "123abc789",s;
没有使用环视,abc直接被替换
s = str.replace(/abc/,456);
console.log(s); //123456789

使用了顺序肯定环视,捕获到了a前面的位置,所以abc没有被替换,只是将3替换成了3456
s = str.replace(/3(?=abc)/,3456);
console.log(s); //123456abc789

使用了顺序否定环视,由于3后面跟着abc,不满意条件,故捕获失败,所以原字符串没有被替换
s = str.replace(/3(?!abc)/,3456);
console.log(s); //123abc789
    

作者：路易斯
链接：https://juejin.cn/post/6844903469824868365
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
获取html片段

    假如现在, js 通过 ajax 获取到一段 html 代码如下: 
    var responseText = "<div data='dev.xxx.txt'></div><img src='dev.xxx.png' />";
    现我们需要替换img标签的src 属性中的 “dev”字符串 为 “test” 字符串. 
    ① 由于上述 responseText 字符串中包含至少两个子字符串 “dev”, 显然不能直接 replace 字符串 “dev”为 “test”. 
    ② 同时由于 js 中不支持逆序环视, 我们也不能在正则中判断前缀为 “src=’”, 然后再替换”dev”. 
    ③ 我们注意到 img 标签的 src 属性以 “.png” 结尾, 基于此, 就可以使用顺序肯定环视. 如下: 
    var reg = /dev(?=[^']*png)/; 
    为了防止匹配到第一个dev, 通配符前面需要排除单引号或者是尖括号
    var str = responseText.replace(reg,"test");
    console.log(str);//<div data='dev.xxx'></div><img src='test.xxx.png' />
    当然, 以上不止顺序肯定环视一种解法, 捕获性分组同样可以做到. 那么环视高级在哪里呢? 环视高级的地方就在于它通过一次捕获就可以定位到一个位置, 对于复杂的文本替换场景, 常有奇效, 而分组则需要更多的操作

千位分割符
定义：千位分隔符, 顾名思义, 就是数字中的逗号. 参考西方的习惯, 数字之中加入一个符号, 避免因数字太长难以直观的看出它的值. 故而数字之中, 每隔三位添加一个逗号, 即千位分隔符.
    
那么怎么将一串数字转化为千位分隔符形式呢? 
示例： var str = "1234567890";(+str).toLocaleString();//"1,234,567,890"
    如上, toLocaleString() 返回当前对象的”本地化”字符串形式. 
    
1 如果该对象是Number类型, 那么将返回该数值的按照特定符号分割的字符串形式.
2 如果该对象是Array类型, 那么先将数组中的每项转化为字符串, 然后将这些字符串以指定分隔符连接起来并返回.
    
    toLocaleString 方法特殊, 有本地化特性, 对于天朝, 默认的分隔符是英文逗号. 因此使用它恰好可以将数值转化为千位分隔符形式的字符串. 如果考虑到国际化, 以上方法就有可能会失效了.
示例2 
    我们尝试使用环视来处理下. 
    function thousand(str){  
      return str.replace(/(?!^)(?=([0-9]{3})+$)/g,',');
    }
    console.log(thousand(str));//"1,234,567,890"
    console.log(thousand("123456"));//"123,456"
    console.log(thousand("1234567879876543210"));//"1,234,567,879,876,543,210"

    上述使用到的正则分为两块. (?!^) 和 (?=([0-9]{3})+$). 我们先来看后面的部分, 然后逐步分析之.
    
      1  “[0-9]{3}” 表示连续3位数字.
      2  “([0-9]{3})+” 表示连续3位数字至少出现一次或更多次.
      3  “([0-9]{3})+$” 表示连续3的正整数倍的数字, 直到字符串末尾.
      4  那么 (?=([0-9]{3})+$) 就表示匹配一个零宽度的位置, 并且从这个位置到字符串末尾, 中间拥有3的正整数倍的数字.
      5  正则表达式使用全局匹配g, 表示匹配到一个位置后, 它会继续匹配, 直至匹配不到.
      6  将这个位置替换为逗号, 实际上就是每3位数字添加一个逗号.
      7  当然对于字符串”123456”这种刚好拥有3的正整数倍的数字的, 当然不能在1前面添加逗号. 那么使用 (?!^) 就指定了这个替换的位置不能为起始位置.
    
    千位分隔符实例, 展示了环视的强大, 一步到位.
*/

/*
正则表达式在JS中的应用

ES6对正则扩展了又两种修饰符(其他语言可能不支持):
    
        y (粘连sticky修饰符), 与g类似, 也是全局匹配, 并且下一次匹配都是从上一次匹配成功的下一个位置开始, 不同之处在于, g修饰符只要剩余位置中存在匹配即可, 而y修饰符确保匹配必须从剩余的第一个位置开始.
     var s = "abc_ab_a";
     var r1 = /[a-z]+/g;
     var r2 = /[a-z]+/y;
     console.log(r1.exec(s),r1.lastIndex); // ["abc", index: 0, input: "abc_ab_a"] 3
     console.log(r2.exec(s),r2.lastIndex); // ["abc", index: 0, input: "abc_ab_a"] 3
     console.log(r1.exec(s),r1.lastIndex); // ["ab", index: 4, input: "abc_ab_a"] 6
     console.log(r2.exec(s),r2.lastIndex); // null 0
    如上, 由于第二次匹配的开始位置是下标3, 对应的字符串是 “_”, 而使用y修饰符的正则对象r2, 需要从剩余的第一个位置开始, 所以匹配失败, 返回null.
    正则对象的 sticky 属性, 表示是否设置了y修饰符. 这点将会在后面讲到.
    
        u 修饰符, 提供了对正则表达式添加4字节码点的支持. 比如 “𝌆” 字符是一个4字节字符, 直接使用正则匹配将会失败, 而使用u修饰符后, 将会等到正确的结果.
     var s = "𝌆";
     console.log(/^.$/.test(s));//false
     console.log(/^.$/u.test(s));//true

*/

/*
compile【不知道在说什么】
    compile 方法用于在执行过程中改变和重新编译正则表达式.
    语法: compile(pattern[, flags])
    参数介绍请参考上述 RegExp 构造器. 用法如下: 
    var reg = new RegExp("abc", "gi"); 
    var reg2 = reg.compile("new abc", "g");
    console.log(reg);// /new abc/g
    console.log(reg2);// undefined
    可见 compile 方法会改变原正则表达式对象, 并重新编译, 而且它的返回值为空.
    
test
    test 方法用于检测一个字符串是否匹配某个正则规则, 只要是字符串中含有与正则规则匹配的文本, 该方法就返回true, 否则返回 false.
    语法: test(string), 用法如下: 
    console.log(/[0-9]+/.test("abc123"));//true
    console.log(/[0-9]+/.test("abc"));//false
    以上, 字符串”abc123” 包含数字, 故 test 方法返回 true; 而 字符串”abc” 不包含数字, 故返回 false.

    如果需要使用 test 方法测试字符串是否完成匹配某个正则规则, 那么可以在正则表达式里增加开始(^)和结束($)元字符. 如下: 
    console.log(/^[0-9]+$/.test("abc123"));//false
    以上, 由于字符串”abc123” 并非以数字开始, 也并非以数字结束, 故 test 方法返回false.

    【重点注意】
    实际上, 如果正则表达式带有全局标志(带有参数g)时, test 方法还受正则对象的lastIndex属性影响,如下: 
    var reg = /[a-z]+/;//正则不带全局标志
    console.log(reg.test("abc"));//true
    console.log(reg.test("de"));//true
    var reg = /[a-z]+/g;//正则带有全局标志g
    console.log(reg.test("abc"));//true
    console.log(reg.lastIndex);//3, 下次运行test时,将从索引为3的位置开始查找
    console.log(reg.test("de"));//false
    该影响将在exec 方法讲解中予以分析.
    

exec
    exec 方法用于检测字符串对正则表达式的匹配, 如果找到了匹配的文本, 则返回一个结果数组, 否则返回null.
    语法: exec(string)
    exec 方法返回的数组中包含两个额外的属性, index 和 input. 并且该数组具有如下特点:
    
        第 0 个项表示正则表达式捕获的文本
        第 1~n 项表示第 1~n 个反向引用, 依次指向第 1~n 个分组捕获的文本, 可以使用RegExp.$ + “编号1~n” 依次获取分组中的文本
        index 表示匹配字符串的初始位置
        input 表示正在检索的字符串
    
    无论正则表达式有无全局标示”g”, exec 的表现都相同. 但正则表达式对象的表现却有些不同. 下面我们来详细说明下正则表达式对象的表现都有哪些不同.
    假设正则表达式对象为 reg , 检测的字符为 string , reg.exec(string) 返回值为 array.
    若 reg 包含全局标示”g”, 那么 reg.lastIndex 属性表示原字符串中匹配的字符串末尾的后一个位置, 即下次匹配开始的位置, 
    此时 reg.lastIndex == array.index(匹配开始的位置) + array[0].length(匹配字符串的长度). 如下: 
    var reg = /([a-z]+)/gi,    string = "World Internet Conference";
    var array = reg.exec(string);
    console.log(array);//["World", "World", index: 0, input: "World Internet Conference"]
    console.log(RegExp.$1);//World
    console.log(reg.lastIndex);//5, 刚好等于 array.index + array[0].length
    随着检索继续, array.index 的值将往后递增, 也就是说, reg.lastIndex 的值也会同步往后递增. 
    因此, 我们也可以通过反复调用 exec 方法来遍历字符串中所有的匹配文本. 直到 exec 方法再也匹配不到文本时, 它将返回 null, 并把 reg.lastIndex 属性重置为 0. 
    接着上述例子, 我们继续执行代码, 看看上面说的对不对, 如下所示: 
    array = reg.exec(string);
    console.log(array);//["Internet", "Internet", index: 6, input: "World Internet Conference"]
    console.log(reg.lastIndex);//14
    array = reg.exec(string);
    console.log(array);//["Conference", "Conference", index: 15, input: "World Internet Conference"]
    console.log(reg.lastIndex);//25
    array = reg.exec(string);
    console.log(array);//null
    console.log(reg.lastIndex);//0
    以上代码中, 随着反复调用 exec 方法, reg.lastIndex 属性最终被重置为 0.

问题回顾
    在 test 方法的讲解中, 我们留下了一个问题. 如果正则表达式带有全局标志g, 以上 test 方法的执行结果将受 reg.lastIndex影响, 不仅如此, exec 方法也一样. 由于 reg.lastIndex 的值并不总是为零, 并且它决定了下次匹配开始的位置, 如果在一个字符串中完成了一次匹配之后要开始检索新的字符串, 那就必须要手动地把 lastIndex 属性重置为 0. 避免出现下面这种错误: 
    var reg = /[0-9]+/g,    str1 = "123abc",    str2 = "123456";
    reg.exec(str1);
    console.log(reg.lastIndex);//3
    var array = reg.exec(str2);
    console.log(array);//["456", index: 3, input: "123456"]
    以上代码, 正确执行结果应该是 “123456”, 因此建议在第二次执行 exec 方法前, 增加一句 “reg.lastIndex = 0;”.
    若 reg 不包含全局标示”g”, 那么 exec 方法的执行结果(array)将与 string.match(reg) 方法执行结果完全相同.
    
String【没看懂】
    match, search, replace, split 方法请参考 字符串常用方法 中的讲解.
    如下展示了使用捕获性分组处理文本模板, 最终生成完整字符串的过程: 
    var tmp = "An ${a} a ${b} keeps the ${c} away";
    var obj = {  a:"apple",  b:"day",  c:"doctor"};
    function tmpl(t,o){  
      return t.replace(/\${(.)}/g,
      function(m,p){    
          console.log('m:'+m+' p:'+p);    
          return o[p];  
      });
    }
    tmpl(tmp,obj);
    上述功能使用ES6可这么实现: var obj = {  a:"apple",  b:"day",  c:"doctor"};
    with(obj){  
      console.log(`An ${a} a ${b} keeps the ${c} away`);
    }
 
*/