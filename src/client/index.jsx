// @flow

import 'babel-polyfill'
import Immutable from 'immutable'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { BrowserRouter } from 'react-router-dom'

import App from '../shared/app'
import { APP_CONTAINER_SELECTOR } from '../shared/config'
import { isProd } from '../shared/util'
import eventReducer from '../shared/reducer/event'

import '../styles/core.scss'


/* eslint-disable no-underscore-dangle */
const composeEnhancers = (isProd ? null : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
const preloadedState = window.__PRELOADED_STATE__
/* eslint-enable no-underscore-dangle */


const store = createStore(combineReducers({ events: eventReducer }),
	{ events: Immutable.fromJS(preloadedState.events) },
	composeEnhancers(applyMiddleware(thunkMiddleware)),
)

const rootEl = document.querySelector(APP_CONTAINER_SELECTOR)

const wrapApp = (AppComponent, reduxStore) => (
	<Provider store={reduxStore}>
		<BrowserRouter>
			<AppComponent />
		</BrowserRouter>
	</Provider>
)

ReactDOM.render(wrapApp(App, store), rootEl)
