import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import thunkMiddleware from 'redux-thunk'
import reducers from './state/reducers'
import Pages from './pages'

const history = createHistory()

const store = createStore(
  reducers,
  applyMiddleware(
    thunkMiddleware
  )
)

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Pages />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
