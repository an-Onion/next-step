# 马 聪 - Web 前端开发

::: left
技术博客: [https://tinyurl.com/yffrrn4j](https://tinyurl.com/yffrrn4j) （100余篇）

教育背景: 浙江大学计算机硕士

工作经历: 2015至今，Works Applications（日本最大的ERP企业）

Mobile: 156-5763-5423

Email: congma@outlook.com
:::

::: right

:::

## Skill

- 编程语言: Javascript, TypeScript, CSS, UML
- 前端技术: Vue2, React, Graphql，Storybook
- 后端技术: Dynamodb, Express, Nuxt, Node-canvas
- 构建工具: yarn, eslint, webpack, husky, code-pipeline
- 相关 SaaS 服务: S3, Lambda, Api Gateway, Cognito, WAF, CloudWatch

## 工作经历

### 资深前端开发 （2021 至今）

主要负责重构了一个名为 HUE Drive 的云端存储服务。我们基于绞杀者模式，逐步地将该单体应用迁移到了以 AWS 云服务（ECS, Lambda, S3, Dynamodb 等）为基础的微服务架构上。最终使成本降低了 90%。

**_我的工作：_**

- 将前端页面从基于 Tymeleaf 的后端渲染框架重构为 React SPA (TypeScript + ReactJ + material-ui)
- 增加了 BFF 层以适配遗产系统和新系统 API 请求 (lambda + Node + Graphql)
- 参与了集成 google drive 和 box 的架构设计
- 集成了基于 jwt, OAuth 2.0 和 SAML 的单点登录功能

### 前端 team leader（2018 - 2020）

从零开始设计开发了一款名为 HUE Recruiting 的招聘软件，为一百余家万人级日本企业提供全流程的招聘服务，包括 JD、面试、实习，入职导入等等。系统的主要技术栈是 Spring Cloud、Lambda、VueJS、PostgreSql 和 Redis。

**_我的工作:_**

- 参与设计了整个 HUE Recruiting 的系统架构
- 领导前端团队开发 (Vue2, Vuetify)
- 设计前端业务流程 (UML)
- 搭建了前端项目的 CI/CD 流程 (AWS codepipeline)
- Code Review 并执行前端工程化
- 指导和培训新人

### 全栈开发（2015 - 2017）

自研开发了一款名为 Company Updater 的升级工具，用于替代传统 ERP 软件手工升级的方式。我们通过桥接技术，让 Company Updater 联通内网服务和 SaaS 应用，实现产品的自动下载和自动升级。最终解放了公司一百多人的手动安装成本。

**_我的工作:_**

- 负责前端管理员页面和资源搜索页面的开发 （Angular 1 + Bootstrap ）
- 设计实现了基于 AWS EC2 + S3 的资源站，用于下载各类 ERP 产品 (grunt, Jenkins)
- 实现了客户端控制器以联通 SaaS 服务，并执行安装命令 (Spring, Sqlite)
