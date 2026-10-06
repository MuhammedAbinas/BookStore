import React from 'react'
import { FaPlus } from 'react-icons/fa'


function Upload() {
  return (
    <div className='p-10 my-20 mx-5 bg-gray-300'>
      <h1 className='text-center text-3xl font-medium'>Upload Book Details</h1>
      <div className='md:grid grid-cols-2 mt-10 w-full'>
        <div className='px-3'>
            <div className='mb-3'>
                <input type="text" placeholder='Book Title' className='w-full p-2 rounded bg-white' />
            </div>
             <div className='mb-3'>
                <input type="text" placeholder='Author' className='w-full p-2 rounded bg-white' />
            </div>
             <div className='mb-3'>
                <input type="text" placeholder='Book Cover Image URL' className='w-full p-2 rounded bg-white' />
            </div>
             <div className='mb-3'>
                <input type="text" placeholder='Total Pages' className='w-full p-2 rounded bg-white' />
            </div>
             <div className='mb-3'>
                <input type="text" placeholder='Original Price' className='w-full p-2 rounded bg-white' />
            </div>
             <div className='mb-3'>
                <input type="text" placeholder='Discount price' className='w-full p-2 rounded bg-white' />
            </div>
            <div className='mb-3'>
                <textarea type="text" placeholder='Abstracr' className='w-full p-2 rounded bg-white' />
            </div>
        </div>
         <div className='px-3'>
            <div className='mb-3'>
                <input type="text" placeholder='Publisher' className='w-full p-2 rounded bg-white' />
            </div>
             <div className='mb-3'>
                <input type="text" placeholder='ISBN' className='w-full p-2 rounded bg-white' />
            </div>
             <div className='mb-3'>
                <input type="text" placeholder='Language' className='w-full p-2 rounded bg-white' />
            </div>
             <div className='mb-3'>
                <input type="text" placeholder='Category' className='w-full p-2 rounded bg-white' />
            </div>
            {/* upload img */}
            <div className='mt-3 flex justify-center item'>
             <label htmlFor="bookimg">
                <input  type="file" id='bookimg'hidden />
                <img height={'200px'} width={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk5oWWwVHwhJl7nfNBjO7zBnLu25FbQw5gTaWHFlnpiQ&s=10" alt="book file not found" className='rounded-2xl' />
            </label>
            </div>
            {/* preview of uploaded books */}
            <div className='flex justify-center items-center mt-2'>
                <img height={'70px'} width={'70px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVUGorE63c_rUTcCSajpln8sNTLGy4lqAmrGHnblrP-WfxoN-5gV4XDT6n&s=10" alt="book img" className='rounded' />
                <label htmlFor="bookupload">
                    <input type="file" id='bookupload'hidden />
                    <FaPlus className='text-3xl ms-2'/>
                </label>
            </div>
        </div>
        <div className='flex md:justify-end justify-center w-full p-5 mt-2 '>
              <button className='bg-yellow-300 text-white p-3 rounded me-2'>Reset</button>
              <button className='bg-green-800 text-white p-3 rounded'>Add Book</button>
            </div>
      </div>
    </div>
  )
}

export default Upload
