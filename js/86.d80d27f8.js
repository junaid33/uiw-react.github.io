(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[86],{

/***/ 608:
/***/ (function(module, exports) {

module.exports = "CopyToClipboard 复制\n===\n\n将文本到剪切板，复制到剪贴板功能可以应用于各种元素。\n\n## 基础实例\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  render() {\n    return (\n      <div>\n        <CopyToClipboard text=\"我被一个连接复制了！\" tooltip=\"复制成功！\"> 点击我复制 </CopyToClipboard>\n        <CopyToClipboard text=\"我被一个连接复制了！\" tooltip=\"复制成功！\"> 点击我复制 </CopyToClipboard>\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n## 点击按钮复制\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  constructor(props){\n    super(props);\n    this.state = {\n      copyText: \"生亦何欢，死亦何苦\"\n    }\n  }\n  render() {\n    const { copyText } = this.state;\n    return (\n      <div>\n        <div>点击复制：{copyText}</div>\n        <CopyToClipboard style={{marginTop:10,display:'inline-block'}} text={copyText} tooltip=\"复制成功！\">\n          <Button>点击复制</Button>\n        </CopyToClipboard>\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n## Installation & Usage\n\n```bash\nnpm install uiw --save\n```\n\n```js\nimport { CopyToClipboard } from 'uiw';\n// or\nimport { CopyToClipboard } from 'uiw/lib/copy-to-clipboard';\n```\n\n### Props\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| text | 拷贝的文本 | String | - |\n| tooltip | 拷贝成的提示 | String、ReactNode | - |\n| leaveDelay | `tooltip`消失的时间 | Number | `1000` |\n| onClick | 点击事件 | Function(text,isCopy,event) | - |\n"

/***/ })

}]);