// @flow

import React from 'react'
import Header from '../component/header'
import Sidebar from '../component/sidebar'

type Props = {
	children: React.Node,
};

const CoreLayout = (props: Props) => (
	<div className="page-container flex flex-column bg-white">
		<Header />
		<Sidebar />
		<div className="relative content-outer">
			{props.children}
		</div>
	</div>
)

export default CoreLayout
