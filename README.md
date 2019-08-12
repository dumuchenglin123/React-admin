This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`


### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


### 坑总结

## 1.引用antd css时 无效果 

*** 要实现css按需加载， 在webpack.config里面 babel-loader 添加 ***

```
  plugins: [
                  [
                    require.resolve('babel-plugin-named-asset-import'),
                    {
                      loaderMap: {
                        svg: {
                          ReactComponent: '@svgr/webpack?-svgo,+ref![path]',
                        },
                      },
                    },


                  ],
                  //   在此处加上下面代码才能 antd css实现按需加载
                  ['import', { libraryName: 'antd', style: 'css' }],
                ],
```
这样，主文件只需引用 所需组件就行， 它自动加载相应的CSS

## eslint检测 实现保存前自动格式化

*** 除了在vscode 里的eslint.autoFixedOnsave 为 true时，同时要有相应的eslintrc文件，若没生效建议重启一遍服务器 ***

## React router  因只涉及到浏览器 加载路由时 只需下载 React-router-dom 包
[react-router](https://www.jianshu.com/p/548674270455)


## 在配置路由时  请参照 
[react-router](https://zhuanlan.zhihu.com/p/43581520)


## 实时编写组件文档，一边收集组件文档
[storybook](https://storybook.js.org/docs/guides/guide-react/)

## 文档结构
```
 ├── .storybook                               storybook 配置文件
├── .vscode
├── config
│   ├── env.js
│   ├── jest
│   ├── modules.js
│   ├── paths.js
│   ├── pnpTs.js
│   ├── webpack.config.js
│   └── webpackDevServer.config.js
├── config-overrides.js
├── mark.txt
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo.svg
│   └── manifest.json
├── README.md
├── scripts
│   ├── build.js
│   ├── start.js
│   └── test.js
├── src
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── components                      组件库
│   ├── index.css
│   ├── index.js
│   ├── layouts                         布局组件
│   ├── logo.svg                        LOGO图表
│   ├── router                          路由列表
│   ├── serviceWorker.js                react-app自带
│   ├── utils                           工具库
│   └── views                           页面文件夹
├── stories                             bookstory 文档编辑处
    └── index.js


```
