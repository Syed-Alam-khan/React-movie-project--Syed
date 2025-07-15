import React from 'react'

const MovieCard = ({ movie }) => {
  return (
    <div className=" w-[350px] md:w-52 overflow-hidden flex flex-col items-center p-2 border-2 rounded  border-cyan-700">
      <div className={`image w-full md:h-52    rounded-md overflow-hidden`}>
        <img className="object-cover w-full h-full rounded" src={movie.poster_path} alt="" />
      </div>
      <div className="title font-bold text-white tracking-wide text-center mb-2">{movie.title}</div>
      <div className="date text-gray-500 text-sm text-center">{movie.release_date}</div>
    </div>
  )
}

export default MovieCard