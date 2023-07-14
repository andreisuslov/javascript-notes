*Execution scope* is a set of rules that determines where the program can find variables and functions, with each function creating a new local scope and variables not found in the local scope being searched for in the outer or global scope.
*Invocation context* refers to the object that a function is called on, represented by the `this` keyword within the function.
The keyword `this` can be viewed as a reference to the current execution scope. 
The value of *this* depends on the invocation context of the function it is used in.

	`this` in JavaScript is more dynamic and can refer to different objects depending on its usage, while `this` in Java is more static and always refers to one specific object - the one it belongs to.


Depending on the scope and rules, `this` changes.
```js
function sayHi() {
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