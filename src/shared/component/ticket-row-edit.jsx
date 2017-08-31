// @flow

import * as React from 'react'

type Props = {
	attributes: {
		name: string,
		price: string,
		quantity: number,
		status: string,
	},
	id: string,
	saveTicketMode: Function,
	updateTicket: Function,
}

type State = {
	name: string,
	price: string,
	quantity: number,
	status: string,
};

class TicketRowEdit extends React.Component<Props, State> {
	constructor(props) {
		super(props)
		this.handleClick = this.handleClick.bind(this)
		this.updateFormField = this.updateFormField.bind(this)
	}

	state = {
		name: this.props.attributes.name,
		price: this.props.attributes.price,
		quantity: this.props.attributes.quantity,
		status: this.props.attributes.status,
	}

	handleClick() {
		this.props.updateTicket(this.props.id, this.state)
		this.props.saveTicketMode()
	}

	updateFormField(field: string, val: any) {
		this.setState({ [field]: val })
	}

	render() {
		return (
			<tr className="border-top border-gray">
				<td className="px2">
					<input type="text" value={this.state.name} onChange={(event) => { this.updateFormField('name', event.target.value) }} />
				</td>
				<td className="py2 muted">
					<input type="text" value={this.state.price} onChange={(event) => { this.updateFormField('price', event.target.value) }} />
				</td>
				<td className="py2 muted">
					<input type="number" value={this.state.quantity} onChange={(event) => { this.updateFormField('quantity', parseInt(event.target.value, 10)) }} />
				</td>
				<td className="py2 muted">
					<select name="select" value={this.state.status} onChange={(event) => { this.updateFormField('status', event.target.value) }}>
						<option value="open">Open</option>
						<option value="closed">Closed</option>
						<option value="hidden">Hidden</option>
					</select>
				</td>
				<td className="py2">
					<button className="btn btn-primary bg-green regular" onClick={this.handleClick}>Save</button>
				</td>
			</tr>
		)
	}
}

export default TicketRowEdit
