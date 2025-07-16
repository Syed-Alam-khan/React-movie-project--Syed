// App.jsx
import React, { useState } from 'react'
import Tabs from './components/Tabs'
import MovieCard from './components/MovieCard'
import { movies } from './data'

const App = () => {
  const [movie, setmovies] = useState(movies)
  const [toggle,setToggle]=useState(false)

  const FilterbyCategory = (cat) => {
    if (cat === "All") {
      setmovies(movies)
    } else {
      setmovies(movies.filter((data) => data.category === cat))
    }
  }

  return (
    <div className={`main-container w-screen min-h-screen ${toggle?"bg-black":"bg-white"} ${toggle?"text-white":"text-black"}`}>
      <Tabs FilterbyCategory={FilterbyCategory} />

   {/* toggle dark mode */}

      <button className={`  text-sm font-bold w-[40px] h-[40px] rounded-full border-none ml-3 animate-bounce duration-300  ${toggle?"bg-white":"bg-black"} ${toggle?"text-black":"text-white"} `} onClick={()=>{setToggle(!toggle)}}>{toggle?"Light":"Dark"}</button>

      {/* map through all movie */}
      <div className="max-w-[1200px] w-full mx-auto flex flex-wrap justify-center py-5 gap-5">
        {movie.map((movie) => (
          <MovieCard key={movie.id} movie={movie} toggle={toggle} />
        ))}
      </div>
    </div>
  )
}

export default App