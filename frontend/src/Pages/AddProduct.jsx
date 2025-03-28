import React from 'react'
import Navbar from '../components/Navbar'
import { useForm } from "react-hook-form"
import axios from 'axios'


const AddProduct = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
        
  const onSubmit = (data) => {
    try{
      axios.post(`http://localhost:3000/handleaddproduct`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      console.log('the data was send to the desired local host successfully')
    }catch{
      console.log('unable to add the product')
    }
    console.log(data)
  }

  return (
    <div className='h-screen '  style={{backgroundImage: "URL('/IMG.jpg')" , backgroundRepeat: "no-repeat", backgroundSize:"cover"}}>
      <div className='flex justify-center items-center text-5xl font-bold text-white h-42'>
        <h1>Welcome Admin</h1>
      </div>
      <div className='flex justify-center'>
      <div className='flex w-[40%] backdrop-blur-lg bg-white/30 shadow-lg h-122 justify-center rounded-3xl border-3 border-black/20 text-xl font-extrabold text-white/80'>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-[90%] justify-center gap-5'>
        <div className='w-full flex justify-between'>
            Product Name:
            <input  {...register("productName")}  className='rounded-lg border-2 border-white w-[60%]' />
        </div>
        <div className='w-full flex justify-between'>
        URL:
            <input {...register("url", { required: true })}  className='rounded-lg border-2 border-white w-[60%]' />
        </div>
        <div className='w-full flex justify-between'>
        Product Category:
            <input {...register("productCategory", { required: true })}  className='rounded-lg border-2 border-white w-[60%]' />
        </div>
        <div className='w-full flex justify-between'>
        Price:
            <input {...register("Price", { required: true })}  className='rounded-lg border-2 border-white w-[60%]' />
        </div>
        <div className='w-full flex justify-between'>
        StartUp Name:    
            <input {...register("StartUpName", { required: true })}  className='rounded-lg border-2 border-white w-[60%]' />
        </div>
        <div className='w-full flex justify-between'>
        Ratings:
            <input {...register("Ratings", { required: true })}  className='rounded-lg border-2 border-white w-[60%]' />
        </div>
        <div className='w-full flex justify-between'>
        USP:
            <input {...register("usp", { required: true })}  className='rounded-lg border-2 border-white w-[60%]' />
        </div>
      <div className='w-full flex justify-center '>
            <input type="submit" className='bg-blue-600 text-white text-2xl rounded-lg w-[60%]' />
        </div>
    </form>
      </div>
      </div>
    </div>
  )
}

export default AddProduct