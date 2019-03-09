import React from 'react'
import classNames from 'classnames'
import { Icon, Button} from 'antd-mobile'
import { routerRedux } from 'dva/router'
import Zmage from 'react-zmage'
import TIMG from '../assets/image/icon_pm2.5.png'
import './CommonCards.less'

 class GJJLCard extends React.PureComponent {
  render() {
    const {
      className,

    } = this.props

    const cls = classNames({
      'gjjd-card': true,
      [className]: className,
    })
    return (
      <div className={cls}>
        <div>
          <span></span>
          <span>{'去项目上看了场地，客户意向很强'}</span>
        </div>
        <div>
          <span>跟进时间：</span>
          <span>2018-10-10</span>
        </div>
        <div>
          <span>对接人：</span>
          <span>{'张经理'}</span>
        </div>
        <div>
          <span>跟进状态：</span>
          <span>{'跟进中'}</span>
        </div>
        <div>
          <span>跟进方式：</span>
          <span>{'上门拜访'}</span>
        </div>
      </div>
    )
  }
}



class DJRCard extends React.PureComponent {
  render() {
    const {
      className,
    } = this.props

    const cls = classNames({
      'djr-card': true,
      [className]: className,
    })
    return (
      <div className={cls}>
       C
        <div>
          <span>电话</span>
          <span>2018-10-10</span>
        </div>
        <div>
          <span>职位</span>
          <span>{'张经理'}</span>
        </div>
        <div>
          <span>负责业务：</span>
          <span>{'跟进中'}</span>
        </div>
        <div>
          <span>微信：</span>
          <span>{'上门拜访'}</span>
        </div>
        <div>
          <span>微信：</span>
          <span>{'上门拜访'}</span>
        </div>
        <div>
          <span>名片附件：</span>
          <span>{'上门拜访'}</span>
        </div>
        <div>
          <span>名片附件：</span>
          <Zmage src={TIMG}/>
        </div>

      </div>
    )
  }
}

class BJDCard extends React.PureComponent {
  render() {
    const {
      className,
    } = this.props

    const cls = classNames({
      'bjd-card': true,
      [className]: className,
    })
    return (
      <div className={cls}>
        <Zmage src={TIMG}/>
        <span>2018-10-10 12:09</span>
        <Button type="ghost" size="small">点击下载</Button>
      </div>
    )
  }
}

class HTCard extends React.PureComponent {
  toHTDetail = (state) => {
    _dispatch(routerRedux.push({
      pathname:'/contract-detail',
      state,
    }))
  }
  render() {
    const {
      className,
    } = this.props

    const cls = classNames({
      'ht-card': true,
      [className]: className,
    })

    return (
      <div onClick={this.toHTDetail} className={cls}>
        <div>
          <span>合同名称：</span>
          <span>{'理想之城'}</span>
        </div>
        <div>
          <span>创建时间：</span>
          <span>{'2019-01-01'}</span>
        </div>
        <div>
          <span>合同编号：</span>
          <span>{'l-23131'}</span>
        </div>
        <div>
          <span>合同类型：</span>
          <span>{'集成商'}</span>
        </div>
      </div>
    )
  }
}


class DDCard extends React.PureComponent {
  toDdDetail = (state) => {
    _dispatch(routerRedux.push({
      pathname:'/contract-detail',
      state,
    }))
  }
  render() {
    const {
      className,
    } = this.props

    const cls = classNames({
      'dd-card': true,
      [className]: className,
    })

    return (
      <div onClick={this.toDdDetail} className={cls}>
        <div>
          <span> 订单编号：</span>
          <span>{'理想之城'}</span>
        </div>
        <div>
          <span>创建时间：</span>
          <span>{'2019-01-01'}</span>
        </div>
        <div>
          <span>订单状态：</span>
          <span>{'l-23131'}</span>
        </div>
      </div>
    )
  }
}

class XMKTSQCard extends React.PureComponent {
  render() {
    const {
      className,
    } = this.props

    const cls = classNames({
      'xmktsq-card': true,
      [className]: className,
    })

    return (
      <div className={cls}>
        <div className={cls}>
          <Zmage src={TIMG}/>
        </div>
      </div>
    )
  }
}

export default {
  GJJLCard,
  DJRCard,
  BJDCard,
  HTCard,
  DDCard,
  XMKTSQCard
}
