/**
 * Created by jdf-zhongtingbing on 2017/6/6.
 */
import React from 'react';
import classNames from 'classnames';
// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts');
// 引入柱状图
// require('echarts/lib/chart/bar');
// // 引入提示框和标题组件
// require('echarts/lib/component/legend');
// require('echarts/lib/component/tooltip');
// require('echarts/lib/component/title');
// require('echarts/lib/chart/pie');
// require('echarts/lib/chart/line');
require('echarts/lib/chart/radar');


import './executionEchart.less'

const prefixCls = 'execution-card';

export default class ExecutionEchart extends React.PureComponent{

  constructor(props){
    super(props)
    this.state={

    }
  }
  componentDidMount() {
    setTimeout(()=>{this.setEcharts()},0)
  }

  setEcharts = ()=>{
    const{
      index,
    }=this.props
    const executionChart = echarts.init(document.getElementById(`execution-echart-${index}`));
    // 绘制图表
    executionChart.setOption({
      title: {
        text: ''
      },
      tooltip: {},
      legend: {
      },
      radar: {
        name: {
          textStyle: {
            color: '#fff',
            borderRadius: 3,
            fontSize:'10px'
          }
        },
        splitNumber: 20, // 雷达图圈数设置
        axisLine: {
          lineStyle: {
            color: 'rgba(131,141,158,.1)',
          },
        },
        splitArea : {
          show : false,
          areaStyle : {
            color: 'rgba(255,0,0,0)', // 图表背景的颜色
          },
        },
        splitLine : {
          show : true,
          lineStyle : {
            width : 1,
            color : '#317b9f', // 设置网格的颜色
          },
        },
        radius: '68%',
        center:['50%','50%'],
        nameGap: 3,
        indicator: [
          { name: '工序合格率', max: 100},
          { name: '材料合格率', max: 100},
          { name: '报警排名倒序', max: 100},
          { name: '工人违章率', max: 100},
          { name: '培训次数', max: 100},
          { name: '设备工作时长', max: 100},
          { name: '设备人均工作时长', max: 100}
        ]
      },
      series: [{
        name: '',
        type: 'radar',
        symbolSize: 0, // 拐点的大小
        areaStyle: {
          normal: {
            width: 1,
            opacity: .9,
          },
        },
        data : [
          {
            value: [90, 44, 100, 60, 100, 90, 100],
            name: '',
            symbol: 'circle', // 拐点的样式，还可以取值'rect','angle'等
            itemStyle: {
              normal: {
                color: '#48d6eb',
                lineStyle: {
                  width: 0
                },
              },
            },
          }
        ]
      }]
    })
  }

  render(){
    const{
      className,
      index,
      name,
      ...other
    }=this.props
    const cls = classNames({
      [prefixCls]: true,
      [className]: className
    })
    return (
      <div className={cls}>
        <div className="head">
          <div className="left"></div>
          <div className="right">{name}</div>
        </div>
        <div id={`execution-echart-${index}`} className={`${prefixCls}-echart`} />
      </div>
    )
  }

}




