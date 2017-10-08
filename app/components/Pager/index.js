import './styles.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Homepage extends Component {

  static propTypes = {
    threshold: PropTypes.number,
    handler: PropTypes.func
  }

  static defaultProps = {
    threshold: 200,
    handler: () => {}
  }

  constructor(props) {
    super(props);
    this.state = {
      enabled: true
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll = (event) => {

    const doc = document.documentElement;
    const top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
    const bottom = top + window.innerHeight;

    if (this.state.enabled && (this.pagerDiv.offsetTop - bottom) < this.props.threshold) {
      this.setState({enabled: false});
      this.props.handler(() => this.setState({enabled: true}));
    }
  };

  render () {

    return (
      <div className='pager' ref={div => this.pagerDiv = div}>
        <button>Load more</button>
      </div>
    )
  }
}
