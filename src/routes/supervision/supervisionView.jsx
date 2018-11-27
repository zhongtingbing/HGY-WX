import React from 'react';
import Main from '../../layouts/main.jsx';
import classNames from 'classnames';
import './supervisionView.less';
import { Map, Markers  } from 'react-amap';
import map_market from '../../assets/image/map_market.svg';
const prefixCls = 'supervision-view74aa1b'

export default function SupervisionView(props) {
  const {

  } = props;

  const cls = classNames({
    [prefixCls]: true,
  });

  let markers = [{  position: {
    longitude: 120,
    latitude: 30,
  }},
    { position: {
      longitude: 120.01,
      latitude: 30.01,
    }}]

  const Loading = <div style={{}}>Loading Map...</div>

  const renderMarkerLayout = function () {
    return (
      <div className='market'>
        <div className='marketdesc'>
          <span>西江月项目</span>
          <div className='marketdesc-bottom'>
            <div>
              <span>123人</span>
              <span>作业中</span>
            </div>
            <div>
              <span>6</span>
              <span>塔吊</span>
            </div>
            <div>
              <span>5</span>
              <span>报警</span>
            </div>
          </div>
        </div>
        <div className='market-tip'/>
        <img src={map_market}/>
      </div>
    )
  }
  return (
    <Main className={cls}>
      <Map center={{longitude: 120, latitude: 30}} zoom={13}  amapkey='6ad24c49136bc9bfc9fc5341895fcf59'>
        <Markers
          markers={markers}
          render={renderMarkerLayout}
          loading={Loading}
        />
      </Map>
    </Main>
  );

}
