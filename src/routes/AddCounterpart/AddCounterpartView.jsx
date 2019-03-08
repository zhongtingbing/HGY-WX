import React from 'react';
import { List, InputItem, ImagePicker } from 'antd-mobile'
import PickerListItem from '../../components/PickerListItem'
import Main from '../../layouts/main.jsx';
import  './AddCounterpartView.less';
const prefixCls = ' add-counterpart-view'


function AddCounterpartView(props) {
  console.log(props)
  const {
    onSubmit,
    files,
    onChange
  } = props
    return (
      <Main title={props.title} rightContent={<div onClick={onSubmit}>保存</div>} location={props.location}>
        <div className={prefixCls}>
          <List>
            <InputItem
              onChange={(v)=>{onChange()}}
            >姓名:
            </InputItem>
            <InputItem
              onChange={(v) => { console.log('onChange', v); }}
            >
              电话:
            </InputItem>
            <InputItem
              onChange={(v)=>{onChange()}}
            >
              职位:
            </InputItem>
            <PickerListItem>
              负责业务:
            </PickerListItem>
            <InputItem
              onChange={(v)=>{onChange()}}
            >
              微信:
            </InputItem>
            <InputItem
              onChange={(v)=>{onChange()}}
            >
              QQ:
            </InputItem>
            <InputItem
              onChange={(v)=>{onChange()}}
            >
              邮箱:
            </InputItem>
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

AddCounterpartView.defaultPorps = {
  files: []
}

export default AddCounterpartView

