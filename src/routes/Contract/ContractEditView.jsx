import React from 'react';
import { List, InputItem, Modal } from 'antd-mobile'
import PickerListItem from '../../components/PickerListItem'
import Main from '../../layouts/main.jsx';
import  './ContractEditView.less';
const prefixCls = 'contract-edit-view'

 export default function ContractEditView(props) {
  const {
    onChange,
    checked,
    onSubmit,
    onModalVisibleChange,
    modalVisible,
    toWX,
    toQQ,
    toEmail
  } = props

    return (
    <Main title={props.title}  location={props.location}>
      <div className={prefixCls}>
        <div className={`${prefixCls}-quotation-list`}>
          {
           [1,2,3].map((item, index) => {
             return (
               <div className="quotation-card" key={index}>
                 <div onClick={() => {onChange({checked: index})}} className="radio">
                   <div className={index === checked ? "inner" : ''}></div>
                 </div>
                 <div className="right">
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
        <div className={`${prefixCls}-btns`}>
          <div>下载</div>
          <div onClick={onModalVisibleChange}>发送至</div>
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


