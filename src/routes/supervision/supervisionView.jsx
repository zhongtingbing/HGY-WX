import React from 'react';
import Main from '../../layouts/main.jsx';
import classNames from 'classnames';
import './supervisionView.less';
import { Map, Markers  } from 'react-amap';
import map_market from '../../assets/image/map_market.svg';
const prefixCls = 'supervision-view74aa1b'

export default function SupervisionView(props) {
  const {
    data,
    loading,
    onClick
  } = props;

  const cls = classNames({
    [prefixCls]: true,
  });

  let markers = () => {
    return data.filter(opt => !!opt.latitudeAndLongitude).map((item ,index) => (
      {
        position: {
            longitude: parseFloat(item.latitudeAndLongitude.split(',')[0]),
            latitude: parseFloat(item.latitudeAndLongitude.split(',')[1]),
          },
        myLabel: item,
        myIndex: index + 1,
      }
    ))
  }

  const renderMarkerLayout = function (extData) {
    const obj = extData.myLabel
    return (
      <div  className='market'>
        <div className='marketdesc'>
          <span>{obj.name}</span>
          <div className='marketdesc-bottom'>
            <div>
              <span>{obj.nowUserCount}人</span>
              <span>作业中</span>
            </div>
            <div>
              <span>{obj.towerCount}</span>
              <span>塔吊</span>
            </div>
            <div>
              <span>{obj.warning}</span>
              <span>报警</span>
            </div>
          </div>
        </div>
        <div className='market-tip'/>
        <img src={map_market}/>
      </div>
    )
  }

  const first = data[0].latitudeAndLongitude.split(',')

 const markersEvents = {
    click(e, marker){
      const extData = marker.getExtData();
      onClick(extData.myLabel)
    },
  }

  return (
    <Main loading={loading} className={cls}>
      <Map
        center={{longitude: parseFloat(first[0]), latitude: parseFloat(first[1])}}
        zoom={13}
        amapkey='4284186c53b0630c180c254459e6b908'
      >
        <Markers
          markers={markers()}
          render={renderMarkerLayout}
          events={markersEvents}
          useCluster={true}
        />
      </Map>
    </Main>
  );

}
