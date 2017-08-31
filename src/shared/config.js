// @flow

export const WEB_PORT = process.env.PORT || 8000
export const STATIC_PATH = '/static'
export const APP_NAME = 'tickets'

export const WDS_PORT = 7000

export const APP_CONTAINER_CLASS = 'js-app'
export const APP_CONTAINER_SELECTOR = `.${APP_CONTAINER_CLASS}`
export const API_BASE_URL = 'https://api.picatic.com/v2'

/*

I am assuming here that the below values would be retrieved through a login process
for a real web app.
Here I am setting them as a config value, but if they are secret and were to be hardcoded
in a production app, then all picatic api calls would have to be made server side

*/

export const API_KEY = 'sk_live_f1090aeab90d8ed651128084abf4684f'
export const USER_ID = '575569'
