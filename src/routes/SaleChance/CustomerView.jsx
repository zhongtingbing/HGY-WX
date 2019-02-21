import React from 'react';
import { List, InputItem, Button} from 'antd-mobile'
import Main from '../../layouts/main.jsx';
import  './CustomerView.less';
const prefixCls = 'sale-chance-cus-view'

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


 export default function CustomerView(props) {
  const {

  } = props

    return (
    <Main title={props.title} rightContent={'保存'} location={props.location}>
      <div className={prefixCls}>
        <div className="title">客户信息:</div>
        <List>
          <InputItem
            // onChange={(v)=>{onChange()}}
          >职位:</InputItem>
          <InputItem
            onChange={(v) => { console.log('onChange', v); }}
          >QQ:</InputItem>
          <InputItem
            clear
          >微信:</InputItem>
          <InputItem
          >邮箱：</InputItem>
        </List>
      </div>
    </Main>
    );
  }


