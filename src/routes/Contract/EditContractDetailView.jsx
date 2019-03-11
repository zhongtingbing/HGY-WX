import React from 'react';
import { List, InputItem, ImagePicker} from 'antd-mobile'
import Main from '../../layouts/main.jsx';
import  './EditContractDetailView.less';
import PickerListItem from '../../components/PickerListItem'
import RadioGroup from '../../components/RadioGroup'
import Zmage from 'react-zmage'
import TIMG from '../../assets/image/icon_pm2.5.png'
const prefixCls = 'edit-contract-detail-view'

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


export default function EditContractDetailView(props) {
  const {
    onSubmit,
    files,
    onChange,
    KFP
  } = props

  return (
    <Main title={props.title} rightContent={<div onClick={onSubmit}>保存</div>} location={props.location}>
      <div className={prefixCls}>
        {/*<div className="title">基本信息:</div>*/}
        <List>
          <InputItem
            // defaultValue={100}
            placeholder="请输入项目名称"
            // className="input-require"
            // onChange={(v)=>{onChange()}}
          >项目名称:</InputItem>
          <InputItem
            placeholder="请输入所属公司"
            onChange={(v) => { console.log('onChange', v); }}
            // className="input-require"
          >所属公司:
          </InputItem>
          <InputItem
            placeholder="请输入所属项目"
            onChange={(v) => { console.log('onChange', v); }}
            // className="input-require"
          >所属项目:
          </InputItem>
          <InputItem
            placeholder="请输入合同类型"
            onChange={(v) => { console.log('onChange', v); }}
            // className="input-require"
          >
            合同类型:
          </InputItem>
          <InputItem
            placeholder="请输入合同总金额"
            onChange={(v) => { console.log('onChange', v); }}
            type="number"
          >
            合同总金额:
          </InputItem>
          <InputItem
            placeholder="请输入合同偏差"
            onChange={(v) => { console.log('onChange', v); }}
            type="number"
          >
            合同偏差:
          </InputItem>
          <div className="line">
            <span>合同源文件：</span>
            <Zmage src={TIMG}/>
          </div>
          <div className="title">开票信息:</div>

          <RadioGroup
            value={KFP}
            onChange={(value) => {onChange({KFP: value})}}
          >
            是否开发票：
          </RadioGroup>
          <PickerListItem
            data={pickerData}
            onChange={(value) => {console.log(value)}}
            // value="re"
          >
            开票类型:
          </PickerListItem>
          <InputItem
            placeholder="请输入开票信息"
          >
            开票信息：
          </InputItem>
          <InputItem
            placeholder="请输入开票状态"
            // className="input-require"
          >
            开票状态：
          </InputItem>
          <RadioGroup
            value={KFP}
            onChange={(value) => {onChange({KFP: value})}}
          >
            是否开通项目申请：
          </RadioGroup>

          <div className="img-area">
            <ImagePicker//直接向后台传输base64字符串即可
              className={ files.length === 1 ? 'has-img' : ''}
              files={files}
              onChange={(files) => onChange({files})}
              onImageClick={(index, fs) => console.log(index, fs)}
            />
            <div style={{marginLeft: '12px'}}>上传申请表</div>
          </div>
          <RadioGroup
            value={KFP}
            onChange={(value) => {onChange({KFP: value})}}
          >
            是否归档：
          </RadioGroup>
          <InputItem
            placeholder="请输入归档编号"
          >
            归档编号：
          </InputItem>
        </List>
      </div>
    </Main>
  );
}


