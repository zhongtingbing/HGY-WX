import React from 'react';
import { List, Drawer } from 'antd-mobile'
import Main from '../../layouts/main.jsx';
import  './HomeView.less';
import SearchInput from '../../components/SearchInput'
import PagingListView from '../../components/PagingListView'
import {BasicGoodsCard} from './component'
import Affix from '../../components/Affix'
const prefixCls = 'shop-home-view'

class Sidebar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedList: []
    }
  }

  onSelected = (e) => {
    const value = e.target.innerText;
    let itemArray = [].concat(this.state.selectedList)
    itemArray.indexOf(value) === -1 ?
      itemArray.push(value) :
      itemArray = itemArray.filter(item => item !== value)
    this.setState({
      selectedList: itemArray
    })
  }

  isSelected = (value) => {
    return this.state.selectedList.indexOf(value) > -1
  }
  onSubmit = () => {
    this.props.onOk()
  }


  render () {
    const isSelected = this.isSelected
    return (
      <div className="filter-2222">
        <div className="item-wrap">
          <span>所属系统:</span>
          <div className="item">
            <div className={isSelected('实名制系统') ? 'se' : ''} onClick={this.onSelected} >实名制系统</div>
            <div className={isSelected('劳务看板系统') ? 'se' : ''}  onClick={this.onSelected} >劳务看板系统</div>
            <div className={isSelected('网络工程') ? 'se' : ''}  onClick={this.onSelected} >网络工程</div>
            <div className={isSelected('好工易软件系统') ? 'se' : ''}  onClick={this.onSelected} >好工易软件系统</div>
            <div className={isSelected('系统辅材') ? 'se' : ''}  onClick={this.onSelected} >系统辅材</div>
          </div>
        </div>
        <div className="item-wrap">
          <span>公司</span>
          <div className="item">
            <div onClick={this.onSelected} >中控集团</div>
            <div onClick={this.onSelected} >中天集团</div>
            <div onClick={this.onSelected} >小米智能</div>
            <div onClick={this.onSelected} >飞利浦</div>
          </div>
        </div>
        <div className="item-wrap">
          <span>品牌</span>
          <div className="item">
            <div onClick={this.onSelected} >中控</div>
            <div onClick={this.onSelected} >中天</div>
            <div onClick={this.onSelected} >小米智能</div>
            <div onClick={this.onSelected} >飞利浦</div>
          </div>
        </div>
        <div className="item-wrap">
          <span>分类：</span>
          <div className="item">
            <div onClick={this.onSelected} >硬件</div>
            <div onClick={this.onSelected} >软件</div>
          </div>
        </div>
        <div className="item-wrap">
          <span>tag：</span>
          <div className="item">
            <div>硬件</div>
            <div>软件</div>
          </div>
        </div>
        <div className="btns">
          <div onClick={this.props.onCancel} className="right">关闭</div>
          <div onClick={() => {this.setState({selectedList : []})}} className="left">重置</div>
          <div onClick={this.onSubmit} className="right">确定</div>
        </div>
      </div>
    )
  }
};


 export default function HomeView(props) {
  const {
    onSearch,
    queryGoodsList,
    toTop,
    onAdd,
    toShopList,
    onFilter,
    openFilter,
    onOk
  } = props
    return (
    <Main title={props.title} location={props.location}>
        <Drawer
          className="my-drawer"
          style={{ minHeight: document.documentElement.clientHeight }}
          contentStyle={{ color: '#A6A6A6', textAlign: 'center'}}
          sidebarStyle={{ border: '1px solid #ddd' }}
          sidebar={<Sidebar
            onOk={onOk}
            onCancel={onFilter}
          />}
          position="right"
          open={openFilter}
        >
          <div className={prefixCls}>
          <div className={`${prefixCls}-filter`}>
            <SearchInput onSearch={onSearch} placeholder="请输入产品名称"/>
            <span onClick={onFilter}>筛选</span>
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
        </Drawer>
    </Main>
    );
  }


