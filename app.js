//All The References
const addTodo = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');
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

 //Function To Search The Term
 const filterTodo = (term) =>{
    Array.from(list.children)
    .filter((todo )=> !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) =>todo.classList.add('filtered'));

    Array.from(list.children)
    .filter((todo )=> todo.textContent.toLowerCase().includes(term))
    .forEach((todo) =>todo.classList.remove('filtered'));

 }; 

 // Keyup Event
search.addEventListener('keyup' , () =>{
    const term = search.value.trim().toLowerCase();
    filterTodo(term);
});