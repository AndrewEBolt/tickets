import Immutable from 'immutable'
import {
	FETCH_TICKETS_REQUEST,
	FETCH_TICKETS_SUCCESS,
	FETCH_TICKETS_FAILURE,
	UPDATE_TICKET_SUCCESS,
} from '../action/ticket'

const initialState = Immutable.fromJS({
	loading: false,
	ticketList: [],
})

const updateTicketInList = (ticketList, newTicket) => {
	const updatedTicketList = []
	ticketList.forEach((ticket) => {
		if (ticket.id === newTicket.id) {
			updatedTicketList.push(newTicket)
		} else {
			updatedTicketList.push(ticket)
		}
	})
	return Immutable.fromJS(updatedTicketList)
}

const ticketReducer = (state = initialState, action) => {
	switch (action.type) {
	case (FETCH_TICKETS_REQUEST):
		return state.set('loading', true)
	case (FETCH_TICKETS_SUCCESS):
		return state
			.set('loading', false)
			.set('ticketList', Immutable.fromJS(action.payload))
	case (FETCH_TICKETS_FAILURE):
		return state.set('loading', false)
	case (UPDATE_TICKET_SUCCESS):
		return state.set('ticketList', updateTicketInList(state.get('ticketList').toJS(), action.payload))
	default:
		return state
	}
}

export default ticketReducer
