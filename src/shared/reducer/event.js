import Immutable from 'immutable'

const initalState = Immutable.fromJS({
	events: [],
})

const eventReducer = (state = initalState, action) => {
	return state
}

export default eventReducer
