# JS相关问题

## Angular 1 和 2的区别

  1. 编程语言的不同。angular1.x 是 JavaScript，可以直接在浏览器中运行，而 angular2 是 TypeScript,只有经过编译后才能在浏览器中运行，所以它必须使用构建工具。
  2. 控制器 Controller 的改变。在 1 中它是非常重要的，用于封装视图控制逻辑，而 2 中这个，开发模式改为了模块化开发，去除了它。
  3. 作用域 Scope。在 2 中没有\$Scope,它使用 zone.js 来记录监测变化；
  4. 指令。在 2 中指令使用符号，例如：ngFor、\*ngIf；指令不能直接嵌套使用，所以它增加了一个`<ng-container></ng-container>`标签来包裹指令。
  5. 过滤器。1 用：filter。在 2 中名字改为了 Pipe,增加 asyc、slice、parcent。
  6. 依赖注入。在 2 中只有一个依赖注入机制。
  7. 组件生命周期。1 中没有明确的生命周期机制。在 2 中有精心设计的生命周期
  8. 双向数据绑定。[(ngModel)]的写法替换了 ng-model。
