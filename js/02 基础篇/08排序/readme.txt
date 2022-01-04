// 参考学习
// https://mp.weixin.qq.com/s?__biz=MzA5NTcxOTcyMg==&mid=2247484231&idx=1&sn=3000ad77802f4c568994fd30a1686e46&chksm=90ba5b02a7cdd214cde35a8d1d21c90e801711ee7bca87281bc154c309f8ac8768c42fd23447&scene=21#wechat_redirect

// js数据结构与算法
// https://www.cnblogs.com/cc-freiheit/category/1397354.html
// 十大经典排序算法（动图演示）
// https://www.cnblogs.com/onepixel/articles/7674659.html#4%E5%B8%8C%E5%B0%94%E6%8E%92%E5%BA%8Fshell-sort

前端学习数据结构与算法系列(四)：哈希、堆和二叉查找树

操作系统原理


优先------
人月神话
架构真经
重构
深入理解计算机系统

图解http

https://www.zhihu.com/search?type=content&q=%E7%A8%8B%E5%BA%8F%E7%8C%BF%E7%BB%8F%E5%85%B8%E4%B9%A6%E7%B1%8D

pdf 书籍
https://pan.baidu.com/s/1-944EqDz3WslYSFc5o5xjQ#list/path=/
b6mw

第二次握手
服务端接收到客户端的SYN报文后，需要发送ACK信息对这个SYN报文段进行确认。
同时，还要发送自己的SYN请求信息。
服务端会将上述的信息放到一个报文段（SYN+ACK报文段）中，一并发送给客户端，此时服务端将会进入SYN_RECV状态。

第三次握手
客户端收到服务端的SYN+ACK报文段后，会向服务端发送ACK确认报文段，这个报文段发送完毕后，客户端和服务端都进入ESTABLISHED状态，完成TCP三次握手。

通常我们访问一个网站，使用的是主机名或者域名来进行访问的。
因为相对于IP地址（一组纯数字），域名更容易让人记住。
但TCP/IP协议使用的是IP地址进行访问的，所以必须有个机制或者服务，把域名转换为IP地址。
DNS服务就是用来解决这个问题的，它提供域名到IP地址之间的解析服务。

当客户端访问Web站点时，
首先会通过DNS服务查询到域名的IP地址。
然后浏览器生成HTTP请求，
并通过TCP/IP协议发送给Web服务器。
Web服务器接收到请求后会根据请求生成响应内容，并通过TCP/IP协议返回给客户端

通用报文头  说明
Catch-Control 控制缓存行为
Connection 逐条首部，连接的管理
Date 创建报文的日期时间
Pragma 报文指令
Trailer 报文末端的首部一览
Transfer-Encoding 指定报文主体的传输编码方式
Upgate 升级为其他协议
Via 代理服务器的相关信息
Warning 错误通知

请求报文头  说明
Accept  用户代理可处理的媒体类型
Accept-Charset 优先的字符集
Accept-Encoding 优先的内容编码
Accept-Language 优先的语言（自然语言）
Authorization Web认证信息
Expect 期待服务器的特定行为
From 用户的电子邮件地址
Host 请求资源所在的服务器
If-Match 比较实体标记（E-Tag）
If-Modified-Since 比较资源更新的时间
If-None-Match 比较实体标记（与If-Match相反）
If-Range 比较未更新时发送实体Byte的范围请求
If-Unmodified-Since 比较资源的更新时间（与If-Modified-Since相反）
Max-Forwords 最大传输逐跳数
Proxy-Authorization 代理服务要求客户端的认证信息
Range 实体的字节范围请求
Referer 对请求中URI的原始获取方
TE 传输编码的优先级
User-Agent HTTP客户端程序的信息

相应报文头
Accept-Range 是否接受字节范围请求
Age 推算资源创建经过时间
ETag 资源的匹配信息
Location 令客户端重定向至指定URI
Proxy-Authorization 代理服务器对客户端的认证信息
Retry-After 对再次发起请求对时机请求
Server HTTP服务器的安装信息
Vary 代理服务器的缓存管理
WWW-Authenticate服务器对客户端的认证信息

实体报文头  说明
Allow 资源可支持的HTTP方法
Content-Encoding 实体主体使用的编码方式
Content-Language 实体主体的自然语言
Content-length 实体主体对大小（单位：字节）
Content-Location 替代对应资源的URI
Content-MD5 实体主体的报文摘要
Content-Range 实体主体的位置范围
Content-Type 实体主体的媒体类型
Expire 实体主体过期的日期时间
Last-Modified 资源的最后修改日期时间

text/html HTML格式
text/plain 纯文本格式
text/xml XML格式
image/gif gif图片格式
image/jpeg jpeg图片格式
image/png png图片格式
application/xhtml+xml XHTML格式
application/xml XML格式
application/atom+xml Atom XML聚合格式
application/json JSON数据格式
application/pdf pdf格式
application/msword word文档格式
application/octet-stream 二进制数据流，（常见的文件下载）
application/x-www-form-uriencoded 表单提交