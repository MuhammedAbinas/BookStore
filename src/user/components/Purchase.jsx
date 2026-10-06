import React from 'react'

function Purchase() {
  return (
     <div className='p-10 my-15 shadow rounded'>
        {/* duplicate book */}
        <div className='p-5 rounded mt-4 bg-gray-300'>
            <div className='md:grid grid-cols-[3fr_1fr]'>
                <div className='px-4'>
                    <h1 className='text-2xl'>Title</h1>
                    <h2 className='text-xl'>Author</h2>
                    <h3 className='text-lg text-blue-400'>$ Discount Price</h3>
                    <p className='text-justify'>Abstract</p>
                    {/* status img */}
                    <div className='flex my-3'>
                        <img height={'120px'} width={'120px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr-2Uzhj3ivipx92JAv7aMq1vjI-aP5OExg1uqMOdbqg&s=10" alt="purchase" />
                    </div>
                </div>
                <div className='px-4 mt-4 md:mt-0'>
                     <img height={'200px'} width={'200px'} src="https://images.squarespace-cdn.com/content/v1/5d365651a8494f0001bb6011/1783618231146-P5TJ0U6M6398XJ0AVVZ1/Embakare-ebook+cover-.jpg?format=500w" className='rounded-2xl' alt="book" />

                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Purchase
