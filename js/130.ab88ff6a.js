(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[130],{

/***/ 646:
/***/ (function(module, exports) {

module.exports = "HeatMap 日历热图\n===\n\n按照日历形式展示数据的容器。\n\n### 热图日历\n\n<!--DemoStart-->\n```js\nclass Demo extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      values:[\n        { date: '2016-01-11', count:2, content:['一条消息来了！','一条消息来了！'] },\n        { date: '2016-04-11', count:2, content:['一条消息来了！'] },\n        { date: '2016-05-01', count:5, content:['需要显示的数据'] },\n        { date: '2016-05-02', count:5, content:['空的没有消息'] },\n        { date: '2016-05-04', count:11, content:['些放弃的人会这样想'] },\n        { date: '2016-05-14', count:31, content:['需要显示的数据2'] },\n        { date: '2016-05-16', count:2, content:['些放弃的人会这样想3'] },\n        { date: '2016-05-17', count:2, content:['生活中根本就用不到吧？'] },\n        { date: '2016-05-18', count:2, content:['也许差别不是那么大吧？'] },\n        { date: '2016-05-19', count:8, content:['您可以直接在'] },\n        { date: '2016-05-20', count:6, content:['我有一个大胆的想法'] },\n        { date: '2016-05-21', count:41, content:['毕竟时间精力有限'] },\n        { date: '2016-05-22', count:6, content:['友谊赛事。'] },\n        { date: '2017-04-11', count:2, content:['一条消息来了！'] },\n        { date: '2017-05-01', count:5, content:['需要显示的数据'] },\n        { date: '2017-05-02', count:5, content:['空的没有消息'] },\n        { date: '2017-05-04', count:11, content:['些放弃的人会这样想'] },\n        { date: '2017-05-14', count:31, content:['需要显示的数据2'] },\n        { date: '2017-05-16', count:2, content:['些放弃的人会这样想3'] },\n        { date: '2017-05-17', count:2, content:['生活中根本就用不到吧？'] },\n        { date: '2017-05-18', count:2, content:['也许差别不是那么大吧？'] },\n        { date: '2017-05-19', count:8, content:['您可以直接在'] },\n        { date: '2017-05-20', count:6, content:['我有一个大胆的想法'] },\n        { date: '2017-05-21', count:41, content:['毕竟时间精力有限'] },\n        { date: '2017-05-22', count:6, content:['友谊赛事。'] },\n      ]\n    }\n  }\n  render() {\n    return (\n      <div>\n          <HeatMap \n            endDate={new Date('2017/05/19')} // 截止日期\n            monthLables={\n              // 默认选填选项 月份\n              ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']\n            }\n            weekLables={{  // 默认选填选项  周\n              1:'一', 3:'三', 5:'五'\n            }}\n            //tooltip={false}\n            //days={\n            //  //设置显示多少个空格, 默认不填参数，将自适应\n            //  365\n            //}\n            panelColors={{ // 选填\n              0:\"#EBEDF0\",\n              8:\"#7BC96F\",\n              4:\"#C6E48B\",\n              12:\"#239A3B\",\n              32:\"#196127\",\n            }}\n            message={(content,dt)=>{\n              //console.log(\"content::\",content,dt)\n              if(!content) {\n                return dt.date\n              }\n              return content.map((item,idx)=>{\n                return <div key={idx}>{item}</div>\n              })\n            }}\n            //emptyMessage=\"空的没有消息!\"\n            emptyMessage={true}\n            values={this.state.values} // 需要显示的数据，必填\n            onMouseOver={(e,date,result)=>{\n              //console.log(\"onMouseOver::\",date,result)\n            }}\n            onClick={(e,date,result)=>{\n              console.log(\"date,result:\",date,result)\n            }}\n          />\n          <Button size=\"small\" onClick={()=>{\n            this.setState({\n              values:[\n                { date: '2017-04-11', count:2, content:['一条消息来了！'] },\n                { date: '2017-05-01', count:5, content:['需要显示的数据'] },\n                { date: '2017-05-02', count:5, content:['空的没有消息'] },\n                { date: '2017-05-04', count:11, content:['些放弃的人会这样想'] },\n                { date: '2017-05-14', count:31, content:['需要显示的数据2'] },\n                { date: '2017-05-16', count:2, content:['些放弃的人会这样想3'] },\n                { date: '2017-05-17', count:2, content:['生活中根本就用不到吧？'] },\n                { date: '2017-05-18', count:2, content:['也许差别不是那么大吧？'] },\n                { date: '2017-05-19', count:8, content:['您可以直接在'] },\n                { date: '2017-05-20', count:6, content:['我有一个大胆的想法'] },\n                { date: '2017-05-21', count:41, content:['毕竟时间精力有限'] },\n                { date: '2017-05-22', count:6, content:['友谊赛事。'] },\n              ]\n            })\n          }}>切换活跃记录</Button> &nbsp;\n\n          <Button size=\"small\" onClick={()=>{\n            this.setState({\n              values:[\n                { date: '2017-03-11', count:2, content:['一条消息来了！'] },\n                { date: '2017-03-01', count:5, content:['需要显示的数据'] },\n                { date: '2017-04-02', count:5, content:['空的没有消息'] },\n                { date: '2017-04-14', count:11, content:['些放弃的人会这样想'] },\n              ]\n            })\n          }}>切换活跃记录2</Button>\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n## 安装和使用\n\n```bash\nnpm install uiw --save\n```\n\n```js\nimport { HeatMap } from 'uiw';\n// or\nimport HeatMap from 'uiw/lib/heat-map';\n\n```\n\n`@v1.5.5` 之前使用方法，如下：\n\n```js\nimport { Calendar } from 'uiw';\n// or\nimport Calendar from 'uiw/lib/calendar';\nconst CalendarHeatMap = Calendar.HeatMap;\n```\n\n### HeatMap\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| values | 需要显示的数据，必填 | Object | - |\n| days | 设置显示多少个空格, 默认不填参数，将自适应 | Number | - |\n| tooltip | 需要显示弹出提示| Boolean | `true` |\n| endDate | 截止日期 | Date | - |\n| rectWidth | 方格宽度 | Number | `14` |\n| rectHeight | 方格高度 | Number | `14` |\n| onMouseOver | 鼠标滑过的事件 | Function(e, date, result) | - |\n| onClick | 鼠标点击单元格的事件 | Function(e, date, result) | - |\n| message | 消息提示 | Function(content:Array)  | - |\n| emptyMessage | 空的，消息提示, 值为Boolean的时候，空的地方是否显示`tooltip` | String/ReactNode/Boolean | - |\n| monthLables | [\"1月\", \"2月\", ...] | Array | - |\n| weekLables | 默认选填选项  周 { 1:\"一\", 3:\"三\", 5:\"五\"} | Object- | {} |\n| panelColors | 活跃颜色的深浅 {0:\"#EBEDF0\", 8:\"#7BC96F\", 4:\"#C6E48B\", 12:\"#239A3B\", 32:\"#196127\", } | Object | {} |\n\n### values\n\n| 参数 | 说明 | 类型 | 默认值 |\n|----- | ---- |----- |---- |\n| date | 日期，必填 | String | - |\n| content | 提示内容，有几条提示，必填 | Array | - |\n| count | 有多少条消息，必填 | Number | - |\n"

/***/ })

}]);