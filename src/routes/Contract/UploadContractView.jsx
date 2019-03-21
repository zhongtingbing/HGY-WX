import React from 'react';
import { ImagePicker, List, InputItem, Button } from 'antd-mobile'
import Zmage from 'react-zmage'
import TIMG from '../../assets/image/icon_pm2.5.png'
import PickerListItem from '../../components/PickerListItem'
import Main from '../../layouts/main.jsx';
import  './UploadContractView.less';
const prefixCls = 'upload-contract-view'

 export default function UploadContractView(props) {
  const {
    onChange,
    onCancel,
    files,
    checked,
    title
  } = props

    return (
    <Main className={prefixCls} title={title} rightContent={<div onClick={onCancel}>取消</div>}  location={props.location}>
      <div className={`${prefixCls}-quotation-list`}>
        {
          [1,2,3].map((item, index) => {
            return (
              <div className="quotation-card" key={index}>
                <div onClick={() => {onChange({checked: index})}} className="radio">
                  <div className={index === checked ? "inner" : ''}></div>
                </div>
                <div className="right">
                  <Zmage src={TIMG}/>
                  <div className="right-desc">
                    <span>{`报价单${index+1}`}</span>
                    <span>2018.12.14 12：10</span>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <List>
        <InputItem
          value={"万科房地产公司"}
          disabled={true}
        >
          合同名称：
        </InputItem>
        <InputItem
          value={"万科"}
          disabled={true}
        >
          所属公司：
        </InputItem>
        <InputItem
          value={"12000"}
          disabled={true}
        >
          合同金额：
        </InputItem>
        <PickerListItem
          // require={true}
          // data={taxPointData}
          // onChange={(value) => {onChange({taxPoint: value})}}
          // value={taxPoint}
        >
          合同类型:
        </PickerListItem>
        <InputItem
          // value={""}
        >
          甲方
        </InputItem>
        <InputItem
          // value={""}
        >
          地址：
        </InputItem>
        <InputItem
          // value={""}
        >
          联系人：
        </InputItem>
        <InputItem
          type="number"
          // value={"19283827423"}
        >
          联系电话：
        </InputItem>
      </List>
        <ImagePicker//直接向后台传输base64字符串即可，当上传其他类型文件时，可以重写background-url，让他指定为一个其他图片
         className={ files.length === 1 ? 'has-img' : ''}
         files={files}
         length={1}
         onChange={(files) => onChange({files})}
         accept="*"
        />
        {files.length === 1 && <div className="file-desc">文件已上传页面</div>}
        <div className="desc">支持word、PDF等格式</div>
       <Button className="btn" type="primary">创建同时创建订单</Button>
    </Main>
    );
  }


