import React, { useState } from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import Header from '../components/Header'
import Edit from '../components/Edit'
import Upload from '../components/Upload'
import Bookstatus from '../components/Bookstatus'
import Purchase from '../components/Purchase'
function Profile() {
  const [currentTab,setCurrentTab]=useState(1)
  return (
    <>
    <Header/>
    <div style={{height:'200px'}} className='bg-black'></div>
      <div style={{height:'230px',width:'230px',borderRadius:'50%',marginTop:'-130px',marginLeft:'70px'}} className='bg-white p-3'>
        <img src="https://p7.hiclipart.com/preview/722/101/213/computer-icons-user-profile-circle-abstract.jpg" alt="profile"  className="  rounded-full object-cover" />
      </div>
      <div className='md:flex justify-between px-5'>
        <div className='flex items-center'>
          <h1 className='text-2xl font-black md:text-3xl'>Username</h1>
          <FaCheckCircle className='text-blue-950 ms-3'/>
        </div>
        <Edit/>
      </div>
      
      <p className='text-justify md:px-20 md-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat doloremque ullam dolorum inventore asperiores vero, et fugit tenetur eligendi quam atque animi reiciendis. Quibusdam inventore, ut fugit nam laborum doloremque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptatem assumenda ab quaerat officia laudantium, iusto dignissimos iste sunt error soluta! Repellat quod quos natus recusandae illo eligendi itaque iste.</p>
    
          <div className="md:px-40">
        {/* tabs */}
        <div className="flex justify-center items-end my-8 font-medium text-lg">

          <p
            onClick={() => setCurrentTab(1)}
            className={`p-4 cursor-pointer border border-gray-400
              ${currentTab === 1
                ? "bg-white rounded-t-2xl border-b-white relative z-10"
                : "bg-gray-100 rounded-t"
              }`}
          >
            uploadbook
          </p>

          <p
            onClick={() => setCurrentTab(2)}
            className={`p-4 cursor-pointer border border-gray-400
              ${currentTab === 2
                ? "bg-white rounded-t-2xl border-b-white relative z-10"
                : "bg-gray-100 rounded-t"
              }`}
          >
            uploadbook status
          </p>

          <p
            onClick={() => setCurrentTab(3)}
            className={`p-4 cursor-pointer border border-gray-400
              ${currentTab === 3
                ? "bg-white rounded-t-2xl border-b-white relative z-10"
                : "bg-gray-100 rounded-t"
              }`}
          >
            Purchase history
          </p>

        </div>

        {/* tab content */}
        {currentTab === 1 && <div><Upload/></div>}
        {currentTab === 2 && <div><Bookstatus/></div>}
        {currentTab === 3 && <div><Purchase/></div>}
      </div>
    </>
  )
}

export default Profile