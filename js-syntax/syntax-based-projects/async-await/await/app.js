async function printPlanets() {
    const res = await axios.get("https://swapi.co/api/planets/");
    console.log(res.data); // only runs once the previous line is complete (the axios promise is resolved)
}

printPlanets();

// Without async/await...

// function printPlanets() {
// 	return axios.get('https://swapi.co/api/planets/');
// }

// printPlanets().then((res) => {
// 	console.log(res.data);
// });

async function getWrongPlanets() {
    // Invalid URL...
    const res = await axios.get("https://swapi.co/api/planeklsajdalksts/");
    console.log(res.data);
}

getWrongPlanets().catch((err) => {
    console.log("IN CATCH!!!");
    console.log(err);
});

// ANOTHER OPTION...
// async function getWrongPlanets() {
// 	try {
// 		const res = await axios.get('https://swapi.co/api/planeklsajdalksts/');
// 		console.log(res.data);
// 	} catch (e) {
// 		console.log('IN CATCH!', e);
// 	}
// }
getWrongPlanets();


async function showAvatar() {
    // read JSON
    const response = await fetch("./user.json");
    const user = await response.json();

    // read github user
    const githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
    const githubUser = await githubResponse.json();

    // show the avatar
    const img = document.createElement("img");
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    // wait 3 seconds
    await new Promise((resolve, reject) => setTimeout(resolve, 3000));

    img.remove();

    return githubUser;
}

showAvatar();
