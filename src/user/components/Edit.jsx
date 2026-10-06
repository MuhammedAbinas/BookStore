import React, { useState } from 'react'
import { FaPen, FaPencilAlt } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

function Edit() {
    const [offCanvas,setOffCanvas]=useState(false)
  return (
    <div>
      {/* button */}
      <button onClick={()=>setOffCanvas(true)} className='bg-black text-white p-2 flex items-center rounded border hover:bg-white hover:text-black'><FaPencilAlt className='me-2'/>Edit</button>
      {/* offcanvas */}
     { 
        offCanvas&&
        <div>
          <div className='fixed inset-0 bg-gray-400/75 w-full h-full'></div>
          <div className='bg-white h-full w-90 z-50 fixed top-0 left-0'>
          {/* header */}
          <div className='bg-black text-white px-3 py-4 flex justify-between text-2xl'>
            <h1>update user profile</h1>
            <FaX onClick={()=>setOffCanvas(false)}/>
          </div>
          {/* body */}
          <div className='flex items-center justify-center flex-col my-5'>
            <label htmlFor="userProfile">
              <input  type="file" id='userProfile'hidden />
              <img src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png" alt="User" className='w-50 h-50 object-cover rounded-full' />
              <button className='bg-black text-white px-3 py-4 rounded z-53 fixed ' style={{marginLeft:'155px', marginTop:'-35px'}}><FaPen/></button>
            </label>
            {/* username */}
            <div className='mt-10 mb-2 w-full px-5'>
              <input type="text" placeholder='Username' className='w-full border border-gray-400 rounded p-2' />
            </div>
            {/* newpassword */}
            <div className='mt-3 mb-2 w-full px-5'>
              <input type="text" placeholder='New password' className='w-full border border-gray-400 rounded p-2' />
            </div>
            {/* confirm password */}
            <div className='mt-3 mb-2 w-full px-5'>
              <input type="text" placeholder='Confirm password' className='w-full border border-gray-400 rounded p-2' />
            </div>
            {/* bio */}
            <div className='mt-3 mb-2 w-full px-5'>
              <input type="text" placeholder='bio' className='w-full border border-gray-400 rounded p-2' />
            </div>
            {/* reset and update button */}
            <div className='flex justify-end w-full px-5 mt-2 '>
              <button className='bg-yellow-300 text-white p-3 rounded me-2'>Reset</button>
              <button className='bg-green-800 text-white p-3 rounded'>Update</button>
            </div>
          </div>
          </div>

      </div>}
    </div>
  )
}

export default Edit
