import './App.css'

function App() {
  const movies = [
    {title: 'Mean Girls'},
    {title: 'Hackers'},
    {title: 'The Grey'},
    {title: 'Sunshine'},
    {title: 'Ex Machina'},
  ]

  return (
    <>
      <h1>Movie List App</h1>
      <ul>
        {movies.map((iterate) => (
          <li>{iterate.title}</li>
        ))}
      </ul>

    </>
  )
}

export default App
