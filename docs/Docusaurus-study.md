# 学习使用 Docusaurus 的笔记

facebook 推出的开源的静态的内容管理系统，通过它可以快速的部署一个静态网站。

**优点**：
- “**开箱即用**”：编程小白都是直接使用，使得我们可以**专注于内容**；
- **保姆级说明文档**：官方说明文档条理清晰、简单易读；
- 支持我需要的插件（markdown、mdx、mermaid 等），易于引入；
- 托管到 GitHub 的静态页面上的流程简单。
  
**完美的编程小白的笔记本**

这里只列出需要的、关键笔记，更多的详情看官方文档说明。
- 网址：
  https://docusaurus.io/
## 1. 基本使用：

- 安装
    `npx create-docusaurus@latest my-website classic`

- 启动项目
    `npm start` 或 `yarn start`

- 构建项目
   `npm run build` 或 `yarn build`

- 启动本地服务器
  `npm run serve`

- 发布到 GitHub pages
  `npm deploy`

- 配置项目：
  docusaurus.config.js 项目的配置文件

- 添加页面：

  在 docusaurus 框架中，页面分成三种：1.page，2.blog，3.doc（建议主页用 page，其它用 md）。
  md 文件打包后，好像是 html？

- 案例地址：
    https://github.com/lilichao/lilichao.github.io

## 2. 插件支持

### 2.1. 对 mermaid 的支持
更多详细看官方的说明（v2.4.1）
https://docusaurus.io/zh-CN/docs/markdown-features/diagrams

1. 安装插件：
  `yarn add @docusaurus/theme-mermaid`
  或
  `npm install --save @docusaurus/theme-mermaid`

2. 配置 `docusaurus.config.js`：
    把 `markdown.mermaid` 设置为 `true`
   ```js
    module.exports = {
        markdown: {
            mermaid: true,
        },
        themes: ['@docusaurus/theme-mermaid'],
    };
   ```

### 2.2. 对 KaTex 的支持
https://docusaurus.io/zh-CN/docs/markdown-features/math-equations

1. 安装插件 `remark-math` 和 `rehype-katex` :
```bash
    yarn add remark-math@3 rehype-katex@5 hast-util-is-element@1.1.0
```
   或
```bash
    npm install --save remark-math@3 rehype-katex@5 hast-util-is-element@1.1.0
```
2. 在 `docusaurus.config.js` 中引入插件：
```js
    const math = require('remark-math');
    const katex = require('rehype-katex');
```
3. 添加到 content plugin 或 preset options （通常是 `@docusaurus/preset-classic` 的 docs options）:
```js
    remarkPlugins: [math],
    rehypePlugins: [katex],
```
4. 在 `stylesheets` 引入 KaTex CSS :
   ```js
    stylesheets: [
    {
        href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
        type: 'text/css',
        integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
        crossorigin: 'anonymous',
    },
    ],
   ```
- 总而言之，在 `docusaurus.config.js` 的改变大致如下：
```js
const math = require('remark-math');    //引入
const katex = require('rehype-katex');  //引入

module.exports = {
  title: 'Docusaurus',
  tagline: 'Build optimized websites quickly, focus on your content',
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',             //添加(不用添加也能生效)
          remarkPlugins: [math],    //添加
          rehypePlugins: [katex],   //添加
        },
      },
    ],
  ],

  // 引入 KaTex 样式。初始化项目时是没有这一块，得自己添加上来
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
};
```

### 2.3. 支持 MDX 格式的 markdown 文件
  MDX格式的文件是可以**嵌入 js 的 markdown 文件**。在某些需要交互功能场合下可能会方便。详细看官方文档，或 初始化项目中的 `blog/*.mdx`。

  Docusaurus 直接支持

## 注意事项：
### 1. `docusaurus.config.js` 中配置补充说明
- i18n 中改为 zh、zh-CN 等等都行 。为了时区的对应，使得时间为中国时间显示形式；
  
### 2. docs 相关
- 默认情况下，只有二号、三号标题才进入目录；
- 默认情况下，以 `_`开头的文件会被忽视（其它位置的文件夹和目录也一样）；
- 默认情况下，文档的标题作为左栏显示的标题，除非你想另外起名字，或添加 id、标签等等信息，在文档的头部添加如下信息：
  
```
  ---
  slug: first-blog-post
  id: doc-with-tags
  title: A doc with tags
  tags:     //也可以写成 yaml 数组的形式 tags: [Demo, Getting started]
    - Demo
    - Getting started
  ---
```
- `slug` 表示文章的访问路径，例如： `slug: first-blog-post` 也就是说我们可以通过 `first-blog-pos` 来访问此文档。在 `blog` 中，也类似的处理。
- 文件夹结构：
   - 一个篇文档有唯一的 `id`，默认的 `id` 是相对于 `docs` 文件夹的相对路径，比如： `docs/welcome/index.md`，则此文档的 `id` 为 `welcome/index` ；如果在文档的头部指定了文档的 `id:part1`，那么最终 `id` 为 `welcome/part1`。
   - 文档 `id` 是用来对文档进行相关操作的“凭证”。


### 3. blog 相关
- 常用作者信息，可以定义在 `authors.yml` 中，成为全局的“信息”，然后在 blog 的 markdown 中直接使用，很方便。
  比如：
```yml
endi:
  name: Endilie Yacop Sucipto
  title: Maintainer of Docusaurus
  url: https://github.com/endiliey
  image_url: https://github.com/endiliey.png

yangshun:
  name: Yangshun Tay
  title: Front End Engineer @ Facebook
  url: https://github.com/yangshun
  image_url: https://github.com/yangshun.png

```
- blog 中文件以如下格式来命名，系统会自动提取文件名的时间作为 blog 的时间等等信息，总而言之，这样按照这个格式来命名文件就对了。例如

  - `2019-05-30-welcome.md`
  - `2019-05-30-welcome/index.md`
  - `2019-05-28-first-blog-post.md`
- 如果 markdown 需要插入图片，最好弄个单独的文件夹，图片放文件夹内，比如上面示例的 `welcome/index.md`。
  
### 4. 样式和 Layout
- 如果用的是 `@docusaurus/preset-classic`，则全局样式在 `/src/css/custom.css`
    https://docusaurus.io/docs/styling-layout 官网提供一个颜色计算方案。
- 在 page 中可以用 Layout 标签包裹起我们的代码，使得和默认主题样式有一定的一致性。  

### 5. 部署到 github pages 上
*流程不一定完全一样*
#### 5.1. 创建仓库：
在 github 上创建一个仓库，名为 `GITHUB_USERNAME.github.io`，Public，其它选项默认；
- *不一定非要这样的仓库名，除非你想以 `GITHUB_USERNAME.github.io` 这样的域名来访问你的网站*；
- *`GITHUB_USERNAME`：github 的用户名，后面类似地指代*。
#### 5.2. 初始化仓库：
```bash
git remote add origin https://github.com/GITHUB_USERNAME/GITHUB_USERNAME.github.io.git  
# 本地远程仓库 origin 关联 github 仓库

git branch -M gh-pages  
# 改本地主分支为 gh-pages

git push -u origin gh-pages 
# 把本地远程仓库 origin 的 gh-pages 分支推送到 github 仓库的 gh-pages 分支
```
- 注意：github 分支名必须是 `gh-pages`。
  github 仓库--> settings --> branch --> gh-pages
#### 5.3. 配置 `docusaurus.config.js`：
```js
  url: 'https://GITHUB_USERNAME.github.io/' // github 仓库地址
  baseUrl: '/';
  organizationName: 'GITHUB_USERNAME',  // 通常为 github 用户名
  projectName: 'GITHUB_USERNAME.github.io', // 通常为 github 仓库名

  // 上传代码时，两个注意事项：
  // 1. deploymentBranch 来指定部署的分支！
  // 2. 还需要在本地电脑配置一个环境变量：GIT_USER:GITHUB_USERNAME的用户名，
  //      如果未配置环境变量，则部署时，要加上参数 GIT_USER='GITHUB_USERNAME'
  deploymentBranch:"gh-pages",  // 指定部署的分支
  trailingSlash: false, //不检查文件路径？
```
#### 5.4. 部署到 github：
##### 命令与环境变量
- 如果配置了本地电脑的环境变量 `GIT_USER`，值为 `GITHUB_USERNAME`，则
```bash
  yarn deploy
```
- 如果未配置本地电脑的环境变量，则
```bash
  GIT_USER=<GITHUB_USERNAME> yarn deploy
```
##### 几个重要容易被忽视的对编程小白的“大坑”
- 由于上 github 网络不稳定，推送代码都是反复连接不上，反复失败，直到运气好； 
- 如果你用加速软件（比如：watt toolkit）上 github，则推送失败（提示：**SSL 证书之类的问题**）。
  **解决办法**：
```bash
  git config --global http.sslverify false
```
- deploy 过程直到需要验证的时候停下来，出现提示输入`password`，大概是
  `Git: https://GITHUB_USERNAME@github.com(Press 'Enter' to confirm or 'Escape' to cancel)`
  **如果你输入 github 密码，恭喜你掉坑了。**

  （……%&……￥&##，标准 C 语言），
  我反复检查自己 github 账号密码仓库设置等等、git 的 config 中的账号和邮件、电脑的环境变量、VSCode 的设置、反复删除新建 github 仓库来测试 、反复看 Docusaurus 的官方文档，反复看 `Docusaurus.config.js` 设置，网上反复搜索原因，反复 `deploy` ……
  （……%&……￥&##，标准 C++ 语言）
  原来的是 软件 Git 的提示有歧义！！！！！！
  编写 Git 的这部分代码的那个程序员的语言表达能力远远低于正常人水平！！！
  祸害了无数人。

  **这里其实需要的是 `access token` 令牌:**
```
settings --> Developer settings --> Personal access tokens --> Tokens(classic) --> Generate new token -->
选择有效期、权限（至少选中 repo ）--> 得到 access token。
```

Docusaurus 的官方文档有
Triggering deployment with Buddy
但是……如果没有碰过 `access token`， 还真不知道这个昏暗的角落里藏着……
```bash
GIT_USER=<GH_PERSONAL_ACCESS_TOKEN>
git config --global user.email "<YOUR_GH_EMAIL>"
git config --global user.name "<YOUR_GH_USERNAME>"
yarn deploy
```
  
#### 5.5. 部署到 gitee：
在已经部署到了 github 的前提下，把仓库导入到 gitee，然后进行相关配置。（实际上相当于做了镜像？）

默认的使用办法看 gitee pages 的官方文档 
https://help.gitee.com/services/gitee-pages/intro

这里以个人用户名的个人性化网址为例来记录：
不妨 github 和 gitee 的用户名都是 abc，
如果两个 git 的用户名不一样，这里是在 gitee 中操作，你应该知道该填那个用户名。
现在已经部署到了github，仓库名为： `abc.github.io`
访问的网址为：`https://abc.github.io/`

在 gitee pages 中，默认情况下，路径就是你的仓库名。如果想首页访问地址不带二级目录，
例如：`abc.gitee.io`，
- 则所用的仓库名要求是：`abc`，
- 仓库为`https://gitee.com/abc/abc`
- 访问你的 gitee pages 的首页地址为 `https://abc.github.io/`

##### 5.5.1. 大概的步骤：
1. 导入 github 仓库：
   选择导入仓库（通常在右上角的 `+`）-->从 GitHub 导入仓库
   - 注意 ：如果已经用重名的仓库，得先删除它
   - 默认情况下，会自动帮你把路径填为你的用户名，如果没有，则自己选择或自己输入你的用户名为路径
2. 设置仓库为公开仓库：
   没有特别强调，则几乎所有选项都是默认，
   当前仓库-->管理-->选好所需的默认分支-->公开（开源）
3. 部署：
   当前仓库-->服务-->Gitee Pages-->选所需部署的分支-->启动服务
   - 启用 Gitee Pages 需要实名认证。

通过从 github 导入到 gitee 这种方式，操作比较简单。

##### 5.5.2. 其它部署方法
###### 方法二：
如果你想从 Docusaurus 直接打包部署，可能会有问题（主要是路径问题和上传代码问题）：
1. 路径问题：需要修改 `Docusaurus.config.js` 相应的信息（路径）
2. 上传问题：
   - 我们在通常情况下，习惯在 Git 中填写的是 Github 的用户名；
   - 在 VSCode 中也常用 Github 的用户名和密码；
   - Github 或 Gitee 仓库有可能需要用 token（口令）来校验；
  
无论是用命令行，或者 VSCode 来操作，上传代码可能有坑；即使能上传成功，但有网页的访问路径可能也有问题，得花比较多的时间来填坑。

###### 方法三：
先打包，再上传到 Gitee。出现坑的可能性比方法二的小。   