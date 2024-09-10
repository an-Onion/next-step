# Deep Dive

## BM

In Amazon, the BM team typically refers to the Business Management team, which focuses on strategic initiatives, project management, and operational efficiency across various functions. They often handle metrics, performance analysis, and work to optimize business processes.

## CoE

The CoE team stands for Center of Excellence. This team is established to provide leadership, best practices, and support in specific areas such as technology, operations, or specific business domains. CoE teams aim to drive innovation, enhance capabilities, and ensure organizational excellence by sharing expertise and resources across the company.

Both teams play crucial roles in Amazon's operations by enabling effective management and promoting best practices.

### PBI

In the context of Amazon, PBI typically stands for Product Backlog Item. It refers to individual entries or tasks in the product backlog, which is a prioritized list of features, fixes, and enhancements that are necessary for product development.

Key Aspects of PBI:
* Prioritization: PBIs are prioritized based on customer needs and business goals.
* Detailing: Each item usually includes descriptions, acceptance criteria, and estimated effort.
* Agile Framework: Commonly used in Agile methodologies to manage development work.
This allows teams to organize and track their progress in delivering features and improvements effectively.


### SCM: Supply Chain Management
### NPS： Net Promoter Score

### Enum

- Search Pool: Beauty, CE, FOOD, HOME, KITCHEN, Leisure, stationery

- Dedupe Status
  - Create Dedupe Group - in Progress
  - Create Dedupe Group - DONE
  - Auto Dedupe - in Progress
  - Auto Dedupe - DONE
  - Manual Dedupe - in Progress
  - Manual Dedupe - DONE
  - Health Check - in Progress
  - Health Check - DONE
  - Publish - in Progress
  - Publish - DONE

- PO Status: warehouse, new, active, inactive, obsolete

- Option Type
  - QTY: exactly matched product with quantity
  - ETC: If there are multiple options but options have features corresponding to one SKU
  - Non-QTY: all cased that do not correspond to QTY and ETC, even there's only one option
  - To-Manager: Only selected by the operator when he/she cannot determine the option type

### Dedupe progress

1. product duplication
2. VIID mapping



```ts
window.addEventListener('storage', (e: StorageEvent) => {
    const {key, newValue} = e
    if( key !== stateKey ) return;
    setState(JSON.parse(newValue))
})

```

* Fail Reason
    * insufficient search
    * Exclude target
    * different brands
    * different components
    * Different options
    * model name is different
    * different design
    * others
  
* Dedupe dashboard: Operator => Inspector => Manager (re-assign by Manager)
    
### Health Check


Manager check the operator's work and give feedback


### Publish & System query & Dashboard


* when the PBI team manager clicks the publish button, the data obtained through system query is added and saved to configure the master catalog data
* the newly added data should be added to the Selection pool area
* When a specific item is re-dedupe via Dashboard(SIP), it should be excluded from the Selection pool area
* when a specific item is uploaded via Dashboard(SIP), the Health check should be performed


## TA (target adjustment)

* Publish selection targets need to be checked repeatedly by CoE team, and the requested/audited data needs to be synchronized quickly with SIP
* TA is a tool for synchronizing the results of pre-audit and CoE Tracker from CoE with SIP. Therefore TA should provides summary through dashboard to identify published targets and audit results

### VSSS

After being classified as a sourcing subject from Master Catalog. BM manually contracts the vendors via email of offline call to check their availability and negotiate pricing. This means that on average, the sourcing process takes 40 days of sourcing time, which affects GMV.

So the goal is
* automatically notify vendors via supplier-hub and email targets classified as No Selection through SIP and get feedback
* after gathering feedback and store it back to SIP, BM can check the feedback and decide whether to re-negotiate or not

Feedback

* Available
* Obsolete
* Renewal
* Existing Product
* Other Brand
* Link is incorrect
* Overseas only
* Custom Order
* Heavy & Bulky
* B2B only
* Target Multi Option


## Premium data

* Free
  * Demand Forecasting
  * Fill Rate
  * Non Compliant Delivery
* Operation
  * Rocket Operation
  * Fresh Operation
* Sales
  * Geographic Sales
  * Daily Performance
  * Purchase Trend
  * Brand Ranking
  * Item Ranking
* Shopper
  * Shopper Profile
  * Shopper Dynamic by Category
  * Shopper Dynamic by Brand
  * Item Switching (New-Bounce)
  * Shopping Cart
* Customer Journey
  * Customer Funnel
  * Search Term
* Review
  * Shopper Reviews
  * Item list without Shopper Review 
