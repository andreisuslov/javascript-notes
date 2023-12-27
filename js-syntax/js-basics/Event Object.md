An event object in JavaScript is like a messenger that delivers information about something that just happened in your web browser. For example, when you click a button on a webpage, an event occurs – the 'click'. The event object is the 'messenger' that tells the computer all about this click, like where it happened on the screen and which button was clicked. 

In JavaScript, we can write code to 'listen' for these events and then do something when they happen. This is how interactive websites work!

Here's a simple example:

```javascript
document.querySelector("button").addEventListener("click", function(event) {
  console.log("You clicked a button at: " + event.clientX + ", " + event.clientY);
});
```

In this code, `document.querySelector("button")` finds the first button on the webpage. Then, `addEventListener("click", function(event) {...}` tells the computer to listen for clicks on this button. 

When someone clicks the button, our function runs and gets passed an `event` object (the messenger). This object contains details about the click. We use `event.clientX` and `event.clientY` to get the location of the click on screen, and then we print out this information.

So basically, an event object carries details about an event (like a click or key press), allowing us to make our websites react to user actions.