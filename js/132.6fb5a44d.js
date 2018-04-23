(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[132],{

/***/ 648:
/***/ (function(module, exports) {

module.exports = "Dropdown 下拉菜单\n===\n\n向下弹出的列表。\n\n当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。\n\n## 基础实例\n\n<!--DemoStart--> \n```js\nconst menu = (\n  <Menu>\n    <Menu.Item index=\"0\">\n      <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://uiw-react.github.io/\">UI组件库官方文档</a>\n    </Menu.Item>\n    <Menu.Item index=\"1\">\n      <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://wangchujiang.com/\">个人网站</a>\n    </Menu.Item>\n    <Menu.Divider/>\n    <Menu.Item index=\"3\" disabled>老铁就是你了</Menu.Item>\n  </Menu>\n);\n\nclass Demo extends Component {\n  render() {\n    return (\n      <div>\n        <Dropdown menu={menu}>\n          <a className=\"ant-dropdown-link\" href=\"javascript:;\">\n            Hover me <Icon type=\"arrow-down\" />\n          </a>\n        </Dropdown>\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n\n## 被禁用\n\n<!--DemoStart--> \n```js\nconst menu = (\n  <Menu>\n    <Menu.Item index=\"0\">\n      <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://uiw-react.github.io/\">UI组件库官方文档</a>\n    </Menu.Item>\n    <Menu.Item index=\"1\">\n      <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"http://wangchujiang.com/\">个人网站</a>\n    </Menu.Item>\n    <Menu.Divider/>\n    <Menu.Item index=\"3\" disabled>老铁就是你了</Menu.Item>\n  </Menu>\n);\n\nclass Demo extends Component {\n  render() {\n    return (\n      <div>\n        <Dropdown disabled menu={menu}>\n          <a className=\"ant-dropdown-link\" href=\"javascript:;\">\n            Hover me <Icon type=\"arrow-down\" />\n          </a>\n        </Dropdown>\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n\n## 可以点击\n\n<!--DemoStart--> \n```js\n\nclass Demo extends Component {\n  messageBox() {\n    console.log('====>')\n  }\n  render() {\n    const menu = (\n      <Menu onSelect={this.messageBox}>\n        <Menu.Item index=\"0\">\n          历史记录\n        </Menu.Item>\n        <Menu.Item index=\"1\">\n          关于我们\n        </Menu.Item>\n        <Menu.Divider />\n        <Menu.Item index=\"3\" disabled>老铁就是你了</Menu.Item>\n      </Menu>\n    );\n    return (\n      <div>\n        <Dropdown trigger=\"click\" menu={menu}>\n          <a href=\"javascript:;\">\n            点击我出现下拉菜单 <Icon type=\"arrow-down\" />\n          </a>\n        </Dropdown>\n        <Divider />\n        <Dropdown trigger=\"click\" menu={menu}>\n          <Button>下拉菜单</Button>\n        </Dropdown>\n        <Divider />\n        <Dropdown trigger=\"hover\" menu={menu}>\n          <Button>Hover下拉菜单</Button>\n        </Dropdown>\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n\n## 安装和使用\n\n```bash\nnpm install uiw --save\n```\n\n```js\nimport { Dropdown } from 'uiw';\n// or\nimport Dropdown from 'uiw/lib/dropdown';\n```\n### Dropdown\n\n| 参数 | 说明 | 类型 | 默认值 |\n| ----- | ----- | ----- | ----- |\n| disabled | 菜单是否禁用 |\tBoolean\t| - |\n| visible | 菜单是否显示 |\tBoolean\t| `false` |\n| menu | 菜单 |\tMenu\t| - |\n| trigger | 触发下拉的行为 |\tEnum{`click`,`hover`}\t| `hover` |\n| onVisibleChange | 菜单显示状态改变时调用，参数为 visible |\tFunction(visible)\t| - |\n"

/***/ })

}]);