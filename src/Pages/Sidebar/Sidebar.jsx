import React from 'react'
import logimage from '../../assets/navlogo.png'
import homeimage from '../../assets/home.png'
import chatimage from '../../assets/chat.png'
import notificaimage from '../../assets/notification.png'
import setingimage from '../../assets/setting.png'
import { FaSearch } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import picer from '../../assets/mans 2.png'
import wmans from '../../assets/womans.png'
import photo from '../../assets/picer3.png'
import pic from '../../assets/picer4.png'
import girl from '../../assets/picer5.png'
import kiran from '../../assets/kiran6.png'
import teji from '../../assets/teji.png'

const Sidebar = () => {
  return (
      <div>
          <div className='flex item-center max-w-container gap-[10px] mx-auto'>

              <div className=' bg-blue-400'>
                  <picture>
                      <img className='py-[15px]' src={logimage} alt="img" />
                  </picture>
                  <picture>
                      <img className='bg-white h-[50px] w-[90px] px-[15px]' src={homeimage} alt="img" />
                  </picture>
                  <picture>
                      <img className='py-[15px] h-[80px]  w-[60px]' src={chatimage} alt="img" />
                  </picture>
                  <picture>
                      <img className=' py-[15px] h-[80px]  w-[50px]' src={notificaimage} alt="img" />
                  </picture>
                  <picture>
                      <img className='w-[50px] py-[15px]  w-[60px]' src={setingimage} alt="img" />
                  </picture>
                  <div className='mt-[100px]'>
                  <picture >
                      <img className='w-[50px] py-[15px]  w-[60px]' src={setingimage} alt="img" />
                  </picture>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Sidebar