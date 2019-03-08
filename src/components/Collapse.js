import React, { Component } from 'react';
import PropTypes from 'prop-types';

const initialStyle = {
  willChange: 'height',
  height: '0px',
  overflow: 'hidden',
};

const _requestAnimationFrame = (func) => {
  window.requestAnimationFrame(func);
};

class Collapse extends Component {
  constructor() {
    super();
    this.onTransitionEnd = this.onTransitionEnd.bind(this);
    this.setExpanded = this.setExpanded.bind(this);
    this.setCollapsed = this.setCollapsed.bind(this);
  }

  componentDidMount() {
    if (this.content && this.props.isOpen) {
      this.setExpanded();
    } else if (this.content && !this.props.isOpen) {
      this.setCollapsed()
    }

    this.setContentStyleProperty('transition', 'height 250ms cubic-bezier(.4, 0, .2, 1)');
    this.setContentStyleProperty('-webkit-transition', 'height 250ms cubic-bezier(.4, 0, .2, 1)');

    // this.content.className = `${this.props.className} ${prefixCls}`
    
  }

  componentWillReceiveProps(nextProps) {
    if (!this.content) {
      return;
    }

    // this.setContentStyleProperty('transition', `height 250ms cubic-bezier(0.4, 0, 0.2, 1)`);
    // this.setContentStyleProperty('-webkit-transition', `height 250ms cubic-bezier(0.4, 0, 0.2, 1)`);
    // expand
    if (!this.props.isOpen && nextProps.isOpen) {
      // have the element transition to the height of its inner content
      setTimeout(() =>  {
        this.setContentStyleProperty('height', `${this.content.scrollHeight}px`);
        // alert(JSON.stringify(this.content.scrollHeight))
      },0)
      // alert(JSON.stringify(this.content.scrollHeight))
    }

    // collapse
    if (this.props.isOpen && !nextProps.isOpen) {
      // explicitly set the element's height to its current pixel height, so we
      // aren't transitioning out of 'auto'
      this.setContentStyleProperty('height', `${this.content.scrollHeight}px`);
      _requestAnimationFrame(() => {
        // "pausing" the JavaScript execution to let the rendering threads catch up
        // http://stackoverflow.com/questions/779379/why-is-settimeoutfn-0-sometimes-useful
        setTimeout(() => {
          this.setCollapsed();
        }, 0);
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.children !== nextProps.children
  }
  
  componentWillUnmount () {
    this.setCollapsed()
  }
  

  onTransitionEnd(e) {
    if (this.props.isOpen) {
      this.setExpanded();
    }

    if (this.props.onRest && e.target === this.content && e.propertyName === 'height') {
      this.props.onRest();
    }
  }

  setContentStyleProperty(property, value) {
    this.content.style[property] = value;
  }

  setCollapsed() {
    this.setContentStyleProperty('height', '0px');
    this.setContentStyleProperty('overflow', 'hidden');
  }

  setExpanded() {
    // this.setContentStyleProperty('transition', 'none');
    // this.setContentStyleProperty('-webkit-transition', 'none');
    // this.setContentStyleProperty('height', 'auto');
    // this.setContentStyleProperty('overflow', 'visible');
  }

  render() {

    return (
      <div
        ref={(el) => { this.content = el; }}
        className={`${this.props.className}`}
        onTransitionEnd={this.onTransitionEnd}
        style={initialStyle}
      >
        {this.props.children && this.props.children}
      </div>
    );
  }
}

Collapse.defaultProps = {
  isOpen: false,
  className: null,
  children: null,
  onRest: null,
};

Collapse.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  className: PropTypes.string,
  onRest: PropTypes.func,
};

export default Collapse;