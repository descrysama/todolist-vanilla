let todoListArray = [];
let todoInput = document.getElementById('todo-input');
function createButton(todo, index) {
    let div = document.createElement('div');
    let li = document.createElement('li');
    let button = document.createElement('button');
    li.innerHTML = todo.content;
    li.id = index;
    li.classList.add = "single-todo";
    if(todo.done) {
        li.style.textDecorationLine = "line-through";
        li.style.color = "red";
    } else {
        li.style.color = "green";
    }
    li.addEventListener('click', () => {
        let newObject = {...todoListArray[index], done: !todoListArray[index].done};
        todoListArray.splice(index, 1, newObject);
        loadToDoList()
    })
    button.innerHTML = 'X';
    button.id = index;
    button.style.marginLeft = '5px'
    button.addEventListener('click', () => {
        todoListArray.splice(index, 1)
        loadToDoList()
    })
    div.appendChild(li);
    div.appendChild(button);
    div.style.display = 'flex';
    div.style.alignItems = 'center';
    button.style.margin = '5px'
    return div;
}
function loadToDoList() {
    document.getElementById('todo-list').innerHTML = "";
    for(let i = 0; i < todoListArray.length; i++) {
        document.getElementById('todo-list').appendChild(createButton(todoListArray[i], i));
    }
}
document.getElementById('form').addEventListener('submit', (event) => {
    event.preventDefault();
    if(todoInput.value) {
        todoListArray.push({
            content: todoInput.value,
            done: false
        })
        document.getElementById('todo-input').value = "";
        loadToDoList()
    }
})
loadToDoList();
