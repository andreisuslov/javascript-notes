// This is a FAKE Http Request Function
// It takes 1 second to resolve or reject the promise, depending on the url that is passed in
const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pages = {
                "/users": [
                    {id: 1, username: "Bilbo"},
                    {id: 2, username: "Esmeralda"},
                ],
                "/about": "This is the 'about' page",
            };
            const data = pages[url];
            resolve({status: 200, data});
        }, 1000);
    });
};

fakeRequest("/users")
    .then((res) => {
        console.log("Status code: ", res.status);
        console.log("Data: ", res.data);
        console.log("REQUEST WORKED!!!");
    })
    .catch((res) => {
        console.log(`Response status is: ${res.status}`);
        console.log("REQUEST FAILED");
    });
