/**
 * Created by zhongtingbing on 2018/12/25.
 */
REACT-AMAP

请输入关键词搜索（Google）
首页快速开始组件文档GitHub
基本介绍
组件
地图
Map 组件
MouseTool 组件
覆盖物
Marker 组件
Markers 组件
Polygon 组件
Polyline 组件
PolyEditor 插件
Circle 组件
CircleEditor 组件
GroundImage 组件
信息窗体
InfoWindow 组件
Markers 组件
何时使用#
显示大量标记的时候使用；注意与 Marker 的区别。
Markers 组件大部分属性是静态属性；对坐标点的增加和删除会导致所有的标记点刷新，在点数量较大的情况下比较慢。
不过 Markers 有比较好的聚合展示效果（启用了聚合插件）；虽然是静态属性，但是如果面临复杂的需求你仍然可以在获得高德实例后，参照高德接口自己对实例进行操作。 而且还提供了两种 render 方法让你直接以 React 的方式写标记点的外观。
Markers 的使用
本及介绍创建大量标记的基本用法
import { Map, Markers } from 'react-amap';

const randomPosition = () => ({
  longitude: 100 + Math.random() * 20,
  latitude: 30 + Math.random() * 20
})
const randomMarker = (len) => (
  Array(len).fill(true).map((e, idx) => ({
    position: randomPosition()
  }))
);
class App extends React.Component{
  constructor(){
    super();
    this.state = {
      markers: randomMarker(100),
      center: randomPosition()
    }
    this.randomMarkers = this.randomMarkers.bind(this)
  }

  randomMarkers() {
    this.setState({
      markers: randomMarker(100)
    })
  }

  render(){
    return <div>
      <div style={{width: '100%', height: 372}}>
        <Map plugins={['ToolBar']} center={this.state.center} zoom={6}>
          <Markers
            markers={this.state.markers}
          />
        </Map>
      </div>
      <button onClick={this.randomMarkers}>Random Markers</button>
    </div>
  }
}

ReactDOM.render(<App/>, mountNode)







© 2018 AutoNavi - GS(2018)1709号
Random Markers
useCluster 属性的使用
在上一个例子中，需要在地图添加大量标记点，显示起来非常拥挤。高德提供了一个叫做 AMap.MarkerClusterer 的聚合坐标点插件；在react-amap 组件中，你可以切换useCluster的值来选择是否启用这个插件。可以通过下面这个例子查看效果；记得放大地图查看聚合点是怎么展开的。
import { Map, Markers } from 'react-amap';

const randomMarker = (len) => (
  Array(len).fill(true).map((e, idx) => ({
    position: {
      longitude: 100 + Math.random() * 30,
      latitude: 30 + Math.random() * 20,
    },
  }))
);
class App extends React.Component{
  constructor(){
    super();
    this.markers = randomMarker(1000);
    this.center = {longitude: 115, latitude: 40};
    this.state = {
      useCluster: true,
    }
  }
  toggleCluster(){
    this.setState({
      useCluster: !this.state.useCluster,
    });
  }
  render(){
    return <div>
      <div style={{width: '100%', height: 370}}>
        <Map plugins={['ToolBar']} center={this.center} zoom={5}>
          <Markers
            markers={this.markers}
            useCluster={this.state.useCluster}
          />
        </Map>
      </div>
      <button onClick={ () => { this.toggleCluster() } }> Toggle Cluster</button>
    </div>
  }
}

ReactDOM.render(
  <App/>, mountNode
)

23
26
26
28
15
20
17
19
18
22
17
7
23
23
24
15
13
7
19
19
15
16
12
12
20
24
15
13
18
19
14
8
11
4
2
16
25
27
19
16
22
24
19
19
12
15
18
19
10
21
9
19
6
17
2
© 2018 AutoNavi - GS(2018)1709号
Toggle Cluster
标记点的属性如何配置
Markers 组件在创建高德坐标点时，属性的设定非常灵活。
直接在 markers 属性中提供原始数据时提供；如下例子中的 position 和 draggable；
定义在 Markers 的 props 属性，值就是要设定的属性值；如下例子中的bubble；
定义在 Markers 的 props 属性，值是一个函数；在创建标记时，会将函数的执行结果作为属性值；如下例子中的angle；函数传入的参数为 markers 属性提供的原始数据项及该项的索引；
import { Map, Markers } from 'react-amap';

const randomMarker = (len) => (
  Array(len).fill(true).map((e, idx) => ({
    position: {
      longitude: 100 + Math.random() * 30,
      latitude: 30 + Math.random() * 20,
    },
    draggable: true,
    someProperty: parseInt(Math.random() * 100),
  }))
);

class App extends React.Component{
  constructor(){
    super();
    this.markers = randomMarker(10);
    this.mapCenter = {longitude: 115, latitude: 40};
  }


  randomAngle(extData, index){
    if (extData.someProperty % 3 === 0){
      return 45;
    }
    return 0;
  }

  render(){
    return <div>
      <div style={{width: '100%', height: 400}}>
        <Map plugins={['ToolBar']} center={this.mapCenter} zoom={5}>
          <Markers
            markers={this.markers}
            bubble={false}
            angle={(extData, index) => { return this.randomAngle(extData, index)}}
            useCluster={false}
          />
        </Map>
      </div>
    </div>
  }
}

ReactDOM.render(
  <App/>, mountNode
)











© 2018 AutoNavi - GS(2018)1709号
事件绑定
Markers 组件的事件绑定方式与 Marker 类似，都是定义 events 属性；但是调用的参数不一样；
首先是扩展的 created 事件，参数是创建的所有高德标记点的实例（即高德的 Marker 实例）数组；
尝试点击例子中的坐标点，以及弹窗中的坐标点，在控制台查看输出。
import { Map, Markers } from 'react-amap';

const randomMarker = (len) => (
  Array(len).fill(true).map((e, idx) => ({
    position: {
      longitude: 100 + Math.random() * 30,
      latitude: 30 + Math.random() * 20,
    },
  }))
);
class App extends React.Component{
  constructor(){
    super();
    this.markers = randomMarker(10);
    this.mapCenter = {longitude: 115, latitude: 40};
    this.markersEvents = {
      created:(allMarkers) => {
        console.log('All Markers Instance Are Below');
        console.log(allMarkers);
      },
      click: (MapsOption, marker) => {
        console.log('MapsOptions:');
        console.log(MapsOption);
        console.log('marker:');
        console.log(marker);
      },
      dragend: (MapsOption, marker) => { /* ... */ }
    }
  }

  render(){
    return <div>
      <div style={{width: '100%', height: 400}}>
        <Map plugins={['ToolBar']} center={this.mapCenter} zoom={4}>
          <Markers
            markers={this.markers}
            events={this.markersEvents}
            useCluster
          />
        </Map>
      </div>
    </div>
  }
}

ReactDOM.render(
  <App/>, mountNode
)





import { Map, Markers } from 'react-amap';

const alphabet = 'ABCDEFGHIJKLMNOP'.split('');
const randomMarker = (len) => (
  Array(len).fill(true).map((e, idx) => ({
    position: {
      longitude: 100 + Math.random() * 30,
      latitude: 30 + Math.random() * 20,
    },
    myLabel: alphabet[idx],
    myIndex: idx + 1,
  }))
);

const style = {
  padding: '8px',
  backgroundColor: '#000',
  color: '#fff',
  border: '1px solid #fff',
};

const mouseoverStyle = {
  padding: '8px',
  backgroundColor: '#fff',
  color: '#000',
  border: '1px solid #000',
}

class App extends React.Component{
  constructor(){
    super();
    this.markers = randomMarker(10);
    this.mapCenter = {longitude: 115, latitude: 40};
    this.state = {
      useCluster: false,
    };
    this.markerEvents = {
      mouseover:(e, marker) => {
        marker.render(this.renderMouseoverLayout);
      },
      mouseout: (e, marker) => {
        marker.render(this.renderMarkerLayout);
      }
    }
  }

  toggleCluster(){
    this.setState({
      useCluster: !this.state.useCluster,
    })
  }

  renderMouseoverLayout(extData){
    if (extData.myIndex === 3){
      return false;
    }
    return <div style={mouseoverStyle}>{extData.myLabel}</div>
  }

  renderMarkerLayout(extData){
    if (extData.myIndex === 3){
      return false;
    }
    return <div style={style}>{extData.myLabel}</div>
  }

  render(){
    return <div>
      <div style={{width: '100%', height: 370}}>
        <Map plugins={['ToolBar']} center={this.mapCenter} zoom={4}>
          <Markers
            events={this.markerEvents}
            markers={this.markers}
            useCluster={this.state.useCluster}
            render={this.renderMarkerLayout}
          />
        </Map>
      </div>
      <button onClick={()=>{ this.toggleCluster() }}>Toggle Cluster</button>
    </div>
  }
}

ReactDOM.render(<App/>, mountNode);

F
J
© 2018 AutoNavi - GS(2018)1709号
Toggle Cluster
确定点击的是哪个坐标？
在使用 Markers 组件往地图上批量添加坐标点时，很常见的需求是：在事件触发时，比如点击事件，需要确定点击的是哪个坐标点。在提供原始数据来构造坐标点时（如下例中的 this.markers），我们可以在原始数据里注入自己的变量；当事件发生后，在回调里我们可以获得全部的原始数据，从而可以识别出点击的那个坐标点，及对应属性。
import { Map, Markers } from 'react-amap';
// 辅助函数，随机生成一个坐标
const randomPosition = () => ({
  longitude: 120 + Math.random() * 20,
  latitude: 30 + Math.random() * 20
});

class App extends React.Component{
  constructor() {
    super();
    var _this = this;
    // 随机生成 10 个标记点的原始数据
    this.mapCenter = {longitude: 130, latitude: 40};
    this.markers = Array(10).fill(true).map(function(e, i){
      var position = randomPosition();
      return {
        position,
        // 这个属性就可以用来确定点击的是哪个坐标点
        myIndex: i
      }
    });
    this.markersEvents = {
      click(e, marker){
        // 通过高德原生提供的 getExtData 方法获取原始数据
        const extData = marker.getExtData();
        const index = extData.myIndex;
        alert(`点击的是第${index}号坐标点`);
        console.log(extData === _this.markers[index]);
      }
    }
    const markerStyle = {
      padding: '5px',
      border: '1px solid #ddd',
      background: '#fff',
    };
    this.renderMarkerFn = (extData) => (
      <div style={markerStyle}>{extData.myIndex}</div>
    );
  }

  render() {
    return <div style={{width: '100%', height: 400}}>
      <Map plugins={['ToolBar']} center={this.mapCenter} zoom={4}>
        <Markers
          render={this.renderMarkerFn}
          markers={this.markers}
          events={this.markersEvents}
          useCluster
        />
      </Map>
    </div>
  }
}

ReactDOM.render(<App/>, mountNode);


import { Map, Markers } from 'react-amap';

const alphabet = 'ABCDEFGHIJKLMNOP'.split('');
const randomMarker = (len) => (
  Array(len).fill(true).map((e, idx) => ({
    position: {
      longitude: 100 + Math.random() * 30,
      latitude: 30 + Math.random() * 20,
    },
    myLabel: alphabet[idx],
    myIndex: idx + 1,
  }))
);

const style = {
  padding: '8px',
  backgroundColor: '#000',
  color: '#fff',
  border: '1px solid #fff',
};

const mouseoverStyle = {
  padding: '8px',
  backgroundColor: '#fff',
  color: '#000',
  border: '1px solid #000',
}

class App extends React.Component{
  constructor(){
    super();
    this.markers = randomMarker(10);
    this.mapCenter = {longitude: 115, latitude: 40};
    this.state = {
      useCluster: false,
    };
    this.markerEvents = {
      mouseover:(e, marker) => {
        marker.render(this.renderMouseoverLayout);
      },
      mouseout: (e, marker) => {
        marker.render(this.renderMarkerLayout);
      }
    }
  }

  toggleCluster(){
    this.setState({
      useCluster: !this.state.useCluster,
    })
  }

  renderMouseoverLayout(extData){
    if (extData.myIndex === 3){
      return false;
    }
    return <div style={mouseoverStyle}>{extData.myLabel}</div>
  }

  renderMarkerLayout(extData){
    if (extData.myIndex === 3){
      return false;
    }
    return <div style={style}>{extData.myLabel}</div>
  }

  render(){
    return <div>
      <div style={{width: '100%', height: 370}}>
        <Map plugins={['ToolBar']} center={this.mapCenter} zoom={4}>
          <Markers
            events={this.markerEvents}
            markers={this.markers}
            useCluster={this.state.useCluster}
            render={this.renderMarkerLayout}
          />
        </Map>
      </div>
      <button onClick={()=>{ this.toggleCluster() }}>Toggle Cluster</button>
    </div>
  }
}

ReactDOM.render(<App/>, mountNode);
