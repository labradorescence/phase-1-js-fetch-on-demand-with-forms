const init = () => {
  fetch("http://localhost:3000/movies")
  .then(resp => resp.json())
  .then(data => console.log(data))
}

document.addEventListener('DOMContentLoaded', init);
document.querySelectorAll("#searchByID")


const form = document.querySelector('form')
const input = document.querySelector('#searchByID')
const submitbtn = document.querySelector('form>input')

form.addEventListener('submit', submitFunc)

const submitFunc = () => {
    preventDefault()
    defaultPrevent()
    console.log("submitted")
}