// @flow

import compression from 'compression'
import express from 'express'
import { Server } from 'http'
import { config } from 'dotenv'

import routing from './routing'
import { WEB_PORT, STATIC_PATH } from '../shared/config'
import { isProd } from '../shared/util'

config()
const app = express()
// flow-disable-next-line
const http = Server(app)

app.use(compression())
app.use(STATIC_PATH, express.static('dist'))

routing(app)
http.listen(WEB_PORT, () => {
	// eslint-disable-next-line no-console
	console.log(`Server running on port ${WEB_PORT} ${isProd ? '(production)' :
		'(development).\nKeep "yarn dev:wds" running in an other terminal'}.`)
})
