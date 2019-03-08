import React from 'react'
import classNames from 'classnames'
import {DatePicker, InputItem, Ico, List} from 'antd-mobile'
import './PickerDataItem.less'

const prefixCls = 'picker-data-item'

// const ListItem = List.Item


export default class PickerDataItem extends React.PureComponent {
  render() {
    const {
      children,
      value,
      onChange,
      className,
      placeholder,
      extra,
      title,
      style,
      require,
      mode,
      ...others
    } = this.props

    const cls = classNames({
      [prefixCls]: true,
      [className]: className,
      ['input-require']: require
    })
    return (
      <div className={cls}>
        <DatePicker
          mode="date"
          title="Select Date"
          extra="Optional"
          value={value || new Date()}
          onChange={v =>{onChange(v)}}
        >
          <List.Item arrow="horizontal">{children}</List.Item>
        </DatePicker>
      </div>
    )
  }
}

PickerDataItem.defaultProps = {
  mode: 'date'
}
