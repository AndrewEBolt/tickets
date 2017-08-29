// @flow

import { connect } from 'react-redux'

import Sidebar from '../component/sidebar'

const mapStateToProps = state => ({
	events: state.events.get('events').toJS(),
})

// const mapDispatchToProps = dispatch => ({
// removeFromCart: (index) => { dispatch(removeFromCart(index)) },
// })

export default connect(mapStateToProps)(Sidebar)
