import React from 'react';
import { List, InputItem, ImagePicker } from 'antd-mobile'
import PickerListItem from '../../components/PickerListItem'
import PickerDataItem from '../../components/PickerDataItem'
import Main from '../../layouts/main.jsx';
import  './PaymentView.less';
const prefixCls = 'order-payment-view'

 export default function PaymentView(props) {
  const {
    files,
    onChange,
    onSubmit,
    paymentDate
  } = props

    return (
    <Main title={props.title} rightContent={<div onClick={onSubmit}>保存</div>} location={props.location}>
      <div className={prefixCls}>
        <List>
          <PickerListItem>
            回款类型:
          </PickerListItem>
          <InputItem
            onChange={(v) => { console.log('onChange', v); }}
          >
            账户名:
          </InputItem>
          <InputItem
          >
            回款金额:
          </InputItem>
          <PickerDataItem
            onChange={(value) => {onChange({paymentDate: value})}}
            value={paymentDate}
            mode='datetime'
          >
            日期：
          </PickerDataItem>
        </List>
        <div className="img-area">
          <div className="desc">上传付款凭证：</div>
          <ImagePicker//直接向后台传输base64字符串即可
            className={ files.length === 1 ? 'has-img' : ''}
            files={files}
            onChange={(files) => onChange({files})}
            onImageClick={(index, fs) => console.log(index, fs)}
          />
          <div className="desc">上传凭证</div>
        </div>
      </div>
    </Main>
    );
  }


