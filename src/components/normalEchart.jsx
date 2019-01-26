import React from 'react';
// 引入 ECharts 主模块
import classNames from 'classnames';
import  './normalEchart.less'
import {XLabelFormatter} from '../utils/help'
var echarts = require('echarts/lib/echarts');
//引入柱状图
require('echarts/lib/chart/bar');
// require('echarts/lib/component/legend');
require('echarts/lib/component/tooltip');
require('echarts/lib/component/dataZoom');
// require('echarts/lib/component/title');
// require('echarts/lib/chart/pie');
// require('echarts/lib/chart/line');

const prefixCls = 'normal-echart-777';


export default class NormalEcharts extends React.PureComponent{
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
      XData,
      YData,
      isYPercent,
      color
    }=this.props
    const barWidth = XData.length > 12 ? '8' : '14'
    const echart = echarts.init(document.getElementById(`echart-${index}`));
    // 绘制图表
    echart.setOption({
      tooltip: {
        trigger: 'axis',
        formatter: isYPercent? '{b0}: {c0}%' : '{b0}: {c0}',
        extraCssText:'width:100px !important;height:24px !important;',
        backgroundColor: 'rgba(225, 221, 220,0.2)',
        textStyle: {
          fontSize: 10,
        },
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
          margin: 8,
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
        min: isYPercent ? 0 : null,
        max: isYPercent ? 100 : null,
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
          formatter: isYPercent ? '{value}%' : null,
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
        bottom:40,
        left: 28,
        right:2
      },
      dataZoom: [
        {
          type: 'inside',
          start: 0,
          end: 100
        },
      ],
      series: [{
        data:YData || [50, 30, 30, 30, 30, 30, 30, 30, 30],
        type: 'bar',
        barWidth: barWidth,              //---柱形宽度
        barCategoryGap:'40%',
        itemStyle:{
          normal: {
            color: color ||　'#fe7c7c',
          }
        },
      }]
    })
  }

  render(){
    const{
      className,
      index,
      ...other
    }=this.props
    const cls = classNames({
      [prefixCls]: true,
      [className]: className
    })
    return (
      <div className={cls}>
        <div id={`echart-${index}`} className={`${prefixCls}-echart`} />
      </div>
    )
  }
}
