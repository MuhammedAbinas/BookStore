import React, { useState } from 'react'
import Header from '../components/Header'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
function Books() {
  const [toggle,setToggle]=useState(false)
  return (
    <>
    <Header/>
    <>
    <div className='flex flex-col justify-center items-center my-5'>
      <h1 className='text-3xl font-bold my-5'>
        All Book
      </h1>
      <div>
        <input type="text" className='p-2 border border-gray-300 w-100 rounded' placeholder='Search by book title' />
        <button className='p-2 bg to-blue-950 text-white ms-1'>Search</button>
  
      </div>
    </div>
    {/* grid filter and book card */}
    <div className='md:grid grid-cols-4 p-5 md:px-40 mb-10'>
      {/* filter */}
      <div className='col-span-1'>
        <div className='flex justify-between'>
          <h1 className='text-2xl font-bold'>Filter</h1>
          <button className='font-bold text-2xl md:hidden'><FaBars/></button>
        </div>
          {/* filter category */}
          <div className={toggle? "block" : "hidden md:block"}>
            <div className='mt-3'>
              <input type="radio" name='filter' id='no-filter'/>
              <label htmlFor="no filter" className='ms-3'>All</label>
            </div>
            <div className='my-3'>
              <input type="radio" name='filter' id='filter'/>
              <label htmlFor="filter" className='ms-3'>Book category</label>
            </div>
          </div>
      </div>
      {/* book card */}
      <div className='col-span-3'>
       <div className='md:grid grid-cols-4 md:my-0'>
        {/* duplicate */}
          <div className='shadow rounded p-3 m-4 md:my-0'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmLHQ2gHgIs3ZXAszkeY3lKbY8SRDkZl1GD138Hr2LSZXKWfFV79wtIPY&s=10" alt="book" />
            <div className='flex flex-col justify-centert items-center mt-4'>
              <h1 className='text-blue-950 font-bold'></h1>
                <h3>title</h3>
                <Link className='text-blue-950 font-bold' to={`/books/${Books.id}`}> View Details </Link>
            </div>
             </div>
       </div>

      </div>
    </div>
    </>
    </>
  )
}

export default Books