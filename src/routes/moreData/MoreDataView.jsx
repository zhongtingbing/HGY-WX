import React from 'react';
import './MoreDataView.less';
import Main from '../../layouts/main.jsx';
import classNames from 'classnames';
import Table from 'components/Table'
const prefixCls = 'more-data-view12-5'

export default function MoreDataView(props) {
  const {
    data,
    kVMap,
    goBack
  } = props;
  const cls = classNames({
    [prefixCls]: true,
  });
  return (
    <Main className={prefixCls}>
      {/*<Table*/}
        {/*kVMap={kVMap}*/}
        {/*data={data}*/}
      {/*/>*/}
      <Table
        kVMap={[{_key:'carNO', desc:'车牌号', width:80},{_key:'driver', desc:'司机'},{_key:'driverPhone', desc:'司机电话', width:110},{_key:'Supervisor', desc:'监理'}]}
        data={[]}
      />
      <div onClick={goBack} className={`${prefixCls}-pop`}>
        返回
      </div>
    </Main>
  );
}
