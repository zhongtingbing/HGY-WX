import React from 'react';
import './SupplyChainMa2View.less';
import Main from '../../layouts/main.jsx';
import classNames from 'classnames';
import NormalEchart from 'components/normalEchart'
import BasicCard from 'components/basicCard'
const prefixCls = 'supply-chain-ma-view'


export default function SupplyChainMaView(props) {
  const {
  } = props;
  const cls = classNames({
    [prefixCls]: true,
  });

  return (
    <Main className={cls}>
      <div>
        <BasicCard name="材料验收合格次数">
          <NormalEchart
            index="CLYSHGCS"
            XData={['理想之城', '西江月', '西江月2#', '西江月#', '西江月5#', '西江',]}
            YData={[200, 300, 200, 500, 300 ,200]}
            color="#00a0ea"
          />
        </BasicCard>
        <BasicCard name="材料未验收次数">
          <NormalEchart
            index="CLWYSCS"
            XData={['理想之城', '西江月', '西江月2#', '西江月#', '西江月5#', '西江',]}
            YData={[200, 300, 200, 500, 300 ,200]}
          />
        </BasicCard>
        <BasicCard name="材料退回次数">
          <NormalEchart
            index="CLTHCS"
            XData={['理想之城', '西江月', '西江月2#', '西江月#', '西江月5#', '西江',]}
            YData={[200, 300, 200, 500, 300 ,200]}
            color="#129ab4"
          />
        </BasicCard>
      </div>
    </Main>
  );
}
