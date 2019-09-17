# triviagame-advanced

A simple game of trivia with only a few different questions being asked every time. Scores will be tallied based on whether the user correctly answered the question, incorrectly answered the question or if they simply did not answer the question within the allotted time. This quiz's logic is being run on Java Script. This was a class assignment for the UNCC Programming Bootcamp.

## Prerequisites

There are no prerequisites to use this application. It is simply run through the internet browser.

## Under the Hood

This game is mostly reading on click events and registering which div was clicked. Each incorrect question has a data attribute assigned either correct or incorrect. Java Script reads the data attribute and increments the corresponding number (correct or incorrect). This quiz extensively uses the setTimeOut Java Script function. If the timer hits zero, then the question is considered unanswered, and that integer is added to. Regardless of whether you get the answer correct or not, the DOM is manipulated, so a gif of the corresponding event or person that the question is asking about is shown, sets a timer and after a few seconds the next question shows up on the screen. This process is repeated until the end of the quiz and the results are shown.

### Link to Live Site: 

https://charlesdanner.github.io/triviagame-advanced/
