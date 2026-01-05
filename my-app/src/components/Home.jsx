import React from 'react'

const Home = () => {
  return (
    <div className='  bg-purple-400 min-h-screen px-10 py-32'>
        <div className='flex justify-center '>
            <h1 className='text-3xl font-bold text-white tracking-wide mb-60'> ChatBot</h1>
             
        </div>
        <div className='flex justify-center mx-auto'>
            <input placeholder="Let's Chat " className='bg-purple-200 flex-1 items-center text-center rounded-lg py-20 '></input>
        </div>
       
        

    </div>
  )
}

export default Home