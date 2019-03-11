import React from 'react';
import { Icon, Accordion, List, Button } from 'antd-mobile'
import CollapseWrap from '../../components/CollapseWrap'
import { GJJLCard, DJRCard, DDCard, XSJHCard } from '../../components/CommonCards'
import Zmage from 'react-zmage'
import TIMG from '../../assets/image/icon_pm2.5.png'
import Main from '../../layouts/main.jsx';
import  './CustomerDetailView.less';
const prefixCls = 'customer-detail-view'


 export default function CustomerDetailView(props) {
  const {
    onAdd,
    save,
    onChange,
    onNewQuote,
    toEdit
  } = props
    return (
    <Main title={props.title} rightContent={<div onClick={save}>保存</div>} location={props.location}>
      <div className={prefixCls}>
        <div className={`${prefixCls}-desc`}>
          <div className="top">
            <span className="left">客户基本信息</span>
            <span onClick={toEdit} className="right">编辑</span>
          </div>
          <div className="middle">
            <div>
              <span>客户俗称：</span>
              <span>{'浙南万科'}</span>
            </div>
            <div>
              <span>公司名称：</span>
              <span>{'2019-01-01'}</span>
            </div>
            <div>
              <span>注册资本：</span>
              <span>{'2019-01-01'}</span>
            </div>
            <div>
              <span>纳税人识别号：</span>
              <span>{'2019-01-01'}</span>
            </div>
            <div>
            <span>开户行：</span>
            <span>{'2019-01-01'}</span>
          </div>
            <div>
              <span>账号：</span>
              <span>{'2019-01-01'}</span>
            </div>
            <div>
              <span>公司所在城市：</span>
              <span>{'2019-01-01'}</span>
            </div>
            <div>
              <span>公司电话：</span>
              <span>{'2019-01-01'}</span>
            </div>
            <div>
              <span>公司地址：</span>
              <span>{'2019-01-01'}</span>
            </div>
            <div>
              <span>状态：</span>
              <span>{'2019-01-01'}</span>
            </div>
            <div>
              <span>客户等级：</span>
              <span>{'2019-01-01'}</span>
            </div>
            <div>
              <span>客户类型：</span>
              <span>{'2019-01-01'}</span>
            </div>
            <div>
              <span>机会来源：</span>
              <span>{'2019-01-01'}</span>
            </div>
            <div>
              <span>最后一次拜访时间：</span>
              <span>{'2019-01-01'}</span>
            </div>
            <div>
              <span>总负责人：</span>
              <span>{'2019-01-01'}</span>
            </div>
            <div>
              <span>联系电话：</span>
              <span>{'2019-01-01'}</span>
            </div>
            <div>
              <span>微信：</span>
              <span>{'2019-01-01'}</span>
            </div>
            <div>
              <span>Q&nbsp;&nbsp;Q：</span>
              <span>{'2019-01-01'}</span>
            </div>
            <div>
              <span>邮箱：</span>
              <span>{'2019-01-01'}</span>
            </div>
            <div>
              <span>名片附件：</span>
              <Zmage src={TIMG}/>
            </div>
          </div>
        </div>
        <CollapseWrap
          title="拜访记录"
          num={2}
        >
          <GJJLCard/>
          <GJJLCard/>
          <Button style={{margin: '10px'}} size="small"  type="primary">新增拜访记录</Button>
        </CollapseWrap>
        <CollapseWrap
          title="对接人"
          num={2}
        >
          <DJRCard/>
          <DJRCard/>
          <Button style={{margin: '10px'}} size="small"  type="primary">新增对接人</Button>
        </CollapseWrap>
        <CollapseWrap
          title="订单"
          num={2}
        >
          <DDCard/>
          <DDCard/>
        </CollapseWrap>
        <CollapseWrap
          title="销售机会"
          num={2}
        >
          <XSJHCard/>
          <XSJHCard/>
        </CollapseWrap>
      </div>
    </Main>
    );
  }


