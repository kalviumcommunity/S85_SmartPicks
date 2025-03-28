import React from 'react'
import Navbar from '../components/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import Footer from '../components/Footer'

const Home = () => {


  // here the fetch request for search bar has to come

  const handlesubmit=()=>{
    e.preventDefault();
  }

  return (
    <div>
      <div className='h-500 '  style={{backgroundImage: "URL('/IMG.jpg')" , backgroundRepeat: "no-repeat", backgroundSize:"cover"}}>
        {/* navbar */}
        <Navbar className='w-fit' />
        {/* welcome message */}
        <div className='h-64 flex justify-center items-center'>
          <h1 className='text-8xl text-white font-extrabold'>WELCOME TO SMARTPICKS</h1>
          {/* <marquee behavior="scroll" direction="left" scrollamount='20'>
          </marquee> */}
        </div>
        {/* search bar */}
        <div className='flex flex-col justify-center items-center mt-10'>
            {/* <h1 className='text-3xl mb-9 font-extrabold text-white'>Search Product</h1> */}
          <form action="" onSubmit={handlesubmit} className=' flex justify-center items-center w-full'>
            <div className='flex w-[40%] backdrop-blur-lg bg-white/30 shadow-lg h-15 justify-center rounded-3xl border-3 border-black/20 text-xl font-bold text-white/80'>
            <input type="text" name="" id="" className='w-full rounded-3xl text-center text-2xl' placeholder='Search Product' />
            <button className='text-3xl w-20'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            </div>
          </form>
        </div>
        <div className='w-full flex justify-center items-center h-50 text-white'>
          <h1 className='text-4xl font-extrabold'>Trending Products</h1>
        </div>
        <div className='flex flex-row flex-wrap justify-evenly'>
          <div className='flex flex-col w-65 rounded-lg border-2 border-black text-xl font-semibold text-black bg-white justify-center gap-2'>
            <img src="https://image.hm.com/assets/hm/09/34/093435062cecc92421fcca35bfdf378da759491e.jpg?imwidth=657" alt="" className='h-70 w-full rounded-lg' />
            <h1 className='text-center'>
              Strokes Tshirt
            </h1>
            <h1 className='text-center'>
              Stroke clothing
            </h1>
            <h1 className='text-center'>
             ₹ 600
            </h1>
            <h1 className='text-center'>
              Strokes limited edition
            </h1>
            <h1 className='text-center'>
              Rating :
              <FontAwesomeIcon className='text-black' icon={faStar} />
              <FontAwesomeIcon className='text-black' icon={faStar} />
              <FontAwesomeIcon className='text-black' icon={faStar} />
              <FontAwesomeIcon className='text-black' icon={faStar} />
              <FontAwesomeIcon className='text-black' icon={faStar} />
            </h1>
          </div>
          <div className='flex flex-col w-65 rounded-lg border-2 border-black text-xl font-semibold text-black bg-white justify-center gap-2'>
            <img src="https://i5.walmartimages.com/asr/4e5da9e3-d10d-4c08-9c30-12d541f19f9b_1.068c42308c54cb33ac99d2f6e0d7319b.jpeg"
           alt="" className='h-60 w-full rounded-lg' />
            <h1 className='text-center'>
              Red Sneakers
            </h1>
            <h1 className='text-center'>
              SneakerHead
            </h1>
            <h1 className='text-center'>
             ₹ 2600
            </h1>
            <h1 className='text-center'>
              Highly confortable
            </h1>
            <h1 className='text-center'>
              Rating :
              <FontAwesomeIcon className='text-black' icon={faStar} />
              <FontAwesomeIcon className='text-black' icon={faStar} />
              <FontAwesomeIcon className='text-black' icon={faStar} />
              <FontAwesomeIcon className='text-black' icon={faStar} />
              <FontAwesomeIcon className='text-black' icon={faStar} />
            </h1>
          </div>
          <div className='flex flex-col w-65 rounded-lg border-2 border-black text-xl font-semibold text-black bg-white justify-center gap-2'>
            <img src="https://th.bing.com/th/id/OIP.EC_LoIcVRwv-DcF8ysxx2QHaE8?rs=1&pid=ImgDetMain" alt="" className='h-70 w-full rounded-lg' />
            <h1 className='text-center'>
              Chocolate cups
            </h1>
            <h1 className='text-center'>
              Eat-India
            </h1>
            <h1 className='text-center'>
             ₹ 100
            </h1>
            <h1 className='text-center'>
              Eatable cups
            </h1>
            <h1 className='text-center'>
              Rating :
              <FontAwesomeIcon className='text-black' icon={faStar} />
              <FontAwesomeIcon className='text-black' icon={faStar} />
              <FontAwesomeIcon className='text-black' icon={faStar} />
              <FontAwesomeIcon className='text-black' icon={faStar} />
              <FontAwesomeIcon className='text-black' icon={faStar} />
            </h1>
          </div>
          <div className='flex flex-col w-65 rounded-lg border-2 border-black text-xl font-semibold text-black bg-white justify-center gap-2'>
            <img src="https://i.pinimg.com/originals/4e/72/33/4e72334416fcc053e11b915c775f12a8.jpg" alt="" className='h-70 w-full rounded-lg' />
            <h1 className='text-center'>
              Hightech mouse
            </h1>
            <h1 className='text-center'>
              Mouse-zic
            </h1>
            <h1 className='text-center'>
             ₹ 800
            </h1>
            <h1 className='text-center'>
              Light weight mouse
            </h1>
            <h1 className='text-center'>
              Rating : 
              <FontAwesomeIcon className='text-black' icon={faStar} />
              <FontAwesomeIcon className='text-black' icon={faStar} />
              <FontAwesomeIcon className='text-black' icon={faStar} />
              <FontAwesomeIcon className='text-black' icon={faStar} />
              <FontAwesomeIcon className='text-black' icon={faStar} />
            </h1>
          </div>
          <div className='flex flex-col w-65 rounded-lg border-2 border-black text-xl font-semibold text-black bg-white justify-center gap-2'>
            <img src="https://cdn.shopify.com/s/files/1/1561/0475/products/IMG_4461.JPG?v=1532034139" alt="" className='h-70 w-full rounded-lg' />
            <h1 className='text-center'>
              Hollowgram machine
            </h1>
            <h1 className='text-center'>
              tech-X
            </h1>
            <h1 className='text-center'>
             ₹ 30600
            </h1>
            <h1 className='text-center'>
              Portable Hollowgram machine
            </h1>
            <h1 className='text-center'>
              Rating : 
              <FontAwesomeIcon className='text-black' icon={faStar} />
              <FontAwesomeIcon className='text-black' icon={faStar} />
              <FontAwesomeIcon className='text-black' icon={faStar} />
              <FontAwesomeIcon className='text-black' icon={faStar} />
              <FontAwesomeIcon className='text-black' icon={faStar} />
            </h1>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
