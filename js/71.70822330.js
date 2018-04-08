webpackJsonp([71],{812:function(n,e){n.exports='Menu \u83dc\u5355\n===\n\n\u4e3a\u9875\u9762\u548c\u529f\u80fd\u63d0\u4f9b\u5bfc\u822a\u7684\u83dc\u5355\u5217\u8868\u3002\n\n### \u57fa\u672c\u7528\u6cd5\n\n\x3c!--DemoStart--\x3e \n```js\nclass Demo extends Component {\n  onSelect(index, menuItem) {\n    console.log("index::",index)\n  }\n  render() {\n    return (\n      <div>\n        <Menu defaultActive="1" mode="horizontal" onSelect={this.onSelect.bind(this)}>\n          <Menu.Item index="1"><Icon type="date" />\u9996\u9875</Menu.Item>\n          <Menu.Item index="2"><Icon type="menu" />\u65b0\u95fb\u4e2d\u5fc3</Menu.Item>\n          <Menu.Item disabled index="3"><Icon type="verification" />\u670d\u52a1\u8303\u56f4</Menu.Item>\n          <Menu.Item index="4"><Icon type="windows" />\u7535\u5668\u57ce</Menu.Item>\n          <Menu.SubMenu index="5" title={<span><Icon type="star-on" /><span>\u65b0\u95fb\u4e2d\u5fc3</span></span>}>\n            <Menu.ItemGroup title="\u5206\u7ec4\u4e00">\n              <Menu.Item index="5-1">\u9009\u98791</Menu.Item>\n              <Menu.Item index="5-2">\u9009\u98792</Menu.Item>\n            </Menu.ItemGroup>\n            <Menu.ItemGroup title="\u5206\u7ec42">\n              <Menu.Item index="5-3">\u9009\u98793</Menu.Item>\n            </Menu.ItemGroup>\n          </Menu.SubMenu>\n          <Menu.Item index="6">\n            <a href="https://github.com/uiw-react/uiw" target="_blank" rel="noopener noreferrer">\u7535\u5668\u57ce- Link</a>\n          </Menu.Item>\n        </Menu>\n      </div>\n    )\n  }\n}\n```\n\x3c!--End--\x3e\n\n### \u6a2a\u5411\u83dc\u5355\u6697\u4e3b\u9898\n\n\x3c!--DemoStart--\x3e \n```js\nclass Demo extends Component {\n  onSelect(index, menuItem) {\n    console.log("index::",index)\n  }\n  render() {\n    return (\n      <Menu defaultActive="1" theme="dark" mode="horizontal" onSelect={this.onSelect.bind(this)}>\n        <Menu.Item index="1"><Icon type="date" />\u9996\u9875</Menu.Item>\n        <Menu.SubMenu index="2" title={<span><Icon type="star-on" /><span>\u65b0\u95fb\u4e2d\u5fc3</span></span>}>\n          <Menu.Item index="2-1">\u9009\u98791</Menu.Item>\n          <Menu.Item index="2-2">\u9009\u98791</Menu.Item>\n        </Menu.SubMenu>\n        <Menu.Item disabled index="3"><Icon type="verification" />\u670d\u52a1\u8303\u56f4</Menu.Item>\n        <Menu.Item index="4"><Icon type="windows" />\u7535\u5668\u57ce</Menu.Item>\n        <Menu.SubMenu index="5" title={<span><Icon type="star-on" /><span>\u65b0\u95fb\u4e2d\u5fc3</span></span>}>\n          <Menu.ItemGroup title="\u5206\u7ec4\u4e00">\n            <Menu.Item index="5-1">\u9009\u98791</Menu.Item>\n            <Menu.Item index="5-2"><a href="https://github.com/uiw-react/uiw" target="_blank" rel="noopener noreferrer">\u6211\u7684\u535a\u5ba2- Link</a></Menu.Item>\n          </Menu.ItemGroup>\n          <Menu.ItemGroup title="\u5206\u7ec42">\n            <Menu.Item index="5-3">\u9009\u98793</Menu.Item>\n          </Menu.ItemGroup>\n        </Menu.SubMenu>\n        <Menu.Item index="6">\n          <a href="https://github.com/uiw-react/uiw" target="_blank" rel="noopener noreferrer">\u7535\u5668\u57ce- Link</a>\n        </Menu.Item>\n      </Menu>\n    )\n  }\n}\n```\n\x3c!--End--\x3e\n\n### \u5c55\u5f00\u5f53\u524d\u7236\u7ea7\u83dc\u5355\n\n\x3c!--DemoStart--\x3e \n```js\nclass Demo extends Component {\nonSelect() {}\n  onClose(index) {\n    console.log("index::",index)\n  }\n  render() {\n    return (\n      <Menu \n        defaultActive="1"\n        defaultOpened={[\'5\']}\n        style={{width:240}}\n        onClose={this.onClose.bind(this)}\n        onSelect={this.onSelect.bind(this)}\n      >\n        <Menu.Item index="1"><Icon type="date" />\u9996\u9875</Menu.Item>\n        <Menu.SubMenu index="2" title={<span><Icon type="menu" /><span>\u65b0\u95fb\u4e2d\u5fc3</span></span>}>\n          <Menu.Item index="2-1">\u8fdb\u53e3\u98df\u54c1</Menu.Item>\n          <Menu.Item index="2-2">\u98df\u54c1\u996e\u6599</Menu.Item>\n          <Menu.Item index="2-3">\u7f8e\u5bb9\u6d17\u62a4</Menu.Item>\n        </Menu.SubMenu>\n        <Menu.Item disabled index="3"><Icon type="windows"/>\u670d\u52a1\u8303\u56f4</Menu.Item>\n        <Menu.Item index="4"><Icon type="star-on" />\u7535\u5668\u57ce</Menu.Item>\n        <Menu.SubMenu index="5" title={<span><Icon type="verification" /><span>\u6298\u53e0\u83dc\u5355</span></span>}>\n          <Menu.Item index="5-1">\u751f\u6d3b\u7535\u5668</Menu.Item>\n          <Menu.Item index="5-2">\u53a8\u623f\u7535\u5668</Menu.Item>\n          <Menu.Item index="5-3">\u5065\u5eb7\u7535\u5668</Menu.Item>\n          <Menu.Item index="5-4">\u624b\u673a\u914d\u4ef6</Menu.Item>\n        </Menu.SubMenu>\n      </Menu>\n    )\n  }\n}\n```\n\x3c!--End--\x3e\n\n### \u5185\u5d4c\u83dc\u5355\n\n\x3c!--DemoStart--\x3e \n```js\nclass Demo extends Component {\n  onSelect() {}\n  onClose(index) {\n    console.log("index::",index)\n  }\n  onOpen(index) {\n    console.log("index::",index)\n  }\n  render() {\n    return (\n      <Menu \n        defaultActive="1-1-1" \n        className="demo" \n        style={{width:260}}\n        onOpen={this.onOpen.bind(this)} \n        onClose={this.onClose.bind(this)}\n      >\n        <Menu.SubMenu index="1-1" title={<span><Icon type="apple"/>\u5bfc\u822a\u4e00</span>}>\n          <Menu.ItemGroup title="\u5206\u7ec4\u4e00">\n            <Menu.Item index="1-1-1">\u9009\u98791</Menu.Item>\n            <Menu.Item index="1-1-2">\u9009\u98792</Menu.Item>\n          </Menu.ItemGroup>\n          <Menu.ItemGroup title="\u5206\u7ec42">\n            <Menu.Item index="1-1-3">\u9009\u98793</Menu.Item>\n          </Menu.ItemGroup>\n        </Menu.SubMenu>\n        <Menu.SubMenu index="2" title={<span><Icon type="android"/>\u5bfc\u822a\u4e8c</span>}>\n          <Menu.Item index="2-1">\u9009\u98791</Menu.Item>\n          <Menu.Item index="2-2">\u9009\u98792</Menu.Item>\n          <Menu.SubMenu index="2-3" title={<span>\u5bfc\u822a\u4e8c\u5b50\u83dc\u5355</span>}>\n            <Menu.Item index="2-3-1">\u9009\u98791</Menu.Item>\n            <Menu.Item index="2-3-2">\u9009\u98792</Menu.Item>\n            <Menu.SubMenu index="2-3-3" title={<span>\u4e09\u7ea7\u5b50\u83dc\u5355</span>}>\n              <Menu.Item index="2-3-3-1">\u9009\u98791</Menu.Item>\n              <Menu.Item index="2-3-3-2">\u9009\u98792</Menu.Item>\n            </Menu.SubMenu>\n          </Menu.SubMenu>\n        </Menu.SubMenu>\n        <Menu.Item index="3"><Icon type="linux"/>\u5bfc\u822a\u4e09</Menu.Item>\n      </Menu>\n    )\n  }\n}\n```\n\x3c!--End--\x3e\n\n### \u4e3b\u9898\n\n\u5185\u5efa\u4e86\u4e24\u5957\u4e3b\u9898 `light|dark`\uff0c\u9ed8\u8ba4 `light`\u3002\n\n\x3c!--DemoStart--\x3e \n```js\nclass Demo extends Component {\n  constructor(props){\n    super(props);\n    this.state = {\n      checked: true,\n    };\n  }\n  onSelect(index, menuItem) {\n    console.log("index::",index)\n  }\n  render() {\n    return (\n      <div>\n        <Switch checkedChildren="dark" unCheckedChildren="light" checked={this.state.checked}\n          onChange={(e,checked)=>{\n            this.setState({checked})\n            console.log(`${checked?"\u9009\u4e2d":\'\u6ca1\u6709\u9009\u4e2d\'}${checked}`)\n          }}\n        />\n        <br />\n        <br />\n        <Menu\n          defaultActive="1"\n          theme={this.state.checked?\'dark\':\'light\'}\n          onSelect={this.onSelect.bind(this)}\n          style={{width:240}}\n        >\n          <Menu.Item index="1"><Icon type="date" />\u9996\u9875</Menu.Item>\n          <Menu.Item index="2"><Icon type="menu" />\u65b0\u95fb\u4e2d\u5fc3</Menu.Item>\n          <Menu.Item disabled index="3"><Icon type="verification" />\u670d\u52a1\u8303\u56f4</Menu.Item>\n          <Menu.Item index="4"><Icon type="windows" />\u7535\u5668\u57ce</Menu.Item>\n          <Menu.SubMenu index="2" title={<span><Icon type="star-on" /><span>\u65b0\u95fb\u4e2d\u5fc3</span></span>}>\n            <Menu.ItemGroup title="\u5206\u7ec4\u4e00">\n              <Menu.Item index="1-1-1">\u9009\u98791</Menu.Item>\n              <Menu.Item index="1-1-2">\u9009\u98792</Menu.Item>\n            </Menu.ItemGroup>\n            <Menu.ItemGroup title="\u5206\u7ec42">\n              <Menu.Item index="1-1-3">\u9009\u98793</Menu.Item>\n            </Menu.ItemGroup>\n          </Menu.SubMenu>\n          <Menu.Item index="5">\n            <a href="https://github.com/uiw-react/uiw" target="_blank" rel="noopener noreferrer">\u7535\u5668\u57ce- Link</a>\n          </Menu.Item>\n        </Menu>\n      </div>\n    )\n  }\n}\n```\n\x3c!--End--\x3e\n\n### \u5185\u5d4c\u83dc\u5355\n\n\x3c!--DemoStart--\x3e \n```js\nclass Demo extends Component {\n  constructor(props){\n    super(props);\n    this.state = {\n      checked: true,\n      mode: true,\n    };\n  }\n  render() {\n    return (\n      <div>\n        Change Mode&nbsp;\n        <Switch checkedChildren="inline" unCheckedChildren="vertical" checked={this.state.mode}\n          onChange={(e, mode)=>{\n            console.log(\'mode\',mode);\n            this.setState({mode});\n          }}\n        />\n        <br />\n        <br />\n        Change Theme&nbsp;\n        <Switch checkedChildren="dark" unCheckedChildren="light" checked={this.state.checked}\n          onChange={(e, checked)=>{\n            this.setState({checked});\n          }}\n        />\n        <br />\n        <br />\n        <div style={{width:240}}>\n          <Menu \n            mode={this.state.mode?\'inline\':\'vertical\'}\n            theme={this.state.checked?\'dark\':\'light\'}\n            defaultActive="1-1-1" \n            className="demo"\n          >\n            <Menu.SubMenu index="1-1" title={<span><Icon type="apple"/>\u5bfc\u822a\u4e00</span>}>\n              <Menu.ItemGroup title="\u5206\u7ec4\u4e00">\n                <Menu.Item index="1-1-1">\u9009\u98791</Menu.Item>\n                <Menu.Item index="1-1-2">\u9009\u98792</Menu.Item>\n              </Menu.ItemGroup>\n              <Menu.ItemGroup title="\u5206\u7ec42">\n                <Menu.Item index="1-1-3">\u9009\u98793</Menu.Item>\n              </Menu.ItemGroup>\n            </Menu.SubMenu>\n            <Menu.SubMenu index="2" title={<span><Icon type="android"/>\u5bfc\u822a\u4e8c</span>}>\n              <Menu.Item index="2-1">\u9009\u98791</Menu.Item>\n              <Menu.Item index="2-2">\u9009\u98792</Menu.Item>\n              <Menu.SubMenu index="2-3" title={<span>\u5bfc\u822a\u4e8c\u5b50\u83dc\u5355</span>}>\n                <Menu.Item index="2-3-1">\u9009\u98791</Menu.Item>\n                <Menu.Item index="2-3-2">\u9009\u98792</Menu.Item>\n                <Menu.SubMenu index="2-3-3" title={<span>\u4e09\u7ea7\u5b50\u83dc\u5355</span>}>\n                  <Menu.Item index="2-3-3-1">\u9009\u98791</Menu.Item>\n                  <Menu.Item index="2-3-3-2">\u9009\u98792</Menu.Item>\n                </Menu.SubMenu>\n                <Menu.Item index="2-3-4">\u9009\u98792</Menu.Item>\n              </Menu.SubMenu>\n              <Menu.Item index="2-4">\u9009\u98792</Menu.Item>\n            </Menu.SubMenu>\n            <Menu.Item index="3"><Icon type="linux"/>\u5bfc\u822a\u4e09</Menu.Item>\n            <Menu.Item index="4"><Icon type="linux"/>\u5bfc\u822a\u4e09</Menu.Item>\n          </Menu>\n        </div>\n      </div>\n    )\n  }\n}\n```\n\x3c!--End--\x3e\n\n\n### \u7f29\u8d77\u5185\u5d4c\u83dc\u5355\n\n\u9700\u8981\u8bbe\u7f6e `mode=inline` \u5e76\u4e14 `inlineCollapsed=true`\n\n\x3c!--DemoStart--\x3e \n```js\nclass Demo extends Component {\n  constructor(props){\n    super(props);\n    this.state = {\n      checked: true,\n      mode: true,\n    };\n  }\n  onSelect(index, menuItem) {\n    console.log("index~::",index)\n  }\n  render() {\n    return (\n      <div>\n        Change Mode&nbsp;\n        <Switch checkedChildren="inline" unCheckedChildren="vertical" checked={this.state.mode}\n          onChange={(e, mode)=>{\n            this.setState({mode});\n          }}\n        />\n        <br />\n        <br />\n        Change Theme&nbsp;\n        <Switch checkedChildren="dark" unCheckedChildren="light" checked={this.state.checked}\n          onChange={(e, checked)=>{\n            this.setState({checked});\n          }}\n        />\n        <br />\n        <br />\n        <div style={{width:240}}>\n          <Menu\n            defaultActive="5-4-2"\n            mode={this.state.mode?\'inline\':\'vertical\'}\n            theme={this.state.checked?\'dark\':\'light\'}\n            onSelect={this.onSelect.bind(this)}\n            inlineCollapsed={this.state.mode}\n          >\n            <Menu.Item index="1"><Icon type="date" /><span>\u5173\u4e8e\u6211\u4eec</span></Menu.Item>\n            <Menu.Item index="2"><Icon type="menu" /><span>\u6210\u529f\u6848\u4f8b</span></Menu.Item>\n            <Menu.SubMenu index="3" title={<span><Icon type="star-on" /><span>\u670d\u52a1\u8303\u56f4</span></span>}>\n              <Menu.ItemGroup title="\u5206\u7ec4\u4e00">\n                <Menu.Item index="3-1">\u9009\u98791</Menu.Item>\n                <Menu.Item index="3-2">\u9009\u98792</Menu.Item>\n              </Menu.ItemGroup>\n              <Menu.ItemGroup title="\u5206\u7ec42">\n                <Menu.Item index="3-3">\u9009\u98793</Menu.Item>\n              </Menu.ItemGroup>\n            </Menu.SubMenu>\n            <Menu.Item index="4"><Icon type="windows" /><span>\u7535\u5668\u57ce</span></Menu.Item>\n            <Menu.SubMenu index="5" title={<span><Icon type="star-on" /><span>\u89e3\u51b3\u65b9\u6848</span></span>}>\n              <Menu.ItemGroup title="\u5206\u7ec4\u4e00">\n                <Menu.Item index="5-1">\u9009\u98791</Menu.Item>\n                <Menu.Item index="5-2">\u9009\u98792</Menu.Item>\n              </Menu.ItemGroup>\n              <Menu.ItemGroup title="\u5206\u7ec42">\n                <Menu.Item index="5-3">\u9009\u98793</Menu.Item>\n                <Menu.SubMenu index="5-4" title={<span>\u65b0\u95fb\u8d44\u8baf</span>}>\n                  <Menu.ItemGroup title="\u5206\u7ec4\u4e00">\n                    <Menu.Item index="5-4-1">\u9009\u98791</Menu.Item>\n                    <Menu.Item index="5-4-2">\u9009\u98792</Menu.Item>\n                  </Menu.ItemGroup>\n                  <Menu.ItemGroup title="\u5206\u7ec42">\n                    <Menu.Item index="5-4-3">\u9009\u98793</Menu.Item>\n                  </Menu.ItemGroup>\n                </Menu.SubMenu>\n              </Menu.ItemGroup>\n            </Menu.SubMenu>\n            <Menu.Item index="6">\n              <Icon type="star-on" />\n              <span><a href="https://github.com/jaywcjlove" target="_blank" rel="noopener noreferrer">\u7535\u5668\u57ce- Link</a></span>\n            </Menu.Item>\n          </Menu>\n        </div>\n      </div>\n    )\n  }\n}\n```\n\x3c!--End--\x3e\n\n### \u6fc0\u6d3b\u83dc\u5355\u5e76\u5c55\u5f00\u83dc\u5355\n\n\x3c!--DemoStart--\x3e \n```js\nclass Demo extends Component {\n  constructor(props){\n    super(props);\n    this.state = {\n      defaultActive:\'1-1-1\',\n      defaultOpened:[\'1-1\']\n    }\n  }\n  onSelect(defaultActive){\n    this.setState({\n      defaultActive\n    })\n    console.log("index::",defaultActive)\n  }\n  onClose(index) {\n    console.log("index::",index)\n  }\n  onOpen(index) {\n    console.log("index::",index)\n  }\n  onButtonClick(){\n    this.setState({\n      defaultActive:\'2-3-3-1\',\n      defaultOpened:[\'2\',\'2-3\',\'2-3-3\']\n    })\n  }\n  render() {\n    const {defaultActive,defaultOpened} = this.state;\n    return (\n      <div>\n        <Menu \n          defaultActive={defaultActive}\n          defaultOpened={defaultOpened}\n          className="demo" \n          style={{width:260}}\n          onOpen={this.onOpen.bind(this)} \n          onClose={this.onClose.bind(this)}\n          onSelect={this.onSelect.bind(this)}\n        >\n          <Menu.SubMenu index="1-1" title={<span><Icon type="apple"/>\u5bfc\u822a\u4e00</span>}>\n            <Menu.ItemGroup title="\u5206\u7ec4\u4e00">\n              <Menu.Item index="1-1-1">\u9009\u98791</Menu.Item>\n              <Menu.Item index="1-1-2">\u9009\u98792</Menu.Item>\n            </Menu.ItemGroup>\n            <Menu.ItemGroup title="\u5206\u7ec42">\n              <Menu.Item index="1-1-3">\u9009\u98793</Menu.Item>\n            </Menu.ItemGroup>\n          </Menu.SubMenu>\n          <Menu.SubMenu index="2" title={<span><Icon type="android"/>\u5bfc\u822a\u4e8c</span>}>\n            <Menu.Item index="2-1">\u9009\u98791</Menu.Item>\n            <Menu.Item index="2-2">\u9009\u98792</Menu.Item>\n            <Menu.SubMenu index="2-3" title={<span>\u5bfc\u822a\u4e8c\u5b50\u83dc\u5355</span>}>\n              <Menu.Item index="2-3-1">\u9009\u98791</Menu.Item>\n              <Menu.Item index="2-3-2">\u9009\u98792</Menu.Item>\n              <Menu.SubMenu index="2-3-3" title={<span>\u4e09\u7ea7\u5b50\u83dc\u5355</span>}>\n                <Menu.Item index="2-3-3-1">\u9009\u98791</Menu.Item>\n                <Menu.Item index="2-3-3-2">\u9009\u98792</Menu.Item>\n              </Menu.SubMenu>\n            </Menu.SubMenu>\n          </Menu.SubMenu>\n          <Menu.Item index="3"><Icon type="linux"/>\u5bfc\u822a\u4e09</Menu.Item>\n        </Menu>\n        <div>\n          <Button type="primary" size="small" onClick={this.onButtonClick.bind(this)}>\u6fc0\u6d3b\u9009\u98792\u83dc\u5355</Button>\n        </div>\n      </div>\n    )\n  }\n}\n```\n\x3c!--End--\x3e\n\n\n### \u83dc\u5355\u9879\u5206\u5272\u7ebf\n\n\u6b64\u5206\u5272\u7ebf\u53ea\u662f\u7b80\u5355\u7684\u505a\u4e00\u4e0b\u5206\u5272\u6837\u5f0f\uff0c\u4f60\u53ef\u4ee5\u81ea\u5b9a\u4e49`className`\u3001`style`\u3001`children`\u7b49\u3002\n\n\x3c!--DemoStart--\x3e \n```js\nclass Demo extends Component {\n  render() {\n    return (\n      <Menu style={{width:200}}>\n        <Menu.Item index="2-1">\u9009\u98791</Menu.Item>\n        <Menu.Divider />\n        <Menu.Item index="2-2">\u9009\u98792</Menu.Item>\n        <Menu.Divider style={{background:\'#3c90f2\'}}/>\n        <Menu.Item index="2-3">\u9009\u98792</Menu.Item>\n        <Menu.Divider style={{background:\'#0fa120\',height:3}}/>\n        <Menu.Item index="2-4">\u9009\u98792</Menu.Item>\n        <Menu.Item index="2-5">\u9009\u98792</Menu.Item>\n        <Menu.Item index="2-6">\u9009\u98792</Menu.Item>\n        <Menu.Item index="2-7">\u9009\u98792</Menu.Item>\n      </Menu>\n    )\n  }\n}\n```\n\x3c!--End--\x3e\n\n## API\n\n### Menu\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| mode | \u83dc\u5355\u7c7b\u578b\uff0c\u53ef\u9009\u503c\u4e3a horizontal(\u6c34\u5e73) \u548c vertical(\u5782\u76f4) \u548c inline(\u5782\u76f4\u5f39\u51fa\u5c42) \u9ed8\u8ba4\u5782\u76f4\u53c2\u6570`vertical` | String | `vertical` |\n| theme | \u4e3b\u9898\u989c\u8272 | String[light,dark] | light |\n| inlineCollapsed | inline \u65f6\u83dc\u5355\u662f\u5426\u6536\u8d77\u72b6\u6001 | boolean | `false` |\n| inlineIndent | inline \u6a21\u5f0f\u7684\u83dc\u5355\u7f29\u8fdb\u5bbd\u5ea6 | boolean | `24` |\n| defaultActive | \u5f53\u524d\u9ed8\u8ba4\u9009\u4e2d\u7684\u83dc\u5355\u9879 `index` | String | - |\n| defaultOpened | \u5f53\u524d\u9ed8\u8ba4\u6253\u5f00\u7684\u83dc\u5355\u9879 `index` | String[] | - |\n| onClose | \u6298\u53e0\u83dc\u5355\u5173\u95ed\u4e8b\u4ef6 | Function(index) | - |\n| onOpen | \u6298\u53e0\u83dc\u5355\u5c55\u5f00\u4e8b\u4ef6 | Function(index) | - |\n| onSelect | \u5f53\u524d\u9ed8\u8ba4\u6253\u5f00\u7684\u83dc\u5355\u9879 | Function(index) | - |\n\n### Menu.Item\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| disabled | \u662f\u5426\u7981\u7528 | Boolean | false |\n| index | `item` \u7684\u552f\u4e00\u6807\u5fd7 | String | vertical |\n\n### Menu.SubMenu\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| title | \u6298\u53e0\u83dc\u5355\u6807\u9898 | String,React.ReactNode | vertical |\n| index | `SubMenu` \u7684\u552f\u4e00\u6807\u5fd7 | String | vertical |\n\n\n### Menu.Divider\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| className | \u5143\u7d20\u7684\u7c7b\u7684\u540d\u79f0\u3002 | String | - |\n'}});