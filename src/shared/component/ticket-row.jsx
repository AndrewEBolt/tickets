// @flow

import * as React from 'react'

import TicketRowEdit from './ticket-row-edit'

type Props = {
	attributes: {
		name: string,
		price: string,
		quantity: number,
		status: string,
	},
}

type State = {
	edit: boolean,
};

class TicketRow extends React.Component<Props, State> {
	constructor(props) {
		super(props)
		this.saveTicketMode = this.saveTicketMode.bind(this)
		this.toggleEditMode = this.toggleEditMode.bind(this)
	}

	state = {
		edit: false,
	}

	saveTicketMode() {
		this.setState({ edit: false })
	}

	toggleEditMode() {
		this.setState({ edit: true })
	}

	render() {
		if (this.state.edit) {
			return <TicketRowEdit saveTicketMode={this.saveTicketMode} {...this.props} />
		}

		return (
			<tr className="border-top border-gray">
				<td className="px2">{this.props.attributes.name}</td>
				<td className="py2 muted">{`$${this.props.attributes.price}`}</td>
				<td className="py2 muted">{this.props.attributes.quantity}</td>
				<td className="py2 muted">{this.props.attributes.status}</td>
				<td className="py2">
					<button className="btn btn-primary regular" onClick={this.toggleEditMode}>Edit</button>
				</td>
			</tr>
		)
	}
}

export default TicketRow
