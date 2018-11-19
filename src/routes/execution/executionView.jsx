import React from 'react';
import './executionView.less';
import Main from '../../layouts/main.jsx';
import classNames from 'classnames';
import ExecutionEchart from '../../components/executionEchart'
const prefixCls = 'execution-view74aa1b'




export default function ExecutionView(props) {
  const {
    location,
    title,
    data
  } = props;

  const cls = classNames({
    [prefixCls]: true,
  });
  return (
    <Main location={location} title={title}>
      <div className={cls}>
        {
          data && data.length > 0 && data.map((item,index) => <ExecutionEchart key={item.name} {...item}/>)
        }
      </div>
    </Main>
  );
}
