import React from 'react';
import { List, InputItem, ImagePicker } from 'antd-mobile'
import Main from '../../layouts/main.jsx';
import  './ApplicationView.less';
const prefixCls = 'application-view'

 export default function ApplicationView(props) {
  const {
    files,
    onChange,
    onSubmit
  } = props

    return (
    <Main title={props.title} rightContent={<div onClick={onSubmit}>保存</div>} location={props.location}>
      <div className={prefixCls}>
        <List>
          <InputItem
            className="input-require"
            placeholder="请填写系统登录账号"
            // onChange={(v)=>{onChange()}}
          >
            系统登录账号:
          </InputItem>
          <InputItem
            className="input-require"
            placeholder="请填写项目名称"
            // onChange={(v)=>{onChange()}}
          >
            项目名称:
          </InputItem>
          <InputItem
            className="input-require"
            placeholder="总包项目经理"
            // onChange={(v)=>{onChange()}}
          >
            总包项目经理:
          </InputItem>
          <InputItem
            className="input-require"
            placeholder="总包项目经理电话"
            // onChange={(v)=>{onChange()}}
          >
            总包项目经理电话:
          </InputItem>
          <InputItem
            className="input-require"
            placeholder="开发商名称"
            // onChange={(v)=>{onChange()}}
          >
            开发商名称:
          </InputItem>
          <InputItem
            className="input-require"
            placeholder="总承包单位名称"
            // onChange={(v)=>{onChange()}}
          >
            总承包单位名称:
          </InputItem>
          <InputItem
            className="input-require"
            placeholder="监理单位名称"
            // onChange={(v)=>{onChange()}}
          >
            监理单位名称:
          </InputItem>
          <InputItem
            className="input-require"
            placeholder="后台操作人员姓名"
            // onChange={(v)=>{onChange()}}
          >
            后台操作人员姓名:
          </InputItem>
          <InputItem
            className="input-require"
            placeholder="后台操作人员电话"
            // onChange={(v)=>{onChange()}}
          >
            后台操作人员姓名:
          </InputItem>
          <InputItem
            className="input-require"
            placeholder="后台操作人员QQ"
            // onChange={(v)=>{onChange()}}
          >
            后台操作人员QQ:
          </InputItem>
          <InputItem
            className="input-require"
            placeholder="项目地址"
            // onChange={(v)=>{onChange()}}
          >
            项目地址:
          </InputItem>


          <div className="title">安装信息</div>
          <InputItem
            className="input-require"
            placeholder="安装单位"
            // onChange={(v)=>{onChange()}}
          >
            安装单位:
          </InputItem>
          <InputItem
            className="input-require"
            placeholder="项目安装负责人"
            // onChange={(v)=>{onChange()}}
          >
            项目安装负责人:
          </InputItem>
          <InputItem
            className="input-require"
            placeholder="项目安装负责人电话"
            // onChange={(v)=>{onChange()}}
          >
            项目安装负责人电话:
          </InputItem>
          <InputItem
            className="input-require"
            placeholder="项目安装负责人电话"
            // onChange={(v)=>{onChange()}}
          >
            项目安装负责人电话:
          </InputItem>
          <InputItem
            className="input-require"
            placeholder="项目安装负责人电话"
            // onChange={(v)=>{onChange()}}
          >
            项目安装负责人电话:
          </InputItem>
          <InputItem
            className="input-require"
            placeholder="项目安装负责人邮箱"
            // onChange={(v)=>{onChange()}}
          >
            项目安装负责人邮箱:
          </InputItem>
          <InputItem
            placeholder="门禁控制器编号"
            // onChange={(v)=>{onChange()}}
          >
            门禁控制器编号:
          </InputItem>
          <InputItem
            placeholder="LED控制卡编号"
            // onChange={(v)=>{onChange()}}
          >
            LED控制卡编号:
          </InputItem>
        </List>
      </div>
    </Main>
    );
  }


