import React from 'react';
import { List, InputItem, ImagePicker} from 'antd-mobile'
import Main from '../../layouts/main.jsx';
import  './CustomerEditView.less';
import PickerListItem from '../../components/PickerListItem'
const prefixCls = 'customer-edit-view-444'

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


 export default function CustomerEditView(props) {
  const {
    onSubmit,
    files,
    onChange
  } = props

    return (
    <Main title={props.title} rightContent={<div onClick={onSubmit}>保存</div>} location={props.location}>
      <div className={prefixCls}>
        {/*<div className="title">基本信息:</div>*/}
        <List>
          <InputItem
            // defaultValue={100}
            placeholder="请输入客户俗称"
            // className="input-require"
            // onChange={(v)=>{onChange()}}
          >客户俗称:</InputItem>
          <InputItem
            placeholder="请输入公司名称"
            onChange={(v) => { console.log('onChange', v); }}
            // className="input-require"
          >公司名称:
          </InputItem>
          <PickerListItem
            data={pickerData}
            onChange={(value) => {console.log(value)}}
            // value="re"
          >
            公司所在城市:
          </PickerListItem>
          <InputItem
            placeholder="请输入公司电话"
            type="number"
          >公司电话：
          </InputItem>
          <InputItem
            placeholder="请输入公司地址"
            // className="input-require"
          >公司地址：
          </InputItem>
          <PickerListItem
            data={pickerData}
            onChange={(value) => {console.log(value)}}
            // value="re"
          >
            客户来源:
          </PickerListItem>
          <PickerListItem
            data={pickerData}
            // value="re"
          >
            客户类型:
          </PickerListItem>
          <PickerListItem
            data={pickerData}
          >
            客户等级:
          </PickerListItem>
        </List>
        <div className="title">联系人信息:</div>
        <InputItem
          placeholder="请输入姓名"
        >
          姓名：
        </InputItem>
        <InputItem
          placeholder="请输入电话"
          type="number"
        >
          电话：
        </InputItem>
        <InputItem
          placeholder="请输入职位"
        >
          职位：
        </InputItem>
        <InputItem
          placeholder="请输入微信"
        >
          微信：
        </InputItem>
        <InputItem
          placeholder="请输入QQ"
        >
          QQ：
        </InputItem>
        <InputItem
          placeholder="请输入邮箱"
        >
          邮箱：
        </InputItem>
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


