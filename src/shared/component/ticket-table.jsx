// @flow

import * as React from 'react'
import styled from 'styled-components'

import TicketRow from './ticket-row'

type Props = {
	fetchTickets: Function,
	setEventId: Function,
	selectedEventId?: string,
	ticketList: Array<Object>,
	updateTicket: Function,
};

const Table = styled.table`
	border-collapse: collapse;
	border-spacing: inherit;
`

class TicketTable extends React.Component<Props, void> {
	componentDidMount() {
		if (this.props.selectedEventId) {
			this.props.fetchTickets(this.props.selectedEventId)
		} else {
			this.props.setEventId(window.location.pathname.split('/')[2])
		}
	}

	componentDidUpdate(prevProps: Props) {
		if (prevProps.selectedEventId !== this.props.selectedEventId) {
			this.props.fetchTickets(this.props.selectedEventId)
		}
	}

	render() {
		const displayTicketRow = ticket => (
			<TicketRow
				key={ticket.id}
				updateTicket={this.props.updateTicket}
				{...ticket}
			/>
		)

		return (<div className="">
			<Table className="col col-12 small px2">
				<thead className="left-align bg-gray">
					<tr>
						<th className="regular muted py2 px2">Ticket Name</th>
						<th className="regular muted py2">Price</th>
						<th className="regular muted py2">Qty</th>
						<th className="regular muted py2">Status</th>
						<th className="py2 px2" />
					</tr>
				</thead>
				<tbody>
					{ this.props.ticketList.map(displayTicketRow) }
				</tbody>
			</Table>
		</div>
		)
	}
}

export default TicketTable
