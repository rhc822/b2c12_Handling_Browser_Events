
const h1El = document.querySelector("h1") //Look at h1 in DOM

const handleH1Click = () => {
  console.log("H1 was clicked", event.target.innerHTML) //The function console logs a string and the content of the h1 tag. "event" "target" and "innerHTML" are all DOM methods/properties that are tied to the event listener from which it came. So you can reuse this function.
// }

const handleH1Click = () => {
  document.querySelector("#output-target").innerHTML = `H1 was clicked, ${event.target.innerHTML}`
  console.log(event);
}

h1El.addEventListener("click", handleH1Click); //Add a click event listener to h1 via h1El variable on line 2. The handleH1Click function within this line invokes line 4


// let articleEl = document.getElementsByClassName("article-section")

// console.log("article elements", articleEl)


// const handleSectionClick = (event) => {
//   console.log(event)
// }

// for (let i = 0; i < articleEl.length; i++) {
//   console.log("each item", articleEl.item(i))
//   articleEl.item(i).addEventListener("click", handleSectionClick)
// }

// let outputEl = document.getElementById("output-target")
// let header = document.querySelector("#page-header")

/*
    Define functions that hold logic to be performed when mouse
    events are triggered by the browser.
*/

// const handleHeaderMouseOver = () => {
//   outputEl.innerHTML = "You moved your mouse over me"
// }

// const handleHeaderMouseOut = taco => {
//   // debugger
//   outputEl.innerHTML = "Why u leave me?"
// }

/*
    Get a reference to the DOM element with an id of
    "page-header", and attach an event handler for the
    mouseover, and mouseout, events.
 */

// header.addEventListener("mouseover", handleHeaderMouseOver)
// header.addEventListener("mouseout", handleHeaderMouseOut)


/*
    We can also write an anonymous function (lamba expression)
    in the addEventListener declaration instead of using a
    function reference.
 */

// let fieldEl = document.getElementById("keypress-input")

// fieldEl.addEventListener("keyup", event => {
//   // debugger
//   outputEl.innerHTML = event.target.value
// })

/*
  Now we can start making a truly interactive experience
  combining HTML, JavaScript and CSS. When a user clicks
  on a button in the DOM, we can listen for that event in
  JavaScript, and then add, or remove, CSS classes.

  In this example, I simply use the `toggle()` method on
  the `classList` property of a DOM element to automatically
  add and remove a class.
 */

// let guineaPig = document.getElementById("guinea-pig")

// function toggleClass (newClass) {
//   guineaPig.classList.toggle(newClass)
//   console.log("guineaPig.classList", guineaPig.classList)
// }

// document.getElementById("add-color").addEventListener("click", () => toggleClass("blue"))

// document.getElementById("make-large").addEventListener("click", function() {
//   toggleClass("large")
// })

// document.getElementById("add-border").addEventListener("click", function() {
//     toggleClass("bordered")
// })

// document.getElementById("add-rounding").addEventListener("click", function() {
//     toggleClass("rounded")
// })


/*
  EVENT BUBBLING:

  You can add an event handler on the body tag, and since all
  browser events bubble up to the body, you can then put in
  conditional logic to handle the click event on many different
  elements in one function.
 */
// document.querySelector("body").addEventListener("click", function(event) {
//   console.log("You clicked on the body of the DOM", event.target, event.currentTarget)
// })