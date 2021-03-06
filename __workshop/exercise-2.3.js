// Exercise 2.3 - Use the error
// ----------------------------

// require the 'request-promise' module.
const request = require('request-promise');

// get the code you wrote in 2.2 and paste it here...

const greeting = (langCode) => {
    return request(`https://journeyedu.herokuapp.com/hello/${langCode}`) // 1
      .then((response) => {
        return JSON.parse(response)
      })
      
      .catch((err) => {
        return err.error ? JSON.parse(err.error) : err;
      });
  };
  
  // Testing
  greeting('fr').then((result) => console.log(result)); // { lang: "French", code: "FR", text: "Bonjour" }
  
  // 3
  greeting('es').then((result) => console.log(result));
  greeting('it').then((result) => console.log(result));
  greeting('sp').then((result) => console.log(result));