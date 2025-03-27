import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-evenly sticky top-0 z-10 items-center rounded-3xl h-30 m-0 p-0'>
      <div className='w-[30%] flex flex-row items-center'>
        <img src="/image-removebg-preview (2).png" alt="" className='h-20 pl-20' />
      </div>
        <div className=' flex w-[40%] backdrop-blur-lg bg-white/30 shadow-lg h-15 justify-center rounded-3xl border-3 border-black/20 text-xl font-bold text-white/80'>
            <ul className='flex flex-row justify-evenly items-center w-full'>
                <li>Home</li>
                <li>About</li>
                <li>Categories</li>
                <li>Contact</li>
            </ul>
        </div>
      <div className='w-[30%]'>
        <ul className=' flex justify-end text-2xl gap-5 mr-10 text-white items-center'>
          <li className='bg-blue-600 rounded-lg w-30 text-center h-12 flex items-center justify-center'>Login</li>
          <li className='bg-zinc-800 rounded-lg w-30 text-center h-12 flex items-center justify-center'>Sign Up</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar