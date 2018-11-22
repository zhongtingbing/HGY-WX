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
  } = props;

  const cls = classNames({
    [prefixCls]: true,
  });
  return (
    <Main>
      <div className={cls}>
        <BasicCard className={`${cls}-supply-chain`} name="2018年每月在场人数">
          <WorkerChart4Year index="MYZCRS"/>
        </BasicCard>
        <BasicCard className={`${cls}-supply-chain`} name="10月每天在场人数">
          <WorkerChart4Month index="MTZCRS"/>
        </BasicCard>
        <BasicCard className={`${cls}-KQZYRS`} name={`跨区域作业人数：${55}人`} more={true}>
            <Table
              kVMap={[{_key:'name', desc:'姓名', width:40},{_key:'area1', desc:'应在区域', width:50},{_key:'area2', desc:'实在区域', width:50},{_key:'group', desc:'班组', width:40},{_key:'company', desc:'公司', width:120}]}
              data={[
                {name: '张博管', area1: '1#10F', area2: '2#2F', group: '泥工班', company: '名字很长很长很长很长建筑有限公司' },
                {name: '学广昆', area1: '1#10F', area2: '2#2F', group: '泥工班', company: '建筑有限公司' },
                {name: '刘能', area1: '1#10F', area2: '2#2F', group: '泥工班', company: '建筑有限公司' },
                {name: '李晓', area1: '1#10F', area2: '2#2F', group: '泥工班', company: '建筑有限公司' },
                {name: '张大力', area1: '1#10F', area2: '2#2F', group: '泥工班', company: '建筑有限公司' }
              ]}
            />
        </BasicCard>
        <BasicCard className={`${cls}-CJGSCQRS`} name='参建公司出勤人数' more={true}>
            <Table
              kVMap={[{_key:'name', desc:'参见公司名称', width:120},{_key:'rightCount', desc:'合规人数'},{_key:'falseCount', desc:'违规人数'},{_key:'total', desc:'总人数', width:50},]}
              data={[
                {name: '四川中恒建设有限公司', rightCount: '100', area2: '2#2F', falseCount: '12', total: '112' },
                {name: '四川中恒建设有限公司', rightCount: '100', area2: '2#2F', falseCount: '12', total: '112' },
                {name: '四川中恒建设有限公司', rightCount: '100', area2: '2#2F', falseCount: '12', total: '112' },
                {name: '四川中恒建设有限公司', rightCount: '100', area2: '2#2F', falseCount: '12', total: '112' },
                {name: '四川中恒建设有限公司', rightCount: '100', area2: '2#2F', falseCount: '12', total: '112' },
              ]}
            />
        </BasicCard>
        <BasicCard name='班组出勤人数' more={true}>
            <Table
              kVMap={[{_key:'group', desc:'班组',width:80},{_key:'rightCount', desc:'合规人数'},{_key:'falseCount',desc:'总人数', width:50}]}
              data={[
                {group: '木工组',  rightCount: '100', area2: '2#2F', falseCount: '12', total: '112'},
                {group: '电焊班',  rightCount: '100', area2: '2#2F', falseCount: '12', total: '112'},
                {group: '安防班', rightCount: '100', area2: '2#2F', falseCount: '12', total: '112'},
                {group: '挖机组', rightCount: '100', area2: '2#2F', falseCount: '12', total: '112'},
              ]}
            />
        </BasicCard>
        <BasicCard name='班组平均工作天数' more={true}>
            <Table
              kVMap={[{_key:'groupName', desc:'班组', width:140},{_key:'averageDay', desc:'合规人数',width:140}]}
              data={[
                {groupName: '张三木工组', averageDay: '100天'},
                {groupName: '张三木工组', averageDay: '100天'},
                {groupName: '张三木工组', averageDay: '100天'},
                {groupName: '张三木工组', averageDay: '100天'},
              ]}
            />
        </BasicCard>
        <BasicCard name='工种出勤人数' more={true}>
          <Table
            kVMap={[{_key:'jobType', desc:'工种'},{_key:'workCount', desc:'出勤人数'},{_key:'total', desc:'总人数'}]}
            data={[
              {jobType: '塔吊师', workCount: '12', total: '12'},
              {jobType: '电焊工', workCount: '12', total: '12'},
              {jobType: '大蛇', workCount: '12', total: '12'},
              {jobType: '防水工', workCount: '12', total: '12'},
            ]}
          />
        </BasicCard>
        <BasicCard name={`${10}月参建公司平均出勤率`} more={true}>
          <Table
            kVMap={[{_key:'companyName', desc:'公司名称', width: 130},{_key:'workCount', desc:'出勤人数'},{_key:'workRate', desc:'出勤率'}]}
            data={[
              {companyName: '中国建筑劳务有限公司', workCount: '200', workRate: '98%'},
              {companyName: '中国建筑劳务有限公司', workCount: '200', workRate: '98%'},
              {companyName: '中国建筑劳务有限公司', workCount: '200', workRate: '98%'},
              {companyName: '中国建筑劳务有限公司', workCount: '200', workRate: '98%'},
              {companyName: '中国建筑劳务有限公司', workCount: '200', workRate: '98%'},
              {companyName: '中国建筑劳务有限公司', workCount: '200', workRate: '98%'},
              {companyName: '中国建筑劳务有限公司', workCount: '200', workRate: '98%'},
              {companyName: '中国建筑劳务有限公司', workCount: '200', workRate: '98%'},
              {companyName: '中国建筑劳务有限公司', workCount: '200', workRate: '98%'},
            ]}
          />
        </BasicCard>
        <BasicCard name='初级工人' more={true}>
          <Table
            kVMap={[{_key:'name', desc:'姓名'},{_key:'group', desc:'班租'},{_key:'problemCount', desc:'问题数量'}]}
            data={[
              {name: '张学友', group: '唱歌组', problemCount: '89%'},
              {name: '张学友', group: '唱歌组', problemCount: '89%'},
              {name: '张学友', group: '唱歌组', problemCount: '89%'},
              {name: '张学友', group: '唱歌组', problemCount: '89%'},
              {name: '张学友', group: '唱歌组', problemCount: '89%'},
            ]}
          />
        </BasicCard>
        <BasicCard name='在岗时长' more={true}>
          <Table
            kVMap={[{_key:'name', desc:'楼栋'},{_key:'averageTime', desc:'人均日工作小时', width: 110 }]}
            data={[
              {name: '1栋', averageTime: '10小时'},
              {name: '2栋', averageTime: '10小时'},
              {name: '3栋', averageTime: '10小时49分'},
              {name: '4栋', averageTime: '10小时'},
              {name: '5栋', averageTime: '10小时'},
            ]}
          />
        </BasicCard>
        <BasicCard name='年龄结构' more={true}>
          <Table
            kVMap={[{_key:'age', desc:'年龄'},{_key:'count', desc:'人数' }]}
            data={[
              {age: '0-18',  count: '0'},
              {age: '19-25', count: '11'},
              {age: '26-30', count: '11'},
              {age: '31-35', count: '11'},
              {age: '36-40', count: '11'},
              {age: '41-45', count: '11'},
              {age: '46-50', count: '11'},
              {age: '51-55', count: '11'},
              {age: '56-60', count: '11'},
              {age: '60+', count: '11'},
            ]}
          />
        </BasicCard>
      </div>
    </Main>
  );
}
