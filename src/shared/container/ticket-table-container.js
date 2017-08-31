// @flow

import { connect } from 'react-redux'

import {
	fetchTickets,
	updateTicket,
} from '../action/ticket'
import { setEventId } from '../action/event'
import TicketTable from '../component/ticket-table'

const mapStateToProps = state => ({
	ticketList: state.tickets.get('ticketList').toJS(),
	selectedEventId: state.events.get('selectedEventId'),
})

const mapDispatchToProps = dispatch => ({
	fetchTickets: (eventId: string) => { dispatch(fetchTickets(eventId)) },
	setEventId: (eventId) => { dispatch(setEventId(eventId)) },
	updateTicket: (ticketId, ticketData) => { dispatch(updateTicket(ticketId, ticketData)) },
})

export default connect(mapStateToProps, mapDispatchToProps)(TicketTable)
