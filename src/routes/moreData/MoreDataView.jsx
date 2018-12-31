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
//let data1=[];

// for (let i =0 ;i< 900;i++) {
//   data1.push(
//     {carNO: '4234234', driver: 'werwerwerwe', driverPhone: '23423423423',Supervisor: '434343'},
//   )
//
// }



  return (
    <Main className={prefixCls}>
      <div>
        <Table
          kVMap={kVMap}
          data={data}
        />
        {/*<Table*/}
          {/*kVMap={[{_key:'carNO', desc:'车牌号', width:80},{_key:'driver', desc:'司机'},{_key:'driverPhone', desc:'司机电话', width:110},{_key:'Supervisor', desc:'监理'}]}*/}
          {/*data={data1}*/}
        {/*/>*/}
        <div onClick={goBack} className={`${prefixCls}-pop`}>
          返回
        </div>
      </div>
    </Main>
  );
}


MoreDataView.defaultProps = {
  kVMap: [{_key:'carNO', desc:'车牌号', width:80}],
  data: []
}
