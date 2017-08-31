// @flow

import * as React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

import { MdChevronRight } from 'react-icons/lib/md'
import IconMd from './icon-md'


type Props = {
	attributes: Object,
	id: string,
	setEventId: Function,
};

const Event = (props: Props) => (
	<Link
		to={`/events/${props.id}`}
		className="flex items-center justify-between small muted py2 border-gray border-bottom black text-decoration-none"
		onClick={() => props.setEventId(props.id)}
	>
		<div className="flex flex-column">
			<div>{props.attributes.title}</div>
			<div className="x-small">{moment(props.attributes.startDate).format('MMM Do YYYY')}</div>
		</div>
		<IconMd><MdChevronRight /></IconMd>
	</Link>
)


export default Event
