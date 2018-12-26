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
    tab,
    WYS,
    YSWTG,
    loading
  } = props;
  const cls = classNames({
    [prefixCls]: true,
  });

  const tabs = [
    { title: `材料未验收情况 (${WYS.count})` },
    { title:  `材料验收未通过情况 (${YSWTG.count})` },
  ];
  return (
    <Main loading={loading} className={cls}>
      <Tabs
        tabs={tabs}
        onChange={(tab,index)=>{tabChange(index)}}
        tabBarUnderlineStyle={{width:'10%',left:`${tab*50+20}%`, borderColor:'#e3941e'}}
      >
        <Table
          kVMap={[{_key:'carNO', desc:'车牌号', width:80},{_key:'driver', desc:'司机'},{_key:'driverPhone', desc:'司机电话', width:110},{_key:'Supervisor', desc:'监理'}]}
          data={WYS.list}
        />
        <Table
          kVMap={[{_key:'carNO', desc:'车牌号', width:80},{_key:'driver', desc:'司机'},{_key:'driverPhone', desc:'司机电话', width:110},{_key:'Supervisor', desc:'监理'}]}
          data={YSWTG.list}
        />
      </Tabs>
    </Main>
  );
}
