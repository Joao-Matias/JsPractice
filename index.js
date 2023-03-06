const name = "Joao";

const person = { id: 1, name: "Joao", age: 43 };

const party = [
  { id: 1, name: "Joao", age: 43 },
  { id: 2, name: "Marta", age: 46 },
  { id: 3, name: "Diego", age: 55 },
  { id: 4, name: "Rui", age: 65 },
];

const ages = party.map((person) => person.age);

ages.sort((a, b) => a - b);

const sortedByAge = party.sort((a, b) => a.age - b.age);
const youngest = sortedByAge[0];
// 0 -> index in the first position
const eldest = sortedByAge[sortedByAge.length - 1];
// ?? -> index in the last position

console.log(youngest);
console.log(eldest);

// function takes array and id. On the array - id, task, done.  id-number, task- string , done -bulleon

/* function that takes an array of items and an ID, 
The array of items has the following shape:

const array = [
    {id: 'dfdafdf', task: 'Task 1', done: false},
    {id: 'dfdafde', task: 'Task 2', done: false},
    {id: 'dfdafdy', task: 'Task 3', done: false},
]

i.e. toggle(array, 'dfdafde')

expected: 
[
    {id: 'dfdafdf', task: 'Task 1', done: false},
    {id: 'dfdafde', task: 'Task 2', done: true},
    {id: 'dfdafdy', task: 'Task 3', done: false},
]

*/
// const array = [
//     {id: 'dfdafdf', task: 'Task 1', done: false},
//     {id: 'dfdafde', task: 'Task 2', done: false},
//     {id: 'dfdafdy', task: 'Task 3', done: false},
// ];

// array.id

const toggle = function (array, id) {
  let newArray = array.map((value) => {
    if (value.id === id) {
      return { ...value, done: !value.done };
    } else {
      return value;
    }
  });

  return newArray;
};

console.log(
  toggle(
    [
      { id: 1, task: "Task 1", done: false },
      { id: 2, task: "Task 2", done: false },
      { id: 3, task: "Task 3", done: false },
    ],
    2
  )
);

const updateTask = function (taskList, id, taskText) {
  return taskList.map((value) => {
    if (value.id === id) {
      return { ...value, task: taskText };
    } else {
      return value;
    }
  });
};

console.log(
  updateTask(
    [
      { id: 1, task: "Task 1", done: false },
      { id: 2, task: "Task 2", done: false },
      { id: 3, task: "Task 3", done: false },
    ],
    2,
    "New Task"
  )
);

const removeTask = function (array, id) {
  return array.filter((value) => value.id !== id);
};

const addTask = function (tasksArray, newTask) {
  return [
    { id: Math.trunc(Math.random() * 100), task: newTask, done: false },
    ...tasksArray,
  ];
};

console.log(
  addTask(
    [
      { id: 1, task: "Task 1", done: false },
      { id: 2, task: "Task 2", done: false },
      { id: 3, task: "Task 3", done: false },
    ],
    "Task 4"
  )
);
