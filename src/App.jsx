// App.jsx
import React, { useState } from 'react'
import Tabs from './components/Tabs'
import MovieCard from './components/MovieCard'
import { movies } from './data'

const App = () => {
  const [movie, setmovies] = useState(movies)

  const FilterbyCategory = (cat) => {
    if (cat === "All") {
      setmovies(movies)
    } else {
      setmovies(movies.filter((data) => data.category === cat))
    }
  }

  return (
    <div className="main-container w-screen min-h-screen bg-black">
      <Tabs FilterbyCategory={FilterbyCategory} />
      <div className="max-w-[1200px] w-full mx-auto flex flex-wrap justify-center py-5 gap-5">
        {movie.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default App