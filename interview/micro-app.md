1. turbopack rspack 不支持
2. vite基本只能在iframe沙箱里进行，vite构建script的type为module，导致无法拦截location操作。
3. a tag下载有问题，需要侵入child app写成blob形式；只能使用iframe沙箱
4. 要浸入式的修改子应用，window.__MICRO_APP__ 修改子应用
5. 子应用回调很蠢， `window.microApp.setGlobalData({name: 'jack'})`
6. local模式很难调试
   
* 无界方案其实也挺好的，但是社区不活跃，好久没更新了。不敢用。


为什么不选乾坤？
 
qiankun pros
* html entry 的方式引入子应用，相比 js entry 极大的降低了应用改造的成本；

最终选择的microApp，原因如下：
* js 沙箱虽好，但是没有iframe沙箱保险
* qiankun 适配成本比较高，工程化、生命周期、静态资源路径、路由等都要做一系列的适配工作；
* qiankun是以注册路由的方式，将路由与子应用关联起来，而microApp是以组件的形式
* 新应用，我希望有一部分是通过vite来启动项目，qiankun和microApp都支持，不过qiankun需要一个社区的插件，并且不支持环境变量（此处未论证，官网有说明），而microApp虽然对vite项目有不少配置，不过支持功能较全面

* webpack 5 module federation直接被淘汰，我们下游没有用webpack 5的应用
* single spa直接淘汰，需要注册js，我们下游服务是handlebar的技术栈。而且不支持vite