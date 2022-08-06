This task involved creating a calculator with a base in HTML, styled in CSS and animated in JavaScript. I have organised what I learned by language. 

CSS: 
- Selectors can have pseudostates which allows easy control of styles based on whether an element is clicked or hovered over (in previous assignments this was done in JS.)

- The classes you choose in HTML and CSS affect how clean the code gets later. I originally had a .number class for all of the numbers and 'special' numbers like the point symbol. But the eventlisteners for numbers were applied by iterating over a nodelist of all elements with class .number. This meant it applied the function of number buttons to elements which were meant to have the same style as the number buttons, but different functions (e.g. the point symbol). 

I solved this by giving each unique element a unique class to apply different functionality in JS, e.g. point gets a point class, clear gets a clear class, backspace gets a backspace class. In reality, I should have styled all the buttons I wanted the same with the same class, then just used different ID selectors in JS to add their functionality.


JS:
- At first, it was hard to understand how to structure code when the user determined the flow of the logic rather than the script. For instance, they could type a number and then an operator, but also another operator. Adding variables (especially booleans) outside of the scope of eventlisteners allowed the state of buttons to be tracked.