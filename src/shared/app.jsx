import React from 'react'
import { Route } from 'react-router-dom'
import { Switch } from 'react-router'
import Helmet from 'react-helmet'
import { APP_NAME } from './config'
import CoreLayout from './layout/core-layout'
import { HOME_PAGE_ROUTE } from './routes'
import HomePage from './component/page/home'

const App = () => (
	<div>
		<Helmet titleTemplate={`%s | ${APP_NAME}`} defaultTitle={APP_NAME} />
		<CoreLayout>
			<Switch>
				<Route exact path={HOME_PAGE_ROUTE} render={() => <HomePage />} />
			</Switch>
		</CoreLayout>
	</div>
)

export default App
