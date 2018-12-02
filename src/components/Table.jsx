/**
 * Created by jdf-zhongtingbing on 2017/6/6.
 */
import React from 'react';
import classNames from 'classnames';
import './Table.less'

const prefixCls = 'basic-table-23';

export default class Table extends React.PureComponent{

  constructor(props){
    super(props)
    this.state={
    }
  }
  componentDidMount() {
  }

  render(){
    const{
      className,
      data,
      kVMap,
    }=this.props
    const cls = classNames({
      [prefixCls]: true,
      [className]: className
    })
    return (
      <div className={cls}>
        <div className={`${cls}-title`}>
          {
            kVMap.map((o, index) =>{
              return (
                <span style={{width: o.width ? `${o.width}px` : '60px', textAlign:'center'}} key={JSON.stringify(o)+index}>{o.desc}</span>
              )
            })
          }
        </div>
        {
          data.map((item, index) => (
            <div key={index} className={`${index % 2 === 1 ? ' even' : ''} table-item`}>
              {
                kVMap.map((o, _index) =>{
                  return <div style={{width: o.width ? `${o.width}px` : '60px', textAlign:'center'}} key={_index}>{item[o._key]}</div>
                })
              }
            </div>
          ))
        }
      </div>
    )
  }

}




