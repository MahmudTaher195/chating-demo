import React from 'react'

import { HiDotsVertical } from "react-icons/hi";
import pic from '../../assets/picer4.png'
import girl from '../../assets/picer5.png'
import kiran from '../../assets/kiran6.png'
import teji from '../../assets/teji.png'

const Friendrequest = () => {
    return (
        <div>
            <div>
                <div className=' overflow-y-scroll h-[300px]'>
                    <div className=''>

                        <div className='pt-[10px] '>
                            <div className='rounded-[10px]'>
                                <div className='relative'>
                                    <div className=' w-full  left-[10px]'>
                                        <h2 className='pl-[10px] top-[5px]'>Friend Request</h2>
                                    </div>
                                    <HiDotsVertical className='absolute top-[5px] right-[10px]' />
                                </div>
                                <div className='border'>

                                    <div className='flex py-[20px]'>
                                        <img src={pic} alt="" />
                                        <div className='pl-[30px]'>
                                            <h2 className='font-bold'>Friends Reunion</h2>
                                            <p className='text-xs'>Hi Guys, Wassup!</p>
                                        </div>              <div className='pl-[50px] pt-[10px]'>
                                            <button className='bg-blue-500 w-[50px] text-[15px] rounded-[10px]'>Accept</button>
                                        </div>
                                    </div>
                                    <div className='flex py-[20px]'>
                                        <img src={girl} alt="" />
                                        <div className='pl-[30px]'><h2 className='font-bold'>Friends Reunion</h2>               <p className='text-xs'>Good to see you.</p>
                                        </div>

                                        <div className='pl-[50px] pt-[10px]'>
                                            <button className='bg-blue-500  w-[50px] text-[15px] rounded-[10px]'>Accept</button>
                                        </div>
                                    </div>

                                    <div className='flex py-[20px]   '>
                                        <img src={kiran} alt="" />
                                        <div className='pl-[30px]'>
                                            <h2 className='font-bold'>Friends Reunion</h2>
                                            <p className='text-xs'>What plans today?</p>
                                        </div>
                                        <div className='pl-[50px] pt-[10px]'>
                                            <button className='bg-blue-500  w-[50px] text-[15px] rounded-[10px]'>Accept</button>
                                        </div>
                                    </div>
                                    <div className='flex py-[20px]   '>
                                        <img src={teji} alt="" />
                                        <div className='pl-[30px]'>
                                            <h2 className='font-bold'>Friends Reunion</h2>
                                            <p className='text-xs'>What plans today?</p>
                                        </div>
                                        <div className='pl-[50px] pt-[10px]'>
                                            <button className='bg-blue-500  w-[50px] text-[15px] rounded-[10px]'>Accept</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Friendrequest