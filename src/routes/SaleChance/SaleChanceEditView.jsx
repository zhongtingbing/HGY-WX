import React from 'react';
import { List, InputItem, Button} from 'antd-mobile'
import Main from '../../layouts/main.jsx';
import  './SaleChanceEditView.less';
import PickerListItem from '../../components/PickerListItem'
const Item = List.Item
const prefixCls = 'sale-chance-edit-view'

const pickerData = [
    {
      label: '2013',
      value: '2013',
    },
    {
      label: '2014',
      value: '2014',
    },
  ]


 export default function SaleChanceEditView(props) {
  const {
    nextStep
  } = props

    return (
    <Main title={props.title} rightContent={'保存'} location={props.location}>
      <div className={prefixCls}>
        <div className="title">基本信息:</div>
        <List>
          <InputItem
            defaultValue={100}
            placeholder="请输入销售名称"
            // onChange={(v)=>{onChange()}}
          >销售机会名称:</InputItem>
          <InputItem
            placeholder="请输入销售名称"
            onChange={(v) => { console.log('onChange', v); }}
          >所属公司:</InputItem>
          <InputItem
            placeholder="请输入所属公司"
            clear
          >客户姓名:</InputItem>
          <InputItem
            placeholder="请输入客户姓名"
            type="number"
          >客户电话：</InputItem>
          <InputItem
            placeholder="请输入客户电话"
          >机会情况说明：</InputItem>
          <PickerListItem
            data={pickerData}
            // onChange={onChange}
            value="re"
          >
            客户类型:
          </PickerListItem>
          <PickerListItem
            value="re"
          >
            负责业务:
          </PickerListItem>
          <PickerListItem>
            客户等级:
          </PickerListItem>
          <PickerListItem>
            机会来源:
          </PickerListItem>
        </List>
        <div onClick={nextStep} className="bottom-btn">
          下一步，完善客户信息
        </div>
      </div>
    </Main>
    );
  }


