# A company

## 一面

*前五十分钟聊项目*：

* 可以自己画个白板
* 微前端知识匮乏
* 为什么要用shadcn-ui
* SIP的业务要更加熟悉一点
* nextjs积极主动

*十分钟coding*

array flat，但是缺少了负数的判断，太失误了。

---

## 看准网

### 设计

* 酒店前台
* 问设计一个数据结构来方便查找信用卡信息

一亩三分地

* 设计一个洗牌游戏
* GPS追踪器
* 如何实现Slack并且如何scale up
* Booking.com

### 八股 

- Q：1、自我介绍
  1 条回答
  Q：2、为什么选那个简单的编程题？那做一下昨天另一道笔试题吧编程题：有一堆豆子，若 3 个一排，最后一堆缺 1 个；若 5 个一排，最后一排缺 2 个；若 7 个一排，最后一排缺 5 个；若 9 个一排，最后一排缺 3 个；若 13 个一排，最后一排缺 1 个；若 17 个一排，最后一排缺 4 个。猜一猜，一共多少颗豆子？
  1 条回答
- Q：3、你觉得昨天第二道编程题有没有什么问题？你有没有优化的地方？编程题：在一个控制台上运行程序，输入三个数，判断是否是三角形，以及构成什么样的三角形，并打印出来
  1 条回答
- Q：4、对上面三角形编程题设计测试用例？有效性：无效性：输入空格、字符、中文、英文、长度、是否整数、是否正数、负数、
- 0 条回答
  Q：5、你觉得测试开发是什么？
  0 条回答
- Q：6、讲一讲覆盖率测试？你们项目总的覆盖率是多少？这个数据是怎么得到的？统计的是分支还是条件覆盖？
  1 条回答
- Q：7、从上到下背一下 ios 七层模型，再从下到上背一遍
  0 条回答
- Q：8、有没有了解我们公司的产品

---

## 八股

### 第二次打开一个网页比第一次快， 为什么 （cookie)

第二次打开网页比第一次快的原因主要有以下几个：

- 缓存：浏览器会将网页的静态资源（如图片、CSS 和 JavaScript 文件）缓存到本地，第二次访问时直接从缓存中加载，而不是重新下载。

- DNS 缓存：浏览器和操作系统会缓存域名解析结果，第二次访问时可以快速获取 IP 地址而无需重新查询 DNS 服务器。

- 连接复用：浏览器在第一次访问时可能会建立与服务器的连接，第二次访问时可以重用这个连接，减少建立连接的时间。

- 预加载和预读：一些浏览器会在后台预加载用户可能会访问的资源，降低加载时间。

- 本地存储：一些网页会使用本地存储（localStorage 或 sessionStorage）保存用户的数据，避免重复请求服务器。

这些因素共同作用，导致第二次访问网页的速度明显加快。

### 域名到 IP 地址的过程

从浏览器输入域名到获取 IP 地址的过程主要包括以下几个步骤：

- 缓存检查：浏览器首先检查本地 DNS 缓存。如果缓存中已有对应域名的 IP 地址，则直接使用该地址。

- 操作系统缓存：如果浏览器缓存没有，接着会查询操作系统的 DNS 缓存。

- DNS 查询：如果仍然没有，浏览器发送 DNS 查询请求到配置的 DNS 服务器。这个请求通常是通过 UDP 协议发送到 53 端口。

- 递归查询：DNS 服务器接收到请求后，可能需要进行递归查询。如果它没有缓存该域名的结果，它会首先查找根 DNS 服务器。

- 根 DNS 服务器：根 DNS 服务器会提供 TLD（顶级域名，例えば .com、.org）的 DNS 服务器的地址。

- TLD DNS 服务器：请求会被发送到相应的 TLD DNS 服务器，它会返回权威 DNS 服务器的地址。

- 权威 DNS 服务器：最后，查询会被发送到域名的权威 DNS 服务器，获取实际的 IP 地址。

- 返回结果：权威 DNS 服务器返回 IP 地址给 TLD 服务器，TLD 服务器缓存结果并返回给最初请求的 DNS 服务器，再由 DNS 服务器返回给浏览器。

- 使用 IP 地址：浏览器收到 IP 地址后，可以用它来与目标服务器建立连接。

以上步骤涉及多个缓存和服务器，以提高效率并减少延迟。

### ipv4, ipv6

IPv4 和 IPv6 之间的主要区别如下：

- 地址长度
  - IPv4：使用 32 位地址，通常以点分十进制表示（例如 192.168.1.1），总共可以提供约 43 亿个地址。
  - IPv6：使用 128 位地址，以冒号分隔的十六进制表示（例如 2001:0db8:85a3:0000:0000:8a2e:0370:7334），可以提供极其庞大的地址空间。
- 地址空间
  - IPv4：地址空间有限，已接近耗尽，导致需要使用地址转换和网络地址转换（NAT）等技术。
  - IPv6：几乎无限的地址空间，能够为每个设备分配唯一地址，支持未来的互联网设备增长。
- 配置
  - IPv4：常需要手动配置或使用 DHCP（动态主机配置协议）。
  - IPv6：支持自配置（Stateless Address Autoconfiguration, SLAAC），可以自动获取地址和配置。
- 安全性
  - IPv4：安全性依赖于应用层，原生支持较少。
  - IPv6：设计时考虑了安全性，内置了 IPsec 用于加密和身份验证。
- 头部结构
  - IPv4：头部较复杂，包含多个可选字段，解析速度较慢。
  - IPv6：头部简化，结构更清晰，减少了路由器的处理负担。
- 广播
  - IPv4：支持广播（Broadcast）通信方式。
  - IPv6：不支持广播，使用多播（Multicast）和任播（Anycast）替代。

总体而言，IPv6 是为了解决 IPv4 的不足而设计的，提供了更大的地址空间和更好的安全性，同时提升了网络配置的效率。

### 进程和线程的区别

进程和线程的区别主要体现在以下几个方面：

1. 定义
   进程：是操作系统分配资源的基本单位，每个进程都有自己的地址空间、内存、数据和其他资源。
   线程：是进程中的一个执行单元，多个线程可以共享同一个进程的资源。
2. 资源管理
   进程：拥有独立的内存空间、文件描述符和系统资源，进程间通信较复杂。
   线程：共享同一进程的内存和资源，线程间通信更为高效。
3. 创建和销毁
   进程：创建和销毁的开销较大，因为需要完整地复制资源。
   线程：创建和销毁的开销较小，因为线程共享进程的资源。
4. 调度
   进程：操作系统调度以进程为单位，调度开销相对较高。
   线程：操作系统调度以线程为单位，调度更加灵活和高效。
5. 内存隔离
   进程：进程之间内存隔离，安全性高，互不影响。
   线程：线程间没有内存隔离，易于产生数据竞争和安全问题。
6. 使用场景
   进程：适用于对资源要求较高的应用，如服务器、数据库等。
   线程：适用于需要高并发、实时响应的应用，如用户界面、网络连接等。

进程是资源分配的基本单位，而线程是执行的基本单位。进程提供了更多的安全性和稳定性，而线程则在性能和资源利用上更高效。

### 进程间通信方式

进程间通信（IPC）是指在不同进程之间传递数据的方法。常见的进程间通信方式包括：

1. 管道（Pipe）
   描述：一种半双工的通信方式，用于父子进程间。
   优点：简单易用。
   缺点：仅限于具有亲缘关系的进程。
2. 命名管道（Named Pipe）
   描述：与管道类似，但可以在无亲缘关系的进程间使用。
   优点：可以在不同进程间进行通信。
   缺点：相对较复杂。
3. 消息队列（Message Queue）
   描述：通过发送和接收消息来实现通信，支持优先级。
   优点：可以在任意进程间发送消息。
   缺点：管理和性能较复杂。
4. 共享内存（Shared Memory）
   描述：允许多个进程访问同一块内存区域。
   优点：速度快，因为数据不需要复制。
   缺点：需要额外的同步机制以避免数据竞争。
5. 信号量（Semaphore）
   描述：用于控制多个进程对共享资源的访问，通常与共享内存结合使用。
   优点：高效管理并发访问。
   缺点：实现复杂，容易产生死锁。
6. 套接字（Socket）
   描述：用于网络通讯，支持本地和远程进程之间的通信。
   优点：灵活性高，可以在不同主机或进程间使用。
   缺点：开销相对较大。
7. 远程过程调用（RPC）
   描述：允许在不同地址空间中的进程调用彼此的过程。
   优点：简化网络交互。
   缺点：需要处理网络延迟和故障。
8. 文件映射（Memory-Mapped Files）
   描述：将文件映射到进程的地址空间，使得多个进程可以共同访问。
   优点：适合大规模数据的传递。
   缺点：需要处理文件的同步问题。
   总结

不同的进程间通信方式在效率、复杂性和适用场景上各有优缺点，选择合适的通信方式取决于具体的应用需求和环境。

- http get 和 post 的区别

HTTP GET 和 POST 的主要区别如下：

1. 请求方式
   GET：
   用于请求数据，主要用于获取资源。
   POST：
   用于提交数据，通常用于提交表单或上传文件。
2. 参数传递
   GET：
   参数通过 URL 进行传递，通常在 URL 后以查询字符串的形式出现（例如 example.com/page?param1=value1&param2=value2）。
   POST：
   参数通过请求体（body）传递，数据不显示在 URL 中，适合发送大量数据。
3. 数据量限制
   GET：
   URL 长度有限制（通常约 2048 个字符），不适合传递大量数据。
   POST：
   数据量较大，受限于服务器配置，适合发送较大或复杂的数据。
4. 安全性
   GET：
   不安全，参数暴露在 URL 中，容易被缓存和记录，适合获取不敏感数据。
   POST：
   相对较安全，数据不显示在 URL 中，但仍需使用 HTTPS 加密传输敏感信息。
5. idempotent
   GET：
   是幂等的，重复请求不会改变数据状态。
   POST：
   不是幂等的，重复请求可能导致数据被重复添加或修改。
6. 缓存
   GET：
   浏览器和代理可以缓存 GET 请求的响应，提升效率。
   POST：
   通常不缓存，必须每次发送请求并处理响应。
   总结
   GET 主要用于获取数据，而 POST 主要用于提交数据。选择使用哪种方式应根据实际需求和数据性质量进行选择。

### content-type 有哪些

HTTP 头中的 Content-Type 指定了请求或响应体的媒体类型。常见的 Content-Type 包括：

1. 文本类型
   text/plain：普通文本。
   text/html：HTML 文档。
   text/css：CSS 样式表。
   text/javascript：JavaScript 脚本（现在通常使用 application/javascript）。
2. 应用程序类型
   application/json：JSON 格式数据。
   application/xml：XML 格式数据。
   application/x-www-form-urlencoded：表单数据（使用于 POST 请求时）。
   multipart/form-data：用于上传文件的表单数据。
3. 图像类型
   image/jpeg：JPEG 图像。
   image/png：PNG 图像。
   image/gif：GIF 图像。
4. 音频和视频类型
   audio/mpeg：MP3 音频。
   video/mp4：MP4 视频。
   video/x-msvideo：AVI 视频。
5. 二进制类型
   application/octet-stream：任意二进制数据，通常用于文件下载。
6. 缓存行为类型
   application/cache-manifest：用于离线应用缓存。
7. 字体类型
   font/woff：Web 字体（WOFF）。
   font/woff2：Web 字体（WOFF2）。
   font/ttf：TrueType 字体。
   总结
   Content-Type 指定了传输内容的格式，帮助接收方正确解析和处理数据。选择合适的类型对于数据的处理至关重要。

### ajax 和 axios 区别

AJAX 和 Axios 的主要区别如下：

1. 定义
   AJAX：是一种在不重新加载整个网页的情况下与服务器交换数据的技术，通常是通过 XMLHttpRequest 对象实现。
   Axios：是一个基于 Promise 的 HTTP 客户端，用于浏览器和 Node.js，封装了 AJAX 请求的细节，使得请求更加简洁和易于使用。
2. 语法与使用

   - AJAX：使用较为复杂，需要手动创建 XMLHttpRequest 对象，设置请求参数和处理响应。

     ```js
     var xhr = new XMLHttpRequest();
     var xhr = new XMLHttpRequest();
     xhr.open("GET", "url", true);
     xhr.onload = function () {
       if (xhr.status === 200) {
         console.log(xhr.responseText);
       }
     };
     xhr.send();
     ```

   - Axios：语法简洁，支持 Promise，使用更容易，支持请求和响应拦截器。

     ```js
     axios
       .get("url")
       .then((response) => {
         console.log(response.data);
       })
       .catch((error) => {
         console.error(error);
       });
     ```

3. 支持的功能

   - AJAX：主要关注基础的网络请求，功能较为简单。需要手动处理 JSON 数据解析。
     Axios：自动将 JSON 数据解析为对象，支持请求和响应拦截、取消请求、跨域请求、默认配置等特性，功能更强大。

4. 兼容性
   AJAX：由于使用内置的 XMLHttpRequest，对所有浏览器的支持较好。
   Axios：由于基于 Promise，IE11 及以下版本不支持，需要引入 polyfill。
5. 错误处理

   - AJAX：需要手动检查和处理 HTTP 状态码。
   - Axios：提供统一的拒绝原因，可以通过 catch 方法处理错误。

AJAX 是一种技术，Axios 是一个库。Axios 基于 AJAX 提供了更简洁和功能丰富的使用体验，使得处理 HTTP 请求更加方便。

### http 2.0 有哪些特性

HTTP/2.0 具有以下主要特性：

1. 二进制分帧: 将所有数据分解为更小的消息和流，然后以二进制格式传输，提高了数据处理效率。
2. 多路复用: 支持多个请求和响应在同一个连接上并行发送，避免了 HOL（Head-of-Line）阻塞，提高了网络利用率。
3. 服务器推送: 允许服务器主动向客户端推送资源，无需请求，提高了加载速度。
4. 头部压缩: 使用 HPACK 算法压缩头部信息，减少数据量，降低延迟。
5. 解流化: 消息可以独立于顺序进行处理，提升了请求的灵活性和性能。
6. 连接优先级L 允许客户端对请求的优先级进行设置，以实现更智能的资源调度。
7. 支持 HTTPS: 强调安全性，HTTP/2 并非强制要求使用 TLS，但大多数浏览器仅在 HTTPS 上实现 HTTP/2。

HTTP/2.0 的这些特性旨在提升性能和效率，改善用户体验，特别是在高延迟或低带宽的环境中。

### 浏览器的点击事件阶段

浏览器的点击事件通常经历以下几个阶段：

1. 捕获阶段（Capturing Phase）
   事件从 window 对象开始，逐层向下传递到目标元素。可以通过设置事件监听器的 useCapture 参数为 true 来捕获事件。
2. 目标阶段（Target Phase）
   事件到达目标元素，此时事件可以被处理。
3. 冒泡阶段（Bubbling Phase）
   事件从目标元素逐层向上冒泡回到 window 对象。可以通过设置事件监听器的 useCapture 参数为 false（或省略）来响应冒泡事件。

点击事件的处理顺序是：捕获阶段 → 目标阶段 → 冒泡阶段。这种机制使得开发者可以方便地处理事件流和响应用户交互。

### html css js 分别干什么的

HTML、CSS 和 JavaScript 是构建网页的三大核心技术，分别有各自的功能：

1. HTML（超文本标记语言）
   功能：用于定义网页的结构和内容。
   作用：
   创建页面的骨架，定义文本、图片、链接、表格等元素。
   通过标签（如 <h1>、<p>、<img> 等）描述内容的含义。
2. CSS（层叠样式表）
   功能：用于控制网页的外观和布局。
   作用：
   设置颜色、字体、间距、背景等样式。
   创建响应式设计，适配不同屏幕。
   通过选择器和规则定义样式，使页面更美观。
3. JavaScript
   功能：用于实现网页的交互和动态效果。
   作用：
   操作 HTML 和 CSS 动态修改内容和样式。
   响应用户操作（如点击、输入）并处理事件。
   与服务器进行通信（如 AJAX），更新数据而无需刷新页面。
总结
* HTML 负责结构和内容，
* CSS 负责样式和布局，
* JavaScript 负责行为和交互。

### 行内元素和块级元素的区别

行内元素和块级元素的主要区别如下：

1. 显示方式
   块级元素：占据整行，默认情况下在前后自动换行。示例：<div>、<p>、<h1>、<ul>。
   行内元素：只占据其内容的宽度，不引起换行。示例：<span>、<a>、<img>、<strong>。 

2. 定义结构

   块级元素：可以包含其他块级元素和行内元素，通常用于构建页面布局。
   行内元素：只能包含其他行内元素，不能包含块级元素。 
3. CSS 属性
   块级元素：可以设置宽度和高度（width、height），通常会响应这些属性。
   行内元素：默认情况下不支持设置宽度和高度，只有 padding、margin 等属性会影响布局。 
4. 用途
   块级元素：适用于构建网页的主要结构，如分区、段落等。
   行内元素：适合用于文本的修饰和小范围的内容，如链接、高亮等。

块级元素和行内元素在显示方式、结构、CSS 属性和用途上各有特点，合理使用可以提高网页的可读性和布局效果。

### img 是行内元素还是块级元素

<img> 标签是行内元素。它只占据其内容的宽度，不会引起换行。虽然可以通过 CSS 设置其 display 属性为块级元素（如 display: block），但默认情况下它是行内元素。

### css position fixed 和 absolute 的区别

position: fixed 和 position: absolute 之间的主要区别如下：

1. 定位参考
   position: fixed：相对于浏览器窗口定位，元素的位置不会随页面滚动而改变。
   position: absolute： 相对于最近的定位父元素（即具有 position: relative、absolute、或 fixed 的元素）定位。如果没有找到，则相对于 <html> 元素定位。
2. 滚动行为
   position: fixed：始终固定在视口内，滚动页面时不会移动。
   position: absolute：随页面滚动，可能会与普通文档流具有不同的滚动行为。
3. 用途
   position: fixed：常用于创建弹出菜单、固定导航栏等不随页面滚动而变化的元素。
   position: absolute：用于创建相对位置的元素，常用于布局中的组件，如工具提示、下拉菜单等。

fixed 元素相对于浏览器窗口固定，absolute 元素相对于其最近的定位父元素定位，滚动行为和用途也有所不同。

### css 画三角形

要用 CSS 画一个三角形，可以利用边框特性。以下是一个简单的例子，绘制一个向上的三角形：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Triangle</title>
    <style>
      .triangle {
        width: 0;
        height: 0;
        border-left: 50px solid transparent;
        border-right: 50px solid transparent;
        border-bottom: 100px solid blue;
      }
    </style>
  </head>
  <body>
    <div class="triangle"></div>
  </body>
</html>
```

解释
* width 和 height：设置为 0，使元素本身没有宽高。
* border-left 和 border-right：设置为透明，形成三角形的两侧。
* border-bottom：设置为有颜色，形成三角形的底边。

调整边框的宽度和颜色，可以创建不同方向和样式的三角形。

### 变量有几种类型

JavaScript 中的变量主要有以下几种数据类型：

原始数据类型（Primitive Types）
* String：表示文本，例如 "Hello"。
* Number：表示数字，包括整数和浮点数，例如 42 或 3.14。
* Boolean：表示真或假，只有两个值：true 和 false。
* Undefined：表示一个未定义的值，默认值为 undefined。
* Null：表示一个空值，使用 null 表示。
* Symbol：表示唯一且不可变的值，通常用于对象属性的标识。
* BigInt：用于表示大于 Number 的整数，使用 BigInt 类型，例如 123n。
对象数据类型（Object Type）
* Object：用于表示一个复杂的数据结构，是键值对的集合。
* Array：特殊类型的对象，用于表示一个序列的值。
* Function：也是一种对象，可以被调用。

总结
JavaScript 中的变量类型可以分为原始数据类型和对象数据类型，总共包括：

* 原始类型：String, Number, Boolean, Undefined, Null, Symbol, BigInt
* 对象类型：Object, Array, Function 等

### 如何区分 typeof 和 instanceof 的区别

typeof 和 instanceof 是 JavaScript 中用于类型检查的两种不同方式，它们的区别如下：

1. typeof
   用途：用于检查变量的基本数据类型。
   返回值：返回一个表示变量类型的字符串，例如：

   ```js
   typeof "hello" 返回 "string"
   typeof 123 返回 "number"
   typeof true 返回 "boolean"
   typeof undefined 返回 "undefined"
   typeof null 返回 "object"（这是一个历史遗留问题）
   typeof [] 返回 "object"
   typeof {} 返回 "object"
   typeof function() {} 返回 "function"
   ```

2. instanceof
   用途：用于检查一个对象是否是某个构造函数的实例。
   返回值：返回一个布尔值（true 或 false）。
   示例：

   ```js
   class Person {}
   const john = new Person();

   console.log(john instanceof Person); // true
   console.log(john instanceof Object); // true
   ```

总结
* 使用 typeof 进行基本数据类型检查。
* 使用 instanceof 检查对象是否属于特定类或构造函数的实例。

### es5 继承

在 ES5 中，继承通常通过构造函数和原型链实现。以下是一个常见的方式：

示例：使用构造函数和原型链实现继承

```js
// 父构造函数
function Parent(name) {
  this.name = name;
}

Parent.prototype.sayHello = function () {
  console.log("Hello, " + this.name);
};

// 子构造函数
function Child(name, age) {
  Parent.call(this, name); // 调用父构造函数
  this.age = age;
}

// 继承父类的方法
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child; // 修复构造函数指向

// 添加子类的方法
Child.prototype.sayAge = function () {
  console.log("I am " + this.age + " years old.");
};

// 使用
var child = new Child("Alice", 10);
child.sayHello(); // 输出：Hello, Alice
child.sayAge(); // 输出：I am 10 years old.
```

解释
* 父构造函数：Parent 定义了一个基本构造函数和一个方法。
* 子构造函数：Child 调用 Parent 构造函数，以确保父类属性被初始化。
* 继承原型：通过 Object.create 方法创建一个继承自 Parent.prototype 的新对象，并将其赋给 Child.prototype。这使得 Child 的实例可以访问 Parent 的方法。
* 修复构造函数指向：将 Child.prototype.constructor 指回 Child，以保证实例的构造函数正确。
这种方式简单有效，但需要注意继承的细节，比如构造函数的调用和修复指向。

### 闭包

闭包是 JavaScript 中一个重要且强大的概念，它指的是一个函数可以“记住”并访问它的词法作用域，即使在其外部环境中执行时也可以访问。

闭包的主要特点:
* 作用域：闭包允许函数访问其外部函数的变量。即使外部函数已经执行完毕，内部函数仍然可以访问这些变量。
* 持久化的环境：当外部函数返回后，其局部变量并不会被销毁，而是被保存在闭包内部的作用域中。
* 保护变量：通过闭包，可以创建私有变量，这些变量只能通过定义在闭包内部的函数进行访问和修改。
示例
下面是一个简单的闭包示例：

```js
function createCounter() {
    let count = 0; // 外部函数的局部变量

    return function() { // 返回一个内部函数（闭包）
        count++; // 访问外部函数的变量
        return count;
    };
}

const counter = createCounter();

console.log(counter()); // 输出：1
console.log(counter()); // 输出：2
console.log(counter()); // 输出：3
```

说明
* 在 createCounter 函数中，count 是外部函数的局部变量。
* 内部返回的匿名函数形成了一个闭包，它可以访问和修改 count。
* 即使 createCounter 已经执行完毕，count 的值仍然会被保存，后续调用 counter() 时可以访问到这个值。
应用场景
* 数据封装：创建私有变量，防止外部直接访问和修改。
* 函数工厂：使用闭包生成具有某些预配置的函数。
* 事件处理：可以用于保存事件处理过程中的状态信息。
闭包是 JavaScript 的一项重要特性，对于理解函数的作用域和管理状态非常关键。

### React 生命周期

React 生命周期指的是组件从创建到销毁的整个生命周期过程。它分为几个关键阶段，每个阶段都有特定的生命周期方法，允许开发者在不同时间点执行代码。

1. 挂载（Mounting）
   这是组件被创建并插入到 DOM 中的阶段。主要生命周期方法包括：

   constructor: 构造函数，初始化状态。
   componentDidMount: 组件挂载后立即调用，适合进行 API 请求或设置订阅。 

2. 更新（Updating）
   当组件状态或属性发生变化时，组件将重新渲染。主要生命周期方法包括：

   shouldComponentUpdate: 决定组件是否需要重新渲染，返回 true 或 false。
   render: 渲染组件 UI。
   componentDidUpdate: 组件更新后调用，可以处理依赖于之前状态的操作。 

3. 卸载（Unmounting）
   组件从 DOM 中移除的阶段。主要生命周期方法包括：

   componentWillUnmount: 组件卸载前调用，适合清理订阅或定时器。 

4. 错误处理（Error Handling）
   当子组件抛出错误时，可以通过以下方法捕获错误：
   componentDidCatch: 捕获子组件的错误，处理错误并更新状态。

小结
在 React 组件的生命周期中，了解这些生命周期方法的性质和用途，有助于更好地管理状态、进行网络请求及优化性能。随着 React Hooks 的引入，许多功能的实现得到简化，但生命周期概念仍然适用。

### React 父子组件

在 React 中，父子组件之间传值主要通过以下几种方式实现：

1. 通过 Props
   父组件可以通过 props 将数据传递给子组件。

   示例：

   ```js
   // 父组件
   function Parent() {
   const message = "Hello from Parent!";
   return <Child message={message} />;
   }

   // 子组件
   function Child(props) {
   return <div>{props.message}</div>;
   }
   ```

2. 通过回调函数
   父组件可以将一个函数作为 props 传递给子组件，子组件调用这个函数来传递数据回父组件。

   示例：

   ```js
   // 父组件
   function Parent() {
   const handleMessage = (msg) => {
      console.log("Received from child:", msg);
   };

   return <Child sendMessage={handleMessage} />;
   }

   // 子组件
   function Child(props) {
   return (
      <button onClick={() => props.sendMessage("Hello from Child!")}>
         Send Message
      </button>
   );
   }
   ```

3. 上下文（Context）
   如果多个层级的组件需要共享数据，可以使用 React 的 Context API。

   示例：

   ```js
   const MyContext = React.createContext();

   // 父组件
   function Parent() {
   const value = "Hello from Context!";
   return (
      <MyContext.Provider value={value}>
         <Child />
      </MyContext.Provider>
   );
   }

   // 子组件
   function Child() {
   const value = React.useContext(MyContext);
   return <div>{value}</div>;
   }
   ```

4. 状态管理库
   在复杂的应用中，可以使用 Redux、MobX 或其他状态管理库来在组件之间共享状态。

总结
* Props 用于单向数据流。
* 回调函数 允许子组件向父组件传递数据。
* Context API 用于共享状态。
* 状态管理库 适合大型应用的数据管理。
这几种方式结合使用，可以灵活地在 React 应用中处理父子组件之间的通信。

### setState 是同步还是异步

setState 是一个 异步 操作。这意味着当你调用 setState 时，状态的更新并不会立即反映在组件的状态中。相反，React 会在事件处理程序结束后批量更新状态。

关键点
异步特性：setState 可能在多个状态更新中合并操作，以提高性能。

状态依赖：如果你在 setState 中依赖于当前状态，应该使用一个函数作为参数：

```js
this.setState((prevState) => ({
    count: prevState.count + 1
}));

回调函数：你可以提供一个回调函数，在状态更新完成后执行：

this.setState({ count: newCount }, () => {
    // 这里的 this.state.count 是更新后的状态
});
```

总之，依赖于 setState 的立即结果是不可靠的，建议使用回调函数来处理状态更新后的逻辑。

## 第二题

合并两个有序数组

## 第三题

了解的排序算法
讲一下快排
时间复杂度

## 第四题

假设有 n 个人， 标号为 1-n， 从第一个人开始计数，到第 k 个人出列， 随后从第 k+1 个重新计数， 到第 k 再出列。 直至剩下最后一个人。 问最后剩下的人的编号

是的，可以使用数学方式直接计算约瑟夫问题的结果，通常通过递归公式推导而来。对于 n 个人，从第一个人开始，每次出列第 k 个人，最后剩下的人的位置可以通过以下公式得出：

公式推导
基例：

当 n = 1，最后剩下的人是位置 0（数组下标）。
递归关系：

对于 n > 1，可以使用以下公式：
J(n,k)=(J(n−1,k)+ k)mod n
这里的 J(n, k) 表示 n 个人，每次出列第 k 个人出最后剩下的位置。最终结果需要加 1，以转换到 1 基的编号。

直接计算
为了计算最后一个人的位置，可以将上述递归关系转化为循环形式，如下：

```js
function josephus(n, k) {
    let position = 0; // 从0开始
    for (let i = 2; i <= n; i++) {
        position = (position + k) % i;
    }
    return position + 1; // 转换为1从标号
}

// 示例用法
console.log(josephus(7, 3)); // 输出最后剩下的人的编号
```

总结
使用公式通过循环方法可以高效地计算最后存活的人的编号，避免了递归的开销。
直接计算的复杂度是 O(n)，对于大数据量依然合理。

## 第五题

假如技术团队共有 50 人， 其中会 C 语言有 40 人， 会 GO 有 42 人， 会 JS 有 32 人，问同时会这三种语言的至少有多少人（字节跳动面经）


复盘：

* 第一面：拍平数组
* 第二面：deepcopy
* 第三面：
  * 国际化解决方案，多语言如何保证置信度？不可能给一百多个地区找一百多个po吧
  * 当前端资源过期时，如何保证用户体验？
  * micro-front的终极架构是怎么样的？
  * 如何选取UI component的技术栈
