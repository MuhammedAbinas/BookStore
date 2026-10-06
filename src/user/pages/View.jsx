import React, { useState } from 'react'
import Header from '../components/Header'
import { FaCamera, FaEye } from 'react-icons/fa'
import { Link } from 'react-router-dom'
function View() {
  const [modal,setModal]=useState(false)
  return (
    <>
      <Header/>
      <div className='md:m-10 m-5'>
        <div className='border p-5 shadow border-gray-400'>
          <div className='md:grid grid-cols-4 gap-x-10'>
            {/* img */}
              <div className='col-span-1'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmLHQ2gHgIs3ZXAszkeY3lKbY8SRDkZl1GD138Hr2LSZXKWfFV79wtIPY&s=10" alt="" />
              </div>
                {/* book details */}
                <div className='col-span-3'>
                  <div className='flex justify-between mt-5 md:mt-0'>
                    <h2 className='font-bold text-3xl'>Title</h2>
                    <button onClick={()=>setModal(true)} className='text-gray-700'><FaEye/></button>
                  </div>
                  <h2 className='text-black font-bold text-xl my-5'>Author</h2>
                  <div className='md:grid grid-cols-3 gap-5 my-10'>
                    <p className='font-bold'>Publisher :</p>
                    <p className='font-bold'>Language :</p>
                    <p className='font-bold'>no.of pages :</p>
                    <p className='font-bold'>Category :</p>
                    <p className='font-bold'>ISBN :</p>
                    <p className='font-bold'>Seller :</p>
                  </div>
                  <div>
                    <h4 className='font-bold text-lg'>Abstract :</h4>
                  </div>
                  <div className='flex justify-end'>
                    <Link to={'/books'} className='bg-red-700 text-black p-2 font-bold rounded '>Back</Link>
                    <button className='bg-blue-600 text-white p-2 font-bold ms-3 rounded hover:bg-green-600'>Buy Now</button>
                  </div>
                </div>
          </div>

        </div>

      </div>
      {/* /modal */}
      {
        modal && 
          <div className='relative z-10 overflow-y-auto' onClick={()=>setModal(false)}>
            <div className='bg-grey-50/75 fixed inset-0'>
              <div className='flex justify-center items-center min-h-screen'>
                <div className='bg-white rounded-2xl md:w-250 w-100'>
                  {/* modal title */}
                  <div className='bg-black text-white p-3'>
              <h3>Book Img</h3>
            </div>
            {/* modal body */}
            <div className='relative p-5'>
              <p className='text-blue-600 flex items-center'><FaCamera className='me-2'/>Camera clicks of the book</p>
              <div className='md:flex flex-wrap my-4'>
                {/* duplicate img */}
                <img className='md:w-75 md:me-2 md:mt-0' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmLHQ2gHgIs3ZXAszkeY3lKbY8SRDkZl1GD138Hr2LSZXKWfFV79wtIPY&s=10" alt="" />
              </div>
            </div>
          </div>

        </div>

        </div>
      </div>
      }
    </>
  )
}

export default View