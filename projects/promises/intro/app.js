// a promise with a simple random resolve/reject functionality
const willGetYouADog = new Promise((resolve, reject) => {
  // params in this function can be called differently, it's just a convention
  const rand = Math.random();
  if (rand < 0.5) {
    resolve();
  } else {
    reject();
  }
});

// this is how we interract with the promise
willGetYouADog
  .then(() => {
    console.log("YAY WE GOT A DOG!!!!");
  })
  .catch(() => {
    console.log(":( NO DOG");
  });


// a promise with a delayed code execution
const makeDogPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rand = Math.random();
      if (rand < 0.5) {
        resolve();
      } else {
        reject();
      }
    }, 5000);
  });
};

makeDogPromise()
  .then(() => {
    console.log("YAY WE GOT A DOG!!!!");
  })
  .catch(() => {
    console.log(":( NO DOG");
  });