import React from 'react';
import { Button, List, Icon } from 'antd-mobile'
import Main from '../../layouts/main.jsx';
import  './ShopListView.less';
import SearchInput from '../../components/SearchInput'
import PagingListView from '../../components/PagingListView'
import {BasicGoodsCard1} from './component'
const prefixCls = 'shop-list-view'

 export default function ShopListView(props) {
  const {
    goodList,
    onDiscountChange,
    onDown,
    onPlus,
    onCheck,
    checkAll,
    allCheck,
    toQuotation
  } = props

   let totalCount = 0;
   let totalDiscount = 0;
   goodList.forEach(item => {
     if(item.count && item.checked)totalCount = totalCount + item.price*item.count;
     console.log(item)
     if(item.discount && item.checked) {
       totalDiscount = totalDiscount + parseFloat(item.discount)*parseFloat(item.count)
     }
   })
    return (
    <Main title={props.title}  location={props.location}>
      <div className={prefixCls}>
        {
          goodList.map((item ,index) => {
            return (
              <BasicGoodsCard1
                key={`bas-${index}`}
                isList={true}
                rowData={item}
                onDiscountChange={onDiscountChange}
                onDown={onDown}
                onPlus={onPlus}
                onCheck={onCheck}
              />
            )
          })
        }
        <div className={`${prefixCls}-bottom`}>
          <div onClick={checkAll} className="left">
            <div className="radio">
              <div className={allCheck ? "inner" : ''}></div>
            </div>
            全选
          </div>
          <div className="middle">
            <span>合计：￥{totalCount}</span>
            <span className="lit">优惠：￥{totalDiscount}</span>
          </div>
          <div onClick={toQuotation} className="btn">生成报价单</div>
        </div>
      </div>
    </Main>
    );
  }


