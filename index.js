console.log('Hello World')

let message = document.querySelector('#message')
let list = document.querySelector('ul')


const addMovie = (event) => {
    event.preventDefault()
    let inputField = document.querySelector('input')
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle)
    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'
    movie.appendChild(deleteBtn)
    list.appendChild(movie)
    inputField.value = ''
    deleteBtn.addEventListener('click', deleteMovie)


}


const deleteMovie = (event) => {
    event.target.parentNode.remove()
    message.textContent = `${event.target.parentNode.firstChild.textContent} deleted!`

    revealMessage()
}

const crossOffMovie = (event) => {
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked')){
        message.textContent = event.target.textContent + " watched!"
    } else {
        message.textContent = event.target.textContent + " added back!"
    }
    revealMessage()
}

function revealMessage () {
    message.classList.remove('hide')

    setTimeout(() => {
        message.classList.add('hide')
    }, 1000)
}

let addBtn = document.querySelector('form')


addBtn.addEventListener('submit', addMovie)





