
##### Function Expressions

Function statement:
```javascript
const square = function(num){
	return num * num;
}
```
Function expression:
```javascript
square(7); // returns 49
```

##### We can store functions in an array.
```javascript
function add(a, b){
	return a + b;
}

function subtract(a, b){
	return a - b;
}

let operations = [add, subtract]

```

To call these functions, you'll need to call an array with an index of a function you want to call:
```javascript
let result = operations[0](30, 5);
console.log(result); // 35
```

##### We can store functions inside of an object.
```javascript
const thing = {
	doSomething: add
}
```
So in order to call `add()` function this way, we need to write do the following:
```javascript
console.log(thing.doSomething(20, 5)) // 25
```

##### Functions as Arguments
```javascript
function cry() {
	console.log("boo hoo")
}

function callThreeTimes(f) {
	f()
	f()
	f()
}

cryThreeTimes(cry) // three lines of "boo hoo" are printed out
```

##### Callback Fucntions

A **callback function** is a function passed into another function as an argument, which is then invoked inside the outer function.

**"invoked" = "got executed"**

```javascript
function callTwice(func) {
	func();
	func();
}

function laugh() {
	console.log("HAHAHAHAHA");
}

callTwice(laugh) // pass a function as an argument
// "HAHAHAHAHA"
// "HAHAHAHAHA"
```

Function `laugh()` invoked inside another function `callTwice()` is a **callback function**.

Callback function can be anonymous. Example:
```javascript
function grupus() {
	alert("Hello World");
}

setTimeout(function() {
	alert("Hello World");
	// -> we're not going to reuse it, so we don't need this to be a named function
}, 3000)
```
The `callback` argument is a function that will be called once for every item in the array.