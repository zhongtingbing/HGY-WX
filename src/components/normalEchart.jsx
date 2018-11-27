import React from 'react';
// 引入 ECharts 主模块
import classNames from 'classnames';
import  './normalEchart.less'
var echarts = require('echarts/lib/echarts');
//引入柱状图
require('echarts/lib/chart/bar');
// require('echarts/lib/component/legend');
// require('echarts/lib/component/tooltip');
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
      color
    }=this.props
    const echart = echarts.init(document.getElementById(`echart-${index}`));
    // 绘制图表
    echart.setOption({
      xAxis: {
        type: 'category',
        data: ['1#', '2#', '3#', '4#', '5#', '6#', '7#', '8#', '9#'],
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
      yAxis: {
        type: 'value',
        min: 0,
        max: 100,
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
        right:2
      },
      series: [{
        data: [50, 30, 30, 30, 30, 30, 30, 30, 30],
        type: 'bar',
        barWidth:'16',              //---柱形宽度
        barCategoryGap:'40%',
        itemStyle:{
          normal: {
            color:color ||　'#fe7c7c',
          }
        },
      }]
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
