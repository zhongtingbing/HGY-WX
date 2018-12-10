import React from 'react';
var echarts = require('echarts/lib/echarts');
//引入柱状图
// require('echarts/lib/chart/bar');
// 引入提示框和标题组件
// require('echarts/lib/component/legend');
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
require('echarts/lib/chart/pie');
// require('echarts/lib/chart/line');


import './components.less'

function AgeTable({data}) {
  data = [
    {
      key: '0-18',
      value: '0'
    },
    {
      key: '19-25',
      value: '0'
    },
    {
      key: '26-30',
      value: '10'
    },
    {
      key: '31-35',
      value: '10'
    },
    {
      key: '36-40',
      value: '10'
    },
    {
      key: '41-45',
      value: '10'
    },
    {
      key: '46-50',
      value: '10'
    },
    {
      key: '51-55',
      value: '10'
    },
    {
      key: '56-60',
      value: '10'
    },
    {
      key: '60+',
      value: '0'
    }

  ]
  return (
    <div className="age-table">
      <div className="title">
        <span>年龄</span>
        <span>人数</span>
      </div>
      {
        data.map((item, index) => (
          <div key={index} className={`${index % 2 === 1 ? ' even' : ''} table-item`}>
            <span>{item.key}</span>
            <span>{item.value}</span>
          </div>
        ))
      }
    </div>
  )
}


function Progress({percent, value}) {
  return (
    <div className="progress">
      <div style={{width: `${percent}%`}}>
        {value}
      </div>
    </div>
  )
}


class GXWTEchart extends React.PureComponent {
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
      data
    } = this.props;
    const innerData = data.map((item, index) => {
      return {value: item.value, name: index}
    })
    const _dom = echarts.init(document.getElementById(`echart-${index}`));
    // 绘制图表
    _dom.setOption({
      series: [
        {
          type:'pie',
          radius: ['0', '15%'],//设置大小
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
          type:'pie',
          radius: ['15%', '19%'],//设置大小
          label: {
            normal: {
              show: false,
            }
          },
          data: innerData,
          color:['#009966', '#339933','#99cc33','#cccc33','#cc9933','#cc6600','#993333','#330066','#003366','#333399']
        },
        {
          type:'pie',
          radius: ['19%', '45%'],//设置大小
          label: {
            normal: {
              show: true,
              formatter: '{b} {c}',
              color: '#99ccff',
              position: 'outside',
              textStyle: {
                fontSize: '12',
              }
            },
          },
          labelLine: {
            normal:{
              show: true,
              length:24,
              length2: 0,
              lineStyle: {
                color: '#3366cc',
              }
            },
            },
          data:data,
          color:['#339999', '#669933','#99cc66','#ffff33','#cccc33','#cc6633','#cc6633','#663399','#333399','#3366cc']
        }
      ]
    })
  }

  render(){
    const {index} = this.props
    return (
      <div id={`echart-${index}`} className={`GXWT-echart`} />
    )
  }
}

export {AgeTable, Progress, GXWTEchart}
