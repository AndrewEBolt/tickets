import { createAction } from 'redux-actions'
import { getReq } from '../libs/api-base'
import { USER_ID } from '../config'

export const FETCH_EVENTS_REQUEST = 'FETCH_EVENTS_REQUEST'
export const FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS'
export const FETCH_EVENTS_FAILURE = 'FETCH_EVENTS_FAILURE'
export const SET_EVENT_ID = 'SET_EVENT_ID'

export const fetchEventsRequest = createAction(FETCH_EVENTS_REQUEST)
export const fetchEventsSuccess = createAction(FETCH_EVENTS_SUCCESS)
export const fetchEventsFailure = createAction(FETCH_EVENTS_FAILURE)
export const setEventId = createAction(SET_EVENT_ID)

export const fetchEvents = () => (dispatch) => {
	dispatch(fetchEventsRequest())
	const options = {
		qs: {
			filter: {
				user_id: USER_ID,
			},
			page: {
				limit: 4,
				offset: 0,
			},
		},
	}
	return getReq('/event', options)
		.then((res) => {
			if (res.data) {
				dispatch(fetchEventsSuccess(res.data))
			} else {
				dispatch(fetchEventsFailure())
			}
		})
		.catch(() => {
			dispatch(fetchEventsFailure())
		})
}
