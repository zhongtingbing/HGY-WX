import React from 'react';
import { List, InputItem} from 'antd-mobile'
import Main from '../../layouts/main.jsx';
import  './SaleChanceEditView.less';
import PickerListItem from '../../components/PickerListItem'
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
    nextStep,
    onSubmit
  } = props

    return (
    <Main title={props.title} rightContent={<div onClick={onSubmit}>保存</div>} location={props.location}>
      <div className={prefixCls}>
        <div className="title">基本信息:</div>
        <List>
          <InputItem
            defaultValue={100}
            placeholder="请输入销售名称"
            className="input-require"
            // onChange={(v)=>{onChange()}}
          >销售机会名称:</InputItem>
          <InputItem
            placeholder="请输入销售名称"
            onChange={(v) => { console.log('onChange', v); }}
            className="input-require"
          >所属公司:
          </InputItem>
          <InputItem
            placeholder="请输入所属公司"
            className="input-require"
          >客户姓名:
          </InputItem>
          <InputItem
            placeholder="请输入客户姓名"
            className="input-require"
            type="number"
          >客户电话：</InputItem>
          <InputItem
            placeholder="请输入说明"
            className="input-require"
          >机会情况说明：
          </InputItem>
          <PickerListItem
            data={pickerData}
            onChange={(value) => {console.log(value)}}
            // value="re"
          >
            客户类型:
          </PickerListItem>
          <PickerListItem
            data={pickerData}
            // value="re"
          >
            负责业务:
          </PickerListItem>
          <PickerListItem
            data={pickerData}
          >

            客户等级:
          </PickerListItem>
          <PickerListItem
            data={pickerData}
          >
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


