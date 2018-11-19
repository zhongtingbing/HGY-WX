import React from 'react';
import PropTypes from 'prop-types';
import {
  connect
} from 'dva';


import styles from './page02.less';

import Main from '../layouts/main.jsx';

var a =option = {
  legend: {
    orient: 'vertical',
    x: 'left',
    data:['政治风险','廉政风险','渎职风险','绩效风险']
  },
  series: [
    {
      name:'风险预警',
      type:'pie',
      selectedMode: 'single',
      radius: [0, '30%'],

      label: {
        normal: {
          position : 'inner',
          distance : 0.1
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      data:[
        {value:25, name:'集团重大风险'}
      ]
    },
    {
      name:'访问来源',
      type:'pie',
      radius: ['30%', '55%'],

      data:[
        {value:25, name:'政治风险'},
        {value:25, name:'廉政风险'},
        {value:25, name:'渎职风险'},
        {value:25, name:'绩效风险'}
      ]
    }
  ]
};


function Page02({
  location
}) {
  return (
    <Main location={location}>
      <div className={styles.normal}>
      </div>
    </Main>
  );
}

Page02.propTypes = {
  location: PropTypes.object.isRequired
};

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Page02);
