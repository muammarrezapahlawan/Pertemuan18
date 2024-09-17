
const todolist = []

function tampilList() {
  let todoListHtml = ''
for (let i = 0; i < todolist.length; i++) {
  const todo=todolist[i]
  const html =`<p>${todo}</p>`;
  
  todoListHtml +=html
  document.querySelector('.js-list-name').innerHTML=todoListHtml
  }// console.log(todoListHtml)
}



function addTodo() {
  const inputElement= document.querySelector('.js-name-input')

  const name = inputElement.value
  
  todolist.push(name)
  console.log(todolist)

  inputElement.value=''

  tampilList()



}