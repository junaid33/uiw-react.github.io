(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[120],{

/***/ 636:
/***/ (function(module, exports) {

module.exports = "Message 全局提示\n===\n\n全局展示操作反馈信息。\n\n### 基本用法\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  render() {\n    const ButtonGroup = Button.Group\n    return (\n      <div>\n        <ButtonGroup>\n          <Button size=\"small\" onClick={()=>{\n            Message.success('This is an success Message.')\n          }}>\n            success\n          </Button>  \n          \n          <Button size=\"small\" onClick={()=>{\n            Message.warning('This is an warning Message.')\n          }}>\n            warning\n          </Button>  \n\n          <Button size=\"small\" onClick={()=>{\n            Message.info('This is an info Message.')\n          }}>\n            info\n          </Button>  \n\n          \n          <Button size=\"small\" onClick={()=>{\n            Message.error('This is an error Message.',{duration:4})\n          }}>\n            error\n          </Button>  \n          \n        </ButtonGroup>\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n\n### 添加HTML输出\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  render() {\n    return (\n      <Button size=\"small\" onClick={()=>{\n        Message.info(\n          <div>\n            <h2>标题</h2>\n            <p>这里是内容</p>\n          </div>\n        )\n      }}>\n        添加HTML输出 \n      </Button> \n    )\n  }\n}\n```\n<!--End-->\n\n### 延迟关闭\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  render() {\n    return (\n      <Button size=\"small\" onClick={()=>{\n        Message.error('This is an warning Message.',{\n          duration:3,\n          onClose:()=>{\n            console.log(\"添加onClose事件\")\n          }\n        })\n      }}>\n        error, 自动3s关闭\n      </Button>\n    )\n  }\n}\n```\n<!--End-->\n\n### 不同的位置弹出(有待完善)\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  render() {\n    const ButtonGroup = Button.Group\n    return (\n      <div>\n        <ButtonGroup>\n          <Button size=\"small\" onClick={()=>{\n            Message.success('默认顶部中间.',{placement:\"top\"})\n          }}>\n            默认顶部中间\n          </Button>\n          <Button size=\"small\" onClick={()=>{\n            Message.info('底部中间',{placement:\"bottom\"})\n          }}>\n            底部中间\n          </Button>\n          <Button size=\"small\" onClick={()=>{\n            Message.success('左边上角',{placement:\"topLeft\"})\n          }}>\n            左边上角\n          </Button>\n          <Button size=\"small\" onClick={()=>{\n            Message.success('右边上角',{placement:\"topRight\"})\n          }}>\n            右边上角\n          </Button>\n          <Button size=\"small\" onClick={()=>{\n            Message.success('左边下角',{placement:\"bottomLeft\"})\n          }}>\n            左边下角\n          </Button>\n          <Button size=\"small\" onClick={()=>{\n            Message.success('右边下角',{placement:\"bottomRight\"})\n          }}>\n            右边下角\n          </Button>\n        </ButtonGroup>\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n### API\n\n组件提供了一些静态方法，使用方式和参数如下：\n\n```js\nMessage.success(content, config)  \nMessage.error(content, config)  \nMessage.info(content, config)  \nMessage.warning(content, config)  \nMessage.loading(content, config)  \n```\n\n### Message config\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| content | 提示内容 | string、ReactNode | - |\n| duration | 自动关闭的延时，单位秒 | number | 3 |\n| placement | 弹出位置 `top`、`bottom`、`topLeft`、`topRight`、`bottomLeft`、`bottomRight` | string | top |\n| onClose | 关闭时触发的回调函数 | Function | - |"

/***/ })

}]);