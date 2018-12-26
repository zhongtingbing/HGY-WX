import React from 'react';
import './ProcessManagementView.less';
import Main from '../../layouts/main.jsx';
import classNames from 'classnames';
import BasicCard from 'components/basicCard'
import NormalEchart from 'components/normalEchart'
import ComplexEchart from 'components/complexEchart'

const prefixCls = 'process-management-vieweasy'


export default function ProcessManagementView(props) {
  const {
    loading,
    GXSJB,
    GXWWCS,
    SCSLGXB,
    GXWBHS,
    GXWWCSTOP5,
    WXWBHSTOP5,
  } = props;

  const cls = classNames({
    [prefixCls]: true,
  });
  return (
    <Main loading={loading} className={cls}>
      {
        loading ? <div/> :
        <div>
          <BasicCard name="工序时间比">
            <NormalEchart
              isYPercent={true}
              index="GXSJB"
              color="#00a0ea"
              XData={GXSJB.XData}
              YData={GXSJB.YData}
            />
          </BasicCard>
          <BasicCard name={`工序未完成数 (楼栋)`}>
            <ComplexEchart
              index="GXWWCS"
              color="#1490ac"
              leftName="工序完成率"
              rightName="工序完成数(个)"
              XData={GXWWCS.XData}
              leftYData={GXWWCS.leftData}
              rightYData={GXWWCS.rightData}
            />
          </BasicCard>
          <BasicCard name="实测实量工序比">
            <NormalEchart
              isYPercent={true}
              index="SCSLGXB"
              XData={SCSLGXB.XData}
              YData={SCSLGXB.YData}
            />
          </BasicCard>
          <BasicCard name={`工序未闭合数 (楼栋)`}>
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
          <BasicCard name={`工序未完成数TOP5 (工序)`}>
            <ComplexEchart
              index="GXWWCSTOP5"
              color="#ceb855"
              leftName="工序完成率"
              rightName="工序完成数(个)"
              XData={GXWWCSTOP5.XData}
              leftYData={GXWWCSTOP5.leftData}
              rightYData={GXWWCSTOP5.rightData}
            />
          </BasicCard>
          <BasicCard name={`工序未闭合数TOP5 (工序)`}>
            <ComplexEchart
              index="GXWBHSTOP5"
              color="#875dc1"
              leftName="工序未闭合率"
              rightName="工序未闭合数(个)"
              XData={WXWBHSTOP5.XData}
              leftYData={WXWBHSTOP5.leftData}
              rightYData={WXWBHSTOP5.rightData}
            />
          </BasicCard>
        </div>
      }

    </Main>
  );
}
