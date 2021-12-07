document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(`#submit`).addEventListener(`click`, (e) => {
    e.preventDefault()
    const form = document.querySelector(`#create-task-form`)
    const input = document.querySelector('#new-task-description').value
    let ul = document.querySelector(`#tasks`)
    let li = document.createElement('li')
    let btn = document.createElement(`button`)
    btn.addEventListener(`click`, () => {
      btn.parentNode.remove()
    })
    btn.style.backgroundColor = `pink`
    btn.textContent = `X`
    li.textContent = `${input} `
    li.appendChild(btn)
    ul.appendChild(li) 
    form.reset()
  })


});



