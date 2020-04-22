const addTodo = document.querySelector('.add');
const list = document.querySelector('.todos');

// Display new Todo In The Dom
const generateTemplate = (todo) =>{
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
    </li>
    `
    list.innerHTML += html;
};

// Grab Todo From User
addTodo.addEventListener('submit' , event => {
    event.preventDefault();
    const todo = addTodo.add.value.trim();
    if(todo.length){
        generateTemplate(todo);
        addTodo.reset();
    }
    
});

// Delete Todo 
 list.addEventListener('click', event=>{
    if(event.target.classList.contains('delete')){
        event.target.parentElement.remove();
    }
 });