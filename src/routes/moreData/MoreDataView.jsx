import React from 'react';
import './MoreDataView.less';
import Main from '../../layouts/main.jsx';
import classNames from 'classnames';
import Table from 'components/Table'
const prefixCls = 'more-data-view12-5'

export default function MoreDataView(props) {
  const {
    data,
    kVMap
  } = props;
  console.log(props)
  const cls = classNames({
    [prefixCls]: true,
  });
  return (
    <Main className={prefixCls}>
      <Table
        kVMap={kVMap}
        data={data}
      />
    </Main>
  );
}
