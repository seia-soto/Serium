const request = require('request')
module.exports = (target) => {
  class query {
    constructor() {
      this._form = {}
      // NOTE: 지역 정보 등 여기에서 모두 빌드할 것
      //request(options, callback)
    }
    configure() {
      this._form = {
        options: {
          url: 'https://api2.sktelecom.com/weather/current/minutely',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=UTF-8'
          }
        },
        callback: (error, response, body) => {
          if (!error && response.statusCode === 200) {
            return JSON.parse(body)
          } else {
            throw new Error('Invalid response form from endpoint: ' + body)
          }
        }
      }
    }
  }
}
