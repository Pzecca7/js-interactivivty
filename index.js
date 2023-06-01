console.log('Hello World')

let message = document.querySelector('#message')


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
    document.querySelector('ul').appendChild(movie)
    inputField.value = ''
    deleteBtn.addEventListener('click', deleteMovie)


}


const deleteMovie = (event) => {
    event.target.parentNode.remove()
    message.textContent = 'Movie Deleted!'
}

const crossOffMovie = (event) => {
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked')){
        message.textContent = 'Movie Watched!'
    } else {
        message.textContent = 'Movie Added back!'
    }
}

let addBtn = document.querySelector('form')


addBtn.addEventListener('submit', addMovie)





