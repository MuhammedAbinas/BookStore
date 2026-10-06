import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
    <div className='w-full min-h-screen flex justify-center items-center flex-col bg-[url(/404.png)] bg-cover bg-center text-black'>
      <img src="https://assets.dochipo.com/editor/animations/404-error/34436078-a766-4673-b05a-1a30bdf86537.gif" alt="" />
      <p className='font-bold text-xl'>Oh no!</p>
      <h3 className='font-bold text-2xl'>Look Like You're Lost</h3>
      <p className='text-center'>The page you are looking for does not exist.</p>
      <Link to={'/'} className='bg-blue-900 text-white p-2 font-bold rounded hover:bg-green-600'>Back to Home</Link>
    </div>
  )
}

export default Pnf