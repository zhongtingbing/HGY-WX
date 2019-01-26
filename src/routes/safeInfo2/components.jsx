import React from 'react';
import classNames from 'classnames';
import {XLabelFormatter} from '../../utils/help'
var echarts = require('echarts/lib/echarts');
//引入柱状图
// require('echarts/lib/chart/bar');
// 引入提示框和标题组件
require('echarts/lib/component/legend');
require('echarts/lib/component/dataZoom');
require('echarts/lib/component/tooltip');
// require('echarts/lib/component/title');
// require('echarts/lib/chart/pie');
require('echarts/lib/chart/line');

import './components.less'


class DeviceCahrt extends React.PureComponent{
  constructor(props) {
    super(props)
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setEcharts()
    },100)
  }

  setEcharts = ()=>{
    let {
      index,
      XData,
      YData,
    } = this.props
    const echart = echarts.init(document.getElementById(`echart-${index}`));
    // 绘制图表
    const series = [].concat(YData).reverse().map(item => {
      return (
        {
          name: item.name,
          data:item.value,
          type: 'bar',
          barWidth:'16',              //---柱形宽度
          barCategoryGap:'40%',
          stack: 'left',
          itemStyle: {
            normal: {
              color: item.color || '#00a0ea',
            },
          },
        }
      )
    });
    echart.setOption({
      tooltip: {
        trigger: 'axis',
        extraCssText:'width:130px !important;height:100px !important;',
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
          formatter: function (params) {
            return XLabelFormatter(params)
          },
          margin: 6,
          interval: 0,
          textStyle: {
            fontSize:8
          }
        },
        axisTick: {                  //---坐标轴 刻度
          show: false,                  //---是否显示
        },
      },
      yAxis: {
          name : '',
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
            margin: 6,
            textStyle: {
              fontSize:8
            }
          },
          axisTick: {                  //---坐标轴 刻度
            show: false,                  //---是否显示
          },
        },
      grid:{
        top: 36,
        bottom:40,
        left: 22,
        right:0
      },
      series: series,
      dataZoom: [
        {
          type: 'inside',
          start: 0,
          end: 100
        },
      ],
      legend: {
        itemWidth: 8,
        itemHeight: 8,
        itemGap: 6,
       // data:[{name:'正常进入', icon:'rect'},{name:'未打卡进入',icon:'rect'},{name:'未带安全帽进入',icon:'rect'}],
        data: YData.map(item => ({name: item.name, icon:'rect',})),
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
      title,
      YData,
      XData,
      ...other
    }=this.props
    const prefixCls = 'device-chart-345'
    const cls = classNames({
      [prefixCls]: true,
      [className]: className
    })
    return (
      <div className={cls}  {...other}>
        <div className="title">{title}</div>
        <div id={`echart-${index}`} className={`${prefixCls}-echart`} />
      </div>
    )
  }
}
DeviceCahrt.defaultProps={
  YData:[]
}

export {DeviceCahrt}
