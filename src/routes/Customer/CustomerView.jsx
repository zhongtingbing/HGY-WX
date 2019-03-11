import React from 'react';
import { Icon, Picker} from 'antd-mobile'
import SearchInput from '../../components/SearchInput'
import Main from '../../layouts/main.jsx';
import  './CustomerView.less';
import PagingListView from '../../components/PagingListView'
const prefixCls = 'customer-view-9999'

const createTimeList = [
  [
    {
      label: '近一月',
      value: '1',
    },
    {
      label: '近三月',
      value: '2',
    },
    {
      label: '近六月',
      value: '3',
    },
    {
      label: '近一年',
      value: '4',
    },
    {
      label: '全部',
      value: '5',
    },
  ],
];

const companyList = [
  [
    {
      label: '公司一',
      value: '1',
    },
    {
      label: '公司二',
      value: '2',
    },
    {
      label: '公司三',
      value: '3',
    },
    {
      label: '公司5',
      value: '4',
    },
    {
      label: '公司六',
      value: '5',
    },
  ],
];
const statusList = [
  [
    {
      label: '近一月',
      value: '1',
    },
    {
      label: '近三月',
      value: '2',
    },
    {
      label: '近六月',
      value: '3',
    },
    {
      label: '近一年',
      value: '4',
    },
    {
      label: '全部',
      value: '5',
    },
  ],
];

 export default function CustomerView(props) {
  const {
    onSearch,
    onChange,
    createDate,
    company,
    status,
    querySaleChance,
    toEdit,
    toDetail,
    onAdd,
    toVisitRecord,
    toAddCounterpart
  } = props

   const findLabel = (arr, value) => {
    if(!value) return null
     return arr.filter(item => item.value === value)[0].label
   }

    return (
    <Main title={props.title} rightContent={<Icon onClick={onAdd} key="1" type="plus" size="xs"/>} location={props.location}>
      <div className={prefixCls}>
        <SearchInput onSearch={onSearch} placeholder="客户姓名/公司名/客户电话/销售机会名称"/>
        <div className="pick-group">
          <Picker
            data={createTimeList}
            title="选择创建时间"
            cascade={false}
            value={createDate ? [createDate] : null}
            onChange={()=>{}}
            onOk={(v)=>{onChange({createDate: v[0]})}}
          >
            <div className="pick-group-item">{findLabel(createTimeList[0], createDate) || '创建时间'} <Icon type="down"/></div>
          </Picker>
          <Picker
            data={companyList}
            title="选择公司"
            cascade={false}
            value={company ? [company] : null}
            onChange={()=>{}}
            onOk={(v)=>{onChange({company: v[0]})}}
          >
          <div className="pick-group-item">{findLabel(companyList[0], company) || '所属公司'} <Icon type="down"/></div>
          </Picker>
          <Picker
            data={statusList}
            title="选择状态"
            cascade={false}
            value={status ? [status] : null}
            onChange={()=>{}}
            onOk={(v)=>{onChange({status: v[0]})}}
          >
          <div className="pick-group-item">{findLabel(statusList[0], status) || '状态'} <Icon type="down"/></div>
          </Picker>
        </div>
        <PagingListView
          style={{ height: '100%'}}
          pageSize={10}
          pullData={querySaleChance}
          // extraRequestData={param}
          renderRow={(rowData, sectionID, rowID) => {
            const {

            } = rowData;

            return (
             <div className="sale-card">
               <div onClick={() => {toDetail(rowData)}} className="sale-card-body">
                 <div>
                   <span>客户俗称：</span>
                   <span>{'2019-01-01'}</span>
                 </div>
                 <div>
                   <span>所属公司：</span>
                   <span>{'理想之城名称'}</span>
                 </div>
                 <div>
                   <span>总负责人及电话：</span>
                   <span>{'张三  123999999999'}</span>
                 </div>
                 <div>
                   <span>客户等级：</span>
                   <span>{'一级'}</span>
                 </div>
                 <div>
                   <span>状态：</span>
                   <span>{'跟进中'}</span>
                 </div>
                 <div onClick={(e) => {e.stopPropagation();toEdit(rowData)}} className="sale-card-body-edit">编辑</div>
               </div>
               <div className="btns">
                 <div onClick={() => {toVisitRecord(rowData)}}>新增拜访记录</div>
                 <div onClick={toAddCounterpart}>新增对接人</div>
               </div>
             </div>
            )
          }}
        />
      </div>
    </Main>
    );
  }


