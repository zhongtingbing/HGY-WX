import React from 'react';
import { Button } from 'antd-mobile'
import Main from '../../layouts/main.jsx';
import  './CreateContractView.less';
const prefixCls = 'sale-chance-create-contract-view'

 export default function CreateContractView(props) {
  const {
    toNew,
    toUpload,
    toUploadWithoutProof
  } = props

    return (
    <Main title={props.title}  location={props.location}>
      <div className={prefixCls}>
        <Button onClick={toNew}>
          新建合同
        </Button>
        <Button onClick={toUpload}>
          上传自定义合同
        </Button>
        <Button onClick={toUploadWithoutProof}>
          无合同凭证上传
        </Button>
      </div>
    </Main>
    );
  }


