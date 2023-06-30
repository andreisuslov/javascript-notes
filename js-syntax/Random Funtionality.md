#### Default Parameters
```js
const greet = (person, greeting = 'hi') => { // greeting by default will be 'hi'
	console.log(`${greeting}, ${person}`);
}

greet('tim') // hi, tim
greet('sam', 'yoo') // yoo, sam
```
 Make sure your default parameters come at the end of the parameter list.

#### Spread
Spread syntax allows an iterable such as an array to be **expanded** in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are exprected.
###### In Arrays
Create a new array using an existing array. Spreads the elements from one array into a new array.
```js
const nums1 = [1,2,3]
const nums1 = [4,5,6]
[...nums1, ...nums2] // 1, 2, 3, 4, 5, 6
['a', 'b', ...nums1] // "a", "b", 1, 2, 3
[...nums2,7,8,9] // 4, 5, 6, 7, 8, 9
```
###### In Object Literals
```js
const feline = {legs: 4, family: 'Felidae'}
const canine = {family: 'Caninae', furry: true}

const dog = {...canine, isPet: true} // {family: "Caninae", furry: true, isPet:true}
const lion = {...feline, genus: 'Panthera'} // {legs: 4, family: "Felidae", genus: 'Panthera'} isPet:true}
```
The order does matter, the values can overwrite each other:
```js
const catDog = {..feline, ...canine} // {legs: 4, family: 'Caninae', furry: true}
```
#### Rest
Instead of spreading arguments, it collects them. 
There's an old way to handle undefined amount of arguments called an **arguments object**.
##### The Arguments Object
- It's available inside every function *except* arrow functions.
- It's an array-like object (**NOT AN ARRAY**).
- *Has* a **length** property but it *doesn't have* **array methods**.
- Contains all arguments passed to the function.
```js
function sumAll() {
	let total = 0
	for (let i = 0; i < arguments.length; i++) {
		total += arguments[i]
	}
	return total
}
sumAll(8,4,2,3) // 17
sumAll(2,3) // 5
```
Again, the built-in methods won't work on it but there's a workaround using `spread`:
```js
function sum() {
	const argsArr = [...arguments]
	return argsArr.reduce((total, currVal) => {
		retunr total + currVal
	})
}
sum(1,2,3,4,5) // 15
```
Using the **arguments object** is tedious and limited. Instead, we could use `rest parameters`. It acts in a similar manner to spread so you can actually use methods with it.
```js
function sumAll(...nums) {
	return nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
}
sumAll(8,4,2,3) // 17
sumAll(2,3) // 5
```
#### Array Destructuring
Allows unpacking specific values of an array into new variables.
```js
const chars = ['a', 'b', 'c']
const [a,b,c] = chars
a // "a"
b // "b"
c // "c"
const [first, ...theRest] = chars
first // "a"
theRest // ["b", "c"]
```

#### Object Desctructuring
Allows unpacking specific values of an object into new variables.
```js
const runner = {
	first: "Eliud",
	last: "Kipchoge",
	country: "Kenya"
}

const {first, last} = runner
first // "Eliud"
last // "Kipchoge"

const {country, title} = runner
country // "Kenya"
title // undefined → we created a new variable but it's not initialized
```
#### Nested Destructuring
Allows unpacking specific values of the nested objects into new variables.
```js
const runner = [
{
	first: "Eliud",
	last: "Kipchoge",
	country: "Kenya"
},
{
	first: "Tom",
	last: "Hardy",
	country: "United States"
}]

const {first, last} = runner
first // "Eliud"
last // "Kipchoge"
```

But when there's a lot of nested elements (i.e., objects) of an object, it's generlly not recommended to unpack them this way. Instead, do this:
```js
const [,{country}] = runner
country // "United States"

const [,silverMedal] = results;
const {country} = silverMedal; // "United States"
```

##### Param Destructuring
```js
const fullName = ({first, last}) => {
	return `${first} ${last}`
}
const runner = {
	first: "Eliud",
	last: "Kipchoge",
	country: "Kenya"
}

fullName(runner) // "Eliud Kipchoge"

fucntion print(person) { // here, param is not destructured
// the object passed to the method is destructured insted
	const {
		first,
		last,
		coutry
	} = person;
	console.log(`${first} ${last}, ${coutry}`)
}

fucntion print1({first, last, country}) { // param destructuring
	console.log(`${first} ${last}, ${coutry}`)
}

const response = [
	'HTTP/1.1',
	'100 OK',
	'application/json'
] // HTTP respose

fucntion parseResponse([protocol, statusCode, contentType]) { // param destructuring
	console.log(`Status: ${statusCode}`)
}
```