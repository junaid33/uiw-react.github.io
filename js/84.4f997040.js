(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[84],{

/***/ 600:
/***/ (function(module, exports) {

module.exports = "DatePicker 日期选择器\n===\n\n用于选择或输入日期\n\n## 基础实例\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  constructor(props){\n    super(props);\n    this.state = {\n      value : new Date()\n    }\n  }\n\n  render() {\n    const { value } = this.state;\n    return (\n      <div>\n        <DatePicker\n          showToday\n          value={`${value}`}\n          shortcutinline={true}\n          shortcuts={[\n            {\n              text: '昨天',\n              onClick: ()=> {\n                this.setState({value: new Date(Date.now() - 86400000)})\n              }\n            }, {\n              text: '一周前',\n              onClick: ()=> {\n              this.setState({value: new Date(Date.now() - 86400000 * 7)})\n              }\n            }, {\n              text: '一月前',\n              onClick: ()=> {\n              this.setState({value: new Date(Date.now() - 86400000 * 30)})\n              }\n            }\n          ]}\n        />\n        <DatePicker showToday={'test'} />\n        <DatePicker showToday={true} value={new Date()}  />\n        <DatePicker showToday={true} value={new Date()} weekLabel={['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']}/>\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n## 定制日期单元格\n\n使用 `renderDate` 可以自定义日期单元格的内容和样式。\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  constructor(props){\n    super(props);\n    this.state = {\n      value : new Date()\n    }\n  }\n\n  render() {\n    const { value } = this.state;\n    return (\n      <div>\n        <DatePicker \n          renderDate={(item,isSelect)=>{\n            const style = {\n              display: 'block',\n            };\n            let todayLabel ='';\n            if(item.today){\n              style.color='red';\n              style.fontWeight='bold';\n              style.fontSize=12;\n              todayLabel = <span style={{\n                transform:'scale(0.6)',\n                width:'100%',\n                boxShadow:'inset 0 0 0',\n              }}>o</span>\n            }\n            if(item.className === 'prev'){\n              style.color='#ffa4a4';\n              style.background='#efefef';\n            }\n            if(item.className === 'next'){\n              style.color='#95bdff';\n              style.background='#efefef';\n            }\n            if(item.week === 0){\n              style.color='#ffba78';\n            }\n            if(isSelect){\n              style.background='#ff7070';\n              style.color='#fff';\n            }\n            return (\n              <span style={style}>{item.today?todayLabel:item.day}</span>\n            )\n          }}\n          showToday={true} value={`${new Date()}`}  />\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n## 格式化时间\n\n通过设置`format`支持简单的格式化，特别注意`2017-11-28`这种形式，在Safari上面会报错误。\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  constructor(props){\n    super(props);\n    this.state = {\n      value:'2017/11/28',\n      format:'Y闰年?m月d日',\n      format1:'Y闰年?m月d日',\n      format2:'Y/m/d',\n      radioValue: 1\n    }\n  }\n  onChangeRadio(e,value){\n    const {format1,format2} = this.state;\n    let format = format1;\n    if(value === 2){\n      format = format2;\n    }\n    this.setState({ radioValue: value, format});\n  }\n  render() {\n    const {format1,format2} = this.state;\n    return (\n      <div>\n        <DatePicker showToday={true} format={this.state.format} value={this.state.value} />\n        <div style={{paddingTop:10}}>\n          <Radio value={1} checked={this.state.radioValue === 1} onChange={this.onChangeRadio.bind(this)}>格式：{format1}</Radio>\n        </div>\n        <div style={{paddingTop:10}}>\n          <Radio value={2} checked={this.state.radioValue === 2} onChange={this.onChangeRadio.bind(this)}>格式：{format2}</Radio>\n        </div>\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n## 禁用控件\n\n选择框的不可用状态。\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  constructor(props){\n    super(props);\n    this.state = {\n      checked:true\n    }\n  }\n  onChange(e, checked){\n    this.setState({checked})\n  }\n  render() {\n    const {checked} = this.state;\n    return (\n      <div>\n        <DatePicker disabled={checked} />\n        <DatePicker disabled={checked} showToday={true} />\n        <DatePicker disabled={checked} showToday={true} value={`${new Date()}`} />\n        <div style={{paddingTop:20}}>\n          <Switch onChange={this.onChange.bind(this)} checked={checked} checkedChildren=\"取消禁用\" unCheckedChildren=\"禁用控件\" color=\"#3eb54c\" unColor=\"#ff4949\" />\n        </div>\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n## 禁用时间\n\n通过设置`disabledDate`来禁止选择部分日期。\n\n<!--DemoStart--> \n```js\nfunction disabledDate(current) {\n  // 今天和今天之前不能选择几天\n  return current && current.date.valueOf() < Date.now();\n}\nclass Demo extends Component {\n  constructor(props){\n    super(props);\n    this.state = {\n      value : ''\n    }\n  }\n  render() {\n    const { value } = this.state;\n    return (\n      <div>\n        <DatePicker disabledDate={disabledDate} showToday={true} value={value}  />\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n## 选择时分秒\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  render() {\n    return (\n      <div>\n        <DatePicker format=\"Y年m月d日 H:i:s\" showTime={true}/>\n        <DatePicker format=\"Y/m/d H:i:s\" showToday={true} showTime={true} />\n        <DatePicker format=\"Y年m月d日 H:i:s\" showToday={true} showTime={true} value={`${new Date()}`} />\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n\n## 安装和使用\n\n```bash\nnpm install uiw --save\n```\n\n```js\nimport { DatePicker } from 'uiw';\n// or\nimport DatePicker from 'uiw/lib/date-picker';\n```\n\n> 输入框继承 `<Input/>` 组件。支持 Input 的部分属性如`size`,`disabled`, `size`, `autoFocus`, `preIcon`, `defaultValue`\n\n### DatePicker\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| value | 日期 | Date | - |\n| placeholder | 占位内容 | String | - |\n| format | 格式化时间，例如：`Y年m月d日 H:i:s`，年`Y`，月`m`，日`d`，时`H`，分`i`，秒`s` | String | `Y/m/d` |\n| allowClear | 允许清除 | Boolean | - |\n| showToday | 是否展示“今天”按钮 | Boolean/ReactNode | false |\n| showTime | 是否展示“选择时间”按钮 | Boolean/Object | false |\n| weekLabel | 星期显示文本 | Array | `['日', '一', '二', '三', '四', '五', '六']` |\n| disabled | 禁用日历 | Boolean | - |\n| disabledDate | 不可选择的日期 | function(dateItem:{day,month,date,format,week})=> boolean | - |\n| disabledTime | 禁用时间 | Function(date) | - |\n| renderDate | 自定义日期单元格的内容 | Function(item:{ `tody`,`className['prev','next']`,`week`,`month`,`date`,`format`}, isSelect) | - |\n| align | 占位内容 | Enum{`left` `center` `right`} | - |\n| shortcuts | 快捷按钮 | Array | - |\n| shortcutinline | inline 显示 | Boolean | `true` |\n| shortcutClassName | 快捷键样式类名称 | String | - |\n| onChange | 时间发生变化的回调 time:`2017-12-18 12:18:43`、timeString:`Fri Jul 28 2017 09:45:00 GMT+0800 (CST)` | function(time:String, timeString: String) | - |\n\n### shortcut\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| text | 显示文本内容 | String | - |\n| onClick | 点击回调函数 | Function | - |\n"

/***/ })

}]);