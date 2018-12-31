import React from 'react';
import './DeviceMoreDataView.less';
import Main from '../../layouts/main.jsx';
import classNames from 'classnames';
import {DeviceControl} from './components'
const prefixCls = 'device-more-data-view12-5'

export default function DeviceMoreDataView(props) {
  const {
    data,
    goBack
  } = props;
  const cls = classNames({
    [prefixCls]: true,
  });
  return (
    <Main className={prefixCls}>
      <div>
        <DeviceControl
          data={data}
        />
        <div onClick={goBack} className={`${prefixCls}-pop`}>
          返回
        </div>
      </div>
    </Main>
  );
}

DeviceMoreDataView.defaultProps={
  data: []
}
