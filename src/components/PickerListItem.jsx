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
      require,
      ...others
    } = this.props

    const cls = classNames({
      [prefixCls]: true,
      [className]: className,
      ['input-require']: require
    })
    return (
      <Picker
        data={data}
        cols={1}
        value={value ? [value] : []}
        onChange={(v) => {onChange(v[0])}}
        extra={extra}
        title={title}
      >
        <div>
          <InputItem
            className={cls}
            editable={false}
            value={data ? data.filter(item => item.value === value)[0].label : ''}
            extra={<Icon size="sm" type="right"/>}
          >
            {children}
          </InputItem>
        </div>
      </Picker>
    )
  }
}

