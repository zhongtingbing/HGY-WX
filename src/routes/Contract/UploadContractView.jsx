import React from 'react';
import { ImagePicker } from 'antd-mobile'
import Main from '../../layouts/main.jsx';
import  './UploadContractView.less';
const prefixCls = 'upload-contract-view'

 export default function UploadContractView(props) {
  const {
    onChange,
    onCancel,
    files
  } = props

    return (
    <Main className={prefixCls} title={props.title} rightContent={<div onClick={onCancel}>取消</div>}  location={props.location}>
        <ImagePicker//直接向后台传输base64字符串即可，当上传其他类型文件时，可以重写background-url，让他指定为一个其他图片
         className={ files.length === 1 ? 'has-img' : ''}
         files={files}
         length={1}
         onChange={(files) => onChange({files})}
         accept="*"
        />
        {files.length === 1 && <div className="file-desc">文件已上传页面</div>}
        <div className="desc">支持word、PDF等格式</div>
    </Main>
    );
  }


