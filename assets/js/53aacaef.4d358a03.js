"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[177],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),k=r,c=m["".concat(u,".").concat(k)]||m[k]||d[k]||l;return n?a.createElement(c,i(i({ref:t},p),{},{components:n})):a.createElement(c,i({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},3608:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={},i="\u5b66\u4e60\u4f7f\u7528 Docusaurus \u7684\u7b14\u8bb0",o={unversionedId:"Docusaurus-study",id:"Docusaurus-study",title:"\u5b66\u4e60\u4f7f\u7528 Docusaurus \u7684\u7b14\u8bb0",description:"facebook \u63a8\u51fa\u7684\u5f00\u6e90\u7684\u9759\u6001\u7684\u5185\u5bb9\u7ba1\u7406\u7cfb\u7edf\uff0c\u901a\u8fc7\u5b83\u53ef\u4ee5\u5feb\u901f\u7684\u90e8\u7f72\u4e00\u4e2a\u9759\u6001\u7f51\u7ad9\u3002",source:"@site/docs/Docusaurus-study.md",sourceDirName:".",slug:"/Docusaurus-study",permalink:"/docs/Docusaurus-study",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tutorial Intro",permalink:"/docs/intro"},next:{title:"my-git-note",permalink:"/docs/my-git-note"}},u={},s=[{value:"1.\u57fa\u672c\u4f7f\u7528\uff1a",id:"1\u57fa\u672c\u4f7f\u7528",level:2},{value:"2.\u63d2\u4ef6\u652f\u6301",id:"2\u63d2\u4ef6\u652f\u6301",level:2},{value:"2.1.\u5bf9 mermaid \u7684\u652f\u6301",id:"21\u5bf9-mermaid-\u7684\u652f\u6301",level:3},{value:"2.2.\u5bf9 KaTex \u7684\u652f\u6301",id:"22\u5bf9-katex-\u7684\u652f\u6301",level:3},{value:"2.3.\u652f\u6301 MDX \u683c\u5f0f\u7684 markdown \u6587\u4ef6",id:"23\u652f\u6301-mdx-\u683c\u5f0f\u7684-markdown-\u6587\u4ef6",level:3},{value:"\u6ce8\u610f\u4e8b\u9879\uff1a",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"1. <code>docusaurus.config.js</code> \u4e2d\u914d\u7f6e\u8865\u5145\u8bf4\u660e",id:"1-docusaurusconfigjs-\u4e2d\u914d\u7f6e\u8865\u5145\u8bf4\u660e",level:3},{value:"2. docs \u76f8\u5173",id:"2-docs-\u76f8\u5173",level:3},{value:"3. blog \u76f8\u5173",id:"3-blog-\u76f8\u5173",level:3},{value:"4.\u6837\u5f0f\u548c Layout",id:"4\u6837\u5f0f\u548c-layout",level:3}],p={toc:s},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5b66\u4e60\u4f7f\u7528-docusaurus-\u7684\u7b14\u8bb0"},"\u5b66\u4e60\u4f7f\u7528 Docusaurus \u7684\u7b14\u8bb0"),(0,r.kt)("p",null,"facebook \u63a8\u51fa\u7684\u5f00\u6e90\u7684\u9759\u6001\u7684\u5185\u5bb9\u7ba1\u7406\u7cfb\u7edf\uff0c\u901a\u8fc7\u5b83\u53ef\u4ee5\u5feb\u901f\u7684\u90e8\u7f72\u4e00\u4e2a\u9759\u6001\u7f51\u7ad9\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4f18\u70b9"),"\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u201c",(0,r.kt)("strong",{parentName:"li"},"\u5f00\u7bb1\u5373\u7528"),"\u201d\uff1a\u7f16\u7a0b\u5c0f\u767d\u90fd\u662f\u76f4\u63a5\u4f7f\u7528\uff0c\u4f7f\u5f97\u6211\u4eec\u53ef\u4ee5",(0,r.kt)("strong",{parentName:"li"},"\u4e13\u6ce8\u4e8e\u5185\u5bb9"),"\uff1b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u4fdd\u59c6\u7ea7\u8bf4\u660e\u6587\u6863"),"\uff1a\u5b98\u65b9\u8bf4\u660e\u6587\u6863\u6761\u7406\u6e05\u6670\u3001\u7b80\u5355\u6613\u8bfb\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u6211\u9700\u8981\u7684\u63d2\u4ef6\uff08markdown\u3001mdx\u3001mermaid \u7b49\uff09\uff0c\u6613\u4e8e\u5f15\u5165\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u6258\u7ba1\u5230 GitHub \u7684\u9759\u6001\u9875\u9762\u4e0a\u7684\u6d41\u7a0b\u7b80\u5355\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5b8c\u7f8e\u7684\u7f16\u7a0b\u5c0f\u767d\u7684\u7b14\u8bb0\u672c")),(0,r.kt)("p",null,"\u8fd9\u91cc\u53ea\u5217\u51fa\u9700\u8981\u7684\u3001\u5173\u952e\u7b14\u8bb0\uff0c\u66f4\u591a\u7684\u8be6\u60c5\u770b\u5b98\u65b9\u6587\u6863\u8bf4\u660e\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7f51\u5740\uff1a\n",(0,r.kt)("a",{parentName:"li",href:"https://docusaurus.io/"},"https://docusaurus.io/"))),(0,r.kt)("h2",{id:"1\u57fa\u672c\u4f7f\u7528"},"1.\u57fa\u672c\u4f7f\u7528\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5b89\u88c5\n",(0,r.kt)("inlineCode",{parentName:"p"},"npx create-docusaurus@latest my-website classic"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u542f\u52a8\u9879\u76ee\n",(0,r.kt)("inlineCode",{parentName:"p"},"npm start")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn start"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6784\u5efa\u9879\u76ee\n",(0,r.kt)("inlineCode",{parentName:"p"},"npm run build")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn build"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u542f\u52a8\u672c\u5730\u670d\u52a1\u5668\n",(0,r.kt)("inlineCode",{parentName:"p"},"npm run serve"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u53d1\u5e03\u5230 GitHub pages\n",(0,r.kt)("inlineCode",{parentName:"p"},"npm deploy"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u914d\u7f6e\u9879\u76ee\uff1a\ndocusaurus.config.js \u9879\u76ee\u7684\u914d\u7f6e\u6587\u4ef6")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6dfb\u52a0\u9875\u9762\uff1a"),(0,r.kt)("p",{parentName:"li"},"\u5728 docusaurus \u6846\u67b6\u4e2d\uff0c\u9875\u9762\u5206\u6210\u4e09\u79cd\uff1a1.page\uff0c2.blog\uff0c3.doc\uff08\u5efa\u8bae\u4e3b\u9875\u7528 page\uff0c\u5176\u5b83\u7528 md\uff09\u3002\nmd \u6587\u4ef6\u6253\u5305\u540e\uff0c\u597d\u50cf\u662f html\uff1f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6848\u4f8b\u5730\u5740\uff1a\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lilichao/lilichao.github.io"},"https://github.com/lilichao/lilichao.github.io")))),(0,r.kt)("h2",{id:"2\u63d2\u4ef6\u652f\u6301"},"2.\u63d2\u4ef6\u652f\u6301"),(0,r.kt)("h3",{id:"21\u5bf9-mermaid-\u7684\u652f\u6301"},"2.1.\u5bf9 mermaid \u7684\u652f\u6301"),(0,r.kt)("p",null,"\u66f4\u591a\u8be6\u7ec6\u770b\u5b98\u65b9\u7684\u8bf4\u660e\uff08v2.4.1\uff09\n",(0,r.kt)("a",{parentName:"p",href:"https://docusaurus.io/zh-CN/docs/markdown-features/diagrams"},"https://docusaurus.io/zh-CN/docs/markdown-features/diagrams")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5b89\u88c5\u63d2\u4ef6\uff1a\n",(0,r.kt)("inlineCode",{parentName:"p"},"yarn add @docusaurus/theme-mermaid"),"\n\u6216\n",(0,r.kt)("inlineCode",{parentName:"p"},"npm install --save @docusaurus/theme-mermaid"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),"\uff1a\n\u628a ",(0,r.kt)("inlineCode",{parentName:"p"},"markdown.mermaid")," \u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"true")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"}," module.exports = {\n     markdown: {\n         mermaid: true,\n     },\n     themes: ['@docusaurus/theme-mermaid'],\n };\n")))),(0,r.kt)("h3",{id:"22\u5bf9-katex-\u7684\u652f\u6301"},"2.2.\u5bf9 KaTex \u7684\u652f\u6301"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docusaurus.io/zh-CN/docs/markdown-features/math-equations"},"https://docusaurus.io/zh-CN/docs/markdown-features/math-equations")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5b89\u88c5\u63d2\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"li"},"remark-math")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"rehype-katex")," :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"    yarn add remark-math@3 rehype-katex@5 hast-util-is-element@1.1.0\n")),(0,r.kt)("p",null,"   \u6216"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"    npm install --save remark-math@3 rehype-katex@5 hast-util-is-element@1.1.0\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"docusaurus.config.js")," \u4e2d\u5f15\u5165\u63d2\u4ef6\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"    const math = require('remark-math');\n    const katex = require('rehype-katex');\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u5230 content plugin \u6216 preset options \uff08\u901a\u5e38\u662f ",(0,r.kt)("inlineCode",{parentName:"li"},"@docusaurus/preset-classic")," \u7684 docs options\uff09:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"    remarkPlugins: [math],\n    rehypePlugins: [katex],\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"stylesheets")," \u5f15\u5165 KaTex CSS :",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"}," stylesheets: [\n {\n     href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',\n     type: 'text/css',\n     integrity:\n     'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',\n     crossorigin: 'anonymous',\n },\n ],\n")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u603b\u800c\u8a00\u4e4b\uff0c\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"docusaurus.config.js")," \u7684\u6539\u53d8\u5927\u81f4\u5982\u4e0b\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const math = require('remark-math');    //\u5f15\u5165\nconst katex = require('rehype-katex');  //\u5f15\u5165\n\nmodule.exports = {\n  title: 'Docusaurus',\n  tagline: 'Build optimized websites quickly, focus on your content',\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          path: 'docs',             //\u6dfb\u52a0(\u4e0d\u7528\u6dfb\u52a0\u4e5f\u80fd\u751f\u6548)\n          remarkPlugins: [math],    //\u6dfb\u52a0\n          rehypePlugins: [katex],   //\u6dfb\u52a0\n        },\n      },\n    ],\n  ],\n\n  // \u5f15\u5165 KaTex \u6837\u5f0f\u3002\u521d\u59cb\u5316\u9879\u76ee\u65f6\u662f\u6ca1\u6709\u8fd9\u4e00\u5757\uff0c\u5f97\u81ea\u5df1\u6dfb\u52a0\u4e0a\u6765\n  stylesheets: [\n    {\n      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',\n      type: 'text/css',\n      integrity:\n        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',\n      crossorigin: 'anonymous',\n    },\n  ],\n};\n")),(0,r.kt)("h3",{id:"23\u652f\u6301-mdx-\u683c\u5f0f\u7684-markdown-\u6587\u4ef6"},"2.3.\u652f\u6301 MDX \u683c\u5f0f\u7684 markdown \u6587\u4ef6"),(0,r.kt)("p",null,"  MDX\u683c\u5f0f\u7684\u6587\u4ef6\u662f\u53ef\u4ee5",(0,r.kt)("strong",{parentName:"p"},"\u5d4c\u5165 js \u7684 markdown \u6587\u4ef6"),"\u3002\u5728\u67d0\u4e9b\u9700\u8981\u4ea4\u4e92\u529f\u80fd\u573a\u5408\u4e0b\u53ef\u80fd\u4f1a\u65b9\u4fbf\u3002\u8be6\u7ec6\u770b\u5b98\u65b9\u6587\u6863\uff0c\u6216 \u521d\u59cb\u5316\u9879\u76ee\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"blog/*.mdx"),"\u3002"),(0,r.kt)("p",null,"  Docusaurus \u76f4\u63a5\u652f\u6301"),(0,r.kt)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879\uff1a"),(0,r.kt)("h3",{id:"1-docusaurusconfigjs-\u4e2d\u914d\u7f6e\u8865\u5145\u8bf4\u660e"},"1. ",(0,r.kt)("inlineCode",{parentName:"h3"},"docusaurus.config.js")," \u4e2d\u914d\u7f6e\u8865\u5145\u8bf4\u660e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"i18n \u4e2d\u6539\u4e3a zh-CN \u3002\u4e3a\u4e86\u65f6\u533a\u7684\u5bf9\u5e94\uff0c\u4f7f\u5f97\u65f6\u95f4\u4e3a\u4e2d\u56fd\u65f6\u95f4\u663e\u793a\u5f62\u5f0f\uff1b")),(0,r.kt)("h3",{id:"2-docs-\u76f8\u5173"},"2. docs \u76f8\u5173"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u53ea\u6709\u4e8c\u53f7\u3001\u4e09\u53f7\u6807\u9898\u624d\u8fdb\u5165\u76ee\u5f55\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"li"},"_"),"\u5f00\u5934\u7684\u6587\u4ef6\u4f1a\u88ab\u5ffd\u89c6\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6587\u6863\u7684\u6807\u9898\u4f5c\u4e3a\u5de6\u680f\u663e\u793a\u7684\u6807\u9898\uff0c\u9664\u975e\u4f60\u60f3\u53e6\u5916\u8d77\u540d\u5b57\uff0c\u6216\u6dfb\u52a0 id\u3001\u6807\u7b7e\u7b49\u7b49\u4fe1\u606f\uff0c\u5728\u6587\u6863\u7684\u5934\u90e8\u6dfb\u52a0\u5982\u4e0b\u4fe1\u606f\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  ---\n  slug: first-blog-post\n  id: doc-with-tags\n  title: A doc with tags\n  tags:     //\u4e5f\u53ef\u4ee5\u5199\u6210 yaml \u6570\u7ec4\u7684\u5f62\u5f0f tags: [Demo, Getting started]\n    - Demo\n    - Getting started\n  ---\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"slug")," \u8868\u793a\u6587\u7ae0\u7684\u8bbf\u95ee\u8def\u5f84\uff0c\u4f8b\u5982\uff1a ",(0,r.kt)("inlineCode",{parentName:"li"},"slug: first-blog-post")," \u4e5f\u5c31\u662f\u8bf4\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"first-blog-pos")," \u6765\u8bbf\u95ee\u6b64\u6587\u6863\u3002\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"blog")," \u4e2d\uff0c\u4e5f\u7c7b\u4f3c\u7684\u5904\u7406\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u5939\u7ed3\u6784\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u7bc7\u6587\u6863\u6709\u552f\u4e00\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"id"),"\uff0c\u9ed8\u8ba4\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"id")," \u662f\u76f8\u5bf9\u4e8e ",(0,r.kt)("inlineCode",{parentName:"li"},"docs")," \u6587\u4ef6\u5939\u7684\u76f8\u5bf9\u8def\u5f84\uff0c\u6bd4\u5982\uff1a ",(0,r.kt)("inlineCode",{parentName:"li"},"docs/welcome/index.md"),"\uff0c\u5219\u6b64\u6587\u6863\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"id")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"welcome/index")," \uff1b\u5982\u679c\u5728\u6587\u6863\u7684\u5934\u90e8\u6307\u5b9a\u4e86\u6587\u6863\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"id:part1"),"\uff0c\u90a3\u4e48\u6700\u7ec8 ",(0,r.kt)("inlineCode",{parentName:"li"},"id")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"welcome/part1"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6587\u6863 ",(0,r.kt)("inlineCode",{parentName:"li"},"id")," \u662f\u7528\u6765\u5bf9\u6587\u6863\u8fdb\u884c\u76f8\u5173\u64cd\u4f5c\u7684\u201c\u51ed\u8bc1\u201d\u3002")))),(0,r.kt)("h3",{id:"3-blog-\u76f8\u5173"},"3. blog \u76f8\u5173"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5e38\u7528\u4f5c\u8005\u4fe1\u606f\uff0c\u53ef\u4ee5\u5b9a\u4e49\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"authors.yml")," \u4e2d\uff0c\u6210\u4e3a\u5168\u5c40\u7684\u201c\u4fe1\u606f\u201d\uff0c\u7136\u540e\u5728 blog \u7684 markdown \u4e2d\u76f4\u63a5\u4f7f\u7528\uff0c\u5f88\u65b9\u4fbf\u3002\n\u6bd4\u5982\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"endi:\n  name: Endilie Yacop Sucipto\n  title: Maintainer of Docusaurus\n  url: https://github.com/endiliey\n  image_url: https://github.com/endiliey.png\n\nyangshun:\n  name: Yangshun Tay\n  title: Front End Engineer @ Facebook\n  url: https://github.com/yangshun\n  image_url: https://github.com/yangshun.png\n\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"blog \u4e2d\u6587\u4ef6\u4ee5\u5982\u4e0b\u683c\u5f0f\u6765\u547d\u540d\uff0c\u7cfb\u7edf\u4f1a\u81ea\u52a8\u63d0\u53d6\u6587\u4ef6\u540d\u7684\u65f6\u95f4\u4f5c\u4e3a blog \u7684\u65f6\u95f4\u7b49\u7b49\u4fe1\u606f\uff0c\u603b\u800c\u8a00\u4e4b\uff0c\u8fd9\u6837\u6309\u7167\u8fd9\u4e2a\u683c\u5f0f\u6765\u547d\u540d\u6587\u4ef6\u5c31\u5bf9\u4e86\u3002\u4f8b\u5982"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"2019-05-30-welcome.md")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"2019-05-30-welcome/index.md")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"2019-05-28-first-blog-post.md")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5982\u679c markdown \u9700\u8981\u63d2\u5165\u56fe\u7247\uff0c\u6700\u597d\u5f04\u4e2a\u5355\u72ec\u7684\u6587\u4ef6\u5939\uff0c\u56fe\u7247\u653e\u6587\u4ef6\u5939\u5185\uff0c\u6bd4\u5982\u4e0a\u9762\u793a\u4f8b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"welcome/index.md"),"\u3002"))),(0,r.kt)("h3",{id:"4\u6837\u5f0f\u548c-layout"},"4.\u6837\u5f0f\u548c Layout"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u7528\u7684\u662f ",(0,r.kt)("inlineCode",{parentName:"li"},"@docusaurus/preset-classic"),"\uff0c\u5219\u5168\u5c40\u6837\u5f0f\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"/src/css/custom.css"),(0,r.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/styling-layout"},"https://docusaurus.io/docs/styling-layout")," \u5b98\u7f51\u63d0\u4f9b\u4e00\u4e2a\u989c\u8272\u8ba1\u7b97\u65b9\u6848\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5728 page \u4e2d\u53ef\u4ee5\u7528 Layout \u6807\u7b7e\u5305\u88f9\u8d77\u6211\u4eec\u7684\u4ee3\u7801\uff0c\u4f7f\u5f97\u548c\u9ed8\u8ba4\u4e3b\u9898\u6837\u5f0f\u6709\u4e00\u5b9a\u7684\u4e00\u81f4\u6027\u3002")))}d.isMDXComponent=!0}}]);