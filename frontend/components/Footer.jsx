import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShareFromSquare} from '@fortawesome/free-regular-svg-icons'
import {faPaperPlane} from '@fortawesome/free-regular-svg-icons'
import {faCircleCheck} from '@fortawesome/free-regular-svg-icons'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faXTwitter} from '@fortawesome/free-brands-svg-icons'
import {faYoutube} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className='bg-zinc-900 h-fit'>
        <div className='bg-zinc-900  h-20 text-white flex justify-around items-center'>
            <div className=' flex flex-col justify-center '>
                <FontAwesomeIcon icon={faShareFromSquare} className='text-4xl'/>
                <h3>Return in 15 Day Policy *</h3>
            </div>
            <div className=' flex flex-col justify-center '>
            <FontAwesomeIcon icon={faPaperPlane} className='text-4xl'/>
                <h3>Super fast Delivery *</h3>
            </div>
            <div className=' flex flex-col justify-center '>
            <FontAwesomeIcon icon={faCircleCheck} className='text-4xl' />
                <h3>Least price best product *</h3>
            </div>
        </div>
        <div className='bg-white h-0.5 m-2'></div>
        <div className='text-white flex justify-evenly items-center h-40 m-0'>
            <ul className='flex flex-col items-center'>
                <li className='font-bold'>Haramzade</li>
                <li>Contact Us</li>
                <li>FAQ's</li>
                <li>Stores</li>
            </ul>
            <ul className='flex flex-col items-center'>
                <li className='font-bold'>Collections</li>
                <li>T-shirts</li>
                <li>Shirts</li>
                <li>Hoodies</li>
                <li>Sneekers</li>
            </ul>
            <ul className='flex flex-col items-center'>
                <li >Follow Us On</li>
                <li className='text-2xl'><FontAwesomeIcon icon={faFacebook}/> <FontAwesomeIcon icon={faInstagram}/> <FontAwesomeIcon icon={faXTwitter}/> <FontAwesomeIcon icon={faYoutube}/></li>
            </ul>
        </div>
        <div className='h-0.5 bg-white'></div>
        <div>
             <ul className='text-white text-l font-extralight flex justify-evenly'>
                <li>*All rights reserved</li>
                <li>SmartPicks</li>
                <li>copyright - SmartPics - 2025</li>
             </ul>
              
             </div>
    </div>
  )
}

export default Footer