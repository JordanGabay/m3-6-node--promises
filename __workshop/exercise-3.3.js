// Exercise 3.3 - `getAddressPosition`
// ---------------------------------

const opencage = require('opencage-api-client');
require('dotenv').config({path: '../.env'});

function getAddressFromPosition(lat, lng) {
  const requestObj = {
    key: process.env.OPENCAGE_API_KEY,
    q: `${lat}, ${lng}`
  };

  // return ...
  return opencage
  .geocode(requestObj)
  .then(data => data.results[0].formatted)
}

const addresses = [
  { lat: '48.858262', lng: '2.294496'   },
  { lat: '45.427164', lng: '-73.447841' }
]

addresses.forEach(address => {
  const { lat, lng } = address
  getAddressFromPosition(lat, lng).then(res => console.log(res))
})
