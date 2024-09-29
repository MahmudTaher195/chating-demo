import React, { useState } from 'react'
import registrationimage from '../../assets/registration.png'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaRegEye,FaRegEyeSlash  } from "react-icons/fa";




const Registration = () => {
  const navigate=useNavigate()

   const [email,setEmail]=useState('')
   const [name,setName]=useState('')
   const [password,setPassword]=useState('')


   const [emailErr,setEmailErr]=useState('')

   const [nameErr,setNameErr]=useState('')
   const[passwordErr,setPasswordErr]=useState('')

   const[cl,setCl]=useState(false)

   


   const handleEye=()=>{
    setCl(!cl)
    
   }


  const handleEmail=(e)=>{
    setEmail(e.target.value);
    setEmailErr('')
  }
  const handleName=(e)=>{
    setName(e.target.value);
    setNameErr('')
  }
  const handlePassword=(e)=>{
    setPassword(e.target.value);
    setPasswordErr('')
  }

  const handleSingup=()=>{
    if(!email){
      setEmailErr('tui email de age');

    }else{
      if(!/\S+@\S+\.\S+/.test(email)){
        setEmailErr('please inpute you valide email');
        
      }
    }
    if(!name){
      setNameErr('name de');
    }
    if (!password) {
      setPasswordErr('password dew');
    }else{

      if(!/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)){
        setPasswordErr('pls input 8 charecter password ');
        
      }
    }

    

    if(/\S+@\S+\.\S+/.test(email) && name && /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)){
      toast.success('registration successfully done, please verify your email');
      setTimeout(()=>{
        navigate('/login')
      },3000)
    }
  }

  return (
    <>
      <div className='flex'>
        <div className='-'>
          <div className=' w-[500px]'>
            <h2 className='text-[34px] font-bold font-nunito text-[#11175D] '>Get started with easily register</h2>
            <p className='text-[16px] pb-[20px] '>Free register and you can enjoy it</p>
            <input onChange={handleEmail} className='border border-[#11175D] border-[3px] block' type="email" placeholder='input your email' />
            <p className='text-red-500 h-[15px]'>{emailErr}</p>
            <div className='my-[10px]'>
            <input onChange={handleName} className='border border-[#11175D] border-[3px] block ' type="text" placeholder='input your name' />
            <p className='text-red-500 h-[15px]'>{nameErr}</p>
            </div>

            <div className='flex '> 
            <div >
            <input onChange={handlePassword} className='border border-[#11175D] border-[3px] block ' type={!cl?"password":'text'} placeholder='input your password' />
            <p className='text-red-500 h-[15px]'>{passwordErr}</p>
            </div>
            <div className='relative ml-[-25zzpx] mt-[8px]'>
              {
                cl?
            <div>
            <FaRegEye onClick={handleEye} />
            </div>
            :
            <div className='absolute top-0 left-0' onClick={handleEye}>
            <FaRegEyeSlash/>
            </div>
              }
            </div>
            </div>

            <div className='pt-[15px]'>
              <div className=' bg-blue-600 rounded-lg  h-[30px] w-[190px] '>
                <button className='text-[16px] text-white px-[60px]' onClick={handleSingup}>sing up</button>
              </div>
              <div className=' flex py-[20px]'>
                <p>
                  Don’t have an account ?
                </p>
                <Link to='/login'>
                <span className='text-red-500'>Sign up</span>
                </Link>

              </div>
            </div>
          </div>
        </div>
        <div className='w-1/2 '>
          <img className='h-[550px] w-full' src={registrationimage} alt="img" />
          <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
<ToastContainer />
        </div>
      </div>

    </>
  )
}

export default Registration