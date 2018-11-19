/**
 * Created by jdf-zhongtingbing on 2017/6/6.
 */
import React from 'react';
import classNames from 'classnames';
// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts');
//引入柱状图
// require('echarts/lib/chart/bar');
// 引入提示框和标题组件
// require('echarts/lib/component/legend');
// require('echarts/lib/component/tooltip');
 require('echarts/lib/component/title');
require('echarts/lib/chart/pie');
// require('echarts/lib/chart/line');


import './ringEchart.less'

const prefixCls = 'ring-echart';

export default class RingEchart extends React.PureComponent{

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
    const executionChart = echarts.init(document.getElementById(`ring-echart-${index}`));
    // 绘制图表
    executionChart.setOption({
      series: [
        {
          name:'',
          type:'pie',
          radius: ['0', '60%'],//设置大小
          label: {
            normal: {
              show: false,
            },
          },
          animation: false,
          data:[
            {value:30, name:''},
          ],
          color:['#08214a']
        },
        {
          name:'',
          type:'pie',
          radius: ['60%', '70%'],//设置大小
          label: {
            normal: {
              show: true,
              formatter: '{b} {d}%',
              padding: [-20, -60 , 0, -60,],
              position: 'inter',
              textStyle: {
                fontSize: '11',
              }
            },
          },
          labelLine: {
            normal:{
              show: true,
              length:24,
              length2: 60,
            },
          },
          data:[
            {value:30, name:'吊篮'},
            {value:18, name:'大绳'},
            {value:12, name:'塔吊师'},
            {value:40, name:'电焊工'},
          ],
          color:['#f47270', '#1f7dd4','#f4c841','#2695a9']
        }
      ]
    })
  }

  render(){
    const{
      className,
      index,
      name,
      other
    }=this.props
    const cls = classNames({
      [prefixCls]: true,
      [className]: className
    })
    return (
      <div className={cls}  {...other}>
        <div id={`ring-echart-${index}`} className={`${prefixCls}-echart`}/>
        <div className="desc">
          <div>
            <span style={{fontSize:'20px'}}>{60}</span>
            <span style={{fontSize:'10px'}}>人</span>
          </div>
          <div  style={{fontSize:'14px'}}>
            特殊工种
          </div>
        </div>
      </div>
    )
  }

}




