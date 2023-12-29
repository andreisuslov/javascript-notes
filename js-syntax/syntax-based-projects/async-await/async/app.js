// REGULAR function returns a string:
// function greet() {
// 	return 'HELLO!!!';
// }

// THE ASYNC KEYWORD!
// This function now returns a promise!
async function greet() {
    return "HELLO!!!"; // resolved with the value of 'HELLO!!!'
}
greet().then((val) => {
    console.log("PROMISE RESOLVED WITH: ", val);
});

async function add(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
        reject("X and Y must be numbers!");
    }
    return x + y;
}

// Equivalent non-async function...
// function add(x, y) {
// 	return new Promise((resolve, reject) => {
// 		if (typeof x !== 'number' || typeof y !== 'number') {
// 			reject('X and Y must be numbers!');
// 		}
// 		resolve(x + y);
// 	});
// }

add(6, 7)
    .then((val) => {
        console.log("PROMISE RESOLVED WITH: ", val);
    })
    .catch((err) => {
        console.log("PROMISE REJECTED WITH: ", err);
    });


const promiseResolve = new Promise(function(resolve, reject) {
    // the function is executed automatically when the promise is constructed

    // after 1 second signal that the job is done with the result "done"
    setTimeout(() => resolve("done"), 1000);
});

const promiseReject = new Promise(function(resolve, reject) {
    // after 1 second signal that the job is finished with an error
    setTimeout(() => reject(new Error("Whoops!")), 1000);
});

promiseResolve.then((result) => {
    console.log("The result is: ", result);
})
    .catch((error) => {
        console.log("The error is", error);
    });

promiseReject.then((result) => {
    console.log("The result is: ", result);
})
    .catch((error) => {
        console.log("The error is", error);
    });
