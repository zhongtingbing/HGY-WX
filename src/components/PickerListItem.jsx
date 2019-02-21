import React from 'react'
import classNames from 'classnames'
import {Picker, InputItem, Icon} from 'antd-mobile'
import './PickerListItem.less'

const prefixCls = 'picker-list-item'

// const ListItem = List.Item


export default class PickerListItem extends React.PureComponent {
  onChange = (val) => {
    this.props.onChange(val[0])
  }
  render() {
    const {
      children,
      value,
      onChange,
      data,
      className,
      placeholder,
      extra,
      title,
      style,
      ...others
    } = this.props

    const cls = classNames({
      [prefixCls]: true,
      [className]: className
    })

    return (
      <Picker
        data={data}
        cols={1}
        value={value?[value]:[]}
        onChange={this.onChange}
        extra={extra}
        title={title}
      >
        <div>
          <InputItem
            className={cls}
            editable={false}
            value={value}
            extra={<Icon size="sm" type="right"/>}
          >
            {children}
          </InputItem>
        </div>
      </Picker>
    )
  }
}
