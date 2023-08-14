// JS Event Listeners

// Syntax: addEventListener(event, function, useCapture)

const doSomething = () => {
  alert('Doing something!')
}

// h2.addEventListener('click', doSomething) //useCapture is defaulted to "false", so we can omit it unless it is "true"
// h2.removeEventListener('click', doSomething)

// h2.addEventListener('click', (event) => {
//   console.log(event.target)
//   event.target.textContent = 'You Clicked Me.'
// })

// Here is a safer way to interact with the DOM

document.addEventListener('readystatechange', (event) => {
  if (event.target.readyState === 'complete') {
    console.log('readyState: complete')
    initApp()
    initApp2()
  }
})

// const initApp = () => {
//   const view = document.querySelector('#view2')
//   const div = view.querySelector('div')
//   const h2 = div.querySelector('h2')

//   view.addEventListener('click', (event) => {
//     view.style.backgroundColor = 'purple'
//   })
//   div.addEventListener('click', (event) => {
//     div.style.backgroundColor = 'blue'
//   })
//   h2.addEventListener('click', (event) => {
//     event.target.textContent = "clicked"
//   })
// }

// here we see event bubbling, when the h2 is clicked, the eventListener for h2 is actioned, then this triggers the event for the div, and finally the view as well

// Lets look at what happens when the useCapture is changed to true
// This may appear to be doing the same thing but it starts from the outer element and goes inward, instead of doing it like event bubbling, which goes from inside to outside.

// const initApp = () => {
//   const view = document.querySelector('#view2')
//   const div = view.querySelector('div')
//   const h2 = div.querySelector('h2')

//   view.addEventListener(
//     'click',
//     (event) => {
//       event.stopPropagation()//this shows us that it is happening from outside in, as only the outer div changed color.
//       view.style.backgroundColor = 'purple'
//     },
//     true
//   )
//   div.addEventListener(
//     'click',
//     (event) => {
//       div.style.backgroundColor = 'blue'
//     },
//     true
//   )
//   h2.addEventListener(
//     'click',
//     (event) => {
//       // event.stopPropagation()
//       event.target.textContent = 'clicked'
//     },
//     true
//   )
// }

// but if we remove all those "true" (which essentially changes it to false), and then add the event.stopPropagation on the h2, then it would ONLY do the h2 event, because stopPropagation stops it at h2

// Have a play with setting the useCapture to true or omitting it to see how the stopPropagation affects each event

// looking at event.target //
// if we change the view and div inside those event functions to "event.target", the clicks would have a very diff effect

// Now we look at accessing class list in CSS

const initApp = () => {
  const view = document.querySelector('#view2')
  const div = view.querySelector('div')
  const h2 = div.querySelector('h2')

  view.addEventListener('click', (event) => {
    // view.classList.add('purple') //here we add the purple class from our CSS to HTML
    // view.classList.remove('green') //here we remove the green class from our HTML

    // an even better way to do this is to toggle so that we can change between the 2 colors
    view.classList.toggle('purple')
    view.classList.toggle('green')
  })
  div.addEventListener('click', (event) => {
    // same toggle can be done for this div
    div.classList.toggle('blue')
    div.classList.toggle('black')
  })
  h2.addEventListener('click', (event) => {
    // here we can't toggle, we need to set conditions
    const myText = event.target.textContent
    myText === 'My 2nd View'
      ? (event.target.textContent = 'clicked')
      : (event.target.textContent = 'My 2nd View')
  })

  const nav = document.querySelector('nav')
  nav.addEventListener('mouseover', (event) => {
    event.target.classList.add('height100')
  })
  nav.addEventListener('mouseout', (event) => {
    event.target.classList.remove('height100')
  }) //you can also use mouseleave but if you take close notice, this also adds the "height100" to the h1 INSIDE the nav... and interesting enough, and unlike the mouseout, it doesn't remove the "height100" from the h1 even AFTER the mouse leaves the h1 element

  // The main difference between mouseout and mouseleave lies in how they behave with respect to child elements. If you want an event to trigger when the mouse leaves an element including its child elements, you might use mouseout. If you want an event to trigger only when the mouse leaves the element itself without considering child elements, mouseleave is the better choice.
}

const initApp2 = () => {
  const view3 = document.querySelector('#view3')
  const myForm = view3.querySelector('#myForm')
  myForm.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log('submitted event')
  })
}
