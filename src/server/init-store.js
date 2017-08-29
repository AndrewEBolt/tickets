// @flow

import Immutable from 'immutable'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import eventReducer from '../shared/reducer/event'

const initStore = (plainPartialState: ?Object) => {
	const preloadedState = plainPartialState ? {} : undefined

	if (plainPartialState && plainPartialState.hello) {
		// flow-disable-next-line
		preloadedState.hello = eventReducer(undefined, {})
			.merge(Immutable.fromJS(plainPartialState.events))
	}

	return createStore(combineReducers({ events: eventReducer }),
		preloadedState, applyMiddleware(thunkMiddleware))
}

export default initStore
