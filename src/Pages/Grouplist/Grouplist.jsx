import React from 'react'

import { FaSearch } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import picer from '../../assets/mans 2.png'
import wmans from '../../assets/womans.png'
import photo from '../../assets/picer3.png'

const Grouplist = () => {
  return (
    <div>
      <div className=' overflow-y-scroll h-[300px]'>

        <div className='relative '>
          <input className='w-full py-[10px] pl-[30px] rounded-[10px] border-[3px] block' type="text" placeholder='search' />
          <FaSearch className='absolute top-[15px] left-[10px]' />
          <HiDotsVertical className='absolute top-[15px] right-[10px]' />
        </div>

        <div className='pt-[30px] '>
          <div className='rounded-[10px]'>
            <div className='relative'>
              <div className=' w-full  left-[10px]'>
                <h2 className='pl-[10px]'>Group List</h2>
              </div>
              <HiDotsVertical className='absolute top-[5px] right-[10px]' />
            </div>
            <div className='border'>

              <div className='flex py-[20px]'>
                <img src={picer} alt="" />
                <div className='pl-[30px]'>
                  <h2 className='font-bold'>Friends Reunion</h2>
                  <p className='text-xs'>Hi Guys, Wassup!</p>
                </div>
                <div className='pl-[50px] pt-[10px]'>
                  <button className='bg-blue-500 w-[50px] text-[20px] rounded-[10px]'>Join</button>
                </div>
              </div>
              <div className='flex py-[20px]'>
                <img src={wmans} alt="" />
                <div className='pl-[30px]'>
                  <h2 className='font-bold'>Friends Reunion</h2>
                  <p className='text-xs'>Good to see you.</p>
                </div>

                <div className='pl-[50px] pt-[10px]'>
                  <button className='bg-blue-500  w-[50px] text-[20px] rounded-[10px]'>Join</button>
                </div>
              </div>

              <div className='flex py-[20px]   '>
                <img src={photo} alt="" />
                <div className='pl-[30px]'>
                  <h2 className='font-bold'>Friends Reunion</h2>
                  <p className='text-xs'>What plans today?</p>
                </div>
                <div className='pl-[50px] pt-[10px]'>
                  <button className='bg-blue-500  w-[50px] text-[20px] rounded-[10px]'>Join</button>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Grouplist