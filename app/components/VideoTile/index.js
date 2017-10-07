import './styles.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

export default ({ data }) => (
  <div className='video-tile'>
    <Link to={`/video/${data.id.videoId}`}>
      <h3>{data.snippet.title}</h3>
    </Link>
  </div>
)
