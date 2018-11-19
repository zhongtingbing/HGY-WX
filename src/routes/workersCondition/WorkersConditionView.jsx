import React from 'react';
import './WorkersConditionView.less';
import Main from '../../layouts/main.jsx';
import classNames from 'classnames';
import BasicCard from '../../components/basicCard'
import CicleProgress from '../../components/cicleProgress'
import Rail from '../../components/rail'
import RingEchart from '../../components/ringEchart'
import {WorkerChart4Year} from './components'
import Table from '../../components/Table'
import {Icon } from 'antd-mobile'
import NormalEchart from '../../components/normalEchart'
import OLDER_MAN from '../../assets/image/icon01.png'
import OLDER_MAN_50 from '../../assets/image/icon02.png'
import NEW_MAN from '../../assets/image/icon03.png'
import FALSE_MAN from '../../assets/image/icon04.png'
import ENV_BG1 from '../../assets/image/icon_bg01.png'
import ENV_BG2 from '../../assets/image/icon_bg02.png'
import ENV_BG3 from '../../assets/image/icon_bg03.png'

const prefixCls = 'workers-condition-viewhaolei'


export default function WorkersConditionView(props) {
  const {
  } = props;

  const cls = classNames({
    [prefixCls]: true,
  });
  return (
    <Main>
      <div className={cls}>
        <BasicCard className={`${cls}-supply-chain`} name="2018年每月在场人数">
          <div className='main'>
            <WorkerChart4Year index="MYZCRS"/>
          </div>
        </BasicCard>
      </div>
    </Main>
  );
}
