import './styles.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { signIn } from '../../state/actions/videos';

@connect(
  state => ({

  }),
  dispatch => ({
    signIn: () => {
      dispatch(signIn())
    }
  })
)
export default class Authorize extends Component {

  render() {
    const { signIn } = this.props

    return (
      <div className='authorize'>
        <button onClick={() => signIn(true)}>Authorize Youtube</button>
      </div>
    )
  }
}
