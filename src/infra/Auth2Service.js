import Querystring from 'querystring'
import jwtDecode from 'jwt-decode'
import http, { updateAuthHeader, clearAuthHeader } from './Http';

export default class Auth2Service {

    constructor(authEndpoint, authTokenName) {
        this.authEndpoint = authEndpoint;
        this.authTokenName = authTokenName;
    }

    authenticate(clientId, clientSecret, email, password, callback, errorCallback) {
        let cliAuthData = `${clientId}:${clientSecret}`;

        let authData = Querystring.stringify({
            grant_type: 'password',
            username: email,
            password: password,
            scope: ['write', 'read']
        })

        let reqConfig = {
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'X-Requested-With': 'XMLHttpRequest',
                Authorization: `Basic ${window.btoa(cliAuthData)}`
            }
        }

        http.post(this.authEndpoint, authData, reqConfig).then(response => {
            localStorage.setItem(this.authTokenName, response.data.access_token)
            updateAuthHeader(this.authTokenName, response.data.access_token)
            callback(response)
        }, errorCallback)
    }

    validateSession() {
        if (!localStorage.getItem(this.authTokenName)) {
            return false
        }

        let authData = this.getSessionData()
        const date = new Date(0)
        date.setUTCSeconds(authData.exp)
        if (date.valueOf() > new Date().valueOf()) {
            updateAuthHeader(this.authTokenName);
            return true;
        } else {
            return false;
        }
    }

    getSessionData() {
        let sessionData = jwtDecode(localStorage.getItem(this.authTokenName))
        return sessionData
    }

    signout(callback) {
        clearAuthHeader(this.authTokenName)
        if (callback) {
            callback()
        }
    }
}
