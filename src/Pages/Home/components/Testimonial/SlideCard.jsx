import React from 'react'
import { FaStar } from 'react-icons/fa6'

const SlideCard = () => {
  return (
    <div className=' min-h-[255px] w-[90%] sm:w-auto rounded-[10px] bg-white py-[23px] pl-[28px] pr-[20px]'>

    <div className='w-[44px] h-[44px] rounded-full overflow-hidden'>
        <img src="/avatar.jfif" alt="" className='w-full h-full'/>
    </div>

    <div className='text-[#0259FF] flex items-center gap-1 mt-[24px] mb-[14px]'>
    <FaStar className="text-base" />
    <FaStar className="text-base" />
    <FaStar className="text-base" />
    <FaStar className="text-base" />
    <FaStar className="text-base text-[#C8DEFE] " />
    </div>

    <h1 className='text-dark-blue font-bold text-lg'>
    Kari Rasmussen
    </h1>

    <p className='font-medium text-sm text-[#74839C] mt-[10px]'>
    ZoomVenues lets you add a payment button to your ecommerce site in second and start accepting credit card payments on your mobile phone
    </p>




    </div>
  )
}

export default SlideCard
