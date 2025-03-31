const express = require('express')
const cors = require('cors');
const app = express()
const port = 5172
const knex = require('knex')(require('../knexfile.js')['development'])

app.use(express.json());
app.use(cors());

app.get('/', (request, response) => {
  response.send('Start of API functionality')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/movies', (request, response) => {
  knex('movies')
    .select('*')
    .then(data => {
      var movieNames = data.map(movie => movie.title)
      response.json(movieNames);
    })
})

app.post('/movies', (request, response) => {
  let {movieName, isWatched, toWatch} = request.body
  knex('movies')
    .insert({
      title: movieName,
      is_watched: isWatched,
      to_watch: toWatch
    })
    .then(() => {
      response.status(201).json({message: `Movie ${movieName} was added with is watched set to ${isWatched} and to watch set to ${toWatch}`})
    })
    .catch((err) => {
      response.status(500).json({message: 'Error creating movie entry', error: err})
    })
})

// app.delete('/movies', (request, response) => {
//   knex('movies')
//     .delete('')
// })
