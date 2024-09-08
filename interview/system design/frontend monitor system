# 前端监控

前端监控包括行为监控、异常监控、性能监控等

一般而言，一个监控系统，大致可以分为四个阶段：日志采集、日志存储、统计与分析、报告和警告。

## Sentry异常捕获平台

Error tracking services Sentry and Bugsnag provide official integrations using this option.
腾讯BetterJS
ravenjs？？

## WebFunny


## 压缩后的单行文件如何定位源码错误？

通过在后台上传你的sourceMap，甚至上传你的源代码，选择压缩方式，平台本身就可以帮你产生对应的sourceMap。
再通过转换，把单行的行和列转换成源码的行和列就可以了。而这些都可以做成全自动的，你只需要把源代码文件拖进web界面即可~！

```Javascript
var fs = require('fs');
var sourcemap = require('source-map');
var smc = new sourcemap.SourceMapConsumer(fs.readFileSync('./test.js.map','utf8'));
var ret = smc.originalPositionFor({line:1,column:105});
console.log(ret);
```


[0]: https://github.com/abruzzi/system-design-interview-fe