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
  } = props;

  const cls = classNames({
    [prefixCls]: true,
  });
  return (
    <Main className={cls}>
      <div>
        <BasicCard name="工序时间比">
          <NormalEchart
            isYPercent={true}
            index="GXSJB"
            color="#00a0ea"
            XData={['1#', '2#', '3#', '4#', '5#', '6#', '7#', '8#', '9#']}
            YData={[20,34,33,44,11,33,55,66,33]}

          />
        </BasicCard>
        <BasicCard name={`工序未完成数 (楼栋#)`}>
          <ComplexEchart
            index="GXWWCS"
            color="#1490ac"
            leftName="工序完成率"
            rightName="工序完成数(个)"
            XData={['1#', '2#', '3#', '4#', '5#', '6#', '7#', '8#', '9#']}
            leftYData={[23,33,22,44,55,66,22,33,44]}
            rightYData={[100,333,222,444,555,666,222,333,666]}
          />
        </BasicCard>
        <BasicCard name="实测实量工序比">
          <NormalEchart
            isYPercent={true}
            index="SCSLGXB"
            XData={['1#', '2#', '3#', '4#', '5#', '6#', '7#', '8#', '9#']}
            YData={[20,34,33,44,11,33,55,66,33]}
          />
        </BasicCard>
        <BasicCard name={`工序未闭合数 (楼栋#)`}>
          <ComplexEchart
            index="GXWBHS"
            color="#00a0ea"
            leftName="工序未闭合率"
            rightName="工序未闭合数(个)"
            XData={['1#', '2#', '3#', '4#', '5#', '6#', '7#', '8#', '9#']}
            leftYData={[23,33,22,44,55,66,22,33,45]}
            rightYData={[100,333,222,444,555,666,222,333,666]}
          />
        </BasicCard>
        <BasicCard name={`工序未完成数TOP5 (工序)`}>
          <ComplexEchart
            index="GXWWCSTOP5"
            color="#ceb855"
            leftName="工序完成率"
            rightName="工序完成数(个)"
            XData={['地坪浇筑', '烟道', '内保温', '支模架', '中央空调',]}
            leftYData={[23,33,22,44,55]}
            rightYData={[100,333,222,444,556]}
          />
        </BasicCard>
        <BasicCard name={`工序未闭合数TOP5 (工序)`}>
          <ComplexEchart
            index="GXWBHSTOP5"
            color="#875dc1"
            leftName="工序未闭合率"
            rightName="工序未闭合数(个)"
            XData={['地坪浇筑', '烟道', '内保温', '支模架', '中央空调',]}
            leftYData={[23,33,22,44,55]}
            rightYData={[100,333,222,444,556]}
          />
        </BasicCard>
      </div>
    </Main>
  );
}
