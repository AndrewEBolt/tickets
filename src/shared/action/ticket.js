import { createAction } from 'redux-actions'
import {
	getReq,
	patchReq,
} from '../libs/api-base'

export const FETCH_TICKETS_REQUEST = 'FETCH_TICKETS_REQUEST'
export const FETCH_TICKETS_SUCCESS = 'FETCH_TICKETS_SUCCESS'
export const FETCH_TICKETS_FAILURE = 'FETCH_TICKETS_FAILURE'
export const UPDATE_TICKET_REQUEST = 'UPDATE_TICKET_REQUEST'
export const UPDATE_TICKET_SUCCESS = 'UPDATE_TICKET_SUCCESS'
export const UPDATE_TICKET_FAILURE = 'UPDATE_TICKET_FAILURE'

export const fetchTicketsRequest = createAction(FETCH_TICKETS_REQUEST)
export const fetchTicketsSuccess = createAction(FETCH_TICKETS_SUCCESS)
export const fetchTicketsFailure = createAction(FETCH_TICKETS_FAILURE)
export const updateTicketRequest = createAction(UPDATE_TICKET_REQUEST)
export const updateTicketSuccess = createAction(UPDATE_TICKET_SUCCESS)
export const updateTicketFailure = createAction(UPDATE_TICKET_FAILURE)

export const fetchTickets = eventId => (dispatch) => {
	dispatch(fetchTicketsRequest())
	const options = {
		qs: {
			filter: {
				event_id: eventId,
			},
			page: {
				limit: 10,
				offset: 0,
			},
		},
	}
	return getReq('/ticket_price', options)
		.then((res) => {
			if (res.data) {
				dispatch(fetchTicketsSuccess(res.data))
			} else {
				dispatch(fetchTicketsFailure())
			}
		})
		.catch(() => {
			dispatch(fetchTicketsFailure())
		})
}

export const updateTicket = (ticketId, ticketData) => (dispatch) => {
	dispatch(updateTicketRequest())
	const data = {
		data: {
			attributes: ticketData,
			id: ticketId,
			type: 'ticket_price',
		},
	}
	return patchReq(`/ticket_price/${ticketId}`, data)
		.then((res) => {
			if (res.data) {
				dispatch(updateTicketSuccess(res.data))
			} else {
				dispatch(updateTicketFailure)
			}
		})
		.catch(() => {
			dispatch(updateTicketFailure)
		})
}
