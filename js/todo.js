const toDoForm = document.getElementById('todo-form');
const toDoInput = document.querySelector('#todo-form input');
const toDoList = document.getElementById('todo-list');

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintToDO(newTodo) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const button = document.createElement('button');

  span.innerText = newTodo;
  button.innerText = '❌';
  button.addEventListener('click', deleteTodo);

  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = '';
  paintToDO(newTodo);
}

toDoForm.addEventListener('submit', handleToDoSubmit);
