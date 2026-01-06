import React from 'react'

const Home = () => {
  return (
    

    <div className='  min-h-screen '>
      {/*-----header----- */}
      <div className='mb-20 flex justify-between'>
        <div className='p-3 space-x-3 px-3 '>
          <a href="#" className='text-xl font-bold text-gray-900'>AI ChatBot</a>
          <a href="#" className='text-gray-700'>About</a>
          <a href="#" className='text-gray-700'>Contact Me</a>
        </div>
        <div className='p-3 space-x-3 px-3 items-center'>
          <a href="#" className='inline-block px-4 py-2 bg-red-600 rounded-xl text-white font-bold shadow hover:bg-red-500 hover:shadow-xl transition duration-300'>Sign Up</a>
          <a href="#" className='inline-block px-4 py-2 bg-blue-600 rounded-xl text-white font-bold hover:shadow-xl transition duration-300 hover:bg-blue-500'>Login</a>
        </div>
      </div>

        
        
        
        <div className='flex justify-center '>
            <h1 className='text-3xl font-bold tracking-wide mb-60'> ChatBot</h1>
             
    
        </div>
       
        

    </div>
  )
}

export default Home