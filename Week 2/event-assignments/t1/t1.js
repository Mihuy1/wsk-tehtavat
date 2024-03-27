// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here

function renderTodoList() {
  const listContainer = document.querySelector('ul');
  listContainer.innerHTML = '';

  todoList.forEach(item => {
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    const deleteBtn = document.createElement('button');

    checkbox.type = 'checkbox';
    checkbox.checked = item.completed;

    listItem.id = item.id + 1;

    deleteBtn.addEventListener('click', evt => {
      const index = todoList.findIndex(todoItem => todoItem.id === item.id);
      if (index !== -1) {
        todoList.splice(index, 1);
        listContainer.removeChild(listItem);
        console.log(todoList);
        updateIds();
      }
    });

    checkbox.addEventListener('change', () => {
      item.completed = checkbox.checked;
      console.log(todoList);
    });
    const label = document.createElement('label');
    label.textContent = item.task;
    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(deleteBtn);
    listContainer.appendChild(listItem);
  });
}

function updateIds() {
  // Loop through the todoList array and update the ids of the items
  todoList.forEach((item, index) => {
    item.id = index + 1; // Update the id to maintain sequential numbering starting from 1
  });
}

renderTodoList();

const addButton = document.querySelector('.add-btn');
const modal = document.querySelector('div');
const item = document.querySelector('#add-item');

const form = document.querySelector('#modal-form'); // Select the form by its ID

form.addEventListener('submit', function (evt) {
  evt.preventDefault(); // Prevent the default form submission behavior
  console.log('form submitted');

  todoList.push({
    id: todoList.length + 1,
    task: item.value,
    completed: false,
  });

  console.log(todoList);
  renderTodoList();
});

addButton.addEventListener('click', () => {
  console.log('click');
  modal.style.display = 'block';
});

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
