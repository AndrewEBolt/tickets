// @flow

import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
	height: 100%
`

const HomePage = () => (
	<Wrapper className="flex flex-column items-center justify-center">
		<h2>No Event Selected</h2>
		<p className="my0">Select and event to edit ticket details</p>
	</Wrapper>
)

export default HomePage
