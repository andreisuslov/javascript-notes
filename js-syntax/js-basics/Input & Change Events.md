Imagine you're playing with your favorite video game. You use the controller to move your character, right? When you press a button to make your character jump or run, that's like an 'input'. The game responds to what you're doing. This is how 'input' works in JavaScript too.

Now let's talk about 'change events'. Let's say you are playing a game on the computer where you have to select different tools or weapons from a menu. Each time you select something new, the game has to change what your character is holding. That's like a 'change event'. 

In JavaScript, an "Input Event" happens when the value of an HTML element has been changed. This can be any kind of change - typing text into a form field, selecting a radio button or checkbox, even pasting text into a field.

```javascript
let inputField = document.getElementById('myInput');

inputField.addEventListener('input', function(e) {
  console.log('Input field was changed!', e.target.value);
});
```

In this example, we first grab a reference to an HTML element with the id "myInput". Then we add an event listener for 'input' events. Anytime the value of this input field changes (like if someone types in it), our function will run and log "Input field was changed!" plus whatever the new value is.

A "Change Event" is similar but it only fires when the value is committed. For input fields, this means when you move away from that field - basically when it loses focus.

```javascript
let inputField = document.getElementById('myInput');

inputField.addEventListener('change', function(e) {
  console.log('Input field was committed!', e.target.value);
});
```

Here again we first get our HTML element (the inputField). We then add an event listener for 'change' events. Now if someone types in the input and then clicks somewhere else (the field loses focus), our function will run and log "Input field was committed!" plus whatever they typed.

So both Input & Change Events are ways JavaScript can listen and respond to user actions just like how your games react to what buttons you press.