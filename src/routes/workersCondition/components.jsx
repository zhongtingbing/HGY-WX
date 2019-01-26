import React from 'react';
var echarts = require('echarts/lib/echarts');
import {XLabelFormatter} from '../../utils/help'
//引入柱状图
// require('echarts/lib/chart/bar');
// 引入提示框和标题组件
// require('echarts/lib/component/legend');
require('echarts/lib/component/tooltip');
require('echarts/lib/component/dataZoom');
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
      XData,
      YData
    } = this.props
    const _dom = echarts.init(document.getElementById(`echart-${index}`));
    // 绘制图表
    _dom.setOption({
      tooltip: {
        trigger: 'axis',
        extraCssText:'width:30px !important;height:20px !important;',
        backgroundColor: 'rgba(225, 221, 220,0.2)',
        textStyle: {
          fontSize: 10,
        },
      },
      xAxis: {
        type: 'category',
        data: XData,
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
          formatter: function (params) {
            return XLabelFormatter(params)
          },
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
        bottom:22,
        left: 22,
        right:-16,
      },
      dataZoom: [
        {
          type: 'inside',
          start: 0,
          end: 100
        },
      ],
      series: [{
        data: YData,
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
            color: '#ffd926',
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



class WorkerChart4Month extends React.PureComponent {
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
      XData,
      YData
    } = this.props
    const _dom = echarts.init(document.getElementById(`echart-${index}`));
    // 绘制图表
    _dom.setOption({
      xAxis: {
        tooltip: {
          trigger: 'axis',
          extraCssText:'width:30px !important;height:20px !important;',
          backgroundColor: 'rgba(225, 221, 220,0.2)',
          textStyle: {
            fontSize: 10,
          },
        },
        type: 'category',
        data: XData,
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
          interval:1,
          formatter: function (params) {
            return XLabelFormatter(params)
          },
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
          show:true,
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
        bottom:22,
        left: 22,
        right:6,
      },
      dataZoom: [
        {
          type: 'inside',
          start: 0,
          end: 100
        },
      ],
      series: [{
        data: YData,
        type: 'line',
        showAllSymbol: true,
        symbol: 'circle',
        label: {
          normal: {
            show: true,
            position: 'top',
            fontSize:'5',
            color:'#a0c2ff',
            margin: 0,
          }
        },
        itemStyle : {
          normal : {
            color: '#d98e28',
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


export { WorkerChart4Year, WorkerChart4Month }
