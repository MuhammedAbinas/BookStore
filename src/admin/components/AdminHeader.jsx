import React from 'react'
import { FaPowerOff } from 'react-icons/fa'

function AdminHeader() {
  return (
    <>
    {/* header top */}
    <div className='flex justify-between items-center p-3 md:mx-20'>
      <div className='flex items-center'>
        <img width={'50px'} height={'50px'} src="https://imgs.search.brave.com/vzBTrNPzyqYW0WT9qAVdlfMTuR1KcToa1QO7M7qcc9A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmcu/cG5ndHJlZS5jb20v/cG5nLXZlY3Rvci8y/MDIzMDMxOC9vdXJt/aWQvcG5ndHJlZS1y/ZWFkaW5nLWJvb2tz/LWljb24tdmVjdG9y/LXBuZy1pbWFnZV82/NjUzNTE5LnBuZw" alt="" />
        <h1 className='text-2xl font-bold ms-2'>BOOKSTORE</h1>
      </div>
      <button className='flex items-center px-3 py-2 bg-black text-white border-black hover:bg-white hover:text-black'>Logout<FaPowerOff className='ms-2'/></button>
    </div>
    {/* header marquee */}
    <div className='w-full p=3 bg-black text-white'>
      <marquee>Welcome admin, you are all set to manage and monitor the system, Let's get into the work!!!</marquee>
    </div>
    </>
  )
}

export default AdminHeader