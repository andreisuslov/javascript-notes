// Make a new empty img element:
const newImg = document.createElement('img');
// Add a src:
newImg.src = 'https://images.unsplash.com/photo-1504006833117-8886a355efbf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80';
// Change its width:
newImg.style.width = "300px";

//Add it to the end of the body:
document.body.appendChild(newImg);


// Create a new anchor tag
const newLink = document.createElement('a');
// Set its innerText:
newLink.innerText = 'Mr. Bubz Video! CLICK MEEE';
// Set its src:
newLink.href = 'https://www.youtube.com/watch?v=QQNL83fhWJU';

// Select the first paragraph:
const firstP = document.querySelector('p');
// Add the link as a child of the paragraph:
firstP.appendChild(newLink);

// Append a new element to the end of the list
const parentUl = document.querySelector('ul')
const newLi = ducument.createElement('li')
newLi.innerText = 'I AM A NEW LI!'
parentUl.appendChild(newLi)

// Insert before a sertain element
const firstLiTodo = document.querySelector('li.todo')
parentUl.insertBefore(newLi, firstLiTodo) // firstLiTodo is the element before which we want to insert a new element