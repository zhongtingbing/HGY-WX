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
  } = props;

  const cls = classNames({
    [prefixCls]: true,
  });
  return (
    <Main>
      <div className={prefixCls}>
        <BasicCard name="在场人数">
          <ZCRSCharts
            index="ZCRS"
            leftName="人数"
            rightName="出勤率"
            XData={['理想之城', '西江月', '西江月2#', '西江月#', '西江月5#', '西江',]}
            leftYData={{zcjrData:[23,33,22,44,55,66,] , wdaqmData:[12,3,4,5,6,3], wdkjrData: [4,5,6,2,4,5]}}
            rightYData={[23,44,33,55,22,11,]}
          />
        </BasicCard>
        <BasicCard name="跨作业人数">
          <KZYRSCharts
            index="KZYRS"
            YData={[22,33,44,55,66,43,22,66,22,66]}
            XData={['理想之城', '西江月', '西江dd月2#', '西江月#', '西江月5#', '西江','西江月15#', '西江2']}
          />
        </BasicCard>
        <BasicCard name="入职满半年人数">
          <RingEchart
            index="RZBNRS"
            data={[ {value:30, name:'西江月'},
              {value:18, name:'理想之城'},
              {value:12, name:'大都会'},
              {value:40, name:'弦乐四级'},
              {value:40, name:'四海一家'},
              {value:40, name:'笑傲怨妇'}
            ]}

          />
        </BasicCard>
        <BasicCard name="特种工人人数">
          <RingEchart
            index="TZGRRS"
            data={[ {value:30, name:'西江月'},
              {value:18, name:'理想之城'},
              {value:12, name:'大都会'},
              {value:40, name:'弦乐四级'},
              {value:40, name:'四海一家'},
              {value:40, name:'笑傲怨妇'}
            ]}
          />
        </BasicCard>
        <BasicCard name="初级工人人数">
          <RingEchart
            index="CJGRRS"
            data={[ {value:30, name:'西江月'},
              {value:18, name:'理想之城'},
              {value:12, name:'大都会'},
              {value:40, name:'弦乐四级'},
              {value:40, name:'四海一家'},
              {value:40, name:'笑傲怨妇'}
            ]}
          />
        </BasicCard>
        <BasicCard name="工人平均工作时长">
          <GRPJGZSCharts
            index="GRPJGZSC"
            XData={['理想之城', '西江月', '西江月2#', '西江月#', '西江月5#', '西江',]}
            YData={{days:[223,233,222,244,255,266,], hours: [8,7,8.8,9.6,7,8,9]}}
          />
        </BasicCard>

      </div>
    </Main>
  );
}
