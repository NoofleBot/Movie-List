import React, { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [movieData, setMovieData] = useState([])
  const movies = [
    {title: 'Mean Girls'},
    {title: 'Hackers'},
    {title: 'The Grey'},
    {title: 'Sunshine'},
    {title: 'Ex Machina'},
  ]

  useEffect(() => {
    fetch('http://localhost:5172/movies')
      .then(response => {
        return response.json();
      })
      .then(apiData => {
        console.log(apiData);
        setMovieData(apiData)
      })
  }, []);

  // function getMovies() {
  //   fetch('http://localhost:5172/movies')
  //         .then((response) => response.json())
  //         .then((data) => {
  //           console.log(data)
  //         })
  //       }

  return (
    <>
      <h1>Movie List App</h1>

      <ul>
        {movieData.map((iterate) => (
          <li>{iterate}</li>
        ))}
      </ul>
      <button type="button">Test Database!</button>
    </>
  )
}

export default App
