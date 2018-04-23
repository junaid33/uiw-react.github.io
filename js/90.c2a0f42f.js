(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[90],{

/***/ 606:
/***/ (function(module, exports) {

module.exports = "Carousel 走马灯\n===\n\n\n### 最简单的用法\n\n<!--DemoStart--> \n```js\nonChange(a,b,c){\n  console.log(a, b, c);\n}\nrender() {\n  let style = {\n    textAlign: 'center',\n    height: 160,\n    width:100,\n    linearHeight: 160,\n    background: '#b7b7b7',\n    overflow: 'hidden',\n  };\n  return (\n    <Carousel   easing='linear'  afterChange={this.onChange} >\n      <div style={style}><h3 style={{color:'#fff'}}>1</h3></div>\n      <div style={style}><h3 style={{color:'#fff'}}>2</h3></div>\n      <div style={style}><h3 style={{color:'#fff'}}>3</h3></div>\n      <div style={style}><h3 style={{color:'#fff'}}>4</h3></div>\n    </Carousel>\n  )\n}\n```\n<!--End-->\n\n\n### 垂直显示\n\n<!--DemoStart--> \n```js\nonChange(a,b,c){\n  console.log(a, b, c);\n}\nrender() {\n  let style = {\n    textAlign: 'center',\n    height: 160,\n    linearHeight: 160,\n    background: '#b7b7b7',\n    overflow: 'hidden',\n  };\n  return (\n    <Carousel vertical  afterChange={this.onChange} >\n      <div style={style}><h3 style={{color:'#fff'}}>1</h3></div>\n      <div style={style}><h3 style={{color:'#fff'}}>2</h3></div>\n      <div style={style}><h3 style={{color:'#fff'}}>3</h3></div>\n      <div style={style}><h3 style={{color:'#fff'}}>4</h3></div>\n    </Carousel>\n  )\n}\n```\n<!--End-->\n\n### 渐显\n\n<!--DemoStart--> \n```js\nonChange(a,b,c){\n  console.log(a, b, c);\n}\nrender() {\n  let style = {\n    textAlign: 'center',\n    height: 160,\n    linearHeight: 160,\n    width:50,\n    background: '#b7b7b7',\n    overflow: 'hidden',\n  };\n  return (\n    <Carousel effect=\"fade\" afterChange={this.onChange} >\n      <div style={style}><h3 style={{color:'#fff'}}>1</h3></div>\n      <div style={style}><h3 style={{color:'#fff'}}>2</h3></div>\n      <div style={style}><h3 style={{color:'#fff'}}>3</h3></div>\n      <div style={style}><h3 style={{color:'#fff'}}>4</h3></div>\n    </Carousel>\n  )\n}\n```\n<!--End-->\n\n\n### 自动切换\n\n<!--DemoStart--> \n```js\nonChange(a,b,c){\n  console.log(a, b, c);\n}\nrender() {\n  let style = {\n    textAlign: 'center',\n    height: 160,\n    linearHeight: 160,\n    background: '#b7b7b7',\n    overflow: 'hidden',\n  };\n  return (\n    <Carousel autoplay afterChange={this.onChange} >\n      <div style={style}><h3 style={{color:'#fff'}}>1</h3></div>\n      <div style={style}><h3 style={{color:'#fff'}}>2</h3></div>\n      <div style={style}><h3 style={{color:'#fff'}}>3</h3></div>\n      <div style={style}><h3 style={{color:'#fff'}}>4</h3></div>\n    </Carousel>\n  )\n}\n```\n<!--End-->\n\n## API\n\n### Carousel\n\n更多参数可参考：[akiran/react-slick](https://github.com/akiran/react-slick)\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| effect | 动画效果函数，可取 scrollx, fade | String | 'srcollx' |\n| dots | 是否显示面板指示点 | Boolean | `true` |\n| vertical | 垂直显示 | Boolean | `false` |\n| autoplay | 是否自动切换 | Boolean | `false` |\n| easing | 动画效果 | String | 'linear' |\n| draggable | 拖拽切换 | Boolean | `false` |\n| beforeChange | 切换面板的回调 | function(from, to) | 无 |\n| afterChange | 切换面板的回调 | function(current) | 无 |"

/***/ })

}]);