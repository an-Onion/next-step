虽然Coupang是一家成熟的电商企业，但是我们的选品平台还是一个运行在一个传统的人工审核模式里，各个业务线之间还是以excel的形式进行传递，效率极低。所以从去年起我们新研发了一个叫SIP的选品平台。

它帮助我们从韩国最大的搜索引擎naver上爬取商品信息，存入Hive。我们的SIP通过定期轮询Hive，将爬取的商品信息自动进行标签的对齐。标签包括商品分类、品牌、价格、库存、店铺、商品描述、商品图片、商品属性等。
打标签结束后，我们会进入人工审核阶段，称为dedupe。Dedupe阶段由PBI团队的三个角色参与，Operator、Inspector和Manager。
* Operator负责人工确认爬取的最新商品是否和coupang SDP上的商品为同一种商品。
* Inspector负责校验Operator的审核结果，
* Manager负责任务分配。
Dedupe结束进入Health Check阶段，该阶段由Manager负责检查商品信息是否完整，是否需要补充。
如果一切顺利，则进入Target Adjustment阶段。这个是有CoE team人工于coupang采购的商品进行校对，如果发现有新品则通知供应商是否有新品。
供应商收到邮件通知后，在VSSS上进行确认。如果供应商确有其新品，则填入采购价格等信息，并通知CoE团队。
CoE审核无误，即可通知供应商在Coupang上上架新品。

---
Although Coupang is a mature e-commerce company, our product selection platform still operates on a traditional manual review model, with various business lines communicating in Excel format, resulting in very low efficiency. Therefore, starting last year, we developed a new product selection platform called SIP.

SIP helps us to crawl product information from the largest Korean search engine, Naver, and store it in Hive. Our SIP automatically aligns the crawled product information and auto-tag by regularly polling Hive. Tags include product categories, brands, prices, inventories, stores, product descriptions, product images, and product attributes.

After the auto-taging is completed, we will enter the manual review stage, which is called "dedupe". The dedupe stage involves three roles in the PBI team: Operator, Inspector, and Manager.

* Operators are responsible for manually confirming whether the latest crawled products are the same as the products on Coupang SDP page. We call it cleasing product.
* Inspectors are responsible for verifying the Operator's review results.
* Managers are responsible for task allocation.

After cleansing, we get new target products, and enter the Health Check stage, where Managers are responsible for checking whether the product information is complete and whether there is a need to onboard those new product.

If everything goes well, Manager releases product to the Target Adjustment stage. This is where the CoE team manually double checks the products purchased from Coupang and notifies the supplier if there are new products.

Suppliers receive email notifications and confirm them on VSSS. If the supplier has new products, they will fill in purchase price information and notify the CoE team.

Once the CoE approves it, the supplier can be notified to list the new products on Coupang.