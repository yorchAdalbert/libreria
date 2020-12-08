const express = require('express');
const path = require('path');
const router = express.Router();
const pool = require('../database.js');

router.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../views/root.html'));
});

router.get('/addBook', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../views/add_book.html'));
}); 

router.get('/addStudent', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../views/add_student.html'));
});

router.get('/addProfesor', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../views/add_profesor.html'));
});

router.post('/addBook', async (req, res) => {
  const {titulo, autor, editorial, codigo, ejemplares } = req.body;
  const newBook = {
    titulo,
    autor,
    editorial,
    codigo,
    ejemplares
  };
  await pool.query('INSERT INTO libro set ?', [newBook]);
  res.send('Received');
  console.log(newBook);
});

router.post('/addStudent', async (req, res) => {
  const {nombre, apellido, codigo, INE, celular} = req.body;
  const newStudent = {
    nombre,
    apellido,
    codigo,
    INE,
    celular
  };
  await pool.query('INSERT INTO estudiante set ?', [newStudent]);
  res.send('Received');
  console.log(newStudent);
});

router.post('/addProfesor', async (req, res) =>{
  const {nombre, apellido, codigo, INE, celular} = req.body;
  const newProfesor = {
    nombre,
    apellido,
    codigo,
    INE,
    celular
  };
  await pool.query('INSERT INTO profesor SET ?', [newProfesor]);
  console.log(newProfesor);
  res.send('Received');
});

module.exports = router;
