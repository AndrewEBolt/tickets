// @flow

import {
	homePage,
	ticketPage,
} from './controller'

import {
	HOME_PAGE_ROUTE,
	TICKET_PAGE_ROUTE,
} from '../shared/routes'

import renderApp from './render-app'

export default (app: Object) => {
	app.get(HOME_PAGE_ROUTE, (req, res) => {
		res.send(renderApp(req.url, homePage()))
	})

	app.get(TICKET_PAGE_ROUTE, (req, res) => {
		res.send(renderApp(req.url, ticketPage()))
	})

	app.get('*', (req, res) => {
		res.status(404).send(renderApp(req.url))
	})

	// eslint-disable-next-line no-unused-vars
	app.use((err, req, res, next) => {
		// eslint-disable-next-line no-console
		console.log(err.stack)
		res.status(500).send('Something went wrong!')
	})
}
