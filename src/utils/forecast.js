const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = 'https://api.darksky.net/forecast/3afefd3b518d71add8f4800fc889d284/' + latitude +','+ longitude +'?units=si'

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service.', undefined)
    } else if (body.error) {
      callback('Unable to find location', undefined)
    } else {
      callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out.  The high today is ' + body.daily.data[0].temperatureMax + ' and the low is ' + body.daily.data[0].temperatureMin + ' There is a ' + body.currently.precipProbability + '% chance of rain.')
    }
  })
}

module.exports = forecast