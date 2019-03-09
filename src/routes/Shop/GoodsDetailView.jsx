import React from 'react';
import { Button } from 'antd-mobile'
import Main from '../../layouts/main.jsx';
import  './GoodsDetailView.less';
import TIMG from '../../assets/image/icon_pm2.5.png'
const prefixCls = 'goods-detail-view'


 export default function GoodsDetailView(props) {
  const {
    toList,
    goodList,
    id
  } = props
   const isInList = () => goodList.filter(item => item.id === id).length > 0

    return (
    <Main title={props.title}>
      <div className={prefixCls}>
        <div className="img">
          <img src={TIMG}/>
        </div>
        <div className="main">
          <span className="title">人脸识别机</span>
          <div className="desc">人脸识别机简介人脸识别机简介人脸识别机简介人脸识别机简介人脸识别机简介人脸识别机简介</div>
          <div>
            <span>所属系统：</span>
            <span>实名制系统     劳务看板系统</span>
          </div>
          <div>
            <span>公司：</span>
            <span>中控集团</span>
          </div>
          <div>
            <span>品牌：：</span>
            <span>中控 </span>
          </div>
          <div>
            <span> 分类：</span>
            <span>硬件</span>
          </div>
          <div>
            <span> 型号：</span>
            <span>A208</span>
          </div>
          <div className="price">￥4000</div>
          <div>
            <span> 临界价：</span>
            <span>￥3500</span>
          </div>
        </div>
        <Button disabled={isInList() ? true : false} onClick={toList} type="primary">{isInList() ? '已在报价单里' : '加入报价单'}</Button>
      </div>
    </Main>
    );
  }


