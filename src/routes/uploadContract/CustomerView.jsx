import React from 'react';
import { List, InputItem, ImagePicker } from 'antd-mobile'
import Main from '../../layouts/main.jsx';
import  './CustomerView.less';
const prefixCls = 'sale-chance-cus-view'

 export default function CustomerView(props) {
  const {
    files,
    onChange,
    onSubmit
  } = props

    return (
    <Main title={props.title} rightContent={<div onClick={onSubmit}>保存</div>} location={props.location}>
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
          >微信:</InputItem>
          <InputItem
          >邮箱：</InputItem>
        </List>
        <div className="img-area">
          <div className="desc">名片附件：</div>
          <ImagePicker//直接向后台传输base64字符串即可
            className={ files.length === 1 ? 'has-img' : ''}
            files={files}
            onChange={(files) => onChange({files})}
            onImageClick={(index, fs) => console.log(index, fs)}
          />
          <div className="desc">上传图片</div>
        </div>
      </div>
    </Main>
    );
  }


