import React from 'react';
import './WorkersCondition2View.less';
import Main from '../../layouts/main.jsx';
import classNames from 'classnames';
import BasicCard from 'components/basicCard'
import { ZCRSCharts, KZYRSCharts, GRPJGZSCharts } from './components'
import RingEchart from '../../components/ringEchart'


const prefixCls = 'workers-condition2-viewhaolei'


export default function WorkersCondition2View(props) {
  const {
    ZCRS,
    KZYRS,
    RZMBNRS,
    TZGRRS,
    CJGRRS,
    GRPJGZSJ,
    loading
  } = props;

  const cls = classNames({
    [prefixCls]: true,
  });
  return (
    <Main loading={loading}>
      {
        loading ? <div></div> :
        <div className={prefixCls}>
          <BasicCard name="在场人数">
            <ZCRSCharts
              index="ZCRS"
              leftName="人数"
              rightName="出勤率"
              XData={ZCRS.XData}
              leftYData={ZCRS.LData}
              rightYData={ZCRS.RData}
            />
          </BasicCard>
          <BasicCard name="跨作业人数">
            <KZYRSCharts
              index="KZYRS"
              YData={KZYRS.YData}
              XData={KZYRS.XData}
            />
          </BasicCard>
          <BasicCard name="入职满半年人数">
            <RingEchart
              index="RZBNRS"
              data={RZMBNRS}

            />
          </BasicCard>
          <BasicCard name="特种工人人数">
            <RingEchart
              index="TZGRRS"
              data={TZGRRS}
            />
          </BasicCard>
          <BasicCard name="初级工人人数">
            <RingEchart
              index="CJGRRS"
              data={CJGRRS}
            />
          </BasicCard>
          <BasicCard name="工人平均工作时间">
            <GRPJGZSCharts
              index="GRPJGZSC"
              XData={GRPJGZSJ.XData}
              YData={GRPJGZSJ.YData}
            />
          </BasicCard>

        </div>
      }

    </Main>
  );
}
