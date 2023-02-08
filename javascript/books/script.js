// Create dummy book
let theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 400, true)

// Prepopulate library for testing
let myLibrary = [theHobbit]

// Render all existent books in library
showLibrary()

// Create button that adds new book
const newBookBtn = document.createElement('button')
newBookBtn.innerText = 'NEW BOOK'
document.getElementById('btn-container').appendChild(newBookBtn)

// Define Book Object
function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = parseInt(pages)
  this.read = read
  this.toogleRead = function (status) {
    if (status === true) {
      status = false
    } else {
      status = true
    }
    return status
  }
  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${read}`
  }
}

// Show all books objects in library
function showLibrary() {
  // Remove old library display
  let rows = document.querySelectorAll('tbody tr')
  for (let row of rows) {
    row.remove()
  }

  // Generate new updated library display
  for (let [index, book] of myLibrary.entries()) {
    // console.log(`index: ${index}`)
    // console.log(`book: ${book}`)
    let tr = document.createElement('tr')

    let title = tr.appendChild(document.createElement('td'))
    let author = tr.appendChild(document.createElement('td'))
    let pages = tr.appendChild(document.createElement('td'))
    let read = tr.appendChild(document.createElement('td'))

    title.innerText = book.title
    author.innerText = book.author
    pages.innerText = book.pages
    read.innerText = book.read

    // Toogle read btn
    let readToggle = tr.appendChild(document.createElement('td'))
    let toogleBtn = readToggle.appendChild(document.createElement('button'))

    toogleBtn.innerText = 'toogle'
    toogleBtn.setAttribute('class', 'toogle-btn')

    toogleBtn.addEventListener('click', (event) => {
      book.read = book.toogleRead(book.read)
      read.innerText = book.read
    })

    // Delete btn
    let eliminate = tr.appendChild(document.createElement('td'))
    let delBtn = eliminate.appendChild(document.createElement('button'))

    delBtn.innerText = 'delete'
    delBtn.setAttribute('class', 'del-btn')
    delBtn.dataset.index = index

    delBtn.addEventListener('click', (event) => {
      let idx = parseInt(event.target.dataset.index)
      // todo: remove book object from original array
      myLibrary.splice(idx, 1)
      showLibrary()
    })

    // Add row to results table
    document.getElementById('result').appendChild(tr)
  }
}

// Add book object to library
function addBookToLibrary(book) {
  myLibrary.push(book)
  return '200OK'
}

// Hide/Unhide form for adding new Book to library
newBookBtn.addEventListener('click', (event) => {
  const form = document.getElementById('form')

  if (form.style.display === 'none') {
    form.style.display = 'block'
  } else {
    form.style.display = 'none'
  }
})

// Submit new Book data and render it into library table
const formBtn = document.getElementById('form-btn')
formBtn.addEventListener('click', (event) => {
  event.preventDefault()

  let formTitle = document.querySelector('.form-title').value
  let formAuthor = document.querySelector('.form-author').value
  let formPages = document.querySelector('.form-pages').value
  let formRead = document.querySelector('.form-read').checked

  newBook = new Book(formTitle, formAuthor, formPages, formRead)

  addBookToLibrary(newBook)
  showLibrary()
  return false
})
