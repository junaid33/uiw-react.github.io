(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[149],{

/***/ 665:
/***/ (function(module, exports) {

module.exports = "Affix 图钉\n===\n\n使用图钉，可以将内容固定在屏幕可视范围，并且不随页面的滚动而滚动。常用于侧边菜单等。\n\n\n### 基本用法\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  render(){\n    return (\n    <Affix>\n      <Button type=\"primary\">钉在顶部</Button>\n    </Affix>\n    )\n  }\n}\n```\n<!--End-->\n\n### 钉在底部\n\n这个实例需要你缩小窗口高度，就可以测试看效果啦。\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  render(){\n    return (\n      <Affix offsetBottom={10} onChange={(affixed)=>console.log(\"affixed::\",affixed)}>\n        <Button type=\"primary\">钉在底部</Button>\n      </Affix>\n    )\n  }\n}\n```\n<!--End-->\n\n## API\n\n### Affix\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| offsetBottom | \t距离窗口底部达到指定偏移量后触发 | Number| - |\n| offsetTop | \t距离窗口顶部达到指定偏移量后触发 | Number| - |\n| onChange | \t\t固定状态改变时触发的回调函数 | Function(affixed) | - |"

/***/ })

}]);