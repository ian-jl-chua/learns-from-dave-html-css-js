// DOM - Document Object Model

const view1 = document.getElementById('view1')
console.log(view1)

const view2 = document.querySelector('#view2')
console.log(view2)

// here are 2 different ways to select by ID

view1.style.display = 'flex'
view2.style.display = 'none'
// we can directly influence the CSS properties in JS

const views = document.getElementsByClassName('view')
console.log(views)

const sameViews = document.querySelectorAll('.view')
console.log(sameViews)

// HTML elements are just the elements in the DOM, but nodes are EVERYWHERE (including white space).

const divs = view1.getElementsByTagName('div')
console.log(divs)

const sameDivs = view1.querySelectorAll('div')
console.log(sameDivs)

// if we are selecting even divs we can do this

const evenDivs = view1.querySelectorAll('div:nth-of-type(2n)')
console.log(evenDivs)

// we can do something with the divs like this
for (i = 0; i < evenDivs.length; i++) {
  evenDivs[i].style.backgroundColor = 'red'
  // evenDivs[i].style.width = "150px"
  // evenDivs[i].style.height = "150px"
}

// we can't do something like this with getElementsByTagName, because the scope of elements are much more limited than nodes.
const someDivs = view1.getElementsByTagName('div:nth-of-type(2n)')
console.log(someDivs)
// because there isn't a tag called "div:nth-of-type(2n)"

const navText = document.querySelector('nav h1')
console.log(navText)

navText.textContent = 'No you.'
// The textContent changes the text displayed on our HTML page

const navBar = document.querySelector('nav')
// we can change things INSIDE our HTML by using innerHTML
navBar.innerHTML = `<h1>You can't be serious</h1> <p> I'm on the right </p>`
// now instead of the h1 in the original one, we have added a "h1" and a "p" element

console.log(navBar)

// we can also further change the navBar
navBar.style.alignItems = 'center'
navBar.style.justifyContent = 'space-evenly'

// Lets look at navigating the DOM, here are a few ways of going into each node or elements in the DOM
console.log(evenDivs[0])
console.log(evenDivs[0].parentElement)
console.log(evenDivs[0].parentElement.children)
console.log(evenDivs[0].parentElement.childNodes)
console.log(evenDivs[0].parentElement.lastChild)
console.log(evenDivs[0].parentElement.lastElementChild)
console.log(evenDivs[0].parentElement.firstChild)
console.log(evenDivs[0].parentElement.firstElementChild)
console.log(evenDivs[0].nextSibling)
console.log(evenDivs[0].nextElementSibling)
console.log(evenDivs[0].previousSibling)
console.log(evenDivs[0].previousElementSibling)

// Lets look at adding OR removing from the DOM
view1.style.display = 'none'
view2.style.display = 'flex'
view2.style.flexDirection = 'row'
view2.style.flexWrap = 'wrap'
view2.style.margin = '10px'

while (view2.lastChild) {
  view2.lastChild.remove()
}

const createDivs = (parent, iter) => {
  const newDiv = document.createElement('div')

  newDiv.textContent = iter
  newDiv.style.backgroundColor = '#000'
  newDiv.style.color = '#fff'
  newDiv.style.width = '100px'
  newDiv.style.height = '100px'
  newDiv.style.margin = '10px'
  newDiv.style.display = 'flex'
  newDiv.style.justifyContent = 'center'
  newDiv.style.alignItems = 'center'

  // append the new element to the parent
  parent.append(newDiv)
}

// createDivs(view2, 10)

for (let i = 1; i <= 12; i++) {
  createDivs(view2, i)
}
