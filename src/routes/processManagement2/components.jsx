import React from 'react';
import {XLabelFormatter} from '../../utils/help'
// 引入 ECharts 主模块
import classNames from 'classnames';
import  './components.less'
var echarts = require('echarts/lib/echarts');
//引入柱状图
require('echarts/lib/chart/bar');
require('echarts/lib/component/legend');
require('echarts/lib/component/tooltip');
require('echarts/lib/component/dataZoom');
// require('echarts/lib/component/title');
// require('echarts/lib/chart/pie');

class SGGXSCharts extends React.PureComponent{
  constructor(props) {
    super(props)
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
      SGGXData,
      BHGXData
    }=this.props
    const echart = echarts.init(document.getElementById(`echart-${index}`));
    // 绘制图表
    const barWidth = XData.length > 12 ? '6' : '10'
    echart.setOption({
      tooltip: {
        trigger: 'axis',
        extraCssText:'width:100px !important;height:50px !important;',
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
            fontSize:1
          },
        },
        axisLabel: {
          show: true,
          margin: 6,
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
      yAxis: [
        {
          name:'',
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
            textStyle: {
              fontSize:8
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
        right:0
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
          name: '施工工序',
          data: SGGXData,
          type:'bar',
          barWidth:'10',              //---柱形宽度
          barCategoryGap: '40%',
          itemStyle: {
            normal: {
              color: '#00a0ea',
            }
          },
        },
        {
          name: '闭合工序',
          data:BHGXData,
          type: 'bar',
          barWidth:barWidth,
          barCategoryGap:'40%',
          itemStyle:{
            normal: {
              color:'#129ab4',
            }
          },
        },
      ],
      legend: {
        itemWidth: 8,
        itemHeight: 8,
        itemGap: 6,
        data:[{name:'施工工序', icon:'rect'},{name:'闭合工序',icon:'rect'}],
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
      ...other
    }=this.props
    const cls = classNames({
      [className]: className,
      'GRPJGZSC': true
    })
    return (
      <div className={cls}>
        <div id={`echart-${index}`} className={`${cls}-echart`} />
      </div>
    )
  }
}



export default {SGGXSCharts}
