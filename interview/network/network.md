# Network

* 第二次打开一个网页比第一次快， 为什么 cookie？？

域名到IP地址的过程
ipv4, ipv6
进程和线程的区别
进程间通信方式
http get和post的区别

* content-type有哪些

* ajax和axios区别

  axios是通过promise实现对ajax技术的一种封装，就像jQuery实现ajax封装一样。简单来说： ajax技术实现了网页的局部数据刷新，axios实现了对ajax的封装。
  axios功能更加丰富：

  * 支持 Promise API
  * 客户端支持防止CSRF
  * 提供了一些并发请求的接口

* http 2.0有哪些特性

  * 增加了二进制格式
  * 多路复用
  * header压缩
  * 服务端推送

* 浏览器的点击事件阶段
  capture -> dom -> propagation

* html css js分别干什么的
* 行内元素和块级元素的区别
* img是行内元素还是块级元素
    img、input属于行内替换元素。
* css position fixed和absolute的区别
* css画三角形
变量有几种类型

* 如何区分typeof和instanceof的区别
es5继承
闭包
React生命周期
React父子组件
* setState是同步还是异步

  setState本身并不是异步，只是因为react的性能优化机制体现为异步。在react的生命周期函数或者作用域下为异步，在原生的环境下为同步。

  因为每次调用setState都会触发更新，异步操作是为了提高性能，将多个状态合并一起更新，减少re-render调用。

第二题
   合并两个有序数组
第三题
了解的排序算法
讲一下快排
时间复杂度
第四题

假设有n个人， 标号为1-n， 从第一个人开始计数，到第k个人出列， 随后从第k+1个重新。重新计数， 到第k再出列。 直至剩下最后一个人。 问最后剩下的人的编号


第五题

假如技术团队共有50人， 其中会C语言有40人， 会GO有42人， 会JS有32人，问
同时会这三种语言的至少有多少人
