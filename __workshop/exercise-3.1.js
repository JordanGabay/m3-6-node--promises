// Exercise 3.1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require('request-promise');

// Returns the current position of the ISS
const getIssPosition = () => {
  return request('http://api.open-notify.org/iss-now.json')
  .then(response => JSON.parse(response))
  .then(parsedResponse => {
    let { longitude, latitude } = parsedResponse.iss_position
    return { lat: Number(latitude), lng: Number(longitude) }
  })
  .catch(err => console.log(err));
};

getIssPosition().then(position => console.log(position));
