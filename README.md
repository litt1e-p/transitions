# libit

下载即可开始组件开发

> webpck4+babel7版本 - master 分支，如果需要webpack3+babel6版本请 clone webpack3-babel6分支

## 组件开发

#### 配置

package.json 里含有注释部分

#### 运行

根目录下

```js
npm i
npm run dev
npm run build
npm run build:es
npm run build:browser
npm run build:umd
```

> dev运行的是 rollup watch，监听src文件夹的变化，实时打包插件

#### 开发

只需要关注src目录，.babelrc文件设置了src目录为root

src目录下的模块引入，不需要'../../'

```js
import Component from 'components/component'
import util from 'utils/util'
import mixins from 'mixins/mixin'
...
```

#### 打包

dist 输出文件

- vue-rollup-component-template.css
- vue-rollup-component-template.esm.js
- vue-rollup-component-template.min.js
- vue-rollup-component-template.umd.js

## github pages

#### 运行

> sample 目录下

```js
npm i
npm run dev // 默认端口 7777
npm run devp
npm run build
```
> 入口文件是组件打包后的js，运行时自动监听入口文件的变化，实时响应

## 参考

- [从0搭建rollup+vue组件模板，轻松发布npm、githubpages](https://segmentfault.com/a/1190000019744295)

- [blryli/vue-rollup-component-template](https://github.com/blryli/vue-rollup-component-template)
