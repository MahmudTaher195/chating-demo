import React from 'react'

import Sidebar from '../Sidebar/Sidebar'
import Grouplist from '../Grouplist/Grouplist'
import Friendlist from '../Friendlist/Friendlist'
import Friendrequest from '../Friendreuest/Friendrequest'
import Userlist from '../Userlist/Userlist'
import Mygroup from '../Mygroup/Mygroup'
import Blockusers from '../Blockusers/Blockusers'





const ome = () => {
  return (
    <>
    <div className='flex gap-[15px]'>
      <div className='w-[10%]'>
        <Sidebar/>
      </div>
      
      <div className='w-[90%]'>
        <div className='flex gap-[10px]'>
          <div className='w-1/3'>
          <Grouplist/>

          </div>

          <div className='w-1/3'>
          <Friendlist/>
          </div>

          <div className='w-1/3'>
          <Userlist/>
          </div>

        </div>
     
   <div className=''>
    <div className='flex gap-[15px] pt-[15px]'>
    <div className='w-1/3'>
     <Friendrequest/>
     </div>
            <div className='w-1/3'>
            <Mygroup/>
          </div>

          <div className='w-1/3'>
            <Blockusers/>
          </div>
    </div>
   </div>


        
      
      </div>
    </div>
    </>
  )
}

export default ome