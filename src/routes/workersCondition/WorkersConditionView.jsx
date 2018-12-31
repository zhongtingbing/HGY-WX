import React from 'react';
import './WorkersConditionView.less';
import Main from '../../layouts/main.jsx';
import classNames from 'classnames';
import BasicCard from '../../components/basicCard'
import {WorkerChart4Year, WorkerChart4Month} from './components'
import Table from '../../components/Table'

const prefixCls = 'workers-condition-viewhaolei'


export default function WorkersConditionView(props) {
  const {
    data,
    moreClick,
    loading
  } = props;

  const {
    BZCQRS,
    BZPJGZTS,
    CJGR,
    CJGSCQRS,
    CJGSPJCQL,
    DYFB,
    GZCQRS,
    KQYZY,
    MTZCRS,
    MYZCRS,
    NLJG,
    ZGSC
  } =data;

  const cls = classNames({
    [prefixCls]: true,
  });
  return (
    <Main loading={loading}>
      {
       loading ? <div></div> :
      <div className={cls}>
        <BasicCard className={`${cls}-supply-chain`} name={`${MYZCRS.year}年每月在场人数`}>
          <WorkerChart4Year
            index="MYZCRS"
            XData={MYZCRS.XData}
            YData={MYZCRS.YData}
          />
        </BasicCard>
        <BasicCard className={`${cls}-supply-chain`} name={`${MTZCRS.month}月每天在场人数`}>
          <WorkerChart4Month
            index="MTZCRS"
            {...MTZCRS}
          />
        </BasicCard>
        <BasicCard
          className={`${cls}-KQZYRS`}
          moreClick={()=>{moreClick([{_key:'name', desc:'姓名', width:40},{_key:'shouldIn', desc:'应在区域', width:50},{_key:'nowIn', desc:'实在区域', width:50},{_key:'team', desc:'班组', width:40},{_key:'company', desc:'公司', width:120}],
            KQYZY,
            )}}
          name={`跨区域作业人数：${KQYZY.length}人`}
          more={true}>
            <Table
              kVMap={[{_key:'name', desc:'姓名', width:40},{_key:'shouldIn', desc:'应在区域', width:50},{_key:'nowIn', desc:'实在区域', width:50},{_key:'team', desc:'班组', width:40},{_key:'company', desc:'公司', width:120}]}
              data={KQYZY.slice(0,4)}
            />
        </BasicCard>
        <BasicCard
          className={`${cls}-CJGSCQRS`}
          name='参建公司出勤人数'
          more={true}
          moreClick={()=>{moreClick(
            [{_key:'companyName', desc:'参建公司名称', width:120},{_key:'norCount', desc:'合规人数'},{_key:'violationCount', desc:'违规人数'},{_key:'workerCount', desc:'总人数', width:50},],
            CJGSCQRS)}}
        >
          <Table
            kVMap={[{_key:'companyName', desc:'参建公司名称', width:120},{_key:'norCount', desc:'合规人数'},{_key:'violationCount', desc:'违规人数'},{_key:'workerCount', desc:'总人数', width:50},]}
            data={CJGSCQRS.slice(0,4)}
          />
        </BasicCard>
        <BasicCard
          name='班组出勤人数'
          more={true}
          moreClick={()=>{moreClick(
            [{_key:'teamName', desc:'班组',width:80},{_key:'norCount', desc:'合规人数'},{_key:'workerCount',desc:'总人数', width:50}],
            BZCQRS)}}
        >
          <Table
            kVMap={[{_key:'teamName', desc:'班组',width:80},{_key:'norCount', desc:'合规人数'},{_key:'workerCount',desc:'总人数', width:50}]}
            data={BZCQRS.slice(0,4)}
          />
        </BasicCard>
        <BasicCard
          name='班组平均工作天数'
          more={true}
          moreClick={()=>{moreClick(
            [{_key:'teamName', desc:'班组', width:140},{_key:'workerCount', desc:'平均工作天数',width:140}],
            BZPJGZTS)}}
        >
          <Table
            kVMap={[{_key:'teamName', desc:'班组', width:140},{_key:'workerCount', desc:'平均工作天数',width:140}]}
            data={BZPJGZTS.slice(0,4)}
          />
        </BasicCard>
        <BasicCard
          name='工种出勤人数'
          more={true}
          moreClick={()=>{moreClick(
            [{_key:'typeName', desc:'工种'},{_key:'workCount', desc:'出勤人数'},{_key:'allWorkCount', desc:'总人数'}],
            GZCQRS)}}
        >
          <Table
            kVMap={[{_key:'typeName', desc:'工种'},{_key:'workCount', desc:'出勤人数'},{_key:'allWorkCount', desc:'总人数'}]}
            data={GZCQRS.slice(0,4)}
          />
        </BasicCard>
        <BasicCard
          name={`${CJGSPJCQL[0] ? CJGSPJCQL[0].month : ''}月参建公司平均出勤率`}
          more={true}
          moreClick={()=>{moreClick(
            [{_key:'companyName', desc:'公司名称', width: 130},{_key:'attendanceCount', desc:'出勤人数'},{_key:'attendanceRate', desc:'出勤率'}],
            CJGSPJCQL)}}
        >
          <Table
            kVMap={[{_key:'companyName', desc:'公司名称', width: 130},{_key:'attendanceCount', desc:'出勤人数'},{_key:'attendanceRate', desc:'出勤率'}]}
            data={CJGSPJCQL.slice(0,4)}
          />
        </BasicCard>
        <BasicCard
          name='初级工人'
          more={true}
          moreClick={()=>{moreClick(
            [{_key:'name', desc:'姓名'},{_key:'team', desc:'班组'},{_key:'count', desc:'问题数量'}],
            CJGR)}}
        >
          <Table
            kVMap={[{_key:'name', desc:'姓名'},{_key:'team', desc:'班组'},{_key:'count', desc:'问题数量'}]}
            data={CJGR.slice(0,5)}
          />
        </BasicCard>
        <BasicCard
          name='在岗时长'
          more={true}
          moreClick={()=>{moreClick(
            [{_key:'buildName', desc:'楼栋'},{_key:'avgHours', desc:'人均日工作小时', width: 110 }],
            ZGSC)}}
        >
          <Table
            kVMap={[{_key:'buildName', desc:'楼栋'},{_key:'avgHours', desc:'人均日工作小时', width: 110 }]}
            data={ZGSC.slice(0,4)}
          />
        </BasicCard>
        <BasicCard name='年龄结构'>
          <Table
            kVMap={[{_key:'name', desc:'年龄'},{_key:'value', desc:'人数' }]}
            data={NLJG}
          />
        </BasicCard>
      </div>
      }
    </Main>
  );
}
