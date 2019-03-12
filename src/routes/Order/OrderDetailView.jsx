import React from 'react';
import { Button } from 'antd-mobile'
import CollapseWrap from '../../components/CollapseWrap'
import { HKJLCard, DJRCard, BJDCard, HTCard, DDCard, XMKTSQCard } from '../../components/CommonCards'
import Zmage from 'react-zmage'
import TIMG from '../../assets/image/icon_pm2.5.png'
import Main from '../../layouts/main.jsx';
import  './OrderDetailView.less';
const prefixCls = 'order-detail-view'


export default function OrderDetailView(props) {
  const {
    onAdd,
    save,
    onChange,
    onNewQuote,
    toEdit


  } = props
  return (
    <Main title={props.title} location={props.location}>
      <div className={prefixCls}>
        <div className={`${prefixCls}-desc`}>
          <div className="top">
            <span className="left">基本信息</span>
            <span onClick={toEdit} className="right">编辑</span>
          </div>
          <div className="middle">
            <div>
              <span>创建时间：</span>
              <span>{'2019-01-01'}</span>
            </div>
            <div>
              <span>订单编号：</span>
              <span>{'2019-01-01'}</span>
            </div>
            <div>
              <span>所属公司：</span>
              <span>{'2019-01-01'}</span>
            </div>
            <div>
              <span>所属项目：</span>
              <span>{'2019-01-01'}</span>
            </div>
            <div>
              <span>客户姓名：</span>
              <span>{'2019-01-01'}</span>
            </div>
            <div>
              <span>订单金额：</span>
              <span>{'2019-01-01'}</span>
            </div>
            <div>
              <span>软件金额：</span>
              <span>{'2019-01-01'}</span>
            </div>
            <div>
              <span>订单状态：</span>
              <span>{'2019-01-01'}</span>
            </div>
            <div>
              <span>业务员：</span>
              <span>{'2019-01-01'}</span>
            </div>
            <div>
              <span>总包公司：</span>
              <span>{'2019-01-01'}</span>
            </div>
            <div className="title">安装信息</div>
            <div>
              <span>项目安装地址：</span>
              <span>{'2019-01-01'}</span>
            </div>
            <div>
              <span>对接人及电话：</span>
              <span>{'2019-01-01'}</span>
            </div>
            <div>
              <span>安装截止时间：</span>
              <span>{'2019-01-01'}</span>
            </div>

            <div>
              <span>安装状态：</span>
              <span>{'2019-01-01'}</span>
            </div>
            <div>
              <span>安装凭证：</span>
              <Zmage src={TIMG}/>
            </div>

            <div className="title">回款信息</div>
            <div>
              <span>财务对接人：</span>
              <span>{'2019-01-01'}</span>
            </div>
            <div>
              <span>总回款金额：</span>
              <span>{'2019-01-01'}</span>
            </div>
            <div>
              <span>已回款金额：</span>
              <span>{'2019-01-01'}</span>
            </div>
            <div>
              <span>待回款金额：</span>
              <span>{'2019-01-01'}</span>
            </div>
            <div>
              <span>回款日期：</span>
              <span>{'2019-01-01'}</span>
            </div>
            <div>
              <span>回款状态：</span>
              <span>{'2019-01-01'}</span>
            </div>
            <div>
              <span>回款计划：</span>
              <span>{'2019-01-01'}</span>
            </div>

            <div className="title">开票信息</div>
            <div>
              <span>是否开票：</span>
              <span>{'2019-01-01'}</span>
            </div>
            <div>
              <span>开票类型：</span>
              <span>{'2019-01-01'}</span>
            </div>
            <div>
              <span>开票状态：</span>
              <span>{'2019-01-01'}</span>
            </div>
            <div>
              <span>开票凭证：</span>
              <Zmage src={TIMG}/>
            </div>
          </div>
        </div>
        <CollapseWrap
          title="回款记录"
          num={2}
        >
          <HKJLCard/>
          <HKJLCard/>
          <Button style={{margin: '10px'}} size="small"  type="primary">添加</Button>
        </CollapseWrap>
        <CollapseWrap
          title="方案报价"
          num={2}
        >
          <div className="bjd-list">
            <BJDCard/>
            <BJDCard/>
            <BJDCard/>
          </div>

          <Button onClick={onNewQuote} style={{margin: '10px'}} size="small"  type="primary">新建报价单</Button>
        </CollapseWrap>
        <CollapseWrap
          title="合同"
          num={2}
        >
          <HTCard/>
          <HTCard/>
        </CollapseWrap>
        <CollapseWrap
          title="项目开通申请"
          num={2}
        >
          <XMKTSQCard/>
        </CollapseWrap>
      </div>
    </Main>
  );
}


