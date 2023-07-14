Let's imagine that you are playing with your favorite set of action figures. You have a superhero named "Superman" and a villain named "Joker". 

In JavaScript, `this` keyword is like the current action figure you are playing with.
```javascript
var superman = {
  name: 'Superman',
  power: 'Super Strength',
  showPower: function() {
    console.log(this.power); // 'this' refers to the superman object
  }
};

superman.showPower(); // Shows 'Super Strength'
```

Here, when you call `superman.showPower()`, the `this` inside `showPower` function refers to the `superman` object. This is because `superman` is the one that invoked (or called) the function. So, we say the invocation context is `superman`.

But, what if Joker tricks Superman and uses his power?
```javascript
var joker = {
  name: 'Joker',
  power: 'None',
};

joker.stealPower = superman.showPower;

joker.stealPower(); // Shows 'None'
```

Even though Joker has stolen Superman's power (the function), when he uses it (`joker.stealPower()`), the `this` inside that function now refers to Joker! Because Joker is now invoking (or calling) this function. So, we say the invocation context here is `joker`.

That's what invocation context in JavaScript means - it tells you which object (or action figure) is currently calling a function.

Now, let's look at another case:

```javascript
function showMyName() {
  console.log(this.name);
}

showMyName(); // Shows nothing or error in strict mode
```

Here, no one is calling the function i.e., there's no action figure involved. In this case, JavaScript takes a step back and says "Okay, since no one specific is calling this function, I'll default to the global context." 

In JavaScript, if a function is invoked without being attached to an object (i.e., it's not a method of an object), the context is generally the global object. In web browsers, the global object is typically represented by the 'window' object. 

For example:
```javascript
function demoFunction() {
    console.log(this);
}

demoFunction(); // Logs: Window {...} (or the global object in a non-browser environment)
```

In this case, because no specific object is invoking `demoFunction`, `this` defaults to refer to the global context.

However, it's important to note that in strict mode (`'use strict';`), if a function is called without a defined invocation context, `this` will be `undefined` instead of the global object:
```javascript
'use strict';

function demoFunction() {
    console.log(this);
}

demoFunction(); // Logs: undefined
```

This behavior prevents potential errors and conflicts from unintentionally modifying the global scope.