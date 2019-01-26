import React from 'react';
// 引入 ECharts 主模块
import classNames from 'classnames';
import  './components.less'
import {XLabelFormatter} from '../../utils/help'
var echarts = require('echarts/lib/echarts');
//引入柱状图
require('echarts/lib/chart/bar');
require('echarts/lib/component/legend');
require('echarts/lib/component/tooltip');
require('echarts/lib/component/dataZoom');
// require('echarts/lib/component/title');
// require('echarts/lib/chart/pie');
require('echarts/lib/chart/line');

class ZCRSCharts extends React.PureComponent{
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setEcharts()
    },100)
  }

  setEcharts = ()=>{
    let {
      index,
      color,
      XData,
      leftYData,
      rightYData,
      leftName,
      rightName
    } = this.props
    const echart = echarts.init(document.getElementById(`echart-${index}`));
    // 绘制图表
    echart.setOption({
      tooltip: {
        trigger: 'axis',
        extraCssText:'width:130px !important;height:80px !important;',
        backgroundColor: 'rgba(225, 221, 220,0.2)',
        textStyle: {
          fontSize: 10,
        },
        // formatter: function (params, ticket, callback) {
        //   return `${params[0].axisValueLabel}<br>${params[0].marker} ${params[0].seriesName}:  ${params[0].value}%<br>${params[1].marker} ${params[1].seriesName}: ${params[1].value}`
        // }
      },
      xAxis: {
        type: 'category',
        data: XData,
        axisLine:{                  //---坐标轴 轴线
          show:true,                  //---是否显示
          lineStyle:{
            color:'#9fc3ff',
            width:1,
            type:'solid',
            fontSize:'px'
          },
        },
        axisLabel: {
          show: true,
          margin: 6,
          interval: 0,
          formatter: function (params) {
            return XLabelFormatter(params)
          },
          textStyle: {
            fontSize:7,
          }
        },
        axisTick: {                  //---坐标轴 刻度
          show: false,                  //---是否显示
        },
      },
      yAxis: [
        {
          name : leftName,
          type: 'value',
          nameTextStyle:{
            fontSize:8,
            padding:[-8, 0, -8, -10]
          },
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
            textStyle: {
              fontSize:8
            }
          },
          axisTick: {                  //---坐标轴 刻度
            show: false,                  //---是否显示
          },
        },
        {
          name : rightName,
          type: 'value',
          min: 0,
          max: 100,
          nameTextStyle:{
            fontSize:8,
            padding:[-8, -10, -8, 0]
          },
          splitLine:{                 //---grid 区域中的分隔线
            show:false,                  //---是否显示，'category'类目轴不显示，此时我的y轴为类目轴，splitLine属性是有意义的
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
            formatter: '{value}%',
            textStyle: {
              fontSize:6,
            }
          },
          axisTick: {                  //---坐标轴 刻度
            show: false,                  //---是否显示
          },
        },

      ],
      grid:{
        top: 30,
        bottom:30,
        left: 20,
        right:20
      },
      dataZoom: [
        {
          type: 'inside',
          start: 0,
          end: 100
        },
      ],
      series: [{
        name: rightName,
        data:rightYData,
        type: 'line',
        showAllSymbol: true,
        symbol: 'circle',
        yAxisIndex:1,
        itemStyle:{
          normal: {
            color:　'#ff9a48',
            lineStyle: {
              width: 1
            },
          }
        },
      },
        {
          name: '正常进入',
          data:leftYData.zcjrData,
          type: 'bar',
          barWidth:'12',              //---柱形宽度
          barCategoryGap:'40%',
          stack: 'zcrs',
          itemStyle: {
            normal: {
              color: '#00a0ea',
            },
          },
        },
        {
          name: '未打卡进入',
          data:leftYData.wdkjrData,
          type: 'bar',
          barWidth:'12',              //---柱形宽度
          barCategoryGap:'40%',
          stack: 'zcrs',
          itemStyle: {
            normal: {
              color: '#f4736e',
            },
          },
        },
        {
          name: '未带安全帽进入',
          data:leftYData.wdaqmData,
          type: 'bar',
          barWidth:'12',              //---柱形宽度
          barCategoryGap:'40%',
          stack: 'zcrs',
          itemStyle: {
            normal: {
              color: '#f4c841',
            },
          },
        }],
      legend: {
        itemWidth: 8,
        itemHeight: 8,
        itemGap: 6,
        data:[{name:'正常进入', icon:'rect'},{name:'未打卡进入',icon:'rect'},{name:'未带安全帽进入',icon:'rect'}],
        textStyle: {
          fontSize: 9,
          color: '#F1F1F3'
        }
      },
    })
  }

  render(){
    const{
      className,
      index,
      other
    }=this.props
    const prefixCls = 'ZCRS-chart'
    const cls = classNames({
      [prefixCls]: true,
      [className]: className
    })
    return (
      <div className={cls}  {...other}>
        <div id={`echart-${index}`} className={`${prefixCls}-echart`} />
      </div>
    )
  }
}

class KZYRSCharts extends React.PureComponent {
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
      YData,
      XData
    } = this.props
    const _dom = echarts.init(document.getElementById(`echart-${index}`));
    // 绘制图表
    _dom.setOption({
      tooltip: {
        trigger: 'axis',
        extraCssText:'width:130px !important;height:60px !important;',
        backgroundColor: 'rgba(225, 221, 220,0.2)',
        textStyle: {
          fontSize: 10,
        },
        // formatter: function (params, ticket, callback) {
        //   return `${params[0].axisValueLabel}<br>${params[0].marker} ${params[0].seriesName}:  ${params[0].value}%<br>${params[1].marker} ${params[1].seriesName}: ${params[1].value}`
        // }
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
          margin: 6,
          interval:0,
          textStyle: {
            fontSize:8
          },
          formatter: function (params) {
            return XLabelFormatter(params)
          },
        },
        axisTick: {                  //---坐标轴 刻度
          show: false,                  //---是否显示
        },
      },
      dataZoom: [
        {
          type: 'inside',
          start: 0,
          end: 100
        },
      ],
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
        top: 10,
        bottom:40,
        left: 22,
        right:12,
      },
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
            color: '#fd9000',
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
      <div id={`echart-${index}`} className={`KZYRS-echart`} />
    )
  }
}



class GRPJGZSCharts extends React.PureComponent{
  constructor(props) {
    super(props)
    this.state = {
    }
  }


  componentDidMount(){
    setTimeout(()=>{
      this.setEcharts()
    },100)
  }


  setEcharts = ()=>{
    const{
      index,
      color,
      XData,
      YData
    }=this.props
    const echart = echarts.init(document.getElementById(`echart-${index}`));
    // 绘制图表
    echart.setOption({
      tooltip: {
        trigger: 'axis',
        extraCssText:'width:130px !important;height:60px !important;',
        backgroundColor: 'rgba(225, 221, 220,0.2)',
        textStyle: {
          fontSize: 10,
        },
        // formatter: function (params, ticket, callback) {
        //   return `${params[0].axisValueLabel}<br>${params[0].marker} ${params[0].seriesName}:  ${params[0].value}%<br>${params[1].marker} ${params[1].seriesName}: ${params[1].value}`
        // }
      },
      legend: {
        itemWidth: 8,
        itemHeight: 8,
        itemGap: 6,
        data:[{name:'平均工作天数（7天）', icon:'rect'},{name:'平均工作时长（7天）',icon:'rect'}],
        textStyle: {
          fontSize: 9,
          color: '#F1F1F3'
        }
      },
      xAxis: {
        type: 'category',
        data: XData,
        axisLine:{                  //---坐标轴 轴线
          show:true,                  //---是否显示
          lineStyle:{
            color:'#9fc3ff',
            width:1,
            type:'solid',
            fontSize:'px'
          },
        },
        axisLabel: {
          show: true,
          formatter: function (params) {
            return XLabelFormatter(params)
          },
          margin: 6,
          textStyle: {
            fontSize:8
          }
        },
        axisTick: {                  //---坐标轴 刻度
          show: false,                  //---是否显示
        },
      },
      yAxis: [
        {
          name:'天数',
          type: 'value',
          nameTextStyle:{
            fontSize:8,
            padding:[-8, 0, -8, -10]
          },
          min: 0,
          max: 365,
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
            textStyle: {
              fontSize:8
            }
          },
          axisTick: {                  //---坐标轴 刻度
            show: false,                  //---是否显示
          },
        },
        {
          name : '小时',
          type: 'value',
          min: 0,
          max: 24,
          nameTextStyle:{
            fontSize:8,
            padding:[-8, 10, -8, 0]
          },
          splitLine:{                 //---grid 区域中的分隔线
            show:false,                  //---是否显示，'category'类目轴不显示，此时我的y轴为类目轴，splitLine属性是有意义的
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
              fontSize:8,
            }
          },
          axisTick: {                  //---坐标轴 刻度
            show: false,                  //---是否显示
          },
        },

      ],
      grid:{
        top: 20,
        bottom:40,
        left: 18,
        right:14
      },
      dataZoom: [
        {
          type: 'inside',
          start: 0,
          end: 100
        },
      ],
      series: [
          {
            data:YData.days,
            name: '平均工作天数（7天）',
            type: 'bar',
            barWidth:'12',              //---柱形宽度
            barCategoryGap:'40%',
            itemStyle:{
              normal: {
                color:'#00a0ea',
              }
          },
        },
        {
          data:YData.hours,
          type: 'bar',
          barWidth:'12',
          name: '平均工作时长（7天）',
          yAxisIndex:1,
          barCategoryGap:'40%',
          itemStyle:{
            normal: {
              color:'#129ab4',
            }
          },
        },
      ]
    })
  }

  render(){
    const{
      className,
      index,
      other
    }=this.props
    const cls = classNames({
      [className]: className,
      'GRPJGZSC': true
    })
    return (
      <div className={cls}  {...other}>
        <div id={`echart-${index}`} className={`${cls}-echart`} />
      </div>
    )
  }
}



export default {ZCRSCharts, KZYRSCharts, GRPJGZSCharts}
