import 'isomorphic-fetch'
import qs from 'qs'
import humps from 'humps'
import {
	API_BASE_URL,
	API_KEY,
} from '../config'

const headers = {
	Authorization: `Bearer ${API_KEY}`,
	Accept: 'application/json',
	'Content-type': 'application/json' //eslint-disable-line
}

const camelizeKeys = (response) => {
	// This will change all server responses from snake_case to camelCase
	return Promise.resolve(humps.camelizeKeys(response))
}

const responseError = (response) => {
	const error = new Error(response.statusText)
	error.response = response
	throw error
}

const checkStatus = (response) => {
	if (response.status >= 200 && response.status < 300) {
		return response
	}
	return responseError(response)
}

const parseJSON = (response) => {
	const contentType = response.headers.get('content-type')
	if (contentType && contentType.indexOf('application/vnd.api+json; charset=utf-8') !== -1) {
		return response.json()
	}
	return true
}

export const getReq = (path, options) => {
	let url = `${API_BASE_URL}${path}`
	if (options.qs) {
		url += `?${qs.stringify(options.qs, { encode: false })}`
	}
	return fetch(url, { headers })
		.then(checkStatus)
		.then(parseJSON)
		.then(camelizeKeys)
}

export const patchReq = (path, data) => {
	const url = `${API_BASE_URL}${path}`
	return fetch(url, {
		method: 'PATCH',
		headers,
		body: JSON.stringify(data),
	})
		.then(checkStatus)
		.then(parseJSON)
		.then(camelizeKeys)
}
