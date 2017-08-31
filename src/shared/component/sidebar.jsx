// @flow

import * as React from 'react'

import EventCategory from './event-category'

type Props = {
	eventCategories: Array<string>,
	eventList: Object,
	fetchEvents: Function,
};

class Sidebar extends React.Component<Props, void> {
	static defaultProps = {
		eventCategories: [
			'live',
			'draft',
			'closed',
		],
	}

	componentDidMount() {
		this.props.fetchEvents()
	}

	render() {
		const displayEventCategories = categoryName => (
			<EventCategory
				key={categoryName}
				categoryName={categoryName === 'live' ? 'active' : categoryName}
				eventList={this.props.eventList}
				title={categoryName}
			/>
		)

		return (<div className="sidebar fixed top-0 bottom-0 z4">
			<h3 className="px2 py2 regular white">Select an Event</h3>
			<div className="px2 pt3">
				{ this.props.eventCategories.map(displayEventCategories) }
			</div>
		</div>
		)
	}
}

export default Sidebar
