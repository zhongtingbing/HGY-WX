import React from 'react';
import './DeviceMoreDataView.less';
import Main from '../../layouts/main.jsx';
import classNames from 'classnames';
import {DeviceControl} from './components'
const prefixCls = 'device-more-data-view12-5'

export default function DeviceMoreDataView(props) {
  const {
    data,
  } = props;
  const cls = classNames({
    [prefixCls]: true,
  });
  return (
    <Main className={prefixCls}>
      <div>
        <DeviceControl
          data={[
            {name:'1号塔吊',status:'1'},
            {name:'2号塔吊',status:'0'},
            {name:'3号塔吊',status:'0'},
            {name:'4号塔吊',status:'2'},
            {name:'5号塔吊',status:'0'},
            {name:'6号塔吊',status:'1'},
          ]}
        />
      </div>
    </Main>
  );
}
