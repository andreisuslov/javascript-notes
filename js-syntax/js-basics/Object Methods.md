# Shorthand Properties
```js
const reviews = [3.5, 4.0, 3.8, 4.4]
const max = Math.max(...reviews) // here we're using spread
const min = Math.min(...reviews)
const sum = reviews.spread((sum, a) => sum = r)
const avg = sum / reviews.length

const stats = {min, max, sum, avg} // shorthand properties
stats // {min: 3.5, max: 4.4, sum: 15.7, avg: 3.92}
```

# Computed Properties
```js
const role = "host"
const person = "Jools Holland"
const role2 = "director"
const person2 = "Guy Richie"

const team = {
	role: person
}
team // {role: "Jools Holland"}
```
Example 1. We can now create an empty object and assign values to it.
```js
const team = {}
team[role] = person // {role: "Jools Holland"}
// person is evaluated whereas role is turned into a string
// role is not checked if it's a variable
team[role2] = person2 // {host: "Jools Holland", director: "Guy Richie"}
```
Now we have two properties with dynamic keys. And here is where **computed properties** come handy.

We can use a variable as a key name in an object literal property:
```js
const user = "Jools" // user is evaluated first
const userRoles = {
	[user]: 'Admin'
}
userRoles // {Jools: "Admin"}
```

So instead of creating an empty object etc., we can do it all at once: 
```js
const team = {
	[role]: person,
	[role2]: person2
}
```

Old syntax:
```js
function addProperty(obj, k, v) {}
	const copy = {...obj}
	copy[k] = v
	return copy

const result = addProperty(team, "happy", ":)")
```

New and shorter syntax:
```js
const addProperty = (obj, k, v) => {
	return {
	...obj,
	[k]: v
	}
}
```

# Methods
## Adding Methods to Objects
We can add functions as properties on objects. We call them methods.
```js
const math = {
	multiply: function(x, y) {
		return x * y
	},
	divide: function(x, y) {
		return x / y
	}
}
```
To fix this issue, we can use **arrow functions**. Arrow functions **do not** have their own scope and will be bound to the scope they are defined in.
```js
const annoyer = {
	phrases: ["literally", "Totes!", "YOLO"],
	pickPhrase() {
		const {phrases} = this // destructuring
		const idx = Math.floor(Math.random() * phrases.length)
		return phrases[idx]
	},
	start() { // use arrow funciton here so it will refer to the outer scope, annoyer objetc in this case 
		this.timerId = setInterval(() => {  // arrow functions do not have their own scope and will be bound to the scope they are defined in 
			console.log(this.pickPhrase()) // will print stuff from phrases array (fixed) 
	    }, 3000)  // use arrow funciton here so it will refer to the outer scope, annoyer objetc in this case  
   },   // use arrow funciton here so it will refer to the outer scope, annoyer objetc in this case  

    stop(){   // use arrow funciton here so it will refer to the outer scope, annoyer objetc in this case  

        clearInterval(this.timerId)   // use arrow funciton here so it will refer to the outer scope, annoyer objetc in this case  

        console.log("FINALLY")    

    }    

 }

So in JS, when we add a function onto an object, it becomes a method. In the example below, we defined a function and then added it to the object `math`. But it's pretty uncommon.

```js
const add = function(x, y) {
	return x + y
}

const math = {
	add
}
```
Instead, we can use this syntax:
```js
const math = {
	add: function(x, y) {
		return x + y
	}
}
```
## Method Shorthand Syntax
Instead of cluttering our code with a bunch of colons and function keywords, we can use method shorthand syntax:
```js
const auth = {
	username: "admin",
	login: function(x, y) { // long and cluttered
		console.log("LOGGED YOU IN!")
	},
	logout() { // short and concise
		console.log("GOODBYE!")
	}
}
```