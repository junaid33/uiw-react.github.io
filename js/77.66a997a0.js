(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[77],{

/***/ 593:
/***/ (function(module, exports) {

module.exports = "Input Number 数字输入框\n===\n\n仅允许输入标准的数字值，可定义范围\n\n### 基本用法\n\n<!--DemoStart--> \n可以输入`+` `-` `.` `e` 和数字\n```js\nconstructor(props) {\n  super(props);\n  this.state = {\n    value: 1\n  }\n}\nonChange(e,value) {\n  console.log(`value - ${value}`)\n}\nrender() {\n  return (\n    <InputNumber value={this.state.value} onChange={this.onChange.bind(this)} min=\"5\" max=\"10\"></InputNumber>\n  )\n}\n```\n<!--End-->\n\n### 禁用\n\n<!--DemoStart--> \n可以输入`+` `-` `.` `e` 和数字\n```js\nconstructor(props) {\n  super(props);\n  this.state = {\n    value: 1\n  }\n}\nonChange(e,value) {\n  console.log(`value - ${value}`)\n}\nrender() {\n  return (\n    <InputNumber disabled={true} value={this.state.value} onChange={this.onChange.bind(this)} min=\"5\" max=\"10\"></InputNumber>\n  )\n}\n```\n<!--End-->\n\n### 输入长度\n\n<!--DemoStart--> \n除了默认的大小外，还提供了 `large`、`small` 和 `mini` 三种尺寸。\n```js\nconstructor(props) {\n  super(props);\n  this.state = {\n    value: 1\n  }\n}\nonChange(e,value) {\n    console.log(`value - ${value}`)\n}\nhandleIconClick(e,value){\n    console.log(`value - ${value}`)\n    Message.success(`您输入了数字 - ${value}`)\n}\nrender() {\n  return (\n    <InputNumber \n      preIcon=\"pay\" \n      icon=\"search\" \n      length={10} \n      value={this.state.value} \n      onChange={this.onChange.bind(this)}\n      onIconClick={this.handleIconClick.bind(this)} />\n  )\n}\n```\n<!--End-->\n\n### 小数点\n\n<!--DemoStart--> \n除了默认的大小外，还提供了 `large`、`small` 和 `mini` 三种尺寸。\n```js\nconstructor(props) {\n  super(props);\n  this.state = {\n    value: 1\n  }\n}\nonChange(e,value) {\n    console.log(`value - ${value}`)\n}\nhandleIconClick(e,value){\n    console.log(`value - ${value}`)\n    Message.success(`您输入了数字 - ${value}`)\n}\nrender() {\n  return (\n    <InputNumber \n      preIcon=\"pay\" \n      icon=\"search\" \n      step=\"0.5\"\n      length={10} \n      value={this.state.value} \n      onChange={this.onChange.bind(this)}\n      onIconClick={this.handleIconClick.bind(this)} />\n  )\n}\n```\n<!--End-->\n\n### 输入框尺寸\n\n<!--DemoStart--> \n可以输入`+` `-` `.` `e` 和数字\n```js\nrender() {\n  const {Row,Col} = Layout;\n  return (\n    <Row gutter=\"20\">\n      <Col span=\"6\">\n        <InputNumber size=\"large\" preIcon=\"pay\" icon=\"search\" length={10} value=''/>\n      </Col>\n      <Col span=\"6\">\n        <InputNumber preIcon=\"pay\" icon=\"search\" length={10} value=''/>\n      </Col>\n      <Col span=\"6\">\n        <InputNumber size=\"small\" preIcon=\"pay\" icon=\"search\" length={10} value=''/>\n      </Col>\n      <Col span=\"6\">\n        <InputNumber size=\"mini\" preIcon=\"pay\" icon=\"search\" value=''/>\n      </Col>\n    </Row>\n  )\n}\n```\n<!--End-->\n\n## API\n\n### InputNumber\n\n继承Input部分参数，例如`preIcon`、`length`\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| max | 最大值 | Number | Infinity |\n| min | 最小值 | Number | -Infinity |\n| length | 输入的最大长度，这里继承`Input`组件属性 | Number | Infinity |\n| value | 当前值 | Number | 1 |\n| step | 每次改变的步伐，可以是小数 | Number |  1 |\n| size | 输入框尺寸，可选值为 `large`、`small` 和 `mini` 或者不填 | String | - |\n| disabled | 设置禁用状态 | Boolean | false |\n| onChange | 数值改变时的回调，返回当前值 | Funtcion(e:Even,value:Number) | false |"

/***/ })

}]);