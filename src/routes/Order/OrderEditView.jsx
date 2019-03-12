import React from 'react';
import { List, InputItem, ImagePicker} from 'antd-mobile'
import Main from '../../layouts/main.jsx';
import  './OrderEditView.less';
import PickerListItem from '../../components/PickerListItem'
import PickerDataItem from '../../components/PickerDataItem'
import RadioGroup from '../../components/RadioGroup'
import Zmage from 'react-zmage'
import TIMG from '../../assets/image/icon_pm2.5.png'
const prefixCls = 'order-edit-view-456'

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


export default function OrderEditView(props) {
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
            placeholder="请输入订单编号"
            // className="input-require"
            // onChange={(v)=>{onChange()}}
          >
            订单编号:
          </InputItem>
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
            placeholder="请输入客户姓名"
            onChange={(v) => { console.log('onChange', v); }}
            // className="input-require"
          >
            客户姓名:
          </InputItem>
          <InputItem
            placeholder="请输入订单金额"
            onChange={(v) => { console.log('onChange', v); }}
            type="number"
          >
            订单金额:
          </InputItem>
          <InputItem
            placeholder="请输入硬件金额"
            onChange={(v) => { console.log('onChange', v); }}
            type="number"
          >
            硬件金额:
          </InputItem>
          <InputItem
            placeholder="请输入软件金额"
            onChange={(v) => { console.log('onChange', v); }}
            type="number"
          >
            软件金额:
          </InputItem>
          <InputItem
            placeholder="请输入业务员"
            onChange={(v) => { console.log('onChange', v); }}
          >
            业务员:
          </InputItem>
          <InputItem
            placeholder="请输入总包公司"
            className="input-require"
            onChange={(v) => { console.log('onChange', v); }}
          >
            总包公司:
          </InputItem>
          <div className="title">安装信息</div>

          <InputItem
            placeholder="项目安装地址"
            onChange={(v) => { console.log('onChange', v); }}
          >
            项目安装地址:
          </InputItem>

          <InputItem
            placeholder="对接人姓名"
            onChange={(v) => { console.log('onChange', v); }}
          >
            对接人姓名:
          </InputItem>
          <InputItem
            placeholder="电话"
            onChange={(v) => { console.log('onChange', v); }}
            type="number"
          >
            对接人电话:
          </InputItem>
          <PickerDataItem>
            安装截止时间:
          </PickerDataItem>
          <InputItem
            placeholder="安装状态"
            onChange={(v) => { console.log('onChange', v); }}
          >
            安装状态:
          </InputItem>
          <div style={{marginLeft: '12px'}}>上传安装凭证</div>
          <div className="img-area">
            <ImagePicker//直接向后台传输base64字符串即可
              className={ files.length === 1 ? 'has-img' : ''}
              files={files}
              onChange={(files) => onChange({files})}
              onImageClick={(index, fs) => console.log(index, fs)}
            />
            <div style={{marginLeft: '12px'}}>上传凭证</div>
          </div>


          <div className="title">开票信息</div>
          <InputItem
            value="是"

          >
            是否开发票:
          </InputItem>
          <InputItem
            value="普通发票"
            disabled={true}
          >
            开票类型:
          </InputItem>

          <InputItem
            value="万科房地产"
            disabled={true}
          >
            开票信息:
          </InputItem>
          <InputItem
            value="未开票"
            disabled={true}
          >
            开票状态:
          </InputItem>
          <div style={{marginLeft: '12px'}}>上传开票凭证</div>
          <div className="img-area">
            <ImagePicker//直接向后台传输base64字符串即可
              className={ files.length === 1 ? 'has-img' : ''}
              files={files}
              onChange={(files) => onChange({files})}
              onImageClick={(index, fs) => console.log(index, fs)}
            />
            <div style={{marginLeft: '12px'}}>上传凭证</div>
          </div>
        </List>
      </div>
    </Main>
  );
}


