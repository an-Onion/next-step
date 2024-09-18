##【算法】

- 题目一：

    给一串数字（0 - 9）每个数字之间可以加 + - 号或者不加，组成的表达式计算结果等于给定的目标数，输出所有满足条件的表达式。
    例如： [1 2 3 4 5 6 7 8 9] 目标 100
    可能的组合：
    1 + 23 - 4 + 56 + 7 + 8 + 9
    -1 - 2 + 34 - 5 - 6 + 78 + 9

```ts
function addOperators(nums: string[], target: number): string[] {
  const results: string[] = [];

  const backtrack = (
    index: number,
    expression: string,
    currentNum: number,
    previousNum: number,
  ) => {
    // 基础条件：当我们使用了所有的数字
    if (index === nums.length) {
      // 检查当前表达式是否等于目标数
      if (currentNum === target) {
        results.push(expression);
      }
      return;
    }

    // 尝试加号
    backtrack(
      index + 1,
      expression + "+" + nums[index],
      currentNum + parseInt(nums[index]),
      parseInt(nums[index]),
    );
    // 尝试减号
    backtrack(
      index + 1,
      expression + "-" + nums[index],
      currentNum - parseInt(nums[index]),
      -parseInt(nums[index]),
    );
    // 尝试不加号（拼接数字）
    const newNum =
      parseInt(expression.split(/[\+\-]/).pop() || "") + parseInt(nums[index]);
    const newExpression = expression.slice(0, -String(newNum).length) + newNum; // 移除最后的数字部分并加上新拼接的数字
    backtrack(
      index + 1,
      newExpression,
      currentNum - previousNum + newNum,
      newNum,
    );
  };

  // 首先将第一个数字作为起始表达式
  backtrack(1, nums[0], parseInt(nums[0]), parseInt(nums[0]));

  return results;
}

const nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
const target = 100;
const expressions = addOperators(nums, target);

console.log(expressions);
```

- 题目二：

力扣易思柳，LRU 题，之前没刷过，想到了用 Dictionary 和 linkedlist 来处理. 可以通过 linkedlistnode 的 prev 和 next 快速定位来删除 node，做到 O(1) put 和 get

- 题目三：

应该算是一道 easy-medium，给定一个数组，只有一个初始数字 1，对这个数组的每个数字 k，做 k*2+1 和 k*3+1，然后加入数组，要求这个数组是 sorted 并且没有重复元素，返回第 N 个
这个数组应该是[1,3,4,7,9,10,13,....]
算法
3(1*2+1), 4(1*3+1)
7(3*2+1), 10(3*3+1)
9(4*2+1), 13(4*3+1)
...
因为出现了 3 算出来的比 4 还大，所以单纯用 queue 不行，要用 heap，然后用 set 去重
分析了时间空间复杂度。

##【系统设计】

- 题目一：

为 Youtube 用户设计列出一小时之内 top 10 播放量的视频，就是 top k 问题，我还讲了 count-min sketch‍

- 题目二：

Google search‍‍‍‌‍ ，Top K search results

- 题目三：

短链 short url

备注：怎么扩展，怎么确保数据不丢失

样例：

1. 确定需求，我们要解决的问题是什么？
2. 确定核心功能，设计 API、实体类
3. 画出核心模块的系统架构图（比如：基于规模，用高效的数据库来存储所有的推特和支持超大量的读要求，还需要一个分布式存储系统来保存图像和视频）
4. 细节设计（比如：大量数据存储如何分区，如何处理热点数据，哪个层面需要缓存加速，那个模块需要负载均衡）
5. 识别和解决瓶颈（比如：系统中哪个点容易失效，如何消除影响保障可用性？数据库备份足够吗，数据库宕机如何避免影响？某个服务不可用会不会导致服务雪崩？如何监控服务表现，性能异常及时告警？）

缓存、负载平衡、数据库选择、数据库架构、复制、分片

---

- 一面：

> Problem Set below: 
> // Task: Implement a class named 'RangeList'
> // A pair of integers define a range, for example: [1, 5). This range includes integers: 1, 2, 3, and 4.
> // A range list is an aggregate of these ranges: [1, 5), [10, 11), [100,201)

```js

/**
*
* NOTE: Feel free to add any extra member variables/functions you like.
*/
class RangeList {
/**
* Adds a range to the list
* @param {Array<number>} range - Array of two integers that specify
beginning and end of range.
*/
add(range) {
// TODO: implement this
}
/**
* Removes a range from the list
* @param {Array<number>} range - Array of two integers that specify
beginning and end of range.
*/
remove(range) {
// TODO: implement this
}
/**
* Prints out the list of ranges in the range list
*/
print() {
// TODO: implement this
}
}
// Example run
const rl = new RangeList();
rl.add([1, 5]);
rl.print();
// Should display: [1, 5)
rl.add([10, 20]);
rl.print();
// Should display: [1, 5) [10, 20)
rl.add([20, 20]);
rl.print();
// Should display: [1, 5) [10, 20)
rl.add([20, 21]);
rl.print();
// Should display: [1, 5) [10, 21)
rl.add([2, 4]);
rl.print();
// Should display: [1, 5) [10, 21)
rl.add([3, 8]);
rl.print();
// Should display: [1, 8) [10, 21)
rl.remove([10, 10]);
rl.print();
// Should display: [1, 8) [10, 21)
rl.remove([10, 11]);
rl.print();
// Should display: [1, 8) [11, 21)
rl.remove([15, 17]);
rl.print();
// Should display: [1, 8) [11, 15) [17, 21)
rl.remove([3, 19]);
rl.print();
// Should display: [1, 3) [19, 21)
```

解答：

```js
type IRange = [number, number];
type Mode = 'add' | 'remove';

// 把当前格式tuple转 array
type WriteAbleTuple<T> = (T extends Array<any> ? (T[number] extends readonly [infer A, infer B] ? [A, B] : never) : never)[];

class RangeList {
    list: IRange[] = [];

    /**
     * @description: 与已有空间不存在交叉合并的情况
     * @param {[number, number]} input
     * @param {add | remove} mode
     * @return {null | number} idx
     */
    private filterInvalid = (input: IRange, mode: Mode = 'add') => {
        const [from, end] = input;
        if (input[0] === input[1]) {
            // 去掉相同输入
            return null;
        }
        let idx = this.list.findIndex((item) => item[1] >= from);
        if (!~idx) {
            // 最右边的case
            if (mode === 'add') {
                this.list.push([from, end]);
            }
            return null;
        }
        if (end < this.list[idx][0]) {
            if (mode === 'add') {
                // 直接插入的case
                this.list.splice(idx, 0, [...input]);
            }
            return null;
        }

        return idx;
    };

    /**
     * @description: add调用，让input区间合并到this.list[idx]上
     * @param {[number, number]} input
     * @param {number} idx
     * @return {void}
     */
    private merge = (input: IRange, idx: number) => {
        const idxRange = this.list[idx];
        idxRange[0] = Math.min(idxRange[0], input[0]);
        idxRange[1] = Math.max(idxRange[1], input[1]);
    };

    add = (range: IRange) => {
        // 找到第一个， 右小于等于from的; 后mixin
        let idx = this.filterInvalid(range);

        if (typeof idx === 'object') { // null
            return this;
        }
        const finalPoi = this.collect(range, idx);

        this.merge(range, idx);
        this.merge(this.list[finalPoi], idx);
        this.list.splice(idx + 1, finalPoi - idx); // 删除掉中间位置
        return this;
    };
    print = () => {
        console.log(JSON.stringify(this.list).replace(/\](?!$)/g, ')'));
        return this;
    };

    /**
     * @description: 从idx位开始收集，找到所有的区间内数组
     * @return {number} 最后一位相关数组
     */
    private collect = (input: IRange, idx: number) => {
        const end = input[1];
        const len = this.list.length;
        for (let i = idx; i < len; i++) {
            const item = this.list[i];
            if (item[0] > end) {
                return i - 1;
            }
        }
        return len - 1;
    };


    /**
     * @description: 同理于merge
     */
    private detach = (input: IRange, idx: number): IRange[] => {
        const [from, end] = input;

        const appendRanges = ([
            [
                this.list[idx][0],
                from
            ], [
                end,
                this.list[idx][1]
            ]
        ] as const).filter(item => item[1] - item[0] > 0)

        return appendRanges as WriteAbleTuple<typeof appendRanges>
    };

    remove = (range: IRange) => {
        let idx = this.filterInvalid(range, 'remove');
        if (typeof idx === 'object') {
            return this;
        }
        const finalPoi = this.collect(range, idx);

        const appendRanges = (finalPoi === idx) ? this.detach(range, idx) : this.detach(range, idx).concat(this.detach(range, finalPoi));
        this.list.splice(idx, finalPoi - idx + 1);
        this.list.splice(idx, 0, ...appendRanges);
        return this;
    };
}


const l = new RangeList();

l.add([1, 5]);

l.add([10, 20]);

l.add([20, 20]); // [1, 5) [10, 20)

l.add([20, 21]); // [1, 5) [10, 21)

l.add([2, 4]); //  [1, 5) [10, 21)

l.add([3, 7]); //  [1, 7) [10, 21)

// l.add([8, 10]); // [[1,7),[7,21)]

l.remove([10, 10]); // [1, 7) [10, 21)

l.remove([10, 11]); // [1, 7) [11, 21)

l.remove([15, 17]); // [1, 7) [11, 15) [17, 21)

l.remove([3, 19]); // [1, 3) [19, 21)

l.print();

```

二面
代码题 40 分钟 2 道 M+的题 。比较 challenge 大概 28 分钟做完，剩下 10 分钟做一些优化

这个题没给出最优解，「最优解基于位运算」

```js
// 给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。
// 返回被除数 dividend 除以除数 divisor 得到的商。
// 整数除法的结果应当截去（truncate）其小数部分，例如：truncate(8.345) = 8 以及 truncate(-2.7335) = -2
// 输入: dividend = 10, divisor = 3
// 输出: 3
// 解释: 10/3 = truncate(3.33333..) = truncate(3) = 3
```

二分查找，给出了最优解

```js
// 整数数组 nums 按升序排列，数组中的值 互不相同 。
// 在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。
// 给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。
// 示例：
// 输入：nums = [4,5,6,7,0,1,2], target = 0
// 输出：4
```

第一题没给出最优解，面试官并没有难为我

- 三面
  讲了一些项目的东西

然后场景题：设计一个微博列表滚动

1. 前后端交互应该有哪些内容

2. 分页时候，用户刷新了数据，后端应该怎么做保证不重复。

3. 页面数据量大，滚动的一些方式。

4. 不同的分页方案的差别是什么

- 四面
  
* 为什么 Set 的复杂度是 O(1), 如何做到的

* treemap 和 hashmap 的实现以及区别

* http1、2、3 区别。 3 中如何实现的快速握手。

* dns 解析方式

- 五面
  cto 面试，他基本都是英文，聊一些经历之类的。
