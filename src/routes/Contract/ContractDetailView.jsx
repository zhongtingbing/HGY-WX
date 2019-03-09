import React from 'react';
import Zmage from 'react-zmage'
import TIMG from '../../assets/image/icon_pm2.5.png'
import Main from '../../layouts/main.jsx';
import  './ContractDetailView.less';
const prefixCls = 'contract-Detail-view'

 export default function ContractDetailView(props) {
  const {
    toEdit
  } = props

    return (
    <Main title={props.title}  rightContent={<div onClick={toEdit}>编辑</div>}  location={props.location}>
      <div className={prefixCls}>
        <div>
          <span>编辑时间:</span>
          <span>{`2019-01-01`}</span>
        </div>
        <div>
          <span>合同编号:</span>
          <span>{`l-23131`}</span>
        </div>
        <div>
          <span>合同名称：</span>
          <span>{`理想之城`}</span>
        </div>
        <div>
          <span>所属公司：</span>
          <span>{`浙江浙南万科`}</span>
        </div>
        <div>
          <span>所属项目：</span>
          <span>{`理想之城`}</span>
        </div>
        <div>
          <span>合同类型：</span>
          <span>{`集成商`}</span>
        </div>
        <div>
          <span>合同状态：</span>
          <span>{`付款中`}</span>
        </div>
        <div>
          <span>业务员：</span>
          <span>{`许俊`}</span>
        </div>
        <div>
          <span>合同源文件：</span>
          <Zmage src={TIMG}/>
        </div>
        <div>
          <span>已签章文件：</span>
          <Zmage src={TIMG}/>
        </div>
        <div>
          <span>无合同凭证：</span>
          <span>{`无`}</span>
        </div>
        <div>
          <span>合同总金额：</span>
          <span>{`无`}</span>
        </div>
        <div>
          <span>无合同凭证：</span>
          <span>{`￥12000`}</span>
        </div>
        <div>
          <span>实际成交金额：</span>
          <span>{`￥12000`}</span>
        </div>
        <div>
          <span>合同偏差：</span>
          <span>{`0`}</span>
        </div>
        <div>
          <span>是否开票：</span>
          <span>{`是`}</span>
        </div>
        <div>
          <span>开票类型：</span>
          <span>{`普通发票`}</span>
        </div>
        <div>
          <span>开票类型：</span>
          <span>{`普通发票`}</span>
        </div>
        <div>
          <span>开票信息：</span>
          <span>{`万科房地产公司`}</span>
        </div>
        <div>
          <span>开票状态：</span>
          <span>{`已开`}</span>
        </div>
        <div>
          <span>是否开通项目申请：</span>
          <span>{`是`}</span>
        </div>
        <div>
          <span>项目开通申请表：</span>
          <Zmage src={TIMG}/>
        </div>
        <div>
          <span>是否归档：</span>
          <span>{`是`}</span>
        </div>
        <div>
          <span>归档索引：</span>
          <span>{` l-23131`}</span>
        </div>

      </div>
    </Main>
    );
  }


