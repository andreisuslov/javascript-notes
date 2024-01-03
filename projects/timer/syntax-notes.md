# The Value of 'this'

- **Did you define the function with an arrow function?**
  - Write `console.log(this)` on the first valid line above the arrow function. Value of 'this' in the arrow function will be equal to that console log.

- **Did you call 'bind', 'call' or 'apply' on the function when you invoked it?**
  - 'this' is equal to the first argument of 'bind', 'call', or 'apply'.

- **All other cases**
  - 'this' is equal to whatever is to the left of the '.' in the method call.
