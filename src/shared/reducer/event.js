import Immutable from 'immutable'
import {
	FETCH_EVENTS_REQUEST,
	FETCH_EVENTS_SUCCESS,
	FETCH_EVENTS_FAILURE,
	SET_EVENT_ID,
} from '../action/event'

const initalState = Immutable.fromJS({
	loading: false,
	eventList: {},
	selectedEventId: null,
})

const categorizeEvents = (eventList) => {
	const categorizedEvents = {}
	eventList.reduce((acc, event) => {
		const status = event.attributes.status
		if (acc[status]) {
			return acc[status].push(event)
		}
		acc[status] = [event]
		return acc
	}, categorizedEvents)
	return Immutable.fromJS(categorizedEvents)
}

const eventReducer = (state = initalState, action) => {
	switch (action.type) {
	case (FETCH_EVENTS_REQUEST):
		return state.set('loading', true)
	case (FETCH_EVENTS_SUCCESS):
		return state
			.set('loading', false)
			.set('eventList', categorizeEvents(action.payload))
	case (FETCH_EVENTS_FAILURE):
		return state.set('loading', false)
	case (SET_EVENT_ID):
		return state.set('selectedEventId', action.payload)
	default:
		return state
	}
}

export default eventReducer
