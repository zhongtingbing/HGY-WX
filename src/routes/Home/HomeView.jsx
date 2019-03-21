import React from 'react';
import { Button, List, Icon } from 'antd-mobile'
import Main from '../../layouts/main.jsx';
import  './HomeView.less';
const Item = List.Item
const prefixCls = 'home-view'

 export default function HomeView(props) {
    return (
    <Main title={props.title} showLeft={false} location={props.location}>
      <div className={prefixCls}>
        <div className={`${prefixCls}-list`}>
          <div className="list-body">
            <List>
              <Item
                arrow="horizontal"
                onClick={() => {props.goTo('/sale-chance')}}
              >销售机会管理
              </Item>
              <Item
                arrow="horizontal"
                onClick={() => {props.goTo('/customer')}}
              >客户管理
              </Item>
              <Item
                arrow="horizontal"
                onClick={() => {props.goTo('/contract')}}
              >
                <div>
                  合同管理
                  <span style={{fontSize: '12px'}}>(如需创建合同，请到对应的销售机会创建)</span>
                </div>
              </Item>
              <Item
                arrow="horizontal"
                onClick={() => {props.goTo('/order')}}
              >订单管理
              </Item>
              {/*<Item*/}
                {/*onClick={() => {}}*/}
                {/*arrow="horizontal"*/}
              {/*>下载项目开通申请表*/}
              {/*</Item>*/}
            </List>
          </div>
        </div>
      </div>
    </Main>
    );
  }


