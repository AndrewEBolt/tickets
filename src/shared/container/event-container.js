// @flow

import { connect } from 'react-redux'

import { setEventId } from '../action/event'
import Event from '../component/event'

const mapStateToProps = state => ({
	selectedEventId: state.events.get('selectedEventId'),
})

const mapDispatchToProps = dispatch => ({
	setEventId: (eventId) => { dispatch(setEventId(eventId)) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Event)
