// Exercise 3.1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require('request-promise');

// Returns the current position of the ISS
const getIssPosition = () => {
  return request('http://api.open-notify.org/iss-now.json')
  .then(response => JSON.parse(response))
  .then(parsedResponse => {
    const currentPosition = parsedResponse.iss_position
    parsedResponse.iss_position = {
      lat: currentPosition.latitude,
      lon: currentPosition.longitude
    }
    return parsedResponse
  })
  .catch((err) => {
    return err.error ? JSON.parse(err.error) : err;
  });
  // write some code...
};

getIssPosition().then((result) => console.log(result));
