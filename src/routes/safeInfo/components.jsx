import React from 'react';
import PM_25_IMG from '../../assets/image/icon_pm2.5.png'
import PM_10_IMG from '../../assets/image/icon_pm10.png'
import TSP_IMG from '../../assets/image/icon_tsp.png'
import NOISE_IMG from '../../assets/image/icon_noise.png'
var echarts = require('echarts/lib/echarts');
//引入柱状图
// require('echarts/lib/chart/bar');
// 引入提示框和标题组件
require('echarts/lib/component/legend');
require('echarts/lib/component/tooltip');
require('echarts/lib/component/dataZoom');
// require('echarts/lib/component/title');
// require('echarts/lib/chart/pie');
require('echarts/lib/chart/line');

import './components.less'


function DeviceControl({data}) {
  return (
    <div className="device-control">
      {
        data.map((item, index) => {
          return (
            <div key={`device-control-${index}`}
                 className={`status-${item.value}`}>{`${item.name}：${item.value}`}</div>
          )
        })
      }
    </div>
  )
}

function EnvControl({data}) {
  const getValue = (name) => {
    return data.find(item => item.name === name).value
  }
  return (
    <div className="env-control">
      <div>
        <img src={PM_25_IMG} alt=""/>
        <span>{getValue('PM2.5')}</span>
      </div>
      <div>
        <img src={PM_10_IMG} alt=""/>
        <span>{getValue('PM10')}</span>
      </div>
      <div>
        <img src={TSP_IMG} alt=""/>
        <span>{getValue('TSP')}</span>
      </div>
      <div>
        <img src={NOISE_IMG} alt=""/>
        <span>{getValue('噪音')}</span>
      </div>
    </div>
  )
}


class AlarmChart extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    setTimeout(() => {
      this.setEcharts()
    }, 0)
  }

  setEcharts = () => {
    const {
      index,
      YData,
    } = this.props
    const _dom = echarts.init(document.getElementById(`echart-${index}`));
    const seriesList = YData.map((item, index) => {
      return {
        name: item.name,
        data: item.data,
        type: 'line',
        showAllSymbol: true,
        symbol: 'circle',
        itemStyle: {
          normal: {
            color: item.color,
            lineStyle: {
              width: 1
            },
          },
        },
      }
    });
    const legendData = YData.map(item => (item.name))
    // 绘制图表
    _dom.setOption({
      tooltip: {
        trigger: 'axis',
        extraCssText:'width:90px !important;height:120px !important;',
        backgroundColor: 'rgba(225, 221, 220,0.2)',
         textStyle: {
          fontSize: 10,
        }
      },
      legend: {
        data: legendData.length === 1 ? [] : legendData,
        icon: 'rect',
        itemWidth: 8,
        itemHeight: 8,
        itemGap: 6,
        textStyle: {
          fontSize: 9,
          color: '#F1F1F3'
        }
      },
      xAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        boundaryGap: false,
        axisLine: {                  //---坐标轴 轴线
          show: true,                  //---是否显示
          lineStyle: {
            color: '#9fc3ff',
            width: 1,
            type: 'solid',
            fontSize: 10
          },
        },
        splitLine: {                 //---grid 区域中的分隔线
          show: true,                  //---是否显示，'category'类目轴不显示，此时我的y轴为类目轴，splitLine属性是有意义的
          interval: 0,
          lineStyle: {
            color: '#315378',
            width: 1,
            type: 'dashed',          //---类型
          },
        },
        axisLabel: {
          show: true,
          margin: 3,
          interval: 0,
          textStyle: {
            fontSize: 10
          }
        },
        axisTick: {                  //---坐标轴 刻度
          show: false,                  //---是否显示
        },
      },
      yAxis: {
        type: 'value',
        splitLine: {                 //---grid 区域中的分隔线
          show: true,                  //---是否显示，'category'类目轴不显示，此时我的y轴为类目轴，splitLine属性是有意义的
          lineStyle: {
            color: '#315378',
            width: 1,
            type: 'dashed',          //---类型
          },
        },
        axisLine: {                  //---坐标轴 轴线
          show: true,
          lineStyle: {
            color: '#9fc3ff',
            width: 1,
            type: 'solid',
          },
        },
        axisLabel: {
          show: true,
          margin: 3,
          formatter: '{value}',
          textStyle: {
            fontSize: 8
          }
        },
        axisTick: {                  //---坐标轴 刻度
          show: false,                  //---是否显示
        },
      },
      grid: {
        top: 32,
        bottom: 30,
        left: 20,
        right: 10,
      },
      dataZoom: [
        {
          type: 'inside',
          start: 0,
          end: 100
        },
      ],
      series: seriesList
    })
  }

  render() {
    const {index, title} = this.props
    return (
      <div className="aLarm-echart-wrap">
        <span>{title}</span>
        <div id={`echart-${index}`} className={`aLarm-echart`}/>
      </div>
    )
  }
}


class IndexChart extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    setTimeout(() => {
      this.setEcharts()
    }, 0)
  }

  setEcharts = () => {
    const {
      index,
      YData,
      showArea,
    } = this.props
    const _dom = echarts.init(document.getElementById(`echart-${index}`));
    const seriesList = YData.map((item, index) => {
      return {
        name: item.name,
        data: item.data,
        type: 'line',
        showAllSymbol: true,
        symbol: 'circle',
        itemStyle: {
          normal: {
            color: item.color,
            lineStyle: {
              //color:'#3d87b8',
              width: 1
            },
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: item.color // 0% 处的颜色
                }, {
                  offset: 1, color: '#0a2b54' // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
              },
            }
          },
        },
      }
    });
    const legendData = YData.map(item => (item.name))
    // 绘制图表
    _dom.setOption({
      tooltip: {
        trigger: 'axis',
        extraCssText:'width:90px !important;height:120px !important;',
        backgroundColor: 'rgba(225, 221, 220,0.2)',
        textStyle: {
          fontSize: 10,
        }
      },
      legend: {
        data: legendData.length === 1 ? [] : legendData,
        left:'20',
        top:'-2',
        icon: 'rect',
        itemWidth: 8,
        itemHeight: 8,
        itemGap: 10,
        // data:[  {name:'南宁-曼芭',icon:'rect'},
        textStyle: {
          fontSize: 9,
          color: '#F1F1F3'
        }
      },
      xAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        boundaryGap: false,
        axisLine: {                  //---坐标轴 轴线
          show: true,                  //---是否显示
          lineStyle: {
            color: '#9fc3ff',
            width: 1,
            type: 'solid',
            fontSize: 10
          },
        },
        splitLine: {                 //---grid 区域中的分隔线
          show: true,                  //---是否显示，'category'类目轴不显示，此时我的y轴为类目轴，splitLine属性是有意义的
          interval: 0,
          lineStyle: {
            color: '#315378',
            width: 1,
            type: 'dashed',          //---类型
          },
        },
        axisLabel: {
          show: true,
          margin: 3,
          interval: 0,
          textStyle: {
            fontSize: 10
          }
        },
        axisTick: {                  //---坐标轴 刻度
          show: false,                  //---是否显示
        },
      },
      yAxis: {
        type: 'value',
        splitLine: {                 //---grid 区域中的分隔线
          show: true,                  //---是否显示，'category'类目轴不显示，此时我的y轴为类目轴，splitLine属性是有意义的
          lineStyle: {
            color: '#315378',
            width: 1,
            type: 'dashed',          //---类型
          },
        },
        axisLine: {                  //---坐标轴 轴线
          show: true,
          lineStyle: {
            color: '#9fc3ff',
            width: 1,
            type: 'solid',
          },
        },
        axisLabel: {
          show: true,
          margin: 3,
          formatter: '{value}',
          textStyle: {
            fontSize: 8
          }
        },
        axisTick: {                  //---坐标轴 刻度
          show: false,                  //---是否显示
        },
      },
      grid: {
        top: 20,
        bottom: 20,
        left: 20,
        right: 10,
      },
      dataZoom: [
        {
          type: 'inside',
          start: 0,
          end: 100
        },
      ],
      series: seriesList
    })
  }

  render() {
    const {index, title} = this.props
    return (
      <div className="index-echart-wrap">
        <span>{title}</span>
        <div id={`echart-${index}`} className={`index-echart`}/>
      </div>
    )
  }
}

export {DeviceControl, EnvControl, AlarmChart, IndexChart}
