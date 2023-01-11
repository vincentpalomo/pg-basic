const express = require('express');
const app = express();
const pool = require('./db');

const PORT = 3000;

app.use(express.json()); // req.body

// routes

// all todos

app.get('/todos', async (req, res) => {
  try {
    const allTodos = await pool.query('SELECT * FROM todo');
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err);
  }
});

// get todo

app.get('/todo/:id');

// create todo

app.post('/todos', async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      'INSERT INTO todo(description) VALUES ($1) RETURNING *',
      [description]
    );
    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err);
  }
});

// delete todo

app.listen(PORT, () => {
  console.log(`Server running: http://localhost:${PORT}`);
});
