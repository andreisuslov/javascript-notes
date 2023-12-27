# Timer App

The application has two parts:

- Diplay of a timer
- Animated border around a timer

Possible implementation:

1 Event listener to watch for a click on 'start' button
1.1 Draw a full border around the timer
1.2 Start counting olown the timer
1.3 Each time the timer counts down, update the border
1.4 Each time the timer counts down, update the text
1.5 If we counted down and timer reaches 0
1.5.1 Reset the border
1.5.2 Reset internal timer to get ready for another run

Here, steps 1.1, 1.3, and 1.5.1 are related to the border, so we can introsuce an event listener that will watch for the events related to these steps, so that when they occur, we will interact with the border.
