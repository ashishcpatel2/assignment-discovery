import './styles.scss'

import React from 'react'
import { Route } from 'react-router'

import Home from './Home'
import Video from './Video'

export default () => (
  <div>
      <Route exact path='/' component={Home} />
      <Route path='/video/:id' component={Video} />
  </div>
)
