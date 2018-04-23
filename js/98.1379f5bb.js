(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[98],{

/***/ 614:
/***/ (function(module, exports) {

module.exports = "Upload 标签\n===\n\n### 拖拽上传\n\n可批量拖拽图片上传。\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  render() {\n    return (\n      <div>\n        <Upload.Dragger \n          onChange={(value1)=>{\n            console.log(\"value1::\",value1)\n          }}\n          onRemove={(value2)=>{\n            console.log(\"value2::\",value2)\n          }}\n          limit={3}\n        />\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n\n\n## API\n\n### Upload.Dragger\n\n| 参数      | 说明    | 类型      |  默认值   |\n|--------- |-------- |---------- |-------- |\n| onChange | 拖拽完成触发,可获取图片的base64编码以及二进制编码容器blob | function(value) | - |\n| onRemove | 删除某张图片 | function(value) | - |\n| disabled | 禁止点击按钮 | Boolean | `false` |\n| limit    | 限制上传张数 | Number | - |\n"

/***/ })

}]);