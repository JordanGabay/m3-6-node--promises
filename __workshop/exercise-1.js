// Exercise 1
// ------------
const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

const makeAllCaps = (array) => {
  // write some code
  myPromise = new Promise((resolve, reject) => {
    if(array.every(word => typeof word === 'string')) {
    resolve(array.map(word => word.toUpperCase()))
    } else {
    reject(`Error: ${array} contains at least one element that is not a string!`)
    }
  })
  return myPromise
};

const sortWords = (array) => {
  // write some code
  myPromise = new Promise((resolve) => {
    resolve(array.sort())
  })
  return myPromise
};

// Calling (testing)
makeAllCaps(arrayOfWords)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

makeAllCaps(complicatedArray)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
