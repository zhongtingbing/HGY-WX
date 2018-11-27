import React from 'react';
// 引入 ECharts 主模块
import classNames from 'classnames';
import  './complexEchart.less'
var echarts = require('echarts/lib/echarts');
//引入柱状图
require('echarts/lib/chart/bar');
require('echarts/lib/component/legend');
// require('echarts/lib/component/tooltip');
// require('echarts/lib/component/title');
// require('echarts/lib/chart/pie');
require('echarts/lib/chart/line');

const prefixCls = 'complex-echart-888';


export default class ComplexEcharts extends React.PureComponent{
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
          margin: 3,
          textStyle: {
            fontSize:10
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
          min: 0,
          max: 100,
          nameTextStyle:{
            fontSize:8,
            padding:[-8, 0, -8, 10]
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
            formatter: '{value}%',
            textStyle: {
              fontSize:7
            }
          },
          axisTick: {                  //---坐标轴 刻度
            show: false,                  //---是否显示
          },
        },
        {
          name : rightName,
          type: 'value',
          nameTextStyle:{
            fontSize:8,
            padding:[-8, 21, -8, 0]
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
            textStyle: {
              fontSize:6
            }
          },
          axisTick: {                  //---坐标轴 刻度
            show: false,                  //---是否显示
          },
        },

      ],
      grid:{
        top: 30,
        bottom:20,
        left: 20,
        right:20
      },
      series: [{
        name: leftName,
        data:leftYData || [50, 30, 30, 30, 30, 30, 30, 30, 30],
        type: 'line',
        showAllSymbol: true,
        symbol: 'circle',
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
          name: rightName,
          data:rightYData || [500, 300, 300, 300, 300, 300, 300, 300, 300] ,
          type: 'bar',
          barWidth:'16',              //---柱形宽度
          barCategoryGap:'40%',
          yAxisIndex:1,
          itemStyle: {
            normal: {
              color: color ||'#fe7c7c',
            },
          },
        }],
      legend: {
        itemWidth: 12,
        itemHeight: 8,
        itemGap: 6,
        data:[{name:leftName, icon:''},{name:rightName,icon:'rect'}],
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


