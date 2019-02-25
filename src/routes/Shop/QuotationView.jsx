import React from 'react';
import { Modal, List, Icon, InputItem } from 'antd-mobile'
import PickerListItem from '../../components/PickerListItem'
import Main from '../../layouts/main.jsx';
import  './QuotationView.less';
const prefixCls = 'quotation-view-122'


const taxPointData = [
  {
    label: '不含税',
    value: '0',
  },
  {
    label: '含税3个点',
    value: '1',
  },
]

 export default function QuotationView(props) {
  const {
    onSubmit,
    onChange,
    taxPoint,
    goodList,
    modalVisible,
    onModalVisibleChange,
    toWX,
    toQQ,
    toEmail
  } = props
console.log(goodList)
    return (
    <Main title={props.title} rightContent={<div onClick={onSubmit}>生成订单</div>} location={props.location}>
      <div className={prefixCls}>
        <List>
          <PickerListItem
            require={true}
            data={taxPointData}
            onChange={(value) => {onChange({taxPoint: value})}}
            value={taxPoint}
          >
            选择税点:
          </PickerListItem>
          <InputItem
            value={"万科房地产公司"}
            disabled={true}
          >
            公司名称：
          </InputItem>
          <InputItem
            value={"万科房地产公司"}
            disabled={true}
          >
            项目名称：
          </InputItem>
          <InputItem
            value={"李四"}
            disabled={true}
          >
            客户姓名：
          </InputItem>
          <InputItem
            value={"19283827423"}
            disabled={true}
          >
            联系电话：
          </InputItem>
          <InputItem
            // value={""}
          >
            产品说明：
          </InputItem>
          <InputItem
            // value={""}
          >
            实施说明：
          </InputItem>
          <InputItem
            type="number"
            // value={"19283827423"}
          >
            安装费用：
          </InputItem>
          <InputItem
            type="number"
            // value={"19283827423"}
          >
            运费：
          </InputItem>
        </List>
        <div>
          <div className="goods-title">{`产品清单：${'实名制通道'}`}</div>
          {
            goodList.map((item, index) => {
              return (
                <div key={index} className="goods-desc">
                  <div className="top">
                    <span>{'人脸识别机'}</span>
                    <div>
                      <span>{'中控集团'}</span>
                      <span>{'中控'}</span>
                      <span>{`${'A209'} X ${1}`}</span>
                      <span>{`￥${3000}`}</span>
                    </div>
                  </div>
                  <div className="bottom">
                    <span>备注：</span>
                    <input onChange={(e)=>{e.target.value}} type="text"/>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className={`${prefixCls}-gather`}>
          <div className="line-1">
            <span className="lg">合计：{12000}</span>
            <span>{`(${'含三个税点'})`}</span>
          </div>
          <div className="line-2">
            <span>硬件金额:￥{3000}</span>
            <span>软件金额:￥{2000}</span>
            <span>安装费用:￥{200}</span>
          </div>
          <div className="line-3">
            <span>运费:￥{3000}</span>
            <span>优惠:￥{2000}</span>
          </div>
        </div>
        <div className={`${prefixCls}-btns`}>
          <div>下载</div>
          <div onClick={onModalVisibleChange}>发送至</div>
          <div>预览</div>
          <div>保存并创建订单</div>
        </div>
        <Modal
          popup
          visible={modalVisible}
          maskClosable={true}
          onClose={onModalVisibleChange}
          animationType="slide-up"
          className={`${prefixCls}-modal`}>
          <div className={`${prefixCls}-modal-body`}>
            <div onClick={toWX}>分享给朋友</div>
            <div onClick={toQQ}>发送给qq好友</div>
            <div onClick={toEmail}>发送至邮箱</div>
          </div>
        </Modal>
      </div>
    </Main>
    );
  }


