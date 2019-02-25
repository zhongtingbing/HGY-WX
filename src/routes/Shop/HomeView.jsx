import React from 'react';
import { Button, List, Icon } from 'antd-mobile'
import Main from '../../layouts/main.jsx';
import  './HomeView.less';
import SearchInput from '../../components/SearchInput'
import PagingListView from '../../components/PagingListView'
import {BasicGoodsCard} from './component'
import Affix from '../../components/Affix'
const prefixCls = 'shop-home-view'

 export default function HomeView(props) {
  const {
    onSearch,
    queryGoodsList,
    toTop,
    onAdd,
    toShopList
  } = props
    return (
    <Main title={props.title} location={props.location}>
      <div className={prefixCls}>
        <div className={`${prefixCls}-filter`}>
          <SearchInput onSearch={onSearch} placeholder="请输入产品名称"/>
          <span>筛选</span>
        </div>
        <PagingListView
          style={{ height: '100%'}}
          pageSize={10}
          pullData={queryGoodsList}
          renderRow={(rowData, sectionID, rowID) => {
            const {
                id,
              name,
              version,
              price,
              brand
            } = rowData;

            return (
              <BasicGoodsCard
                rowData={rowData}
                onAdd={onAdd}
                id={id}
              />
            )
          }}
        />
        <Affix onClick={toShopList} style={{bottom: '100px'}}>
          报价单图标
        </Affix>
        <Affix onClick={toTop}>
          回到顶部
        </Affix>
      </div>
    </Main>
    );
  }


