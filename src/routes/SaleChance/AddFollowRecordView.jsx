import React from 'react';
import { List, InputItem } from 'antd-mobile'
import Main from '../../layouts/main.jsx';
import PickerDataItem from '../../components/PickerDataItem'
import  './AddFollowRecordView.less';
import PickerListItem from '../../components/PickerListItem'
const prefixCls = 'sale-chance-follow-record-view'

 export default function AddFollowRecordView(props) {
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
            跟进时间:
          </PickerDataItem>
          <PickerListItem>
            对接人:
          </PickerListItem>
          <PickerListItem>
            状态:
          </PickerListItem>
          <PickerListItem>
            跟进方式:
          </PickerListItem>
          <InputItem>
            跟进内容
          </InputItem>
        </List>
      </div>
    </Main>
    );
  }


