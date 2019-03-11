import React from 'react';
import { List, InputItem } from 'antd-mobile'
import Main from '../../layouts/main.jsx';
import PickerDataItem from '../../components/PickerDataItem'
import  './AddVisitRecordView.less';
import PickerListItem from '../../components/PickerListItem'
const prefixCls = 'add-customer-visit-record-view'

 export default function AddVisitRecordView(props) {
  const {
    files,
    onChange,
    date,
    onSubmit,
  } = props

    return (
    <Main title={props.title} rightContent={<div onClick={onSubmit}>保存</div>} location={props.location}>
      <div className={prefixCls}>
        <List>
          <PickerDataItem
            onChange={(v) => onChange({date: v})}
            value={date}
          >
            拜访时间:
          </PickerDataItem>
          <PickerListItem>
            对接人:
          </PickerListItem>
          <PickerListItem>
            拜访方式:
          </PickerListItem>
          <InputItem>
            拜访内容:
          </InputItem>
        </List>
      </div>
    </Main>
    );
  }


