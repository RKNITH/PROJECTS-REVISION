// const inputBox = document.getElementById('inp');
// const addBtn = document.getElementById('add');
// const todoList = document.getElementById('result');

// let editTodo = null;

// const addTodo = () => {
//     const inputText = inputBox.value.trim();
//     if (inputText.length <= 0) {
//         alert("You must write something in your Todo");
//         return;
//     }
//     if (addBtn.value === 'Edit') {
//         const oldText = editTodo.querySelector('p').innerHTML;
//         const newText = inputText;
//         editTodo.querySelector('p').innerHTML = newText;
//         editLocalTodos(oldText, newText);

//         addBtn.value = 'Add';
//         inputBox.value = '';
//         editTodo = null;
//     } else {
//         const li = document.createElement('li');
//         const p = document.createElement('p');
//         p.innerHTML = inputText;
//         li.append(p);

//         const deleteBtn = document.createElement('button');
//         deleteBtn.innerText = 'Remove';
//         deleteBtn.classList.add('delBtn', 'del');
//         li.appendChild(deleteBtn);

//         const editBtn = document.createElement('button');
//         editBtn.innerText = 'Edit';
//         editBtn.classList.add('delBtn', 'edit');
//         li.appendChild(editBtn);
//         todoList.appendChild(li);
//         inputBox.value = '';
//         saveLocalTodo(inputText);
//     }
// }

// const updateTodo = (e) => {
//     if (e.target.innerHTML === 'Remove') {
//         todoList.removeChild(e.target.parentElement);
//         deleteLocalTodos(e.target.parentElement.querySelector('p').innerHTML);
//     }
//     if (e.target.innerHTML === 'Edit') {
//         inputBox.value = e.target.parentElement.querySelector('p').innerHTML;
//         inputBox.focus();
//         addBtn.value = 'Edit';
//         editTodo = e.target.parentElement;
//     }
// }

// const saveLocalTodo = (todo) => {
//     let todos = [];
//     if (localStorage.getItem('todos') === null) {
//         todos = [];
//     } else {
//         todos = JSON.parse(localStorage.getItem('todos'));
//     }

//     todos.push(todo);
//     localStorage.setItem('todos', JSON.stringify(todos));
// }

// const getLocalTodos = () => {
//     let todos;
//     if (localStorage.getItem('todos') === null) {
//         todos = [];
//     } else {
//         todos = JSON.parse(localStorage.getItem('todos'));
//         todos.forEach(todo => {
//             const li = document.createElement('li');
//             const p = document.createElement('p');
//             p.innerHTML = todo;
//             li.append(p);

//             const deleteBtn = document.createElement('button');
//             deleteBtn.innerText = 'Remove';
//             deleteBtn.classList.add('delBtn', 'del');
//             li.appendChild(deleteBtn);

//             const editBtn = document.createElement('button');
//             editBtn.innerText = 'Edit';
//             editBtn.classList.add('delBtn', 'edit');
//             li.appendChild(editBtn);
//             todoList.appendChild(li);
//         });
//     }
// }

// const deleteLocalTodos = (todo) => {
//     let todos;
//     if (localStorage.getItem('todos') === null) {
//         todos = [];
//     } else {
//         todos = JSON.parse(localStorage.getItem('todos'));
//     }
//     const todoIndex = todos.indexOf(todo);
//     todos.splice(todoIndex, 1);
//     localStorage.setItem('todos', JSON.stringify(todos));
// }

// const editLocalTodos = (oldTodo, newTodo) => {
//     let todos = JSON.parse(localStorage.getItem('todos'));
//     let todoIndex = todos.indexOf(oldTodo);
//     if (todoIndex !== -1) {
//         todos[todoIndex] = newTodo;
//         localStorage.setItem('todos', JSON.stringify(todos));
//     }
// }

// document.addEventListener('DOMContentLoaded', getLocalTodos);
// addBtn.addEventListener('click', addTodo);
// todoList.addEventListener('click', updateTodo);



//*************************************************

// const inputBox = document.getElementById('inp');
// const addBtn = document.getElementById('add');
// const todoList = document.getElementById('result');

// let editTodo = null

// const addTodo = () => {
//     let inputText = inputBox.value.trim()

//     if (inputText === '') {
//         alert('Please add todo')
//         return
//     }
//     if (addBtn.innerHTML === 'Edit') {
//         let oldText = editTodo.querySelector('p').innerHTML
//         let newText = inputBox.value

//         editTodo.querySelector('p').innerHTML = newText
//         addBtn.innerHTML = 'Add'
//         inputBox.value = ''
//         editTodo = null

//     }
//     else {
//         let li = document.createElement('li')
//         let p = document.createElement('p')
//         p.innerHTML = inputText
//         li.append(p)

//         let editBtn = document.createElement('button')
//         editBtn.classList.add('delBtn', 'edit')
//         editBtn.innerText = 'Edit'
//         li.appendChild(editBtn)

//         let deleteBtn = document.createElement('button')
//         deleteBtn.classList.add('delBtn', 'del')
//         deleteBtn.innerText = 'Remove'
//         li.appendChild(deleteBtn)

//         todoList.appendChild(li)
//         inp.value = ''
//         saveLocalTodo(inputText)

//     }


// }

// const updateTodo = (e) => {
//     if (e.target.innerHTML === 'Remove') {
//         todoList.removeChild(e.target.parentElement)
//     }

//     if (e.target.innerHTML === 'Edit') {
//         inputBox.value = e.target.parentElement.querySelector('p').innerHTML
//         inputBox.focus()
//         addBtn.innerHTML = 'Edit'
//         editTodo = e.target.parentElement
//     }
// }

// const saveLocalTodo = (todo) => {
//     let todos = []
//     if (localStorage.getItem(todos) === null) {
//         todos = []
//     }
//     else {
//         todos = JSON.parse(localStorage.getItem(todos))
//     }
//     todos.push(todo)
//     localStorage.setItem('todos', JSON.stringify(todos))
// }

// // const getLocalTodos = () => {
// //     let todos
// //     if (localStorage.getItem(todos) === null) {
// //         todos = []
// //     }
// //     else {
// //         todos = JSON.parse(localStorage.getItem(todos))

// //         todos.forEach(todo => {
// //             let li = document.createElement('li')
// //             let p = document.createElement('p')
// //             p.innerHTML = todo
// //             li.append(p)

// //             let editBtn = document.createElement('button')
// //             editBtn.classList.add('delBtn', 'edit')
// //             editBtn.innerText = 'Edit'
// //             li.appendChild(editBtn)

// //             let deleteBtn = document.createElement('button')
// //             deleteBtn.classList.add('delBtn', 'del')
// //             deleteBtn.innerText = 'Remove'
// //             li.appendChild(deleteBtn)

// //             todoList.appendChild(li)


// //         });
// //     }



// // }






// // document.addEventListener('DOMContentLoaded', getLocalTodos)
// todoList.addEventListener('click', updateTodo)
// addBtn.addEventListener('click', addTodo)









// ****************************************************************************************




// const inputBox = document.getElementById('inp');
// const addBtn = document.getElementById('add');
// const todoList = document.getElementById('result');

// let editTodo = null;

// const addTodo = () => {
//     const inputText = inputBox.value.trim();
//     if (inputText.length <= 0) {
//         alert("You must write something in your Todo");
//         return;
//     }
//     if (addBtn.value === 'Edit') {
//         const oldText = editTodo.querySelector('p').innerHTML;
//         const newText = inputText;
//         editTodo.querySelector('p').innerHTML = newText;
//         editLocalTodos(oldText, newText);

//         addBtn.value = 'Add';
//         inputBox.value = '';
//         editTodo = null;
//     } else {
//         const li = document.createElement('li');
//         const p = document.createElement('p');
//         p.innerHTML = inputText;
//         li.append(p);

//         const deleteBtn = document.createElement('button');
//         deleteBtn.innerText = 'Remove';
//         deleteBtn.classList.add('delBtn', 'del');
//         li.appendChild(deleteBtn);

//         const editBtn = document.createElement('button');
//         editBtn.innerText = 'Edit';
//         editBtn.classList.add('delBtn', 'edit');
//         li.appendChild(editBtn);
//         todoList.appendChild(li);
//         inputBox.value = '';
//         saveLocalTodo(inputText);
//     }
// }

// const updateTodo = (e) => {
//     if (e.target.innerHTML === 'Remove') {
//         todoList.removeChild(e.target.parentElement);
//         deleteLocalTodos(e.target.parentElement.querySelector('p').innerHTML);
//     }
//     if (e.target.innerHTML === 'Edit') {
//         inputBox.value = e.target.parentElement.querySelector('p').innerHTML;
//         inputBox.focus();
//         addBtn.value = 'Edit';
//         editTodo = e.target.parentElement;
//     }
// }

// const saveLocalTodo = (todo) => {
//     let todos = [];
//     if (localStorage.getItem('todos') === null) {
//         todos = [];
//     } else {
//         todos = JSON.parse(localStorage.getItem('todos'));
//     }

//     todos.push(todo);
//     localStorage.setItem('todos', JSON.stringify(todos));
// }

// const getLocalTodos = () => {
//     let todos;
//     if (localStorage.getItem('todos') === null) {
//         todos = [];
//     } else {
//         todos = JSON.parse(localStorage.getItem('todos'));
//         todos.forEach(todo => {
//             const li = document.createElement('li');
//             const p = document.createElement('p');
//             p.innerHTML = todo;
//             li.append(p);

//             const deleteBtn = document.createElement('button');
//             deleteBtn.innerText = 'Remove';
//             deleteBtn.classList.add('delBtn', 'del');
//             li.appendChild(deleteBtn);

//             const editBtn = document.createElement('button');
//             editBtn.innerText = 'Edit';
//             editBtn.classList.add('delBtn', 'edit');
//             li.appendChild(editBtn);
//             todoList.appendChild(li);
//         });
//     }
// }

// const deleteLocalTodos = (todo) => {
//     let todos;
//     if (localStorage.getItem('todos') === null) {
//         todos = [];
//     } else {
//         todos = JSON.parse(localStorage.getItem('todos'));
//     }
//     const todoIndex = todos.indexOf(todo);
//     todos.splice(todoIndex, 1);
//     localStorage.setItem('todos', JSON.stringify(todos));
// }

// const editLocalTodos = (oldTodo, newTodo) => {
//     let todos = JSON.parse(localStorage.getItem('todos'));
//     let todoIndex = todos.indexOf(oldTodo);
//     if (todoIndex !== -1) {
//         todos[todoIndex] = newTodo;
//         localStorage.setItem('todos', JSON.stringify(todos));
//     }
// }

// document.addEventListener('DOMContentLoaded', getLocalTodos);
// addBtn.addEventListener('click', addTodo);
// todoList.addEventListener('click', updateTodo);


// *****************************************************************




// const inputBox = document.getElementById('inp');
// const addBtn = document.getElementById('add');
// const todoList = document.getElementById('result');

// let editTodo = null;


// const addTodo = () => {
//     const inputText = inputBox.value.trim()

//     if (inputText === '') {
//         alert('please add something inside tood')
//         return
//     }
//     if (addBtn.innerHTML === 'Edit') {
//         let oldtext = editTodo.querySelector('p').innerHTML
//         let newtext = inputBox.value.trim()

//         editTodo.querySelector('p').innerHTML = newtext
//         editLocalTodos(oldtext, newtext)
//         addBtn.innerHTML = 'Add'
//         inputBox.value = ''



//     }
//     else {
//         let li = document.createElement('li')
//         let p = document.createElement('p')

//         p.innerHTML = inputText
//         li.append(p)


//         let editBtn = document.createElement('button')
//         editBtn.classList.add('delBtn', 'edit')
//         editBtn.innerText = 'Edit'
//         li.appendChild(editBtn)


//         let delBtn = document.createElement('button')
//         delBtn.classList.add('delBtn', 'del')
//         delBtn.innerText = 'Remove'
//         li.appendChild(delBtn)

//         todoList.append(li)
//         saveLocalTodo(inputText)
//         inputBox.value = ''

//     }





// }

// const updateTodo = (e) => {
//     if (e.target.innerHTML === 'Remove') {
//         todoList.removeChild(document.querySelector('li'))
//         deleteLocalTodos(document.querySelector('li'))
//     }
//     if (e.target.innerHTML === 'Edit') {
//         inputBox.value = e.target.parentElement.querySelector('p').innerHTML
//         editTodo = e.target.parentElement
//         inputBox.focus()
//         addBtn.innerHTML = 'Edit'
//     }

// }




// const saveLocalTodo = (todo) => {
//     let todos = []
//     if (localStorage.getItem('todos') === null) {
//         todos = []
//     } else {
//         todos = JSON.parse(localStorage.getItem('todos'))
//     }
//     todos.push(todo)
//     localStorage.setItem('todos', JSON.stringify(todos))


// }

// const getLocalTodos = () => {
//     let todos
//     if (localStorage.getItem('todos') === null) {
//         todos = []
//     } else {
//         todos = JSON.parse(localStorage.getItem('todos'));
//         todos.forEach(todo => {
//             let li = document.createElement('li')
//             let p = document.createElement('p')

//             p.innerHTML = todo
//             li.append(p)


//             let editBtn = document.createElement('button')
//             editBtn.classList.add('delBtn', 'edit')
//             editBtn.innerText = 'Edit'
//             li.appendChild(editBtn)


//             let delBtn = document.createElement('button')
//             delBtn.classList.add('delBtn', 'del')
//             delBtn.innerText = 'Remove'
//             li.appendChild(delBtn)

//             todoList.append(li)


//         });


//     }

// }

// const editLocalTodos = (oldTodo, newTodo) => {
//     let todos = JSON.parse(localStorage.getItem('todos'))

//     let todoIndex = todos.indexOf(oldTodo)

//     if (todoIndex !== -1) {
//         todos[todoIndex] = newTodo
//         localStorage.setItem('todos', JSON.stringify(todos))
//     }
// }



// const deleteLocalTodos = (todo) => {
//     let todos
//     if (localStorage.getItem('todos') === null) {
//         todos = []
//     } else {
//         todos = JSON.parse(localStorage.getItem('todos'));
//     }
//     const todoIndex = todos.indexOf('todo')
//     todos.splice(todoIndex, 1)
//     localStorage.setItem('todos', JSON.stringify(todos));
// }






// addBtn.addEventListener('click', addTodo)
// todoList.addEventListener('click', updateTodo)
// document.addEventListener('DOMContentLoaded', getLocalTodos)



// *************************************************************************************************



// const inputBox = document.getElementById('inp');
// const addBtn = document.getElementById('add');
// const todoList = document.getElementById('result');

// let editTodo = null;


// const addTodo = () => {
//     const inputText = inputBox.value.trim()
//     if (inputText === '') {
//         alert('please add todo')
//         return
//     }
//     if (addBtn.innerHTML === 'Edit') {
//         let oldtext = editTodo.querySelector('p').innerHTML
//         let newText = inputBox.value.trim()

//         editTodo.querySelector('p').innerHTML = newText
//         editLocalTodos(oldtext, newText)
//         inputBox.value = ''
//         addBtn.innerHTML = 'Add'



//     }
//     else {
//         let li = document.createElement('li')
//         let p = document.createElement('p')

//         p.innerHTML = inputText
//         li.append(p)

//         let editBtn = document.createElement('button')
//         editBtn.classList.add('delBtn', 'edit')
//         editBtn.innerText = 'Edit'
//         li.appendChild(editBtn)

//         let deleteBtn = document.createElement('button')
//         deleteBtn.classList.add('delBtn', 'del')
//         deleteBtn.innerText = 'Remove'
//         li.appendChild(deleteBtn)

//         todoList.append(li)
//         inputBox.value = ''
//         saveLocalTodo(inputText)
//     }

// }

// const updateTodo = (e) => {
//     if (e.target.innerHTML === 'Remove') {
//         todoList.removeChild(e.target.parentElement)
//         deleteLocalTodos(e.target.parentElement)

//     }
//     if (e.target.innerHTML === 'Edit') {
//         inputBox.value = e.target.parentElement.querySelector('p').innerHTML
//         editTodo = e.target.parentElement
//         inputBox.focus()
//         addBtn.innerHTML = 'Edit'
//     }

// }



// const saveLocalTodo = (todo) => {
//     let todos = []
//     if (localStorage.getItem('todos') === null) {
//         todos = []
//     }
//     else {
//         todos = JSON.parse(localStorage.getItem('todos'))
//     }
//     todos.push(todo)
//     localStorage.setItem('todos', JSON.stringify(todos))

// }

// const getLocalTodos = () => {
//     let todos = []
//     if (localStorage.getItem('todos') === null) {
//         todos = []
//     }
//     else {
//         todos = JSON.parse(localStorage.getItem('todos'))
//         todos = todos.forEach(todo => {
//             let li = document.createElement('li')
//             let p = document.createElement('p')

//             p.innerHTML = todo
//             li.append(p)

//             let editBtn = document.createElement('button')
//             editBtn.classList.add('delBtn', 'edit')
//             editBtn.innerText = 'Edit'
//             li.appendChild(editBtn)

//             let deleteBtn = document.createElement('button')
//             deleteBtn.classList.add('delBtn', 'del')
//             deleteBtn.innerText = 'Remove'
//             li.appendChild(deleteBtn)
//             todoList.append(li)

//         })
//     }



// }

// const deleteLocalTodos = (todo) => {
//     let todos = []
//     if (localStorage.getItem('todos') === null) {
//         todos = []
//     }
//     else {
//         todos = JSON.parse(localStorage.getItem('todos'))
//     }

//     const todoIndex = todos.indexOf(todo)
//     todos.splice(todoIndex, 1)
//     localStorage.setItem('todos', JSON.stringify(todos));




// }

// const editLocalTodos = (oldText, newText) => {
//     let todos = JSON.parse(localStorage.getItem('todos'))
//     let todoIndex = todos.indexOf(oldText)
//     if (todoIndex != -1) {
//         todos[todoIndex] = newText
//         localStorage.setItem('todos', JSON.stringify(todos));
//     }


// }


// addBtn.addEventListener('click', addTodo)
// todoList.addEventListener('click', updateTodo)

// document.addEventListener('DOMContentLoaded', getLocalTodos)



// *****************************************************************************




// const inputBox = document.getElementById('inp');
// const addBtn = document.getElementById('add');
// const todoList = document.getElementById('result');

// let editTodo = null;

// const addTodo = () => {

//     inputText = inputBox.value.trim()

//     if (inputBox.value === '') {
//         alert('please write somethongs')
//         return
//     }
//     if (addBtn.innerHTML === 'Edit') {
//         let oldText = editTodo.querySelector('p').innerHTML
//         let newText = inputBox.value
//         editTodo.querySelector('p').innerHTML = newText
//         editLocalTodos(oldText, newText)
//         inputBox.value = ''


//     }
//     else {
//         let li = document.createElement('li')
//         let p = document.createElement('p')
//         p.innerHTML = inputText
//         li.append(p)

//         let editBTn = document.createElement('button')
//         editBTn.classList.add('delBtn', 'edit')
//         editBTn.innerHTML = 'Edit'
//         li.appendChild(editBTn)


//         let delBTn = document.createElement('button')
//         delBTn.classList.add('delBtn', 'del')
//         delBTn.innerHTML = 'Remove'
//         li.appendChild(delBTn)

//         todoList.append(li)
//         inputBox.value = ''
//         saveLocalTodo(inputText)
//     }

// }

// const updateTodo = (e) => {
//     if (e.target.innerHTML === 'Remove') {
//         todoList.removeChild(e.target.parentElement)
//         deleteLocalTodos(e.target.parentElement)
//     }
//     if (e.target.innerHTML === 'Edit') {
//         addBtn.innerHTML = 'Edit'
//         inputBox.value = e.target.parentElement.querySelector('p').innerHTML
//         inputBox.focus()
//         editTodo = e.target.parentElement
//     }

// }



// const saveLocalTodo = (todo) => {
//     let todos = []
//     if (localStorage.getItem('todos') === null) {
//         todos = []
//     }
//     else {
//         todos = JSON.parse(localStorage.getItem('todos'))
//     }
//     todos.push(todo)
//     localStorage.setItem('todos', JSON.stringify(todos))

// }

// const getLocalTodos = () => {
//     let todos
//     if (localStorage.getItem('todos') === null) {
//         todos = []
//     }
//     else {
//         todos = JSON.parse(localStorage.getItem('todos'))
//         todos.forEach(todo => {

//             let li = document.createElement('li')
//             let p = document.createElement('p')
//             p.innerHTML = todo
//             li.append(p)

//             let editBTn = document.createElement('button')
//             editBTn.classList.add('delBtn', 'edit')
//             editBTn.innerHTML = 'Edit'
//             li.appendChild(editBTn)


//             let delBTn = document.createElement('button')
//             delBTn.classList.add('delBtn', 'del')
//             delBTn.innerHTML = 'Remove'
//             li.appendChild(delBTn)

//             todoList.append(li)

//         })
//     }

// }

// const editLocalTodos = (oldTodo, newTodo) => {
//     let todos = JSON.parse(localStorage.getItem('todos'))
//     let todoIndex = todos.indexOf(oldTodo)
//     if (todoIndex != -1) {
//         todos[todoIndex] = newTodo
//         localStorage.setItem('todos', JSON.stringify(todos))
//     }


// }

// const deleteLocalTodos = (todo) => {
//     let todos = []
//     if (localStorage.getItem('todos') === null) {
//         todos = []
//     }
//     else {
//         todos = JSON.parse(localStorage.getItem('todos'))
//     }
//     const todoIndex = todos.indexOf(todo)
//     todos.splice(todoIndex, 1)
//     localStorage.setItem('todos', JSON.stringify(todos))
// }


// addBtn.addEventListener('click', addTodo)
// todoList.addEventListener('click', updateTodo)
// document.addEventListener('DOMContentLoaded', getLocalTodos)


// ***********************************************************************

const inputBox = document.getElementById('inp');
const addBtn = document.getElementById('add');
const todoList = document.getElementById('result');

let editTodo = null;

const addTodo = () => {

    let inputText = inputBox.value.trim()
    if (inputBox.value === '' || inputText.lenght === 0) {
        alert('please write something inside input box...')
        return
    }
    if (addBtn.innerHTML === 'Edit') {
        let oldText = editTodo.querySelector('p').innerHTML
        let newText = inputBox.value
        editTodo.querySelector('p').innerHTML = newText
        editLocalTodos(oldText, newText)
        inputBox.value = ''
    }
    else {
        let li = document.createElement('li')
        let p = document.createElement('p')

        p.innerHTML = inputText
        li.append(p)

        let editBTn = document.createElement('button')
        editBTn.innerHTML = 'Edit'
        editBTn.classList.add('delBtn', 'edit')
        li.appendChild(editBTn)

        let delBTn = document.createElement('button')
        delBTn.innerHTML = 'Remove'
        delBTn.classList.add('delBtn', 'del')
        li.appendChild(delBTn)

        todoList.append(li)
        saveLocalTodo(inputText)
        inputBox.value = ''
    }
}

const updateTodo = (e) => {
    if (e.target.innerHTML === 'Remove') {
        todoList.removeChild(e.target.parentElement)
        deleteLocalTodos(e.target.parentElement)
    }
    if (e.target.innerHTML === 'Edit') {
        inputBox.value = e.target.parentElement.querySelector('p').innerHTML
        editTodo = e.target.parentElement
        addBtn.innerHTML = 'Edit'
        inputBox.focus()
    }
}
const saveLocalTodo = (todo) => {
    let todos = []
    if (localStorage.getItem('todos') === null) {
        todos = []
    }
    else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    todos.push(todo)
    localStorage.setItem('todos', JSON.stringify(todos))

}
const getLocalTodos = () => {
    let todos
    if (localStorage.getItem('todos') === null) {
        todos = []
    }
    else {
        todos = JSON.parse(localStorage.getItem('todos'))
        todos.forEach(todo => {
            let li = document.createElement('li')
            let p = document.createElement('p')

            p.innerHTML = todo
            li.append(p)

            let editBTn = document.createElement('button')
            editBTn.innerHTML = 'Edit'
            editBTn.classList.add('delBtn', 'edit')
            li.appendChild(editBTn)

            let delBTn = document.createElement('button')
            delBTn.innerHTML = 'Remove'
            delBTn.classList.add('delBtn', 'del')
            li.appendChild(delBTn)
            todoList.append(li)
        });
    }
}



const editLocalTodos = (oldTodo, newTodo) => {
    let todos = JSON.parse(localStorage.getItem('todos'))
    let todoIndex = todos.indexOf(oldTodo)
    if (todoIndex != -1) {
        todos[todoIndex] = newTodo
        localStorage.setItem('todos', JSON.stringify(todos))
    }


}

const deleteLocalTodos = (todo) => {
    let todos = []
    if (localStorage.getItem('todos') === null) {
        todos = []
    }
    else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    const todoIndex = todos.indexOf(todo)
    todos.splice(todoIndex, 1)
    localStorage.setItem('todos', JSON.stringify(todos))
}



addBtn.addEventListener('click', addTodo)
todoList.addEventListener('click', updateTodo)
document.addEventListener('DOMContentLoaded', getLocalTodos)