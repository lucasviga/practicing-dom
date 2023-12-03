const appContainer = document.querySelector('.app')
const header = document.querySelector('.header')
const input = document.querySelector('.add-task');
const addTaskBtn = document.querySelector('.btn-add-task');

const ul = document.createElement('ul');
ul.classList.add('tasks')

addTaskBtn.addEventListener('click', () => {
  if(input.value === "") return alert('type something...')
  
  const li = document.createElement('li');
  const textSpan = document.createElement('span');
  textSpan.innerText = input.value;
  textSpan.classList.add('tasks-item')

  const doneBtn = document.createElement('button');
  doneBtn.innerText = "Done";
  doneBtn.classList.add('btn-done-task')  

  const removeBtn = document.createElement('button');
  removeBtn.innerText = "Remove";
  removeBtn.classList.add('btn-remove-task')

  li.appendChild(textSpan);
  li.appendChild(doneBtn)
  li.appendChild(removeBtn)

  ul.appendChild(li)

  appContainer.appendChild(ul)

  input.value = "";

  doneBtn.addEventListener('click', () => {
    doneBtn.parentElement.children[0].classList.add('tasks-item--done')
  })

  removeBtn.addEventListener('click', (e) => {
    e.target.parentElement.remove()
  })
})