# Shorthand Properties
```js
const reviews = [3.5, 4.0, 3.8, 4.4]
const max = Math.max(...reviews) // here we're using spread
const min = Math.min(...reviews)
const sum = reviews.spread((sum, a) => sum = r)
const avg = sum / reviews.length

const stats = {min, max, sum, avg} // shorthand propertie
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
```
const team1 = {}
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
## Adding Methdos to Objects
We can add functiuons as properties on objects. We call them methods.
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

So in JS, when we add a fucntion onto an object, it becomes a method. In the example below, we defined a function and then added it to the object `math`. But it's pretty uncommon.

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

# THIS Keyword
The keyword `this` can be viewed as a reference to the current execution scope. 
**The value of *this* depends on the invocation context the function it is used in.**
```js
this;
```
Depending on the scope and rules, that object changes.
```js
fucntion sayHi() {
	console.log("Hi!")
	console.log(this) // -> this 'keyword' refers to the global exec scope var 'window'
}
```
'Window' scope contains all declared methods. 'Window' scope stores 'var' variables but does not store 'let' and 'const' variables.
Here's an example of this word used to refer to the local scope. It is another way of interacting with properties - values and methods:
```js
const person = {
	first: "Adam",
	last: "Smith",
	nickname: "The Father of Capitalism",
	fullName() {
		console.log(this) // set to the Window
		const {first, last, nickName} = this // destructuring
		return `${first} ${last} AKA ${nickname}`
	},
	printBio(){
		console.log(this) // set to the object person
		const fullName = this.fullName() // we need this keyword to refer to fullName() method
		console.log(`${fullName} is a real person!`)
	},
	laugh: () => {
		console.log(this) // set to the Window
		console.log(`${this.nickname} is Adam Smith`) // undefine is Adam Smith
	}
}
```
He have to use *this* keyword to refer to fullName() method. Otherwise, it'll throw an error: "fullName is not defined".
```js
person.printBio() // "Adam Smith AKA The Father of Capitalism is a real person!"
const printBil = person.printBio
```

The value of *this* depends of the **invocation context** the function it is used in.
```js
const annoyer = {
	phrases: ["literally", "Totes!", "YOLO"],
	pickPhrase() {
	const {phrases} = this // destructuring
		const idx = Math.floor(Math.random() * phrases.length)
		return phrases[idx]
	},
	start() {
		this.timerId = setInterval(function() {
			console.log(this.pickPhrase()) // will print stuff from phrases array
		}, 3000)
	},
	stop() {
		clearInterval(this.timerId)
		console.log("FINALLY")
	}
}
```
