// @flow

import { connect } from 'react-redux'

import { fetchEvents } from '../action/event'
import Sidebar from '../component/sidebar'

const mapStateToProps = state => ({
	eventList: state.events.get('eventList').toJS(),
})

const mapDispatchToProps = dispatch => ({
	fetchEvents: () => { dispatch(fetchEvents()) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
