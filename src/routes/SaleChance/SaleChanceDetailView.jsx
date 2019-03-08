import React from 'react';
import { Icon, Accordion, List, Button } from 'antd-mobile'
import CollapseWrap from '../../components/CollapseWrap'
import { GJJLCard, DJRCard, BJDCard } from '../../components/CommonCards'
import Zmage from 'react-zmage'
import TIMG from '../../assets/image/icon_pm2.5.png'
import Main from '../../layouts/main.jsx';
import  './SaleChanceDetailView.less';
const prefixCls = 'sale-chance-detail-view'


 export default function SaleChanceDetailView(props) {
  const {
    onAdd,
    save,
    onChange

  } = props

    return (
    <Main title={props.title} rightContent={<div onClick={save}>保存</div>} location={props.location}>
      <div className={prefixCls}>
        <div className={`${prefixCls}-desc`}>
          <div className="top">
            <span className="left">销售机会名称</span>
            <span className="right">编辑</span>
          </div>
          <div className="middle">
            <div>
              <span>创建时间：</span>
              <span>{'2019-01-01'}</span>
            </div>
            <div>
              <span>所属公司：</span>
              <span>{'2019-01-01'}</span>
            </div>
            <div>
              <span>客户姓名：</span>
              <span>{'2019-01-01'}</span>
            </div>
            <div>
              <span>机会说明：</span>
              <span>{'2019-01-01'}</span>
            </div>
            <div>
            <span>客户类型：</span>
            <span>{'2019-01-01'}</span>
          </div>
            <div>
              <span>负责模块：</span>
              <span>{'2019-01-01'}</span>
            </div>
            <div>
              <span>客户等级：</span>
              <span>{'2019-01-01'}</span>
            </div>
            <div>
              <span>机会来源：</span>
              <span>{'2019-01-01'}</span>
            </div>
            <div>
              <span>跟进状态：</span>
              <span>{'2019-01-01'}</span>
            </div>
            <div>
              <span>客户职位：</span>
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
          title="跟进记录"
          num={2}
        >
          <GJJLCard/>
          <GJJLCard/>
          <Button style={{margin: '10px'}} size="small"  type="primary">新增跟进记录</Button>
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
          title="方案报价"
          num={2}
        >
          <div className="bjd-list">
            <BJDCard/>
            <BJDCard/>
            <BJDCard/>
          </div>

          <Button style={{margin: '10px'}} size="small"  type="primary">新建报价单</Button>
        </CollapseWrap>
      </div>
    </Main>
    );
  }


