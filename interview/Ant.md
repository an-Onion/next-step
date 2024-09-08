# Ant

## Vue 和 react 对比

## Vue 的 data 为什么是个函数

在 Vue 中，data 是一个函数而不是一个对象，主要是为了保证每个组件实例都有自己的数据副本。这样做有几个优点：

- 独立性：每个组件实例调用 data 函数时，都返回一个新的对象，确保数据不会在不同组件实例间共享，避免意外修改。

- 复用：允许在组件中使用 data 函数来定义动态初始化的数据，方便复用相同的组件。

- 灵活性：可以在 data 函数内计算初始值，根据 props 或其他逻辑动态生成数据。

这种设计使得 Vue 的组件更加模块化和可维护，增强了数据管理的清晰度。

## Vue 的 nexttick 适用哪些场景

Vue 中的 nextTick 主要用于以下场景：

- DOM 更新后访问：当你需要在数据更新后直接访问更新后的 DOM 元素，比如在数据变更后获取元素的高度、宽度等。

- 批量更新：在一次事件循环内，Vue 会批量处理数据更改。使用 nextTick 可以确保在下一次 DOM 更新后执行某些逻辑。

- 异步操作后的状态更新：在执行异步操作后，如果需要在成功回调中更新 UI，使用 nextTick 可以确保在数据变化后执行回调。

- 需要确认渲染完成：当你需要确保某些操作在重新渲染完成后执行，比如在生成的组件上添加额外的事件监听器。

示例

```js
this.value = newValue;
this.$nextTick(() => {
  // 这里可以安全地访问更新后的 DOM
  console.log(this.$el.querySelector(".some-element").offsetHeight);
});
```

使用 nextTick 可以确保你的代码在 Vue 处理完 DOM 更新后执行，从而避免潜在的错误和不一致行为。

## React 如何监听 props

在 React 中，监听 props 的变化通常可以通过以下几种方式实现：

使用 componentDidUpdate（类组件）:
在类组件中，可以通过 componentDidUpdate 生命周期方法来检测 props 是否发生变化。

```js
class MyComponent extends React.Component {
  componentDidUpdate(prevProps) {
    if (prevProps.someProp !== this.props.someProp) {
      // 处理 props 变化
    }
  }

  render() {
    return <div>{this.props.someProp}</div>;
  }
}
```

使用 useEffect（函数组件）:
在函数组件中，可以使用 useEffect Hook 来监听 props 的变化。

```js
import React, { useEffect } from "react";

const MyComponent = ({ someProp }) => {
  useEffect(() => {
    // 处理 props 变化
  }, [someProp]); // 依赖数组，监听 someProp 的变化

  return <div>{someProp}</div>;
};
```

通过状态更新:
有时可以将 props 存储在状态中，通过使用 useEffect 来同步 props 和状态。

```js
import React, { useState, useEffect } from "react";

const MyComponent = ({ someProp }) => {
  const [internalState, setInternalState] = useState(someProp);

  if (someProps !== internalState) {
    setInternalState(someProp);
  }

  return <div>{internalState}</div>;
};
```

注意事项

- 副作用管理: 当监听 props 时，要注意副作用的管理，确保在渲染中不会引起不必要的更新。
- 性能优化: 频繁的 props 更新可能导致性能问题，需谨慎使用并考虑优化。

## Redux 的工作原理

Redux 是一个 JavaScript 状态管理库，通常用于 React 应用。其工作原理可以概括为以下几个核心概念：

1. Store
   单一源: Redux 应用只有一个单一的 store，所有的应用状态都集中在这个 store 中。
   只读: Store 的状态只能通过特定的方法获取，直接修改是被禁止的。
2. Action
   描述变化: Action 是一个普通的 JavaScript 对象，必须有一个 type 属性，描述要执行的操作。
   可选负载: 除了 type，你可以添加其他信息作为 payload。
   ```js
   const addAction = {
     type: "ADD_ITEM",
     payload: { item: "New Item" },
   };
   ```
3. Reducer
   纯函数: Reducer 是一个函数，接收先前的状态和一个 action，并返回新的状态。
   状态变化: Reducer 负责计算新的状态，但不能直接修改现有状态，而是返回一个全新的状态对象。
   ```js
   function reducer(state = initialState, action) {
     switch (action.type) {
       case "ADD_ITEM":
         return {
           ...state,
           items: [...state.items, action.payload.item],
         };
       default:
         return state;
     }
   }
   ```
4. Dispatch
   发送 Action: 使用 dispatch 方法来发送 action，通知 Redux store 更新状态。
   触发 Reducer: 发送 action 后，Redux 会调用相应的 reducer 来计算新的状态。
   ```js
   store.dispatch(addAction);
   ```
5. 订阅变化
   监听状态变化: 通过 store.subscribe 方法，组件可以监听状态变化，当状态改变时执行特定的回调函数。
   `js
    store.subscribe(() => {
    console.log(store.getState());
    });
    `
   流程总结

- 发起 Action: 用户操作触发 action。
- 调用 Dispatch: 使用 dispatch 发送 action。
- Reducer 计算新状态: Redux 调用 reducer 函数，传入当前状态和 action，返回新状态。
- 更新 Store: 更新 store 的状态。
- 通知订阅者: 触发状态变化的通知，更新相关组件。

通过这一流程，Redux 实现了对应用状态的集中管理和更可预测的状态变化，使得应用的状态管理更加清晰和可维护。

## React hooks

## 浏览器缓存

浏览器缓存主要包括以下几种类型：

- HTTP 缓存：

  - 强缓存：通过 Cache-Control 和 Expires 头部实现，指示浏览器是否可以直接使用缓存的资源，无需再次请求服务器。
  - 协商缓存：通过 ETag 和 Last-Modified 头部实现。浏览器在每次请求时向服务器询问资源是否更新，如果没有更新，就使用缓存。

- DOM 缓存：页面中加载的 DOM 元素和 JavaScript 对象通常会被缓存，直到页面重新加载或卸载。
- Service Worker 缓存：通过 Service Worker API，可以对请求进行拦截，并将响应缓存到浏览器中，以实现离线功能和更快的加载时间。
- IndexedDB：一个低级别的数据库，用于在客户端存储大量结构化数据，包括文件和 Blob。
- LocalStorage 和 SessionStorage：

  - LocalStorage：存储在浏览器中的键值对，存留时间较长，直到显式删除。
  - SessionStorage：同样存储键值对，但数据仅在页面会话期间有效，关闭页面后数据消失。

- Cache Storage API：允许开发者存储请求/响应对象的缓存，通常与 Service Worker 一起使用。
  总结
  这些缓存机制帮助提高网站性能，减少网络请求次数，并优化用户体验。不同的缓存策略适用于不同的场景，开发者可以根据需求选择合适的实现方式。

## For in 和 for of 的区别

for...in 和 for...of 是 JavaScript 中两种用于遍历的循环结构，主要区别在于它们处理的对象类型和遍历的内容。

for...in
用途: 遍历对象的可枚举属性（包括继承的属性）。
返回值: 属性的键（字符串）。
适用类型: 对象和数组（不过不建议用于数组）。

```js
const obj = { a: 1, b: 2, c: 3 };

for (const key in obj) {
  console.log(key); // 输出: a, b, c
}
```

for...of
用途: 遍历可迭代对象（如数组、字符串、Set、Map 等）。
返回值: 直接返回每个元素的值。
适用类型: 数组、类数组对象、字符串、Set、Map 等。

```js
const array = [1, 2, 3];

for (const value of array) {
  console.log(value); // 输出: 1, 2, 3
}
```

总结
使用 for...in 来遍历对象的属性名，适合需要访问对象成员的情况。
使用 for...of 来遍历可迭代对象的值，适合处理数组和字符串等情况。

## map 和 forEach 的区别

## 菲波那切数列(两种方式实现)

## 手写 promise.all

```js
function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completedCount = 0; // 记录完成的 Promise 数量

    promises.forEach((promise, index) => {
      // 确保传入的元素都是 Promise
      Promise.resolve(promise) // 将非 Promise 的对象包装为 Promise
        .then((result) => {
          results[index] = result; // 存储结果
          completedCount += 1; // 记录完成数量
          if (completedCount === promises.length) {
            resolve(results); // 如果所有 Promise 都完成，解决新的 Promise
          }
        })
        .catch(reject); // 如果任意一个 Promise 失败，拒绝新的 Promise
    });

    // 处理空数组情况
    if (promises.length === 0) {
      resolve(results); // 立即解决为一个空数组
    }
  });
}
```

## 实现 promisify(fs.readFile)

```js
const fs = require("fs");

function promisify(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (err, data) => {
        if (err) {
          reject(err); // 如果有错误，拒绝 Promise
        } else {
          resolve(data); // 成功时，解决 Promise
        }
      });
    });
  };
}

// 使用 promisify 将 fs.readFile 转换为返回 Promise 的函数
const readFileAsync = promisify(fs.readFile);

// 示例使用
readFileAsync("file.txt", "utf8")
  .then((data) => {
    console.log("文件内容:", data);
  })
  .catch((err) => {
    console.error("读取文件错误:", err);
  });
```

## 大数相加，第一个问是两个整数相加，第二问是支持小数点的相加

## 实现一个 U 组件的题
