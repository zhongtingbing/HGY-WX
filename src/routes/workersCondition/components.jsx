import React from 'react';
var echarts = require('echarts/lib/echarts');
//引入柱状图
// require('echarts/lib/chart/bar');
// 引入提示框和标题组件
// require('echarts/lib/component/legend');
// require('echarts/lib/component/tooltip');
// require('echarts/lib/component/title');
// require('echarts/lib/chart/pie');
require('echarts/lib/chart/line');


import './components.less'



class WorkerChart4Year extends React.PureComponent {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setEcharts()
    },0)
  }
  setEcharts = () => {
    const{
      index,
    } = this.props
    const _dom = echarts.init(document.getElementById(`echart-${index}`));
    // 绘制图表
    _dom.setOption({
      xAxis: {
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月',''],
        boundaryGap: false,
        axisLine:{                  //---坐标轴 轴线
          show:true,                  //---是否显示
          lineStyle:{
            color:'#9fc3ff',
            width:1,
            type:'solid',
            fontSize:8
          },
        },
        splitLine:{                 //---grid 区域中的分隔线
          show:true,                  //---是否显示，'category'类目轴不显示，此时我的y轴为类目轴，splitLine属性是有意义的
          interval:0,
          lineStyle:{
            color:'#315378',
            width:1,
            type:'dashed',          //---类型
          },
        },
        axisLabel: {
          show: true,
          margin: 3,
          interval:0,
          textStyle: {
            fontSize:8
          }
        },
        axisTick: {                  //---坐标轴 刻度
          show: false,                  //---是否显示
        },
      },
      yAxis: {
        type: 'value',
        splitLine:{                 //---grid 区域中的分隔线
          show:true,                  //---是否显示，'category'类目轴不显示，此时我的y轴为类目轴，splitLine属性是有意义的
          lineStyle:{
            color:'#315378',
            width:1,
            type:'dashed',          //---类型
          },
        },
        axisLine:{                  //---坐标轴 轴线
          show:true,                  //---是否显示
          lineStyle:{
            color:'#9fc3ff',
            width:1,
            type:'solid',
          },
        },
        axisLabel: {
          show: true,
          margin: 3,
          formatter: '{value}',
          textStyle: {
            fontSize:8
          }
        },
        axisTick: {                  //---坐标轴 刻度
          show: false,                  //---是否显示
        },
      },
      grid:{
        top: 20,
        bottom:20,
        left: 22,
        right:-16,
      },
      series: [{
        data: [820, 932, 901, 934, 1000, 1330, 1320, 820, 932, 901, 934, 1290],
        type: 'line',
        showAllSymbol: true,
        symbol: 'circle',
        label: {
          normal: {
            show: true,
            position: 'top',
            fontSize:'8',
            color:'#a0c2ff',
            margin: 0,
          }
        },
        itemStyle : {
          normal : {
            lineStyle:{
              color:'#3d87b8',
              width:1
            },
            areaStyle:{
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: '#2a73a0' // 0% 处的颜色
                }, {
                  offset: 1, color: '#0a2b54' // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
              }
            }
          }
        },

      }]
    })
  }

  render(){
    const {index} = this.props
    return (
      <div id={`echart-${index}`} className={`MYZCRS-echart`} />
    )
  }
}



export { WorkerChart4Year }
