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
    loading,
    CJSJJYRS,
    CJPXRS,
    RZTJRS,
    CLRS,
    AGE50,
    BRWZRS,
    ZXSB,
    BJSB,
    LXSB,
    TZCLJCCS,
    YCZSCBCS,
    ZSZSCBCS,
    DYRPJBJCS
  } = props;

  const cls = classNames({
    [prefixCls]: true,
  });
  return (
    <Main
      className={cls}
      loading={loading}
    >
      {
        loading? <div></div> :
          <div>
            <BasicCard name='参加三级教育人数' >
              <NormalEchart
                index="CJSJJYRS"
                XData={CJSJJYRS.XData}
                YData={CJSJJYRS.YData}
                color="#00a0ea"
              />
            </BasicCard>
            <BasicCard name='参加培训人数' >
              <NormalEchart
                index="CJPXRS"
                XData={CJPXRS.XData}
                YData={CJPXRS.YData}
              />
            </BasicCard>
            <BasicCard name='入职体检人数' >
              <NormalEchart
                index="RZTJRS"
                XData={RZTJRS.XData}
                YData={RZTJRS.YData}
                color="#1490ac"
              />
            </BasicCard>
            <BasicCard name="超龄人数">
              <RingEchart
                index="CLRS"
                data={CLRS}
              />
            </BasicCard>
            <BasicCard name="超龄人数50+">
              <RingEchart
                index="CLRS50"
                data={AGE50}
              />
            </BasicCard>
            <BasicCard name="本日违章人数">
              <RingEchart
                index="BRWZRS"
                data={BRWZRS}
              />
            </BasicCard>
            <BasicCard name="设备状态管理">
              <div>
                <DeviceCahrt
                  title="在线设备"
                  index="ZXSB"
                  XData={ZXSB.XData}
                  YData={ZXSB.YData}
                />
                <DeviceCahrt
                  style={{marginTop: '20px'}}
                  title="报警设备"
                  index="BJSB"
                  XData={BJSB.XData}
                  YData={BJSB.YData}
                />
                <DeviceCahrt
                  style={{marginTop: '20px'}}
                  title="离线设备"
                  index="LXSB"
                  XData={LXSB.XData}
                  YData={LXSB.YData}
                />
              </div>
            </BasicCard>
            <BasicCard name="特种车辆进场次数">
              <NormalEchart
                index="TZCEJCCS"
                XData={TZCLJCCS.XData}
                YData={TZCLJCCS.YData}
              />
            </BasicCard>
            <BasicCard name="环境检测管理">
              <div className="title">扬尘指数超标次数</div>
              <NormalEchart
                index="YCZSCBCS"
                XData={YCZSCBCS.XData}
                YData={YCZSCBCS.YData}
                color="#00a0ea"
              />
              <div className="title">噪声指数超标次数</div>
              <NormalEchart
                index="ZSZSCBCS"
                XData={ZSZSCBCS.XData}
                YData={ZSZSCBCS.YData}
                color="#2695a9"
              />
              <div className="title">当月日平均报警次数</div>
              <NormalEchart
                index="DYRPJBJCS"
                XData={DYRPJBJCS.XData}
                YData={DYRPJBJCS.YData}
                color="#2695a9"
              />
            </BasicCard>
          </div>
      }

    </Main>
  );
}
