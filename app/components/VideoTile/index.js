import './styles.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

export default ({ data }) => (
  <div className='video-tile'>
    <Link to={`/video/${data.id.videoId}`}>
      <div className='tile-image'>
        <img src={data.snippet.thumbnails.default.url} />
      </div>
      <div className='tile-text'>
        <h3>{data.snippet.title}</h3>
        <p>{data.snippet.description}</p>
      </div>
    </Link>
  </div>
)
