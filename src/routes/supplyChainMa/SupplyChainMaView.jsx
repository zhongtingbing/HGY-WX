import React from 'react';
import './SupplyChainMaView.less';
import Main from '../../layouts/main.jsx';
import classNames from 'classnames';
import {Tabs} from 'antd-mobile'
import Table from 'components/Table'

const prefixCls = 'supply-chain-ma-view'


export default function SupplyChainMaView(props) {
  const {
    tabChange,
    tab
  } = props;
  const cls = classNames({
    [prefixCls]: true,
  });

  const tabs = [
    { title: `材料未验收情况 (${60})` },
    { title:  `材料验收未通过情况 (${20})` },
  ];
  return (
    <Main className={cls}>
      <Tabs
        tabs={tabs}
        onChange={(tab,index)=>{tabChange(index)}}
        tabBarUnderlineStyle={{width:'10%',left:`${tab*50+20}%`, borderColor:'#e3941e'}}
      >
        <Table
          kVMap={[{_key:'carNo', desc:'车牌号', width:80},{_key:'driver', desc:'司机'},{_key:'phoneNo', desc:'司机电话', width:110},{_key:'superMan', desc:'监理'}]}
          data={[
            {carNo: '浙C12345', driver: '李铁牛', phoneNo: '13898234567', superMan: '胡小龙' },
            {carNo: '浙C12345', driver: '李铁牛', phoneNo: '13898234567', superMan: '胡小龙' },
            {carNo: '浙C12345', driver: '李铁牛', phoneNo: '13898234567', superMan: '胡小龙' },
            {carNo: '浙C12345', driver: '李铁牛', phoneNo: '13898234567', superMan: '胡小龙' },
            {carNo: '浙C12345', driver: '李铁牛', phoneNo: '13898234567', superMan: '胡小龙' },
            {carNo: '浙C12345', driver: '李铁牛', phoneNo: '13898234567', superMan: '胡小龙' },
            {carNo: '浙C12345', driver: '李铁牛', phoneNo: '13898234567', superMan: '胡小龙' },
            {carNo: '浙C12345', driver: '李铁牛', phoneNo: '13898234567', superMan: '胡小龙' },
            {carNo: '浙C12345', driver: '李铁牛', phoneNo: '13898234567', superMan: '胡小龙' },
            {carNo: '浙C12345', driver: '李铁牛', phoneNo: '13898234567', superMan: '胡小龙' },
            {carNo: '浙C12345', driver: '李铁牛', phoneNo: '13898234567', superMan: '胡小龙' },
            {carNo: '浙C12345', driver: '李铁牛', phoneNo: '13898234567', superMan: '胡小龙' },
          ]}
        />
        <Table
          kVMap={[{_key:'carNo', desc:'车牌号', width:80},{_key:'driver', desc:'司机'},{_key:'phoneNo', desc:'司机电话', width:110},{_key:'superMan', desc:'监理'}]}
          data={[
            {carNo: '浙C12345', driver: '李牛', phoneNo: '13898234567', superMan: '胡小龙' },
            {carNo: '浙C12345', driver: '李铁牛', phoneNo: '13898234567', superMan: '胡小龙' },
            {carNo: '浙C12345', driver: '李铁牛', phoneNo: '13898234567', superMan: '胡小龙' },
            {carNo: '浙C12345', driver: '李铁牛', phoneNo: '13898234567', superMan: '胡小龙' },
            {carNo: '浙C12345', driver: '李铁牛', phoneNo: '13898234567', superMan: '胡小龙' },
            {carNo: '浙C12345', driver: '李铁牛', phoneNo: '13898234567', superMan: '胡小龙' },
            {carNo: '浙C12345', driver: '李铁牛', phoneNo: '13898234567', superMan: '胡小龙' },
            {carNo: '浙C12345', driver: '李铁牛', phoneNo: '13898234567', superMan: '胡小龙' },
            {carNo: '浙C12345', driver: '李铁牛', phoneNo: '13898234567', superMan: '胡小龙' },
            {carNo: '浙C12345', driver: '李铁牛', phoneNo: '13898234567', superMan: '胡小龙' },
            {carNo: '浙C12345', driver: '李铁牛', phoneNo: '13898234567', superMan: '胡小龙' },
            {carNo: '浙C12345', driver: '李铁牛', phoneNo: '13898234567', superMan: '胡小龙' },
          ]}
        />
      </Tabs>
    </Main>
  );
}
