import React, { useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'

function AdminResource() {
  const [currentTab,setCurrentTab]=useState(1)
  return (
    
     <>
      <AdminHeader/>
      <div className='md:grid grid-cols-5 gap-2 items-stretch '>
        <div className='col-span-1 '>
          <AdminSidebar/>
        </div>
        <div className='col-span-4 p-10'>
          <h1 className='text-3xl font-bold text-center mb-10'>All Resources</h1>
           {/* tabs */}
        <div className="flex justify-center items-end my-8 font-medium text-lg">

          <p onClick={() => setCurrentTab(1)} className={`p-4 cursor-pointer border border-gray-400${currentTab === 1 ? "bg-white rounded-t-2xl border-b-white relative z-10" : "bg-gray-100 rounded-t"  }`}> Books</p>

          <p onClick={() => setCurrentTab(2)}className={`p-4 cursor-pointer border border-gray-400 ${currentTab ===2  ? "bg-white rounded-t-2xl border-b-white relative z-10" : "bg-gray-100 rounded-t"}`}>Users</p>
          </div>

        {/* tab content */}
        {currentTab === 1 &&
        <div>
          <div className='md:grid grid-cols-4 md:my-0'>
            {/* dupilcate card */}
            <div className='shadow rounded p-3 m-4 md:my-0'>
              <img width={'100%'} height={'300px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVUGorE63c_rUTcCSajpln8sNTLGy4lqAmrGHnblrP-WfxoN-5gV4XDT6n&s=10" alt="" />
              <div className='flex flex-col justify-center items-center mt-4'>
                <h2 className='text-blue-600 font-bold text-xl'>Author</h2>
                <h2 className='text-lg'>title</h2>
                <p className='font-bold text-red-500'>Price</p>
                {/* approve button */}
                <button className='bg-green-600 text-white p-2 mt-2 w-full'>APPROVE</button>
              </div>
            </div>
          </div>
        </div>
        }
        {currentTab === 2 && 
        <div>
          <div className='md:grid grid-cols-3 md:my-0'>
            {/* dupilcate card */}
            <div className='shadow rounded p-2 m-2 bg-blue-100'>
              <div className='flex mt-3 items-center'>
                <p className='text-red-600 font-bold text-md'>ID:</p>
                <img width={'80px'} height={'80px'} style={{borderRadius:"40%"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyh9ZR7j2Oi5JHGSIe2mt2cgeVlwQb4mXg3kXIaPgEJQ&s=10" alt="" />
                <div className='flex flex-col  ml-3 w-full'>
                  <h2 className='text-blue-600 font-bold text-md'>Username</h2>
                  <p className='text-xs'>Mail</p>
              </div>
               
              </div>
            </div>
          </div>
        </div>
        }
        </div>
      </div>
    </>
  )
}

export default AdminResource