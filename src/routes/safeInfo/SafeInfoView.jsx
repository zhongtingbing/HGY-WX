import React from 'react';
import './SafeInfoView.less';
import Main from '../../layouts/main.jsx';
import classNames from 'classnames';
import BasicCard from '../../components/basicCard'
import {WorkerChart4Year, WorkerChart4Month} from './components'
import Table from '../../components/Table'

const prefixCls = 'safe-info-vieweasy'


export default function SaveInfoView(props) {
  const {
  } = props;

  const cls = classNames({
    [prefixCls]: true,
  });
  return (
    <Main className={cls}>
        <BasicCard name="违章信息" more={true}>
          <Table
            kVMap={[{_key:'name', desc:'姓名'},{_key:'reason', desc:'最新违章原因', width: 110 }, {_key:'count', desc:'本月违章总数', width: 100 }]}
            data={[
              {name: '黎明议', reason: '未打卡', count: '22'},
              {name: '欧阳强', reason: '未戴安全帽',  count: '22'},
              {name: '司马相如', reason: '人帽不一',  count: '22'},
              {name: '空的话', reason: '监管违章拍照',  count: '22'},
            ]}
          />
        </BasicCard>
    </Main>
  );
}
