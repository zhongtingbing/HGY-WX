import React from 'react';
import './SafeInfoView.less';
import Main from '../../layouts/main.jsx';
import classNames from 'classnames';
import BasicCard from 'components/basicCard'
import {DeviceControl, EnvControl, AlarmChart, IndexChart} from './components'
import Table from 'components/Table'
import RingEchart from 'components/ringEchart'

const prefixCls = 'safe-info-vieweasy'


export default function SaveInfoView(props) {
  const {
    deviceMoreClick,
    loading,
    WZXX,
    SBSSJC,
    SSHJJC,
    CLRY,
    XJCRY,
    WCJSJJY,
    WZRZTJ,
    AGE50,
    TZCLWYS,
    TZCLWYSFL,
    TZCLYSWTG,
    TD,
    YCJC,
    DX,
    SJJ,
    YZZS,
    ZSYZZS,
    moreClick
  } = props;

  const cls = classNames({
    [prefixCls]: true,
  });
  return (
    <Main
      loading={loading}
      className={cls}>
      {
        loading ? <div></div> :
        <div>
          <BasicCard
            name="违章信息"
            more={true}
            moreClick={() => {
              moreClick(
                [{_key:'name', desc:'姓名'},{_key:'reason', desc:'最新违章原因', width: 110 }, {_key:'count', desc:'本月违章总数', width: 100 }],
                WZXX
              )
            }}
          >
            <Table
              kVMap={[{_key:'name', desc:'姓名'},{_key:'reason', desc:'最新违章原因', width: 110 }, {_key:'count', desc:'本月违章总数', width: 100 }]}
              data={WZXX.slice(0,4)}
            />
          </BasicCard>
          <BasicCard
            name="设备实时监控"
            more={true}
            moreClick={() => deviceMoreClick(SBSSJC)}
          >
            <DeviceControl
              data={SBSSJC}
            />
          </BasicCard>
          <BasicCard name="实时环境监测">
            <EnvControl
              data={SSHJJC}
            />
          </BasicCard>
          <BasicCard
            name={`超龄人员(${CLRY ? CLRY.length : 0}人)`}
            moreClick={() => {
              moreClick(
                [{_key:'name', desc:'姓名'},{_key:'sex', desc:'性别'}, {_key:'age', desc:'年龄'},{_key:'company', desc:'公司',width:120}],
                CLRY
              )
            }}
            more={true}
          >
            <Table
              kVMap={[{_key:'name', desc:'姓名'},{_key:'sex', desc:'性别'}, {_key:'age', desc:'年龄'},{_key:'company', desc:'公司',width:120}]}
              data={CLRY.slice(0,4)}
            />
          </BasicCard>
          <BasicCard
            name={`未参加三级教育(${WCJSJJY.length}人)`}
            more={true}
            moreClick={() => {
              moreClick(
                [{_key:'name', desc:'姓名'},{_key:'team', desc:'班组'},{_key:'company', desc:'公司',width:120}],
                WCJSJJY
              )
            }}
          >
            <Table
              kVMap={[{_key:'name', desc:'姓名'},{_key:'team', desc:'班组'},{_key:'company', desc:'公司',width:120}]}
              data={WCJSJJY.slice(0,4)}
            />
          </BasicCard>
          <BasicCard
            name={`未做入职体检(${WZRZTJ.length}人)`}
            more={true}
            moreClick={() => {
              moreClick(
                [{_key:'name', desc:'姓名'},{_key:'team', desc:'班组'},{_key:'company', desc:'公司',width:120}],
                WZRZTJ
              )
            }}
          >
            <Table
              kVMap={[{_key:'name', desc:'姓名'},{_key:'team', desc:'班组'},{_key:'company', desc:'公司',width:120}]}
              data={WZRZTJ.slice(0,4)}
            />
          </BasicCard>
          <BasicCard
            name={`新进场人员(${XJCRY.length}人)`}
            more={true}
            moreClick={() => {
              moreClick(
                [{_key:'name', desc:'姓名'},{_key:'time', desc:'入职时间',width:80},{_key:'count', desc:'培训次数',width:80}],
                XJCRY
              )
            }}
          >
            <Table
              kVMap={[{_key:'name', desc:'姓名'},{_key:'time', desc:'入职时间',width:80},{_key:'count', desc:'培训次数',width:80}]}
              data={XJCRY.slice(0,4)}
            />
          </BasicCard>
          <BasicCard
            name={`年龄50+人员(${AGE50.length}人)`}
            more={true}
            moreClick={() => {
              moreClick(
                [{_key:'name', desc:'姓名'},{_key:'age', desc:'年龄'},{_key:'team', desc:'班组'},{_key:'company', desc:'公司',width:120}],
                AGE50
              )
            }}
          >
            <Table
              kVMap={[{_key:'name', desc:'姓名'},{_key:'age', desc:'年龄'},{_key:'team', desc:'班组'},{_key:'company', desc:'公司',width:120}]}
              data={AGE50.slice(0,4)}
            />
          </BasicCard>
          <BasicCard name={`本周设备报警次数`}>
            <div>
              <AlarmChart
                index="TD_ALARM"
                title='塔吊'
                YData={TD.YData}
              />
              <AlarmChart
                index="SJJ_ALARM"
                title='升降机'
                YData={SJJ.YData}
              />
              <AlarmChart
                index="YCJC_ALARM"
                title='扬尘检测'
                YData={YCJC.YData}
              />
              <AlarmChart
                index="DX_ALARM"
                title='电箱'
                YData={DX.YData}
              />
            </div>
          </BasicCard>
          <BasicCard
            name={`特种车辆未验收情况`}
            more={true}
            moreClick={() => {
              moreClick(
                [{_key:'carNO', desc:'车牌号',width:70},{_key:'carType', desc:'车辆类型',width:70},{_key:'driver', desc:'司机',width:50},{_key:'driverPhone', desc:'司机电话',width:90},{_key:'supervision', desc:'监理',width:50}],
                TZCLWYS
              )
            }}
          >
            <Table
              kVMap={[{_key:'carNO', desc:'车牌号',width:70},{_key:'carType', desc:'车辆类型',width:70},{_key:'driver', desc:'司机',width:50},{_key:'driverPhone', desc:'司机电话',width:90},{_key:'supervision', desc:'监理',width:50}]}
              data={TZCLWYS.slice(0,4)}
            />
          </BasicCard>
          <BasicCard
            name={`特种车辆验收未通过情况`}
            moreClick={() => {
              moreClick(
                [{_key:'carNO', desc:'车牌号',width:70},{_key:'carType', desc:'车辆类型',width:70},{_key:'driver', desc:'司机',width:50},{_key:'driverPhone', desc:'司机电话',width:90},{_key:'supervision', desc:'监理',width:50}],
                TZCLYSWTG
              )
            }}
            more={true}>
            <Table
              kVMap={[{_key:'carNO', desc:'车牌号',width:70},{_key:'carType', desc:'车辆类型',width:70},{_key:'driver', desc:'司机',width:50},{_key:'driverPhone', desc:'司机电话',width:90},{_key:'supervision', desc:'监理',width:50}]}
              data={TZCLYSWTG.slice(0,4)}
            />
          </BasicCard>
          <BasicCard name={`特种车辆未验收分类`}>
            <RingEchart
              index="TZCLWYSFL"
              desc="特殊车辆"
              data={TZCLWYSFL}
            />
          </BasicCard>
          <BasicCard name={`pm2.5、pm10、TSP一周指数`}>
            <IndexChart
              index="PMYZZS"
              YData={YZZS.YData}
            />
          </BasicCard>
          <BasicCard name={`噪音一周指数`}>
            <IndexChart
              index="ZYYZZS"
              showArea={true}
              YData={ZSYZZS.YData}
            />
          </BasicCard>
        </div>

      }
    </Main>
  );
}
