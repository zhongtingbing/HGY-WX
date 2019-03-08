import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactLoading from 'react-loading';

import Header from './header.jsx';
import Footer from './footer.jsx';

import './main.less';

function Main({
  children,className,loading,title,location,showLeft,rightContent
}) {
  const cls = classNames({
    'main-123': true,
    [className]: className,
  });

  return (
    <div className={cls}>
      <Header title={title} showLeft={showLeft} rightContent = {rightContent} location={location} />
      <div className="main-body">
        {
          loading ?
            <div className="main-loading">
              <ReactLoading type="spin"/>
            </div>
            :
            children
        }
      </div>

    </div>
  );
}

Main.propTypes = {
  children: PropTypes.element.isRequired,
};

Main.defaultProps = {
  loading: false
};

export default Main;
