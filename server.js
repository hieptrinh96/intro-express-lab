// first import modules
import express from 'express';
import { students } from './data/student-data.js';

// create Express app
const app = express();

// configure the app
app.set('view engine', 'ejs');

// mount routes
app.get('/', function (req, res) {
  res.redirect('/students')
})

app.get('/food', function (req, res) {
  res.send('<p>I love milk tea</p>')
})

app.get('/storm', function (req, res) {
  res.send('<h2>Storm is my dog</h2>')
})

app.get('/home', function (req, res) {
  res.render('home')
})

app.get('/apples', function (req, res) {
  res.send('Here is a list of different apple types')
})

app.get('/apples', function (req, res) {
  res.send('Thanks for the info')
})

app.get('/students', function (req, res) {
  res.render('students/index', {
    students: students
  })
})

// tell app to listen on port 3000
app.listen(3000, function () {
  console.log('Listening on port 3000')
})