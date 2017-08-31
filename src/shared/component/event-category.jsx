// @flow

import * as React from 'react'
import humps from 'humps'

import Event from '../container/event-container'

type Props = {
	categoryName: string,
	eventList: Object,
	title: string,
};

const EventCategory = (props: Props) => {
	const displayEvent = event => (
		<Event key={event.id} {...event} />
	)

	return (<div className="pb3">
		<h4 className="h4 regular">{humps.pascalize(props.title, { seperator: ' ' })}</h4>
		{ props.eventList[props.categoryName] && props.eventList[props.categoryName].map(displayEvent) }
	</div>
	)
}

export default EventCategory
