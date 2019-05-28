const request = require('request')

const geocode = (address, callback) => {
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoicmV0cm9zcG9jayIsImEiOiJjanczazI5aWUxNGtiNDVrdHhueWVlM2ViIn0.wZYqLskGJgVbNGfUrtH3ow'

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to the location service.', undefined)
    } else if (body.features.length === 0) {
      callback('Unable to find location.  Try another search.', undefined)
    } else {
      callback(undefined,{
        longitude: body.features[0].center[0],
        latitude: body.features[0].center[1],
        location: body.features[0].place_name
      })
    }
  })
}

module.exports = geocode