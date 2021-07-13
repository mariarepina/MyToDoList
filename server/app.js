const express = require('express');
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');
const morgan = require('morgan')
const app = express();

const PORT = 8080;

const DB = {
  todos: [],
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'))

app.get('/api/todos', (req, res) => {
  return res.json(DB.todos);
});

app.post('/api/todos', (req, res) => {
  const {todo} = req.body
  let newEntry = {
    id: uuidv4(),
    title: todo,
    status: false,
    editFlag: false
  }
  DB.todos.push(newEntry)
  return res.json(newEntry);
})

// app.get('/restaurants/:id', (req, res) => {
//   const {id} = req.params
//   console.log(id);
//   const element = DB.rests.find((el) =>{ 
//     if (el.id == id) {
//       return true
//     }
//     return false
//     })
//     console.log(element);
//   res.json(element);
// });

// app.post('/api/v1/todos', (req, res) => {
//   const newTodo = {
//     id: useId(),
//     text: req.body.text,
//     completed: false,
//     date: req.body.date,
//   };
//   DB.todos.push(newTodo);
//   return res.json(newTodo);
// });

// app.patch('/api/v1/todos', (req, res) => {
//   const currentTodo = DB.todos.find((todo) => todo.id === req.body.id);
//   currentTodo.completed = !currentTodo.completed;
//   return res.json(currentTodo);
// });

app.listen(PORT, () => {
  console.log('Server has been started on port', PORT);
});
