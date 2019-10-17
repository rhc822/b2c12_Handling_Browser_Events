// // Practice: Mirror, Mirror in the Code

// // The learning objective for this exercise is to listen for the keyup event, and update the DOM when it is broadcast.

// // Create an input field in your DOM. Give it an id of message.

// const inputField = () => `Mirror your message here <input id="message" type="text"><br>`;
// const inputFieldContainer = document.querySelector("#messageContainer");
// inputFieldContainer.innerHTML = inputField();

// // Create two article elements with unique id values. Use Flexbox to display them in a row, each taking 50% of the width of the browser.

// const articleElements = () => {
//     return `<article id=leftArticle>Placeholder text</article>
//     <article id=rightArticle>Placeholder text</article>`
//     };
// const articlesFieldContainer = document.querySelector("#articles");
// articlesFieldContainer.innerHTML = articleElements();
// console.log(articlesFieldContainer);

// // Give each article a different border color.
// // Write an event listener that listens for the keyup event on the input field.

// document.getElementById("message").addEventListener("keyup", function(){
//     document.querySelector("#leftArticle").innerHTML = event.target.value;
// })

// // Listens to the content that is entered into inputFieldContainer and, when the user releases pressing the key, .... 

// // The event handler function should update the textContent property of both sections.
// // event listener for keyup

console.log("You can do this today!")