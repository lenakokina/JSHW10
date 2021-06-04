
const inputField = document.getElementById('inputEnter'); // input
const list = document.getElementById('list'); // ol
const button = document.getElementById('myBtn'); //button

button.addEventListener('click', clickHandler); 

function clickHandler() {
  isEmptyString();
}

function isEmptyString() {
  if (inputField.value === ' ')
    return
   addList()    
}

function addList() {   
  const todoList = createList(list);
   list.append(todoList);
   return todoList;
} 

function createList() { 
  const todoList = document.createElement('li');
  todoList.className = "todo-list";
  todoList.textContent = inputField.value;  
  inputField.value = ' ';
  createButton(todoList);
  return todoList;
}

function createButton(todoList) {  
  const btndel = document.createElement('button');  
  btndel.className = "buttonDelete";
  btndel.textContent = 'x';
  todoList.append(btndel);  
}
