1. turbopack rspack 不支持
2. vite基本只能在iframe沙箱里进行，vite构建script的type为module，导致无法拦截location操作。
3. a tag有问题，只能使用iframe沙箱
4. 要浸入式的修改子应用，window.__MICRO_APP__ 修改子应用
5. 子应用回调很蠢， `window.microApp.setGlobalData({name: 'jack'})`
6. local模式很难调试
   


为什么不选乾坤？

最终选择的microApp，原因如下：

* qiankun是以注册路由的方式，将路由与子应用关联起来，而microApp是以组件的形式
* 新应用，我希望有一部分是通过vite来启动项目，qiankun和microApp都支持，不过qiankun需要一个社区的插件，并且不支持环境变量（此处未论证，官网有说明），而microApp虽然对vite项目有不少配置，不过支持功能较全面

