这个是我在Coupang Hackathon比赛里的一个项目，最后成功在我们部门里上线了。
我们前端开发中需要配置多语言。传统的方式是我们会给不同改语言准备一份json文件，生产中我们会打包到一个js文件中发布到线上。但我们发现了传统模式在coupang开发中的痛点：
1. 多语言文本对开发人员来说是一个负担，无法校验文本是否正确
2. 更改多语言信息都需要重新部署服务器，需要一天的时间
3. 寻找翻译人员是额外的成本

之后我们想到了一个方法，就是把翻译内容和代码进行分离。开发人员只需要维护一个英语版本的json文件，然后在翻译平台集成open AI，生成其他多语言文本；并支持实时修改。
具体实现就是在生产环境中，通过nginx动态地从S3 bucket上拉去相应的json文件即可。

---

This project is from my idea for the Coupang Hackathon event — a real-time translation platform. It ultimately secured third place. I then took the opportunity to implement this platform in our department's production environment.

Generally, in the front-end development, we needed to maintain multiple languages in different zone. The traditional approach was to prepare a separate JSON file for each language, which would then be bundled into a single JS file and deployed online. However, we discovered several pain points with this traditional method in Coupang's development:

* Multilingual text is a burden for developers, as they cannot verify the correctness of the texts.

* Updating multilingual information requires redeploying the server, which takes a day. We found that there are many ad hoc translation requests; in our department alone, we have about 20 each month.

* Finding translators incurs additional costs.
  
We came up with a solution to split the translation content from the code. Developers only need to maintain an English version of the JSON file. Then, by integrating OpenAI into a translation platform, we can generate other language texts and support real-time modifications.

The specific implementation involves dynamically pulling the corresponding JSON file from an S3 bucket in the production environment through Nginx.

This platform has reduced our department's developers' labor costs by 15 days per month, not to mention the savings for other related personnel.
We are now planning to promote this platform to other departments, hoping it will assist more Coupang employees.





