import React from 'react'
import { HiDotsVertical } from "react-icons/hi";
import pic from '../../assets/picer4.png'
import girl from '../../assets/picer5.png'
import kiran from '../../assets/kiran6.png'
import teji from '../../assets/teji.png'

const Userlist = () => {
  return (
    <div>
        <div>
        <div className=' border overflow-y-scroll  h-[300px]'>
          <div className='relative '>
            <div className=' w-full left-[10px]'>
              <h2 className='pl-[15px] pt-[10px]'>User List</h2>
            </div>
            <HiDotsVertical className='absolute top-[10px] right-[10px]' />
          </div>
          <div className='border'>

            <div className='flex py-[20px]'>
              <img src={pic} alt="" />
              <div className='pl-[20px] pt-[15px]'>
                <h2 className='font-bold'>Raghav</h2>
                <p className='text-xs'>Dinner?</p>
              </div>
              <div className='pl-[0px] pt-[10px]'>
                <p className='pl-[60px]'>Today, 8:56pm</p>
              </div>
            </div>
            <div className='flex py-[20px]'>
              <img src={girl} alt="" />
              <div className='pl-[25px] pt-[15px]'>
                <h2 className='font-bold'>Swathi</h2>
                <p className='text-xs'>Sure!</p>
              </div>

              <div className='pl-[0px] pt-[10px]'>
                <p className=' pl-[60px]'>Today, 2:31pm</p>
              </div>
            </div>

            <div className='flex py-[10px]'>
              <img src={kiran} alt="" />
              <div className='pl-[20px] pt-[15px]'>
                <h2 className='font-bold'>Kiran</h2>
                <p className='text-xs'>Hi.....</p>
              </div>
              <div className='pl-[0px] pt-[10px]'>
                <p className='pl-[50px]'>Yesterday, 6:22pm</p>
              </div>
            </div>
            <div className='flex py-[10px]'>
              <img src={teji} alt="" />
              <div className='pl-[10px] pt-[15px]'>
                <h2 className='font-bold'>Tejeshwini C</h2>
                <p className='text-xs'>I will call him today.</p>
              </div>
              <div className='pl-[0px] pt-[10px]'>
                <p className='pl-[10px]'>Today, 12:22pm</p>
              </div>
            </div>

          </div>
        </div>
        </div>
    </div>
  )
}

export default Userlist