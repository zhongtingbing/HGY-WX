/**
 * Created by jdf-zhongtingbing on 2017/6/6.
 */
import React from 'react';
import classNames from 'classnames';
import {Icon} from 'antd-mobile';
import search1 from '../assets/image/search1.png';
import './SearchInput.less'

const prefixCls = 'search-input-123';

export default class SearchInput extends React.PureComponent{

  constructor(props){
    super(props)
    this.state={
      value: ''
    }
  }
  componentDidMount() {
  }

  valueChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  EnterDown=(e)=>{
    if(e.keyCode===13){
      this.props.onSearch(this.state.value)
    }
  }


  render(){
    const{
      className,
      onSearch,
      placeholder,
      ...other
    }=this.props
    const {value} = this.state
    const cls = classNames({
      [prefixCls]: true,
      [className]: className
    })
    return (
      <div className={`${prefixCls}`}>
        <input className={`${prefixCls}-input`} onKeyDown={this.EnterDown}  type="text" value={value}  onChange={this.valueChange} placeholder={placeholder} />
        <img src={search1} className={`${prefixCls}-img`}  onClick={() => {onSearch(value)}}/>
      </div>
    )
  }
}

SearchInput.defaultProps = {
  onSearch: ()=>{},
  onChange: ()=>{}
}




