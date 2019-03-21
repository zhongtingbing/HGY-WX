import React from 'react';
import ContractView from './ContractView'
import { routerRedux } from 'dva/router'
import {
  connect
} from 'dva';

import { testService, querySaleChanceService } from '../../services/query';

class Contract extends React.Component{
  constructor(props){
    super(props)
    this.state={
    }
  }

componentDidMount(){
    this.getData()
}

   getData = () => {
     testService().then(res=>{
     })
    }

  querySaleChance= (param) => {
    return querySaleChanceService(param)
  }

  onSearch = (value) => {
     console.log(value)
  }

  onChange = (o) => {
    this.setState({
      ...o
    })
  }

  toUploadCheckedContract =(record) => {
    this.props.goTo('/upload-contract-file', {...record, title: '上传已签章合同'})
  }

  toAddCounterpart = (record) => {
    this.props.goTo('/add-counterpart', record)
  }

  toEdit = (record) => {
    this.props.goTo('/edit-contract-detail', {...record})
  }

  onAdd = () => {
    this.props.goTo('/customer-edit')
  }

  toDetail = (record) => {
    this.props.goTo('/contract-detail')
  }

  toCreateGoodList = (record) => {
    this.props.goTo('/shop', {...record})
  }

  toEditApplicationTable = (record) => {
    this.props.goTo('/application', {...record})
  }

  render() {
  return (
    <ContractView
      {...this.props}
      {...this.state}
      title="合同管理"
      toUploadCheckedContract={this.toUploadCheckedContract}
      toAddCounterpart={this.toAddCounterpart}
      querySaleChance={this.querySaleChance}
      toEdit={this.toEdit}
      toDetail={this.toDetail}
      toCreateGoodList={this.toCreateGoodList}
      onChange={this.onChange}
      toEditApplicationTable={this.toEditApplicationTable}
    />
  )
}
}

function mapStateToProps() {
  return {};
}

function propsDispatchToMap(dispatch) {
  window._dispatch = dispatch
  return {
    goTo(pathname, state) {
      dispatch(routerRedux.push({
        pathname,
        state,
      }))
    }
  };
}

export default connect(mapStateToProps ,propsDispatchToMap)(Contract);
