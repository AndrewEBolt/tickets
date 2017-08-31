// @flow

import React from 'react'
import Header from '../container/header-container'
import Sidebar from '../container/sidebar-container'

type Props = {
	children: React.Node,
};

const CoreLayout = (props: Props) => (
	<div className="page-container flex flex-column bg-white">
		<Header />
		<Sidebar />
		<div className="fixed bottom-0 right-0 content-outer">
			{props.children}
		</div>
	</div>
)

export default CoreLayout
