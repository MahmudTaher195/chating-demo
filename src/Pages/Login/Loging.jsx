import { useState } from 'react'
import React from 'react'
import logimag from '../../assets/logimage.png'
import { Link } from 'react-router-dom';


const Loging=() => {

const [email,setEmail]=useState('');
const [name,setName]=useState('')
const [password,setPassword]=useState('')
const [emailErr,setEmailErr]=useState('')

const handleEmail=(e)=> {
  setEmail(e.target.value);
}




const handleName=(e)=> {
  setName(e.target.value);
}
const handlePassword=(e)=>{
  setPassword(e.target.value);
}
const handleLogin=()=> {
  // if(!email){
  //   setEmailErr('emil nai kichu ekta dew')
    
  // }

  console.log(email);
  console.log(name);
  console.log(password);


}



  return (
    <>
   <div className='flex'>
        <div className='w-1/2 flex justify-end items-center'>
        <div className=' w-[500px]'>
            <h2 className='text-[34px] font-bold font-nunito text-[#11175D] '>Login to your account!</h2>
            <p className='text-[16px] pb-[20px] '>Login with Google</p>
            <input onChange={handleEmail} className='border border-[#11175D] border-[3px] block' type="email"  placeholder='input your email'/>
            <input onChange={handleName} className='border border-[#11175D] border-[3px] block my-[10px]' type="text" placeholder='input your name'/>
            <input onChange={handlePassword} className='border border-[#11175D] border-[3px] block ' type="password" placeholder='input your password'/>
    <div className='pt-[15px]'>
    <div className=' bg-blue-500  h-[30px] w-[190px] '>
          <button className='text-[16px] text-white px-[30px]'onClick={handleLogin}>Login to Continue </button>
        </div>
      <div className=' flex py-[20px]'>
      <p>
          Don’t have an account ? 
          </p>

          <Link to='/registration'>
          <span className='text-red-500'>Sign up</span>
          </Link>

      </div>
    </div>
        </div>
        </div>
        <div className='w-1/2 '>
        <img className='h-[550px] w-full' src={logimag} alt="img" />
        </div>


    </div>


    </>
  )
}

export default Loging