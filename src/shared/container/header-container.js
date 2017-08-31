// @flow

import { connect } from 'react-redux'
import Header from '../component/header'

const mapStateToProps = (state) => {
	const eventList = state.events.get('eventList').toJS()
	const selectedEventId = state.events.get('selectedEventId')
	let eventTitle
	if (eventList && selectedEventId) {
		Object.values(eventList).forEach((events) => {
			events.forEach((event) => {
				if (event.id === selectedEventId) {
					eventTitle = event.attributes.title
				}
			})
		})
	}
	return {
		eventList,
		eventTitle,
		selectedEventId,
	}
}

export default connect(mapStateToProps)(Header)
