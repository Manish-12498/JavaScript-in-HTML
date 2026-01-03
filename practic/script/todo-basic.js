const toDoList=[];


function clickAdd(){
    
    const inputElement = document.querySelector('.js-todo-input');
    const inputElement2=document.querySelector('.js-todo-date');
    const inputElement3=document.querySelector('.js-todo-time');
    const todoName = inputElement.value;
    const todoDate=inputElement2.value;
    const todoTime=inputElement3.value;

    if(todoName ==='' || todoDate ==='' || todoTime ===''){
        alert('Please enter a task.');
        return;
    }
    toDoList.push({todoName ,todoDate, todoTime});
    console.log(toDoList);
    inputElement.value='';
    inputElement2.value='';
    inputElement3.value='';
    toDisplay();
}

function toDisplay(){
    let todoHTML='';
    for (let i = 0; i < toDoList.length; i++) {
        const todo = toDoList[i];
        const html=
        `</div><div>${todo.todoName}</div> <div>${todo.todoDate}</div> <div>${todo.todoTime}</div>
 
            <button onclick="
                toDoList.splice(${i},1);
                toDisplay();
            "
            class="delete-todo-button"
            >
                Delete
            </button>
        </p>`
        todoHTML+=html;

        
    }
    document.querySelector('.js-todo-list').innerHTML=todoHTML;
    
}

