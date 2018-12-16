import React from 'react';
import './ProcessManagement2View.less';
import Main from '../../layouts/main.jsx';
import classNames from 'classnames';
import BasicCard from 'components/basicCard'
import NormalEchart from 'components/normalEchart'
import ComplexEchart from 'components/complexEchart'
import {SGGXSCharts} from './components'

const prefixCls = 'process-management2-vieweasy'


export default function ProcessManagement2View(props) {
  const {
    loading,
    SGGXS,
    GXSJB,
    SCSLGXB,
    GXWWCS,
    GXWBHS
  } = props;
  const cls = classNames({
    [prefixCls]: true,
  });
  return (
    <Main loading={loading} className={cls}>
      {
        loading ? <div></div> :
        <div>
          <BasicCard name="施工工序数">
            <SGGXSCharts
              index="SGGXS"
              XData={SGGXS.XData}
              SGGXData={SGGXS.YData.sggx}
              BHGXData={SGGXS.YData.bhgx}
            />
          </BasicCard>
          <BasicCard name="工序时间比">
            <NormalEchart
              isYPercent={true}
              index="GXSJB"
              color="#875dc1"
              XData={GXSJB.XData}
              YData={GXSJB.YData}
            />
          </BasicCard>
          <BasicCard name="实测实量工序比">
            <NormalEchart
              isYPercent={true}
              index="SCSLGXB"
              color="#00a0ea"
              XData={SCSLGXB.XData}
              YData={SCSLGXB.YData}
            />
          </BasicCard>
          <BasicCard name={`工序未完成数`}>
            <ComplexEchart
              index="GXWWCS"
              color="#fe7c7c"
              leftName="工序完成率"
              rightName="工序完成数(个)"
              XData={GXWWCS.XData}
              leftYData={GXWWCS.leftData}
              rightYData={GXWWCS.rightData}
            />
          </BasicCard>
          <BasicCard name={`工序未闭合数`}>
            <ComplexEchart
              index="GXWBHS"
              color="#00a0ea"
              leftName="工序未闭合率"
              rightName="工序未闭合数(个)"
              XData={GXWBHS.XData}
              leftYData={GXWBHS.leftData}
              rightYData={GXWBHS.rightData}
            />
          </BasicCard>
        </div>

      }
    </Main>
  );
}
