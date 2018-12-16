import React from 'react';
import './SupplyChainMa2View.less';
import Main from '../../layouts/main.jsx';
import classNames from 'classnames';
import NormalEchart from 'components/normalEchart'
import BasicCard from 'components/basicCard'
const prefixCls = 'supply-chain-ma2-view'


export default function SupplyChainMaView(props) {
  const {
    CLTHCS,
    CLYSHGCS,
    CLWYSCS,
    loading
  } = props;
  const cls = classNames({
    [prefixCls]: true,
  });

  return (
    <Main loading={loading} className={cls}>
      {
        loading ? <div/> :
        <div>
          <BasicCard name="材料验收合格次数">
            <NormalEchart
              index="CLYSHGCS"
              XData={CLYSHGCS.XData || []}
              YData={CLYSHGCS.YData || []}
            />
          </BasicCard>
          <BasicCard name="材料未验收次数">
            <NormalEchart
              index="CLWYSCS"
              XData={CLWYSCS.XData || []}
              YData={CLWYSCS.YData || []}
            />
          </BasicCard>
          <BasicCard name="材料退回次数">
            <NormalEchart
              index="CLTHCS"
              XData={CLTHCS.XData || []}
              YData={CLTHCS.YData || []}
              color="#129ab4"
            />
          </BasicCard>
        </div>
      }
    </Main>
  );
}
