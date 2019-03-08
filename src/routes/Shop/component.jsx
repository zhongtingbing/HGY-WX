import React from 'react';
import './component.less'
class BasicGoodsCard extends React.Component{
  render() {
    const {
      imgUrl,
      onAdd,
      rowData,
    } = this.props
    const {
      name,
      version,
      price,
      brand,
    } = rowData
  return (
    <div className="goods-card">
      <img src={imgUrl}/>
      <div className="right">
        <div className="name">{name}</div>
        <div>
          {`品牌：${brand}`}
        </div>
        <div>
          {`型号：${version}`}
        </div>
        <div>
          <span className="price">{`￥${price}`}</span>
          <span style={{fontSize: '10px'}}>{`(临界价:${3000})`}</span>
        </div>
        <div onClick={() => {onAdd(rowData)}} className="btn">加入报价单</div>
      </div>
    </div>
  )
}
}

BasicGoodsCard.defaultProps = {
  imgUrl: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
  onAdd: () => {},
  isList: false
}


class BasicGoodsCard1 extends React.Component{
  render() {
    const {
      imgUrl,
      rowData,
      onDiscountChange,
      onDown,
      onPlus,
      onCheck
    } = this.props
    const {
      name,
      version,
      price,
      brand,
      count,
      checked
    } = rowData
    console.log(checked)
    return (
      <div className="goods-card-1">
        <div onClick={() => {onCheck(rowData)}} className="goods-card-1-left">
          <div className={checked ? 'inner' : ''}/>
        </div>
        <div className="goods-card-1-right">
          <div className="top">
            <img src={imgUrl}/>
            <div className="right">
              <div className="name">{name}</div>
              <div>
                {`品牌：${brand}`}
              </div>
              <div>
                {`型号：${version}`}
              </div>
              <div>
                <span className="price">{`￥${price}`}</span>
                <span style={{fontSize: '10px'}}>{`(临界价:${3000})`}</span>
              </div>
              <div className="count-edit">
                <div onClick={() => {onDown(rowData)}} className="down">-</div>
                <div className="count">{count || '0'}</div>
                <div onClick={() => {onPlus(rowData)}} className="plus">+</div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <span>优惠金额：</span>
            <input onChange={(e)=> {onDiscountChange(rowData, e.target.value)}} type="number"/>
          </div>
        </div>
      </div>
    )
  }
}

BasicGoodsCard1.defaultProps = {
  imgUrl: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
}




export default {
  BasicGoodsCard,
  BasicGoodsCard1
}
