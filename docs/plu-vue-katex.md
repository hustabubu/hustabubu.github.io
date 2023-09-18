[toc]
# 如何利用自定义指令或自定义插件来调用 Katex 自动渲染 Latex 公式？
运行环境：Vue3
当前状况：
- Vue2 有插件 `vue-katex`，但年久失修，在 Vue3 中用不了；
- React 有 Katex 的插件，怎奈暂时还不会用 React；
- Vue3 有 `mathjax` 的插件可以用来渲染 Latex，但 README 有点简陋，鄙人没有 read 清楚。

只能自力更生，丰衣足食。

鄙人是一个编程小白，给需要用渲染 Latex 公式的朋友**分享一个思路**。

## 1. 实现在 Vue3 中通过 Katex 自动渲染 Latex 公式
**准备知识**：
katex 有三个API可使用：
   - `katex.render` ：直接对 DOM 元素进行渲染。（纯 Latex 公式）
   - `katex.renderToString`：把 Latex 公式字符串生成可渲染 HTML 字符串，然后通过 `innerHTML` 或 `v-html` 之类的插入到 DOM 元素中。（纯 Latex 公式）
   - `renderMathInElement(el, renderOption)`：也是直接对 DOM 进行渲染。和前两个 API 不同的是：不限定纯 Latex 公式，也就是它**可对文字和公式混排的字符串进行渲染**。这是正是我需要的。

**问题描述**：

**前端框架**的大部分情况下的**原则**是：**不直接操作 DOM**，而原生 Katex 提供的 API 是必须直接操作 DOM。这里衍生出两个问题：
   - **在 Vue3 中如何操作 DOM 比较合适？（自定义指令或自定义插件）**
   - Vue3 讲究的是**响应式**，如论是数据还是标签，全都在响应（监控）中，但是<font color=red>经过 Katex 渲染过的 DOM 元素</font>（里面已经**重新包裹了很多层**，把原来的 DOM 元素改得面目全非），已经<font color=red>脱离了 Vue3 的“监控”</font>（用 Vue 改变标签的内容，已经对 Katex 渲染过的 DOM 毫无作用）

  **解决大概思路**：
  方法一：**自定义指令**
  方法二：**把自定义指令封装成插件**

### 1.1. 如何利用自定义指令来调用 Katex 的自动渲染？

原则上是，在哪里用，就哪里定义自定义指令。

但是为了省事，还是定义在全局的自定义指令。
**步骤**：
1. 在入口文件 `main.js` 中引入 Katex 样式和自动渲染函数；
2. 配置自动渲染的分隔符；（后面自定义插件也写有）
3. 定义自定义指令：
   用选项式：因为需要用到生命周期勾子(`mounted`、`updated`)。
   生命周期函数有两个**关键的参数**：第一个是当前 DOM 元素，第二个是绑定的值（第三、四个分别是`vnode`, `prevVnode`）。
4. 在标签中使用：
   ```js
    <script setup>
        import {ref} from 'vue'
        const latexText = ref("正弦函数$\\sin x$")

        const changeLatexText = ()=>{
            latexText.value="余弦函数$\\cos x$"
        }
    </script>

    <template>
        <div>
            <h1>测试Katex</h1>
            <!-- 自定义指令绑定 latexText -->
            <h2 v-my-directive:value="latexText">{{ latexText }}</h2>
            <h2>不渲染的 Latex 公式{{ latexText }}</h2>
            <button @click="changeLatexText">换个latextext</button>
        </div>
    </template>
   ```

   一上来，也就是挂载时，先调用一次：
   ```js
    mounted(el) {
        renderMathInElement(el, renderOption);
    }
   ```

   每次页面更新后的，再调用：
   由于真实 DOM 元素已经用 Katex 渲染过，面目全非，脱离了 Vue 的 “监控”，真实的 DOM 的`<h2>...</h2>`并不是我想要改成的 `<h2>余弦函数$\\cos x$</h2>`。直接调用自动渲染是没有任何作用的。
   <font color= red>关键地方</font>：
   `el.innerHTML = binding.value`，或`el.innerText = binding.value`用传入的值`余弦函数$\\cos x$`替换当前元素内部的，从而当前真实 DOM元素改为了：`<h2>余弦函数$\\cos x$</h2>`。
   从而调用自动渲染函数才能实现想要的渲染。
   为了避免可能的 XSS 攻击，减少使用 `innerHTML`，而用 `innerText`。
   
   ```js
    updated(el, binding) {
        // 如果在标签内绑定的latexTex值没有变化，直接return，没必要执行latex公式的自动渲染
        if(binding.oldValue === binding.value) return
        // el.innerHTML = binding.value; // 一样效果
        el.innerText = binding.value;   // 关键：成也风云，败也风云
        renderMathInElement(el, renderOption);
    },
   ```
   注意：Katex 渲染 DOM 元素时，虽然当前 DOM 元素被变动得面目全非，但是原来标签属性是完全保留下来的，也就是说对原来**标签的各种属性、样式等等操作都仍然有效**，不会因为 Katex 渲染而改变。

   **这里有需要优化的地方：**
   ~~1. 当页面组件任何一处的更新都会触发`updated`，如果我们的数学公式没有更新，却被重新渲染，就不合适，造成没有必要的 DOM 操作。故应该先判断一下是否有改动：
   `binding.oldValue === binding.value`
   如果没有改动就直接 `return`，否则调用 katex 的自动渲染函数来重新渲染。~~
   2. 看看是否有必要把这个自定义指令封装一下吗？
   ok，那就把自定义指令封装到插件中。

### 1.2. 封装 Katex 自动渲染的自定义指令到插件中
****
**插件知识补充复习**

**为什么要用插件？**
插件 (Plugins) 是一种能为 Vue 添加全局功能的工具代码。

什么样的工具代码适合封装到插件？
**全局性的**，**功能型的**。

插件发挥作用的常见场景主要包括以下几种：
1. 通过 `app.component()` 和 `app.directive()` 注册一到多个**全局组件**或**自定义指令**。
2. 通过 `app.provide()` 使一个资源可被**注入**进整个应用。
3. 向 `app.config.globalProperties` 中添加一些**全局实例属性或方法**。
4. 一个可能上述三种都包含了的功能库 (例如 **vue-router**)。

一个插件可以是一个拥有 `install()` 方法的对象，也可以直接是一个安装函数本身。安装函数会接收到**安装它的应用实例**和传递给 app.use() 的**额外选项**作为参数：
```js
const myPlugin = {
  install(app, options) {
    // 配置此应用
  }
}
```
****
以我编写 katex 自动渲染 latex 公式的插件为例，学习编写插件的步骤。

功能实现（肯定不是最优的方案）：
1. 通过自定义指令，来调用 Katex 的自动渲染函数 `renderMathInElement(el, renderOption)`
（*因为 Katex 提供自动渲染 Latex 公式需要直接操作 DOM，而在 Vue 中**直接操作 DOM** 的**合适方式**就是**自定义指令***）
2. 何时调用`renderMathInElement`?
   - 在组件挂载（`mounted`）时，先调用一次，完成首次渲染；
     ```js
     mounted(el, binding, vnode, prevVnode) {
         renderMathInElement(el, renderOption);
     }
     ```
   - 在公式被更新后（`updated`），再调用渲染。这里需要做一个逻辑判断（因为组件任意一处的更新都会调用`updated`，而有些更新并不是 Latex 公式的更新）
        ```js
        updated(el, binding) {
            if(binding.oldValue === binding.value) return
            el.innerText = binding.value;
            renderMathInElement(el, renderOption);
        }
        ```
3. 在标签中使用自定义指令，并传递参数
   ```html
     <h2 v-katex-auto-render-plu:value="latexText">{{ latexText }}</h2>
   ```

**编写步骤：**
准备：安装`Katex`，详情看官网。`yarn add katex`
1. 新建一个js文件，用于写插件代码
```js
// /src/plugins/v-katex-auto-render-plu.js
// 引入 Katex 的样式和自动渲染函数
import "katex/dist/katex.min.css";
import renderMathInElement from "katex/contrib/auto-render/auto-render";

export default {
  install(app) {
    // 配置 katex 自动渲染的选项，其中最重要的是所识别的分隔符，更多配置看官方文档。
    const renderOption = {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false },
        { left: "\\(", right: "\\)", display: false },
        { left: "\\[", right: "\\]", display: true },
      ],
      throwOnError: false,
    };
    // 选项式自定义指令
    app.directive("katex-auto-render-plu", {
      // 初次进入（monted）时，立即调用 Katex 自动渲染函数
      mounted(el) {
        renderMathInElement(el, renderOption);
      },
      // 当组件更新完成时，调用 Katex 自动渲染函数
      updated(el, binding) {
        // 如果在标签内绑定的 latexTex 值没有变化，直接 return，没必要执行 latex 公式的自动渲染
        if(binding.oldValue === binding.value) return
        // 把更新的latex字符串赋值给组件的innerText（也可以赋值给innerHTML，实现的效果都一样）
        el.innerText = binding.value; // 关键位置，也是可能需要改进的地方
        renderMathInElement(el, renderOption);
      }
    })
  }
};

```
2. 在入口文件`main.js`中使用插件。
```js
 // main.js
 import { createApp } from "vue";
 import App from "./App.vue";
 // 引入插件
 import vKatex from "./plugins/v-katex-auto-render-plu"
 const app = createApp(App);
 // 使用插件
 app.use(vKatex)
 app.mount("#app");
```
3. 在标签中使用自定义指令
```js
<script setup>
   import {ref} from 'vue'
   const latexText = ref("正弦函数$\\sin x$")
   const changeLatexText = ()=>{
     latexText.value +="$\\cos x$"
   }
</script>

<template>
   <div>
     <h1>测试 Katex 自动渲染</h1>
     <h2>Katex 自动渲染后的公式：</h2>
     <h2 v-katex-auto-render-plu:value="latexText">{{ latexText }}</h2>
     <h2>不用渲染的 Latex 公式：{{ latexText }}</h2>
     <button @click="changeLatexText">换个latexText</button>
   </div>
</template>
```

**备注**：
1. 对于要使用 Katex 来渲染 Latex 公式，大部分情况下都是文字和 Latex 公式混排的，基本上是不太可能用 Katex 提供的最基本的那两个 API，而是用自动渲染`renderMathInElement(el, renderOption)`，因此没有要去折腾那两个基本 API。如果你确实需要，也可以类似地去封装。

2. 调用自动渲染函数的时机，在`beforeUpdate`时， 是没法实现的，原因很简单，自己试验。

3. 当前自定义的 Katex 的自动渲染插件，有几个**需要改进的地方**：
   - 自定义指令是对**单独的一个标签有预期结果**，如果想对多个标签嵌套或者整个组件（子组件），可能在 `el.innerText = binding.value;` 这个地方去入手改进。
   - 以当的更新一次 latex 公式的方式，会触发两次 `update`，虽然已经避免了两次调用`renderMathInElement()`来操作 DOM，但是还是**效率不高**，只能等熟悉 Vue 的虚拟 DOM 的专业人士来改进。
   - 如果觉得所**用**到渲染 Latex 公式的组件**不多**，就没有必要以插件的方式来调用自动渲染函数，可以在需要的地方**通过自定义指令的方式**来调用。

4. 数学公式的转义`\\`问题：通常直接从其它地方（拷贝、数据库之类的）导入过来都只有一个`\`，未被转义，相当棘手（你别告诉我，要手动敲！）。可以借助于一些插件(sheetjs、mammoth.js等等之类)来把 sheet 中或 word 中的数学公式导入过来，实现转义。
