This is an explanation of the difference between different things:  
"""  
The two terms are closely related but **not** the same thing.  
-------------------------------------------------------------  
  
**In a nutshell they define *scope* vs. *context*.** Scope is about the environment that code runs in (kind of like a room - - it's about where the code is) and context is about an actual object that caused some code to be executed (like who was responsible for putting you in that room).  
  
> An "execution context" refers to the **["scope chain"][1]** that is in  
> effect **when some code is running**. A scope chain is a list of  
> memory locations that should be checked (in a particular order) for  
> identifiers (variable, constant and function names) to be resolved to  
> a value. Since JavaScript is executed in a single-threaded  
> environment, only one task can be executed at a time. The currently  
> executing code (and its associated scope) define the execution  
> context.  
  
A simple example can be shown like this:  
  
<!-- begin snippet: js hide: false console: true babel: false -->  
  
<!-- language: lang-js -->  
  
// This area is in the Global execution context (scope) because the code is  
// not wrapped in a function or any other kind of code block.  
var x = "Global";  
  
// "Global" is the result because the JavaScript engine will always look  
// in the current scope for a declaration for the identifier in question.  
// It will find a declaration for "x" right here in the Global scope, so  
// that's the value it will use.  
console.log(x);  
  
var y = "Also Global";  
  
function parent(){  
// This area is in the "parent" execution context (scope)  
var x = "parent";  
  
// "parent" is the result (not "Global") because when this function is  
// executing, its scope is the most accessible. The JavaScript engine  
// looks here first to find out what "x" is. This is known as variable  
// "hiding" because the x in the parent scope hides the x in the Global scope.  
console.log(x);  
  
function child() {  
// This area is in the "child" execution context (scope)  
var x = "child";  
  
// "child" is the result (not "Global" or "parent") because when this  
// function is executing, its scope is the most accessible. The  
// JavaScript engine looks here first to find out what "x" is. This  
// x now hides the x in parent, which is hiding the x in Global.  
console.log(x);  
  
// "Also Global" is the result here. First the current execution  
// context (scope) is checked for a "y" variable. There isn't one,  
// so the next scope in the scope chain (function parent) is checked.  
// There is no "y" declared there either. So, again, the next highest  
// scope in the chain (Global) is checked and that is where "y" is  
// found, so the value of that "y" is used.  
console.log(y);  
  
// Here, we will get "undefined". All the scopes in the chain will  
// be checked and if we go all the way up to Global and still don't  
// find a declaration for "z", there is no other scope to look in.  
console.log(z);  
}  
child();  
}  
  
parent();  
  
<!-- end snippet -->  
  
**The three execution contexts (scopes) shown above can be entered into in various ways. Those various ways give rise to the "invocation context".**  
  
----------  
  
> An "invocation context" can also more accurately be called an  
> "invocation context object" which refers to **the *object* that was  
> used to invoke some code**. This may seem like the same thing as the  
> "execution context", but the "invocation context" refers to the  
> *object* that leads to code executing and that executing code is doing so  
> within its own execution context (scope).  
  
The biggest differentiating point between these two terms is understanding that the invocation context leads to the binding of the keyword `this` to an object for the duration of the execution context. `this` binding is volatile in JavaScript and the object that `this` binds to is subject to change as you enter into a new execution context. For all intents and purposes, `this` *is* the object that invoked some code, or `this` is the "invocation context".  
  
I've written another answer that goes into more detail about how to determine what `this` will bind to and you can see that **[here][2]**.  
  
See the following snippet for an explanation of invocation context. It illustrates **one** *execution context* (`function foo`), but **two** *invocation contexts* (the button and Global).  
  
<!-- begin snippet: js hide: false console: true babel: false -->  
  
<!-- language: lang-js -->  
  
function foo() {  
// When this function is "invoked" via the button click  
// the invocation context is the button and the console will  
// log this as: [object HTMLButtonElement]  
  
// But, when the function is invoked from a direct call to foo  
// from the Global execution context, this will be bound  
// to the window object. So, in that case we'll get: [object Window]  
console.log("The 'this' object (invocation context object) is: " + this);  
}  
  
// Call foo from the Global execution context.  
foo();  
  
var btn = document.getElementById("btnTest");  
  
// When the button is clicked, execute foo  
btn.addEventListener("click", foo);  
  
<!-- language: lang-html -->  
  
<button id="btnTest">Click Me</button>  
  
<!-- end snippet -->  
  
  
[1]: [http://ryanmorr.com/understanding-scope-and-context-in-javascript/](http://ryanmorr.com/understanding-scope-and-context-in-javascript/)  
[2]: [https://stackoverflow.com/questions/41091653/settimeout-and-this-binding/41091732#41091732](https://stackoverflow.com/questions/41091653/settimeout-and-this-binding/41091732#41091732)  
  
  
"""  
Can you explain to me as if I am 10 years old what the execution scope exactly is in JS? Based on your knowledge and the explanation I provided in the quotes. Provide some code examples with var, let, and const keywords to illustrate your explanation and to show how these keywords affect (or are affected by) the execution scope.



Sure, let's break it down into simpler terms.

Execution scope in JavaScript is like a box where you put your toys (which are the variables and functions). The rule is, your toys can be seen and used inside the box they are in. If the toy is not in the box, you can't see or use it. This box is what we call a "scope."

There are different types of boxes (scopes). You have your big toy chest (the global scope), where every toy can be seen and used. Then, there are smaller boxes inside this big chest (local scopes) that have their own toys which cannot be seen or used outside of these smaller boxes.

Let's look at some examples with var, let, and const:
```javascript
// This is your big toy chest (global scope)
var myToy = "Teddy bear";  // This toy can be seen and used everywhere

function play() {
  // This is your smaller box inside the big one (local scope)
  var myOtherToy = "Building blocks";  // This toy can only be seen and used within this function
  
  console.log(myToy);     // Here we can still see "Teddy bear" because it's in the big chest
  console.log(myOtherToy); // And we can see "Building blocks" because it's in our current small box
}

play();

console.log(myToy);       // Outside of the function we can still see "Teddy bear"
console.log(myOtherToy);  // But we cannot see "Building blocks" because it's not in our current box (it will result to an error)
```
As for `let` and `const`, they're just like `var` but with stricter rules. If `var` is like an old-school wooden toy chest where everything gets mixed up, `let` and `const` are like modern plastic bins with lids. Once a bin has been closed (`let` or `const` has been defined), you cannot change what's written on its label (`const`) or put something else instead (`let`). And they also have even smaller boxes within functions called blocks `{ }`.

```javascript
function morePlay() {
  let myNewToy = "Puzzle";     // The label on this bin says "Puzzle" but I can change the contents
  const myFavoriteToy = "Lego";   // The label on this bin says "Lego" and I cannot change it

  if(true) {
    let myNewToy = "Doll";        // Inside this block I changed contents of myNewToy to “Doll”
    console.log(myNewToy);
    console.log(myFavoriteToy);   // But I still cannot change myFavoriteToy to anything else
  }

  console.log(myNewToy);   // Outside of block “myNewToy” is still “Puzzle”
}

morePlay();
```