import React from 'react'
import ReactDom from 'react-dom'
import classNames from 'classnames'
import {ListView} from 'antd-mobile'
import shallowEqual from 'fbjs/lib/shallowEqual'
import SpinPanel from './SpinPanel'
import Blank from './Blank'
import debounce from 'lodash/debounce'

// import './PagingListViewWithSticky.less'

const prefixCls = 'paging-list-view'


function initState(props, memorize) {

  let ret = {
    data: null,
    loading: false,
    scrollTop: 0,
    pageNo: 1,
    total: null
  }
  return ret
}

function rowHasChanged(r1, r2) {
  return r1 !== r2
}


class PagingListView extends React.Component {
  constructor(props) {
    super(props)

    const initialState = initState(props, props.memorize)

    const {
      data,
      loading,
      scrollTop,
      pageNo,
      total,
      _noTotal,
      _end
    } = initialState

    this.state = {
      data,
      loading,
    }

    this.scrollTop = scrollTop
    this.pageNo = pageNo
    this.total = total

    this._alive = true

    this._noTotal = _noTotal,
    this._end = _end

    this.ds = new ListView.DataSource({ rowHasChanged })
  }

  componentDidMount() {
    // this.makeScroll()
    const {
      data
    } = this.state

    if (!data) {
      this._pullData()
    }

    if (this.scrollTop !==0 ) {
      this.listview.scrollTo(0, this.scrollTop)
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // this.makeScroll()
  }


  componentWillReceiveProps(nextProps) {
    const {
      action,
      pullData,
      extraRequestData,
      pageSize,
      update
    } = this.props


    const needRefresh = !shallowEqual(action, nextProps.action)
      || !shallowEqual(extraRequestData, nextProps.extraRequestData)
      || !shallowEqual(pageSize, nextProps.pageSize)
      || !shallowEqual(update, nextProps.update)
      || !shallowEqual(pullData, nextProps.pullData)

    if (needRefresh) {

      this.scrollTop = 0
      this.pageNo = 1
      this.total = null

      this._alive = true

      this.setState({
        data: null,
        loading: false
      }, () => {
        this._pullData()
      })
    }


  }

  componentWillUnmount() {
    if (this.total !== null || this._noTotal) {

      const {
        pullData,
        extraRequestData
      } = this.props


      // const listElement = ReactDom.findDOMNode(this.listview)

      const key = `${pullData.name}-${JSON.stringify(extraRequestData)}`

      // const scrollTop = listElement ? listElement.scrollTop : (this.scrollTop || 0)

      this._alive = false
    }
  }


  _handleData = (prev=[], newData) => {
    if(!prev) {
      return newData
    } else {
      return [].concat(prev, newData)
    }
  }

  onScroll = () => {
    const listElement = this.listElement

    const scrollTop = listElement ? listElement.scrollTop : (this.scrollTop || 0)

    this.scrollTop = scrollTop
  }

  makeScroll = () => {

    const data = this.state.data

    const total = this.total

    if (data !== null || total !== null) {
      const el = document.getElementById('cnt-wrapper')
      if (el && el.style.cssText !== 'position: inherit; min-height: 100%') {
        el.style.cssText = 'position: inherit; min-height: 100%'
      }
    }
  }


  _pullData = () => {
    const {
      pullData,
      extraRequestData,
      pageSize,
      requestTransform,
      responseTransform,
    } = this.props

    if (this.state.loading) {
      return
    }

    this.setState({
      loading: true
    })

    const idKey = this.reStartId ? {
      reStartId: this.reStartId + 1
    } : {
      startId: (this.pageNo - 1) * pageSize + 1,
    }
    return pullData(requestTransform({
      pageSize,
      ...idKey,
      ...extraRequestData
    }))
      .then(responseTransform)
      .then((res) => {
      console.log(res)
        if (this._alive && shallowEqual(extraRequestData, this.props.extraRequestData)) {
          //适配服务端有筛选的情况
          this.reStartId = res.reStartId

          //兼容处理接口没有返回totalSize的情况
          if (!res.totalSize && res.totalSize !== 0) {
            this._noTotal = true
            this._end = res.list.length < pageSize
          } else {
            this.total = res.totalSize
          }
          this.pageNo++
          setTimeout(() => {
            this.setState({
              loading: false,
              data: this._handleData(this.state.data, res.list)
            })
          },20)
        }
      })
      .catch((e) => {
        console.log(e)
        this.setState({
          loading: false
        })
      })
  }

  _isEnd = () => {
    //兼容处理接口没有返回total的情况
    if (this._noTotal) {
      return this._end
    } else {
      const dataLength = this.state.data.length

      if (this.total !== null) {
        return dataLength >= this.total
      }

      return false
    }
  }

  _onReachEnd = () => {
    console.log('_onReachEnd')
    if (!this._isEnd()) {
      this._pullData()
    }
  }

  _renderFooter = () => {
    const isEnd = this._isEnd()
    const loading = this.state.loading

    const {
      loadingFooterView,
      completedFooterView,
      footerView
    } = this.props

    if (loading) {
      return loadingFooterView
    } else if (isEnd && this.total !== 0) {
      return completedFooterView
    }

    return (
      <div className={`${prefixCls}-footer`} onClick={this._onReachEnd}>
        {footerView}
      </div>
    )
  }



  render() {

    const {
      className,
      style,
      initView,
      emptyView,
      memorize,
      initialListSize,
      ...others
    } = this.props

    const data = this.state.data

    const total = this.total

    const cls = classNames({
      [prefixCls]: true,
      [className]: className
    })


    if (data === null && total === null) {
      return initView
    }

    const dataLength = !!data ? data.length : 0

    if (total === 0 || total === '0' || dataLength === 0) {

      const Header = this.props.renderHeader
      const View = emptyView
      return (
        <div>
          {
            this.props.renderHeader && this.props.renderHeader()
          }
          {
            emptyView
          }
        </div>
      )
    }


    return (
      <ListView
        className={cls}
        style={style}
        ref={(ref) => this.listview = ref}
        dataSource={this.ds.cloneWithRows(data)}
        initialListSize={(memorize && dataLength > 0) ? dataLength : initialListSize}
        onEndReached={this._onReachEnd}
        renderFooter={this._renderFooter}
        onScroll={this.onScroll}
        {...others}
      />
    )
  }
}

PagingListView.defaultProps = {
  style: {height: '100%'},
  pullData: () => {},
  extraRequestData: {},
  pageSize: 5,
  initialListSize: 20,
  onEndReachedThreshold: 500,
  scrollRenderAheadDistance : 500,
  scrollEventThrottle: 20,
  memorize: false,
  requestTransform: (arg) => arg,
  responseTransform: (arg) => arg,
  initView: <SpinPanel className='initView' style={{ height: '100%',position: 'absolute', left: 0 }} type='dots' spinHeight='38px' spinWidth='38px'/>,
  emptyView: <div style={{ height: '48px', textAlign: 'center', paddingTop: '10px', color: '#666'}}>暂无数据</div>,
  loadingFooterView: <SpinPanel className='loadingFooterView' style={{ height: '48px'}} spinHeight='10px' type='dots'/>,
  completedFooterView: <Blank style={{ height: '48px', textAlign: 'center', paddingTop: '10px'}}>加载完毕</Blank>,
  footerView: <Blank style={{ height: '48px', textAlign: 'center', paddingTop: '10px'}}>点击加载更多...</Blank>,
}


export default PagingListView
