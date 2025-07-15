import React from 'react'

const Tabs = ({FilterbyCategory}) => {
  return (
    <nav className=' py-3 cursor-pointer'>
      <ul className="menu flex  justify-center gap-5 flex-wrap cursor-pointer">
        <li><button  onClick={()=>{FilterbyCategory("All")}}  className='text-cyan-500 py-2 px-4 border-2 border-cyan-500 rounded-md font-bold '>All</button></li>
        <li><button onClick={()=>{FilterbyCategory("Action")}}  className='text-blue-500 py-2 px-4 border-2 border-blue-500 rounded-md font-bold '>Action</button></li>
         <li><button  onClick={()=>{FilterbyCategory("Thriller")}} className='text-gray-500 py-2 px-4 border-2 border-gray-500 rounded-md font-bold '  >Thriller</button></li>
          <li><button onClick={()=>{FilterbyCategory("Animation")}}  className='text-cyan-600 py-2 px-4 border-2 border-cyan-600 rounded-md font-bold '>Animation</button></li>
           <li><button onClick={()=>{FilterbyCategory("Horror")}}  className='text-green-600 py-2 px-4 border-2 border-green-600 rounded-md font-bold ' >Horror</button></li>
            <li><button onClick={()=>{FilterbyCategory("Drama")}}  className='text-yellow-500 py-2 px-4 border-2 border-yellow-500 rounded-md font-bold ' >Drama</button></li>
             <li><button onClick={()=>{FilterbyCategory("Sci-Fi")}}  className='text-cyan-700 py-2 px-4 border-2 border-cyan-700 rounded-md font-bold ' >Sci-Fi</button></li>
      </ul>
    </nav>
  )
}

export default Tabs
