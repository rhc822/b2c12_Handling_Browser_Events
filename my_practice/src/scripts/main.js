/* Practice: Mirror, Mirror in the Code

The learning objective for this exercise is to listen for the keyup event, andupdate the DOM when it is broadcast.

Create an input field in your DOM. Give it an id of message. */

const inputFieldContainer = document.querySelector("#messageContainer"); //Get the ID messageContainer on the DOM and set it equal to the inputFieldContainer variable.
inputFieldContainer.innerHTML = `Mirror your message here <input id="message" type="text"><br>` //set the HTML in inputFieldContainer to the listed string.

// NOTE: innerHTML requires a string!

/* Create two article elements with unique id values. Use Flexbox to display them in a row, each taking 50% of the width of the browser. */

const articlesFieldContainer = document.querySelector("#articles"); //Get the articles ID on the DOM and set it equal to articlesFieldContainer.
articlesFieldContainer.innerHTML = `
    <article id=leftArticle>Placeholder text</article>
    <article id=rightArticle>Placeholder text</article>`; //Add the backtick text into #articles

/* Give each article a different border color. 

(See CSS file)

Write an event listener that listens for the keyup event on the input field and listens to the content that is entered into inputFieldContainer.

When the user releases pressing the key, The event handler function should update the textContent property of both sections. */

document.querySelector("#message").addEventListener("keyup", function(){
    document.querySelector("#leftArticle").innerHTML = event.target.value;
    document.querySelector("#rightArticle").innerHTML = event.target.value;
})