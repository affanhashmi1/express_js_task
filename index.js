const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use('/public', express.static('public'));

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Vidly | Welcome'
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'Vidly | About us'
  });
});

app.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Vidly | Contact'
  });
});

// ====================
// ====================

const movies = [
  { id: 1, name: 'Maze Runner The Death Cure', path: '/movie_1.jpg' },
  { id: 2, name: 'Boo2!', path: '/movie_2.jpg' },
  { id: 3, name: 'Logan', path: '/movie_3.jpg' },
  { id: 4, name: 'Moonlight', path: '/movie_4.jpg' },
  { id: 5, name: 'The Greatest Showman', path: '/movie_5.jpg' },
  { id: 6, name: 'Avatar', path: '/movie_6.jpg' }
];

// ====================
// ====================

app.get('/movies', (req, res) => {
  res.render('movies', {
    title: 'Vidly | Movies list',
    movies: movies
  });
});

app.get('/movie/:id', (req, res) => {
  res.render('movie', {
    title: 'Vidly | Movie' + movies[req.params.id - 1].name,
    movie: movies[req.params.id - 1]
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));
