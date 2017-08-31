// @flow

import React from 'react'

type Props = {
	eventTitle?: string,
}

const Header = (props: Props) => (
	<div className="header fixed top-0 left-0 right-0 z3 flex items-center bg-blue">
		<h1 className="h1 pl3 white regular">
			{props.eventTitle}
		</h1>
	</div>
)

export default Header
