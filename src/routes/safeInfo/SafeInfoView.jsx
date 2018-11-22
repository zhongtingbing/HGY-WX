import React from 'react';
import './SafeInfoView.less';
import Main from '../../layouts/main.jsx';
import classNames from 'classnames';
import BasicCard from '../../components/basicCard'
import {DeviceControl, EnvControl, AlarmChart, IndexChart} from './components'
import Table from '../../components/Table'
import RingEchart from '../../components/ringEchart'

const prefixCls = 'safe-info-vieweasy'


export default function SaveInfoView(props) {
  const {
  } = props;

  const cls = classNames({
    [prefixCls]: true,
  });
  return (
    <Main className={cls}>
      <div>
        <BasicCard name="违章信息" more={true}>
          <Table
            kVMap={[{_key:'name', desc:'姓名'},{_key:'reason', desc:'最新违章原因', width: 110 }, {_key:'count', desc:'本月违章总数', width: 100 }]}
            data={[
              {name: '黎明议', reason: '未打卡', count: '22次'},
              {name: '欧阳强', reason: '未戴安全帽',  count: '22次'},
              {name: '司马相如', reason: '人帽不一',  count: '22次'},
              {name: '空的话', reason: '监管违章拍照',  count: '22次'},
            ]}
          />
        </BasicCard>
        <BasicCard name="设备实时监控" more={true}>
          <DeviceControl
            data={[
              {name:'1号塔吊',status:'1'},
              {name:'2号塔吊',status:'0'},
              {name:'3号塔吊',status:'0'},
              {name:'4号塔吊',status:'2'},
              {name:'5号塔吊',status:'0'},
              {name:'6号塔吊',status:'1'},
            ]}
          />
        </BasicCard>
        <BasicCard name="实时环境监测">
          <EnvControl/>
        </BasicCard>
        <BasicCard name={`超龄人员(${20}人)`} more={true}>
          <Table
            kVMap={[{_key:'name', desc:'姓名'},{_key:'sex', desc:'性别'}, {_key:'age', desc:'年龄'},{_key:'company', desc:'公司',width:120}]}
            data={[
              {name: '黎明议', sex: '男', age: '45岁', company:'建筑工程有限司'},
              {name: '黎明议', sex: '男', age: '45岁', company:'建筑工程有限司'},
              {name: '黎明议', sex: '男', age: '45岁', company:'建筑工程有限司'},
              {name: '黎明议', sex: '男', age: '45岁', company:'建筑工程有限司'},
            ]}
          />
        </BasicCard>
        <BasicCard name={`未参加三级教育(${30}人)`} more={true}>
          <Table
            kVMap={[{_key:'name', desc:'姓名'},{_key:'group', desc:'班组'},{_key:'company', desc:'公司',width:120}]}
            data={[
              {name: '黎明议', group: '木工班', company:'建筑工程有限司'},
              {name: '黎明议', group: '木工班', company:'建筑工程有限司'},
              {name: '黎明议', group: '木工班', company:'建筑工程有限司'},
              {name: '黎明议', group: '木工班', company:'建筑工程有限司'},
            ]}
          />
        </BasicCard>
        <BasicCard name={`未做入职体检(${30}人)`} more={true}>
          <Table
            kVMap={[{_key:'name', desc:'姓名'},{_key:'group', desc:'班组'},{_key:'company', desc:'公司',width:120}]}
            data={[
              {name: '黎明议', group: '木工班', company:'建筑工程有限司'},
              {name: '黎明议', group: '木工班', company:'建筑工程有限司'},
              {name: '黎明议', group: '木工班', company:'建筑工程有限司'},
              {name: '黎明议', group: '木工班', company:'建筑工程有限司'},
            ]}
          />
        </BasicCard>
        <BasicCard name={`新进场人员(${30}人)`} more={true}>
          <Table
            kVMap={[{_key:'name', desc:'姓名'},{_key:'date', desc:'入职时间',width:80},{_key:'time', desc:'培训次数',width:80}]}
            data={[
              {name: '黎明议', date: '2018.10.12', time:'2'},
              {name: '黎明议', date: '2018.10.12', time:'2'},
              {name: '黎明议', date: '2018.10.12', time:'2'},
              {name: '黎明议', date: '2018.10.12', time:'2'},
              {name: '黎明议', date: '2018.10.12', time:'2'},
            ]}
          />
        </BasicCard>
        <BasicCard name={`年龄50+人员(${30}人)`} more={true}>
          <Table
            kVMap={[{_key:'name', desc:'姓名'},{_key:'age', desc:'年龄'},{_key:'group', desc:'班组'},{_key:'company', desc:'公司',width:120}]}
            data={[
              {name: '黎明议', age: '56',group: '木工班', company:'建筑工程有限司'},
              {name: '黎明议', age: '56',group: '木工班', company:'建筑工程有限司'},
              {name: '黎明议', age: '56',group: '木工班', company:'建筑工程有限司'},
              {name: '黎明议', age: '56',group: '木工班', company:'建筑工程有限司'},
            ]}
          />
        </BasicCard>
        <BasicCard name={`本周设备报警次数`}>
          <div>
            <AlarmChart
              index="TD_ALARM"
              title='塔吊'
              YData={[
                {name: '1号塔吊', color:'#197c93', data: [23,15,26,17,44,15,133]},
                {name: '2号塔吊', color:'#ff755e', data: [33,25,36,27,24,55,123]},
                {name: '3号塔吊', color:'#068bd0', data: [43,35,46,37,54,85,113]},
                {name: '4号塔吊', color:'#895cc1', data: [53,45,56,47,64,95,33]},
                {name: '5号塔吊', color:'#feda22', data: [63,55,66,57,74,125,63]},
              ]}
            />
            <AlarmChart
              index="SJJ_ALARM"
              title='升降机'
              YData={[
                {name: '1号升降机', color:'#197c93', data: [23,15,26,17,44,15,133]},
                {name: '2号升降机', color:'#ff755e', data: [33,25,36,27,24,55,123]},
                {name: '3号升降机', color:'#068bd0', data: [43,35,46,37,54,85,113]},
                {name: '4号升降机', color:'#895cc1', data: [53,45,56,47,64,95,33]},
                {name: '5号升降机', color:'#feda22', data: [63,55,66,57,74,125,63]},
              ]}
            />
            <AlarmChart
              index="YCJC_ALARM"
              title='扬尘检测'
              YData={[
                {name: '1号升降机', color:'#ff755e', data: [23,15,26,17,44,15,133]},
              ]}
            />
            <AlarmChart
              index="DX_ALARM"
              title='电箱'
              YData={[
                {name: '1号电箱', color:'#ff755e', data: [23,15,26,17,44,15,133]},
                {name: '2号电箱', color:'#068bd0', data: [63,55,66,57,74,125,63]},
              ]}
            />
          </div>
        </BasicCard>
        <BasicCard name={`特种车辆未验收情况`} more={true}>
          <Table
            kVMap={[{_key:'ID', desc:'车牌号',width:70},{_key:'type', desc:'车辆类型',width:70},{_key:'driver', desc:'司机',width:50},{_key:'driverPhone', desc:'司机电话',width:90},{_key:'supervision', desc:'监理',width:50}]}
            data={[
              {ID: '浙C12345', type: '水泥罐车', driver:'舒马赫', driverPhone: '18982053068', supervision: '孙文才'},
              {ID: '浙C12345', type: '水泥罐车', driver:'舒马赫', driverPhone: '18982053068', supervision: '孙文才'},
              {ID: '浙C12345', type: '水泥罐车', driver:'舒马赫', driverPhone: '18982053068', supervision: '孙文才'},
              {ID: '浙C12345', type: '水泥罐车', driver:'舒马赫', driverPhone: '18982053068', supervision: '孙文才'},
            ]}
          />
        </BasicCard>
        <BasicCard name={`特种车辆验收未通过情况`} more={true}>
          <Table
            kVMap={[{_key:'ID', desc:'车牌号',width:70},{_key:'type', desc:'车辆类型',width:70},{_key:'driver', desc:'司机',width:50},{_key:'driverPhone', desc:'司机电话',width:90},{_key:'supervision', desc:'监理',width:50}]}
            data={[
              {ID: '浙C12345', type: '水泥罐车', driver:'舒马赫', driverPhone: '18982053068', supervision: '孙文才'},
              {ID: '浙C12345', type: '水泥罐车', driver:'舒马赫', driverPhone: '18982053068', supervision: '孙文才'},
              {ID: '浙C12345', type: '水泥罐车', driver:'舒马赫', driverPhone: '18982053068', supervision: '孙文才'},
              {ID: '浙C12345', type: '水泥罐车', driver:'舒马赫', driverPhone: '18982053068', supervision: '孙文才'},
            ]}
          />
        </BasicCard>
        <BasicCard name={`特种车辆未验收分类`}>
          <RingEchart
            index="TZCLWYSFL"
            desc="特殊车辆"
          />
        </BasicCard>
        <BasicCard name={`pm2.5、pm10、TSP一周指数`}>
          <IndexChart
            index="PMYZZS"
            YData={[
              {name: 'pm2.5', color:'#fe9949', data: [23,15,26,17,44,15,133]},
              {name: 'pm10', color:'#ef7371', data: [63,55,66,57,74,125,63]},
              {name: 'TSP', color:'#16b7bf', data: [23,53,62,56,70,15,43]},
            ]}
          />
        </BasicCard>
        <BasicCard name={`噪音一周指数`}>
          <IndexChart
            index="ZYYZZS"
            showArea={true}
            YData={[
              {name: 'pm10', color:'#ef7371', data: [63,55,66,57,74,125,63]},
            ]}
          />
        </BasicCard>
      </div>
    </Main>
  );
}
