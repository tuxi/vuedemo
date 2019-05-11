# vuedemo

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


### 安装 nodejs 环境

你可以在 https://nodejs.org/ nodejs 官方网站下载安装包，然后进行安装。如果是 linux 或者 mac 命令行的用户，也可以使用命令行安装。

在安装好了 nodejs 之后，我们在终端中输入以下两个命令：
```
node -v
npm -v
```
能够得到版本号信息，则说明你的 nodejs 环境已经安装完成了。

### 安装 vue-cli VUE的脚手架工具

vue-cil是vue的脚手架工具。其模板可以通过 [vuejs-templates](https://github.com/vuejs-templates/webpack) 来查看。

- 安装vue-cli
> 我们首先安装全局vue-cil脚手架,用于帮助搭建所需的模板框架，命令如下：

```
npm install -g vue-cli
```
 回车，等待安装...
终端输入`vue `  回车，若出现vue信息说明表示成功。
另外这个命令只需要运行一次就可以了。安装上之后，以后就不用安装了。

- 通过vue-cli 构建项目
> 下面，我们来用vue-cil构建一个项目。

首先，在终端中把进入到存放项目的地方。如我是准备放在~/Desktop/GitHub/这个目录下面，那么我的命令如下：
```
cd ~/Desktop/GitHub/
```
开始构建一个叫vuedemo的vue项目
```
vue init webpack vuedemo
```
接下来根据终端中的提示输入即可：
```
? Project name vuedemo
? Project description A Vue.js project
? Author tuxi <code@objc.com>
? Vue build standalone
? Install vue-router? Yes
? Use ESLint to lint your code? Yes
? Pick an ESLint preset Standard
? Set up unit tests Yes
? Pick a test runner jest
? Setup e2e tests with Nightwatch? Yes
? Should we run `npm install` for you after the project has been created? (recommended) npm

   vue-cli · Generated "vuedemo".
   ...
# Project initialization finished!
# ========================

To get started:

  cd vuedemo
  npm run dev
```
如上所示，就说明我们的项目构建成功了。

- 安装项目依赖
> 通过`npm install` 会根据package.json中的配置安装项目依赖，执行完成后项目根目录下多了一个node_modules文件夹（该文件里的内容就是之前安装的依赖）

```
cd vuedemo
npm install
```

- 运行项目

```
npm run dev
```

成功运行后，控制台输出
```
> vuedemo@1.0.0 dev /Users/xiaoyuan/Desktop/work/Github/vuedemo
> webpack-dev-server --inline --progress --config build/webpack.dev.conf.js

 12% building modules 22/31 modules 9 active ...sktop/work/Github/vuedemo/src/App.vue{ parser: "babylon" } is deprecated; we now treat it as { parser: "babel" }.
 95% emitting                                                                        

 DONE  Compiled successfully in 3800ms                                                                                                      13:50:22

 I  Your application is running here: http://localhost:8080
```
在浏览器访问`http://localhost:8080`，即可看到项目的效果。

- 总结
总上所述，安装vue-cil后执行四行命令，就可以把一个名为vuedemo的项目跑起来。
进入项目文件夹后vue init webpack vuedemo新建一个项目
进入项目`cd vuedemo`
创建项目`npm install`
运行项目`npm run dev`


### 项目目录及文件结构
> 之前我们已经新建好了一个基于vue+webpack的项目。我们在 IDE（Webstorm等） 中打开该目录，结构如下所示：
通过上面的这些命令，我们就实现了新建一个vue+webpack的项目。在运行了npm run dev之后，会自动打开一个浏览器窗口，就可以看到实际的效果了。

- 目录结构

├── README.md                         // 项目说明文档
├── node_modules                      // 项目依赖包文件夹
├── build                                   // 编译配置文件，一般不用管
│   ├── build.js
│   ├── check-versions.js
│   ├── dev-client.js
│   ├── dev-server.js
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
├── config                                  // 项目基本设置文件夹
│   ├── dev.env.js                       // 开发配置文件
│   ├── index.js                          // 配置主文件
│   └── prod.env.js                     // 编译配置文件
├── index.html                            // 项目入口文件
├── package-lock.json                 // npm5 新增文件，优化性能
├── package.json                         // 项目依赖包配置文件
├── src                                       // 我们的项目的源码编写文件
│   ├── App.vue                          // APP入口文件
│   ├── assets                             // 初始项目资源目录，回头删掉
│   │   └── logo.png
│   ├── components                      // 组件目录
│   │   └── Hello.vue                    // 测试组件，回头删除
│   ├── main.js                             // 主配置文件
│   └── router                              // 路由配置文件夹
│       └── index.js                        // 路由配置文件
└── static                                     // 资源放置目录

如上所示，我们的目录结构就是这样的了。
我们绝大多数的操作，就是在 src 这个目录下面。默认的 src 结构比较简单，我们需要重新整理。
另外 static 资源目录，我们也需要根据放置不同的资源，在这边构建不同的子文件夹。

- 配置 src 目录

先不要管这些文件的内容，我们先建立这些空的文件在这边。然后我们后面去完善它。
我们的这个项目是要做两个页面，一个是 cnodejs 的列表页面，一个是详情页面。
所以，我把项目文件夹整理成如下的结构：

├── App.vue                         // APP入口文件
├── api                             // 接口调用工具文件夹
│   └── index.js                    // 接口调用工具
├── components                      // 组件文件夹，目前为空
├── config                          // 项目配置文件夹
│   └── index.js                    // 项目配置文件
├── frame                           // 子路由文件夹
│   └── frame.vue                   // 默认子路由文件
├── main.js                         // 项目配置文件
├── page                                // 我们的页面组件文件夹
│   ├── content.vue             // 准备些 cnodejs 的内容页面
│   └── index.vue                   // 准备些 cnodejs 的列表页面
├── router                          // 路由配置文件夹
│   └── index.js                    // 路由配置文件
├── style                           // scss 样式存放目录
│   ├── base                        // 基础样式存放目录
│   │   ├── _base.scss          // 基础样式文件
│   │   ├── _color.scss     // 项目颜色配置变量文件
│   │   ├── _mixin.scss     // scss 混入文件
│   │   └── _reset.scss     // 浏览器初始化文件
│   ├── scss                        // 页面样式文件夹
│   │   ├── _content.scss       // 内容页面样式文件
│   │   └── _index.scss     // 列表样式文件
│   └── style.scss              // 主样式文件
└── utils                           // 常用工具文件夹
    └── index.js                    // 常用工具文件

因为我们删除了一些默认的文件，所以这个时候项目一定是报错的，先不管他，我们根据我们的需求，新建如上的项目结构。这些都是在 src 目录里面的结构。

### 调整app.vue和设置路由

- 1.调整 App.vue 文件

 我们先把默认项目里面没用的东西先删除掉，把代码调整为下面的样子。

```html
 <template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="css">
  @import "./style/style.scss";
</style>

```

入口，只有一个空的路由视窗，我们的项目的所有内容，都基于这个视窗来展现。因为scss文件容易出现语法错误，这里先用css文件替代。后期熟悉之后再更改
我们的样式，都将从 src/style/index.css这个文件中引用，如果没有请按路径新建！

- 2.调整 index.vue 和 content.vue 文件

在 page 文件夹下面建立了两个空文本文件 index.vue 和 content.vue 文件，用来放列表和内容的。

这里，我们先去填写一点基础内容在里面。

index.vue
```
<template>
  <div>index page</div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style scoped>

</style>

```

content.vue
```
<template>
  <div>content page</div>
</template>

<script>
export default {
  name: 'content'
}
</script>

<style scoped>

</style>

```

先在index.vue和content.vue中添加上面的内容，后面再丰富这些内容。

- 3.调整 router 路由文件
> 现在，这个项目还跑不起来呢，如果你运行` npm run dev `还是会出错的。因为我们还没有配置路由，而默认的路由文件，引用了一个 HelloWorld.vue 的组件，这个组件被我删除掉了。所以，这里就报错啦。。

删除src/router/index.js中的内容，添加我们的自定义内容
```vue
import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Content from '@/page/content'

Vue.use(Router)

export default new Router({
  routes: [
    {
      'path': '/',
      'component': Index
    }, {
      'path': '/content/:id', // 为什么使用id，因为我们的内容页面是要展示N条内容的，我们如何来区分这些内容呢，就是根据id来进行区分
      component: Content
    }
  ]
})

```
更多内容，可以参考官方文档[动态路由匹配](https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html)

好，我们现在，项目应该是没有任何错误，可以跑起来了。忘记跑起来的命令了？如下：
```
npm run dev
```
在浏览器查看0.0.0.0:8080，可以看到index page字样，这就是我们目前的主页

### 配置axios api接口调用文件

- 安装axios
> 我们要使用 axios 工具，就必须先安装 axios 工具。执行下面的命令进行安装

```
npm install axios -D
```

- 封装 axios 工具，编辑 src/api/index.js 文件

在 src/api/中新建index.js文件，添加以下内容，实现网络请求
```js
// 配置API接口地址
var root = 'https://objc.com.cn/api'
// 引用axios
var axios = require('axios')
// 自定义判断元素类型JS
function toType (obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
// 参数过滤函数
function filterNull (o) {
  for (var key in o) {
    if (o[key] === null) {
      delete o[key]
    }
    if (toType(o[key]) === 'string') {
      o[key] = o[key].trim()
    } else if (toType(o[key]) === 'object') {
      o[key] = filterNull(o[key])
    } else if (toType(o[key]) === 'array') {
      o[key] = filterNull(o[key])
    }
  }
  return o
}

/*
  api接口请求函数
*/

function apiAxios (method, url, params, success, failture) {
  if (params) {
    params = filterNull(params)
  }
  axios({
    method: method,
    url: url,
    data: method === 'POST' || method === 'PUT' ? params : null,
    params: method === 'GET' || method === 'DELETE' ? params : null,
    baseURL: root,
    withCredentials: false
  })
    .then(function (res) {
      if (res.data.success == true) {
        if (success) {
          success(res.data)
        }
      } else {
        if (failture) {
          failture(res.data)
        } else {
          window.alert('error: ' + JSON.stringify(res.data))
        }
      }
    })
    .catch(function (err) {
      let res = err.response
      if (err) {
        window.alert('api error, HTTP CODE: ' + res.status)
      }
    })
}

// GET POST PUT DELETE 四种请求方式的函数，可在vue模板中的调用此函数请求数据
export default {
  get: function (url, params, success, failure) {
    return apiAxios('GET', url, params, success, failure)
  },
  post: function (url, params, success, failure) {
    return apiAxios('POST', url, params, success, failure)
  },
  put: function (url, params, success, failure) {
    return apiAxios('PUT', url, params, success, failure)
  },
  delete: function (url, params, success, failure) {
    return apiAxios('DELETE', url, params, success, failure)
  }
}

```

有关 axios 的更多内容，请参考官方 github： https://github.com/mzabriskie/axios ，中文资料自行百度。

但就是这样，我们还不能再 vue 模板文件中使用这个工具，还需要调整一下 main.js 文件。

- 调整 main.js 绑定 api/index.js 文件

这次呢，我们没有上来就调整 main.js 文件，因为原始文件就配置得比较好，我就没有刻意的想要调整它。

src/main.js原始文件如下：
```
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

```

插入以下代码，将api绑定到main.js
```
// 引入api文件
import api from './api/index'
// 将api绑定到全局
Vue.prototype.$api = api

```

src/main.js 修改后的代码：
```
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入api文件
import api from './api/index'
// 将api绑定到全局
Vue.prototype.$api = api

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

```

这样，就可以在项目中使用封装的 api 接口调用文件了。

- 测试封装的api接口能不能调通

我们来修改一下 src/page/index.vue 文件，将代码调整为以下代码：
```
<template>
  <div>index page</div>
</template>

<script>
export default {
  name: 'index',
  created () {
    this.$api.get('articleBaseInfos', null, r => {
      // console.log(r)
      window.alert(r)
    })
  }
}
</script>
```

好，这里是调用 objc.com.cn 的 articleBaseInfos 文章列表接口，并且将结果打印出来。

我们在浏览器中打开控制台，看看 console 下面有没有输出入下图一样的内容。如果有的话，就说明我们的接口配置已经成功了。

### 将接口用webpack代理到本地

我们已经非常顺利的调用到了 objc.com.cn 的接口了。但是，我们可以注意到我们的 src/api/index.js 的第一句，就是：

```
// 配置API接口地址
var root = 'https://objc.com.cn/api'
```

这里，我们将接口地址写死了。

当然，这并不是最重要的事情，而是 cnodejs.org 帮我们把接口处理得很好，解决了跨域的问题。而我们的实际项目中，很多接口都是不允许我们这样跨域请求的。

而我们的开发环境下，不可能跑到服务器上直接开发，或者在本地直接搞一个服务器环境，这样就违背了我们前后端分离开发的初衷了。

如何解决这个问题呢？其实非常好办，要知道 跨域不是接口的限制 而是浏览器为了保障数据安全做的限制。因此，一种方法可以解决，那就是打开浏览器的限制，让我们可以顺利的进行开发。但是无奈的是，最新的 chrome 浏览器好像已经关闭了这个选项，那么我们只能采用另外一种方法了——将接口代理到本地。

- 配置 webpack 将接口代理到本地

好在，vue-cli 脚手架工具，已经充分的考虑了这个问题，我们只要进行简单的设置，就可以实现我们的目的。

我们打开项目根目录下的 config/index.js 文件，找到以下代码：
```
dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },
```

其中，proxyTable: {}, 这一行，就是给我们配置代理的。

根据 objc.com.cn 的接口，我们把这里调整为：
```
proxyTable: {
      '/api/**': {
        target: 'https://objc.com.cn',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/api': '/api'
        }
      }
}
```
OK，我们这样配置好后，就可以将接口代理到本地了。

更多接口参数配置，请参考 https://github.com/chimurai/http-proxy-middleware#options

webpack 接口配置文档 https://webpack.js.org/configuration/dev-server/#devserver-proxy

- .重新配置 src/api/index.js 文件

好，上面已经代理成功了，但是我们的 src/api/index.js 文件，还是直接调用的人家的地址呢，我们要调整为我们的地址，调整如下：

```
// 配置API接口地址
var root = '/api/v1'
```


值得注意的事情是，配置完成后，是不会立即生效的，我们需要重启我们的项目。
我们按 ctrl + c 停止掉之前的服务，然后重新输入命令 npm run dev 重启项目，就可以了。

我们打开浏览器控制台，切换到 network 选项卡中，选中我们调用的接口 topics 接口，我们可以清晰的看到，我们读取的接口地址是我们的本地代理过来的地址。

状态码为 304 代表这个数据没有发生变化，直接读取本地缓存了。关于 http 状态码 的部分，请参考 [度百科 http 状态码](https://baike.baidu.com/item/HTTP状态码)不做过多的说明。

我们再看一下数据是不是正常的过来了。切换到 Previdw 选项卡查看，没有问题，数据过来了。

好，到这里，我们已经顺利的将接口代理到本地，并且数据读取出来了。我们开始准备下面的工作吧！

### 初识*.vue文件，即VUE组件

 *.vue 文件，是一个自定义的文件类型，用类 HTML 语法描述一个 Vue 组件。每个 .vue文件包含三种类型的顶级语言块 <template>, <script> 和 <style>。这三个部分分别代表了 html,js,css。

其中 <template> 和 <style> 是支持用预编译语言来写的。比如，在我们的项目中，我们可以用 scss 预编译，我们可以这样写的：<style lang="scss">
html 也有自己的预编译语言， vue 也是支持的，不过一般来说，我们前端人员还是比较中意 html 原生语言，所以，我就不过多阐述了。

另外，我在 App.vue 文件中，已经用一句 @import "./style/style"; 将我们的样式给写到指定的地方去了。所以，在后面所有的我的文章中，是不会出现这个部分的内容的。所有样式，都会在 src/style/ 文件夹中对应的位置去写。 
我这样做的好处是，不需要重复的引入各种 scss 基础文件，并且做到了项目的样式代码的可管控

- 一个常见的 *.vue 文件代码解析
首先，我们来简单看一下：
```
<template>
  <div>
    <Header></Header>
    <div class="article_list">
      <ul>
        <li></li>
      </ul>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'
export default {
  components: { Header, Footer },
  data () {
    return {
      list: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$api.get('topics', null, r => {
        console.log(r)
      })
    }
  }
}
</script>
<style>
  .article_list {margin: auto;}
</style>
```

- template 部分

首先，一个 vue 组件，他的 template 则代表它的 html 结构，相信大家可以理解了。但是需要注意的是，我们不是说把代码包裹在 <template></template> 中就可以了，而是必须在里面放置一个 html 标签来包裹所有的代码。 本例子中，我们采用了 <div></div> 标签。vue2.x 开始，就必须这样去写。这是规定

大家看到 <Header></Header> 这个代码的时候肯定很奇怪，这是个什么玩意儿。其实，这是一个自定义组件。我们在其他地方写好了一个组件，然后就可以用这种方式引入进来。

同样 <Footer></Footer> 也是一个组件。不再累述。

其他的内容，我们就想这么写就怎么写了。和写我们的 html 代码没有什么太大的区别。

- script 部分

首先，我们需要两个自定义组件，我们先引用进来。如下格式，比较好理解吧。

```
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'
```
其次，除了引用的文件，我们将所有的代码包裹于如下的代码中间：
```
export default {
	// 这里写你的代码，外面要包起来。
}

```

- style 部分

这里比较简单，就是针对我们的 template 里内容出现的 html 元素写一些样式。如上，我的代码：
```
<style>
	.article_list {margin: auto;}
</style>
```
就是给我们的 .article_list 元素随便加了一个样式。

参考资料：[《vue 模板语法》](https://cn.vuejs.org/v2/guide/syntax.html)

### 渲染列表

- 制作 header.vue 和 footer.vue 组件文件。
  
  不是本篇文章的重点，但是还是有比较讲一下。在第三篇博文中，我们规划了我们的项目文件结构，当时保留了一个 components 的空文件夹。这里，就是准备放我们的自定义组件的。
  
  首先，我们去创建两个空文本文件，分别是 header.vue 文件和 footer.vue 文件。
  
  然后，往里面输入下面的内容：
