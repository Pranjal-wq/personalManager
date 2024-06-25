const inputtdl = document.querySelector('.textarea');
const buttontdl = document.querySelector('.buttoninput');
const listtdl = document.querySelector('.todolist');
const inputDate = document.querySelector('#taskDate');
const inputTime = document.querySelector('#taskTime');

function clickButton(e) {
    e.preventDefault();
    addTodo();
}

// Adding todoList
function addTodo() {
    const taskText = inputtdl.value;
    const taskDate = inputDate.value;
    const taskTime = inputTime.value;

    if (taskText === '' || taskDate === '' || taskTime === '') {
        alert('Please enter a task, date, and time.');
        return;
    }

    const itemall = document.createElement('div');
    itemall.classList.add('itemall');

    const item = document.createElement('p');
    item.classList.add('item');
    item.innerText = `${taskText} - ${taskDate} ${taskTime}`;
    itemall.appendChild(item);

    const checkbutton = document.createElement("button");
    checkbutton.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkbutton.classList.add("check-button");
    itemall.appendChild(checkbutton);

    const trashbutton = document.createElement("button");
    trashbutton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    trashbutton.classList.add("trash-button");
    itemall.appendChild(trashbutton);

    listtdl.appendChild(itemall);
    inputtdl.value = '';
    inputDate.value = '';
    inputTime.value = '';

    scheduleReminder(taskText, taskDate, taskTime);
}

// Checking and deleting todoList 
function okdel(e) {
    const item = e.target;

    // Check
    if (item.classList[0] === 'check-button') {
        const todolist = item.parentElement;
        todolist.classList.toggle('checklist');
    }

    // Delete
    if (item.classList[0] === 'trash-button') {
        const todolist = item.parentElement;
        todolist.remove();
    }
}

function scheduleReminder(task, date, time) {
    const reminderDate = new Date(`${date}T${time}`);
    const currentTime = new Date();

    const timeToReminder = reminderDate.getTime() - currentTime.getTime();

    if (timeToReminder >= 0) {
        setTimeout(() => {
            alert(`Reminder: ${task}`);
        }, timeToReminder);
    } else {
        alert('The selected time is in the past. Please select a future time.');
    }
}

buttontdl.addEventListener('click', clickButton);
listtdl.addEventListener('click', okdel);
