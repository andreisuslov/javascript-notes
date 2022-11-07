
##### forEach
Accepts a callback function. Calls the function once per every element in the array.
```js
const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

nums.forEach(function(n) {
	console.log(n * n); // prints 0, 1, 4, 9, 16, etc.
})

function printTriple(n) {
	console.log(n * 3);
}

numbers.forEach(printTriple); // prints 0, 3, 6, 9, 12, etc.
```

The key difference between `forEach` and `for of` is that the first one accepts functions alongside other values:
```js
const books = [{
title: "Flowers for Algernon"
},
{
title: "American Gods"
},
{
title: "It"
}];

books.forEach(function (book) { // function is passed
	console.log(book.title);
})

for (let book of books) { // array of objects is passed
	console.log(book.title);
})

for (let i = 0; i < books.length; i++) { // array of objects is passed 
// with access to each element using index i
	console.log(books[i].title);
}
```
  
##### Map
Creates a new array with the results of calling a callback on every element in the array.
Can be used to extract portions of an array or transform the array.

```js
const texts = ['rofl', 'lol', 'omg'];
const caps = texts.map(function(t) {
	return t.toUpperCase();
})

texts; // "rofl", "lol", "omg"
caps; // "ROFL", "LOL", "OMG"
```

Map doesn't mutate the original array. We need to capture the values mapped to a new array by storing them in a variable:
```js
let numbers = [0, 1, 2, 3, 4];

numbers.map(function(num) {
	return num * 2;
});

numbers; // 0, 1, 2, 3, 4

let doubles = numbers.map(function(num) {
	return num * 2;
});

doubles; // 0, 2, 4, 6, 8
```  
We can see if each number in the array is even or odd by mapping the values of the numerical array to teh object of this kind → `[num: 0, isEven: true]`:
```js
const detailedNumbers = numbers.map(fucntion(n) {
	return {
		value: n,
		isEven: n % 2 === 0
	}
});
```
Given an array of strings, return an array where the letters of each element are capitalized and separated by dots. It could be done using `for-of` loop and it could be done using `map`.

```js
const texts = ['rofl', 'lol', 'omg'];

let newTexts = [];
for(let text of texts) {
	// split on an empty string means split each char apart from each other
	// join with dot means to join each element of an array separated by dot from one another
	newTexts.push(text.toUpperCase().split('').join('.'));
}
```

Notice that `for-of` loop doesn't return or store anything, instead, we need to push each of the elements to a new arrray created beforehand. If you want to use the `map` fucntion, you can actually build a new array with these values:
```js
const abbrevs = words.map(function(word) {
	return word.toUpperCase().split('').join('.');
})
```

##### Arrow Functions
In JS, arrow function is a syntactically compact alternative to a regular function statement.

```js

const squareRegular = function(n) { // regular function statement
	return x * x;
}

const squareArrow = (x) => {
	return x * x;
}

const isEven = num => ( // no parens around param bc there's only 1 param
	num % 2 === 0 // implicit return - no return keyword
);

const isEven = n => num % 2 === 0; // one-liner implicit return
```
Arrow functions work great with `map()` function:
```js
const nums = [0, 1, 2, 3, 4];

const doubles1 = nums.map(function(n) {
	return n * 2;
});

const doubles2 = nums.map(n => {
	return n * 2;
});

const doubles3 = nums.map(n => n * 2);
```

##### Find vs Filter
**Find** returns the value of **the first element** in the array that satisfies the provided testing function.

```js
const movies = ["Top Gun", "Doctor Strange", "Jurassic World"];

const movie = movies.find(movie => {
	return movie.includes('Top');
}); // "Top Gun"
```

**Filter** created a new array with all elements yhat pass the test implemented by the provided function.
```js
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result); // ["exuberant", "destruction", "present"]
```

##### Reduce
`reduce` is a way of deriving a single result from a series of values.
`reduce` takes four arguments, but often only the first two are used:
-   _accumulator_ - the returned value of the previous iteration
-   _currentValue_ - the current item in the array
-   _index_ - the index of the current item
-   _array_ - the original array on which reduce was called
-   The `initialValue` argument is optional. If provided, it will be used as the initial accumulator value in the first call to the callback function.

With reduce, you can add all values of an array together:
```javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce(function (result, item) {
  return result + item;
}, 0);
console.log(sum); // 10
```
You also can also calculate the appearence of each element in an array:
```javascript
var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

var petCounts = pets.reduce(function(obj, pet){
    if (!obj[pet]) {
        obj[pet] = 1;
    } else {
        obj[pet]++;
    }
    return obj; 
}, {});

console.log(petCounts); 

/*
Output:
 { 
    dog: 2, 
    chicken: 3, 
    cat: 1, 
    rabbit: 1 
 }
 */
```
