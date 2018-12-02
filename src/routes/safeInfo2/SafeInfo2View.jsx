import React from 'react';
import './SafeInfo2View.less';
import Main from '../../layouts/main.jsx';
import classNames from 'classnames';
import BasicCard from 'components/basicCard'
import { DeviceCahrt } from './components'
import Table from 'components/Table'
import RingEchart from 'components/ringEchart'
import NormalEchart from 'components/normalEchart'

const prefixCls = 'safe-info2-view777'


export default function SaveInfo2View(props) {
  const {
  } = props;

  const cls = classNames({
    [prefixCls]: true,
  });
  return (
    <Main className={cls}>
      <div>
        <BasicCard name='参加三级教育人数' >
          <NormalEchart
            index="CJSJJYRS"
            XData={['理想之城', '西江月', '西江月2#', '西江月#', '西江月5#', '西江',]}
            YData={[200, 300, 200, 500, 300 ,200]}
            color="#00a0ea"
          />
        </BasicCard>
        <BasicCard name='参加培训人数' >
          <NormalEchart
            index="cjpxrs"
            XData={['理想之城', '西江月', '西江月2#', '西江月#', '西江月5#', '西江',]}
            YData={[200, 300, 200, 500, 300 ,200]}
          />
        </BasicCard>
        <BasicCard name='入职体检人数' >
          <NormalEchart
            index="RZTJRS"
            XData={['理想之城', '西江月', '西江月2#', '西江月#', '西江月5#', '西江',]}
            YData={[200, 300, 200, 500, 300 ,200]}
            color="#1490ac"
          />
        </BasicCard>
        <BasicCard name="超龄人数">
          <RingEchart
            index="CLRS"
            data={[ {value:30, name:'西江月'},
               {value:18, name:'理想之城'},
               {value:12, name:'大都会'},
               {value:40, name:'弦乐四级'},
               {value:40, name:'四海一家'},
               {value:40, name:'笑傲怨妇'}
            ]}
          />
        </BasicCard>
        <BasicCard name="超龄人数50+">
          <RingEchart
            index="CLRS50"
            data={[ {value:30, name:'西江月'},
              {value:18, name:'理想之城'},
              {value:12, name:'大都会'},
              {value:40, name:'弦乐四级'},
              {value:40, name:'四海一家'},
              {value:40, name:'笑傲怨妇'}
            ]}
          />
        </BasicCard>
        <BasicCard name="本日违章人数">
          <RingEchart
            index="BRWZRS"
            data={[ {value:30, name:'西江月'},
              {value:18, name:'理想之城'},
              {value:12, name:'大都会'},
              {value:40, name:'弦乐四级'},
              {value:40, name:'四海一家'},
              {value:40, name:'笑傲怨妇'}
            ]}
          />
        </BasicCard>
        <BasicCard name="设备状态管理">
          <div>
            <DeviceCahrt
              title="在线设备"
              index="ZXSB"
              XData={['理想之城', '西江月', '西江月2#', '西江月#', '西江月5#', '西江',]}
              YData={[
                {values:[2, 3, 1, 4, 5,3], name: '人脸识别', color: '#f4c841'},
                {values:[2, 3, 1, 4, 5,3], name: '人工定位', color: '#fe7c7c'},
                {values:[2, 3, 1, 4, 5,3], name: '扬尘检测', color: '#2695a9'},
                {values:[2, 3, 1, 4, 5,3], name: '升降机', color: '#2a55e2'},
                {values:[2, 3, 1, 4, 5,3], name: '塔吊', color: '#00a0ea'},
              ]}
            />
            <DeviceCahrt
              style={{marginTop: '20px'}}
              title="在线设备"
              index="BJSB"
              XData={['理想之城', '西江月', '西江月2#', '西江月#', '西江月5#', '西江',]}
              YData={[
                {values:[2, 3, 1, 4, 5,3], name: '人脸识别', color: '#f4c841'},
                {values:[2, 3, 1, 4, 5,3], name: '人工定位', color: '#fe7c7c'},
                {values:[2, 3, 1, 4, 5,3], name: '扬尘检测', color: '#2695a9'},
                {values:[2, 3, 1, 4, 5,3], name: '升降机', color: '#2a55e2'},
                {values:[2, 3, 1, 4, 5,3], name: '塔吊', color: '#00a0ea'},
              ]}
            />
            <DeviceCahrt
              style={{marginTop: '20px'}}
              title="离线设备"
              index="LXSB"
              XData={['理想之城', '西江月', '西江月2#', '西江月#', '西江月5#', '西江',]}
              YData={[
                {values:[2, 3, 1, 4, 5,3], name: '人脸识别', color: '#f4c841'},
                {values:[2, 3, 1, 4, 5,3], name: '人工定位', color: '#fe7c7c'},
                {values:[2, 3, 1, 4, 5,3], name: '扬尘检测', color: '#2695a9'},
                {values:[2, 3, 1, 4, 5,3], name: '升降机', color: '#2a55e2'},
                {values:[2, 3, 1, 4, 5,3], name: '塔吊', color: '#00a0ea'},
              ]}
            />
          </div>
        </BasicCard>
        <BasicCard name="特种车辆进场次数">
          <NormalEchart
            index="TZCEJCCS"
            XData={['理想之城', '西江月', '西江月2#', '西江月#', '西江月5#', '西江',]}
            YData={[200, 300, 200, 500, 300 ,200]}
          />
        </BasicCard>
        <BasicCard name="环境检测管理">
          <NormalEchart
            index="HJJCGL"
            XData={['理想之城', '西江月', '西江月2#', '西江月#', '西江月5#', '西江',]}
            YData={[200, 300, 200, 500, 300 ,200]}
            color="#00a0ea"
          />
        </BasicCard>
        <BasicCard name="当月日平均报警次数">
          <NormalEchart
            index="DYRPJBJCS"
            XData={['理想之城', '西江月', '西江月2#', '西江月#', '西江月5#', '西江',]}
            YData={[200, 300, 200, 500, 300 ,200]}
            color="#2695a9"
          />
        </BasicCard>
      </div>
    </Main>
  );
}
