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
  } = props;

  const cls = classNames({
    [prefixCls]: true,
  });
  return (
    <Main className={cls}>
      <div>
        <BasicCard name="施工工序数">
          <SGGXSCharts
            index="SGGXS"
            XData={['理想之城', '西江月', '西江月2#', '西江月#', '西江月5#', '西江',]}
            SGGXData={[200, 300, 400, 399, 444, 333,]}
            BHGXData={[200, 300, 400, 399, 444, 333,]}
          />
        </BasicCard>
        <BasicCard name="工序时间比">
          <NormalEchart
            isYPercent={true}
            index="GXSJB"
            color="#875dc1"
            XData={['理想之城', '西江月', '西江月2#', '西江月#', '西江月5#', '西江',]}
          />
        </BasicCard>
        <BasicCard name="实测实量工序比">
          <NormalEchart
            isYPercent={true}
            index="SCSLGXB"
            color="#00a0ea"
            XData={['理想之城', '西江月', '西江月2#', '西江月#', '西江月5#', '西江',]}
          />
        </BasicCard>
        <BasicCard name={`工序未完成数`}>
          <ComplexEchart
            index="GXWWCS"
            color="#fe7c7c"
            leftName="工序完成率"
            rightName="工序完成数(个)"
            XData={['理想之城', '西江月', '西江月2#', '西江月#', '西江月5#', '西江',]}
            leftYData={[23,33,22,55,66,22]}
            rightYData={[100,333,555,666,222,333]}
          />
        </BasicCard>
        <BasicCard name={`工序未闭合数`}>
          <ComplexEchart
            index="GXWBHS"
            color="#00a0ea"
            leftName="工序未闭合率"
            rightName="工序未闭合数(个)"
            XData={['理想之城', '西江月', '西江月2#', '西江月#', '西江月5#', '西江',]}
            leftYData={[23,33,22,55,66,22]}
            rightYData={[100,333,555,666,222,333]}
          />
        </BasicCard>
      </div>
    </Main>
  );
}
