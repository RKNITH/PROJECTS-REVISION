// // Initialize tasks array
// let tasks = [];

// // Add task to the list
// function addTask() {
//     const taskInput = document.getElementById('task').value.trim();
//     const dueDate = document.getElementById('dueDate').value;
//     const priority = document.getElementById('priority').value;

//     if (taskInput && dueDate) {
//         const task = {
//             title: taskInput,
//             dueDate: dueDate,
//             priority: priority,
//             status: 'Not Started'
//         };
//         tasks.push(task);
//         renderTasks();
//         clearInputFields();
//     }
// }

// // Clear input fields after adding a task
// function clearInputFields() {
//     document.getElementById('task').value = '';
//     document.getElementById('dueDate').value = '';
//     document.getElementById('priority').value = 'low';
// }

// // Render tasks on the page
// function renderTasks() {
//     const taskList = document.getElementById('taskList');
//     taskList.innerHTML = ''; // Clear previous list

//     tasks.forEach((task, index) => {
//         const li = document.createElement('li');
//         li.innerHTML = `
//             <div class="task-details">
//                 <div>
//                     <strong>${task.title}</strong>
//                     <p class="task-meta">Due: ${task.dueDate} | Priority: ${task.priority}</p>
//                 </div>
//                 <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
//             </div>
//         `;
//         taskList.appendChild(li);
//     });
// }

// // Delete a task
// function deleteTask(index) {
//     tasks.splice(index, 1); // Remove task by index
//     renderTasks();
// }

// // Search tasks
// function searchTask() {
//     const searchInput = document.getElementById('search').value.toLowerCase();
//     const filteredTasks = tasks.filter(task => task.title.toLowerCase().includes(searchInput));

//     const taskList = document.getElementById('taskList');
//     taskList.innerHTML = ''; // Clear previous list

//     filteredTasks.forEach((task, index) => {
//         const li = document.createElement('li');
//         li.innerHTML = `
//             <div class="task-details">
//                 <div>
//                     <strong>${task.title}</strong>
//                     <p class="task-meta">Due: ${task.dueDate} | Priority: ${task.priority}</p>
//                 </div>
//                 <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
//             </div>
//         `;
//         taskList.appendChild(li);
//     });
// }

// // Initial render
// renderTasks();


// *******************************************************************************************

// const task = document.getElementById('task')
// const dueDate = document.getElementById('dueDate')
// const priority = document.getElementById('priority')
// const taskList = document.getElementById('taskList')
// const search = document.getElementById('search')


// let tasks = []




// const addTask = () => {
//     if (task.value.trim() && dueDate.value) {
//         const taskes = {
//             taskes: task.value.trim(),
//             dueDate: dueDate.value,
//             priority: priority.value,
//             status: 'Not started'
//         }
//         tasks.push(taskes)
//         displayTask()
//         task.value = ''
//         dueDate.value = ''
//         priority.value = ''


//     }
// }

// const displayTask = (taskArray = tasks) => {
//     taskList.innerHTML = '';

//     taskArray.forEach((tas, index) => {
//         let li = document.createElement('li');
//         li.innerHTML = `
//             <div class="task-details">
//                 <div>
//                     <strong>${tas.taskes}</strong>
//                     <p class="task-meta">Due: ${tas.dueDate} | Priority: ${tas.priority}</p>
//                 </div>
//                 <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
//             </div >
//         `;
//         taskList.appendChild(li);
//     });
// };



// const deleteTask = (index) => {
//     tasks.splice(index, 1)
//     displayTask(tasks)

// }


// search.addEventListener('input', () => {
//     const searchText = search.value.trim().toLowerCase();

//     const filteredTasks = tasks.filter(tas => tas.taskes.toLowerCase().includes(searchText));

//     displayTask(filteredTasks);
// });



// displayTask(tasks)





const task = document.getElementById('task')
const dueDate = document.getElementById('dueDate')
const priority = document.getElementById('priority')
const taskList = document.getElementById('taskList')
const search = document.getElementById('search')


let tasks = []


const displayTask = (tasks) => {
    taskList.innerHTML = ''
    tasks.forEach((tas, index) => {
        let li = document.createElement('li')
        li.innerHTML = `
                    <div class="task-details">
                <div>
                    <strong>${tas.taskes}</strong>
                    <p class="task-meta">Due: ${tas.dueDate} | Priority: ${tas.priority}</p>
                </div>
                <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
            </div >
        `
        taskList.appendChild(li)
    });

}

const addTask = () => {
    const taskes = {
        taskes: task.value.trim(),
        dueDate: task.value,
        priority: task.value
    }

    tasks.push(taskes)
    displayTask(tasks)
    dueDate.value = ''
    task.value = ''
    priority.value = ''
}

const deleteTask = (index) => {
    tasks.splice(index, 1)
    displayTask(tasks)
}

search.addEventListener('input', () => {
    let searchInput = search.value.trim().toLowerCase()
    let filteredTasks = tasks.filter(tas => tas.task.toLowerCase().includes(searchInput))
    displayTask(filteredTasks)

})


displayTask(tasks)