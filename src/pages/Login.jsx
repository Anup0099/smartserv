import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [formData, setFormData] = useState({
        username:"",
        password:""
    })
    const navigate = useNavigate()
    const handleSubmit = (e) =>{
        e.preventDefault()
        const regex = /^(?=.*[@])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]+$/;
        if(regex.test(formData.password))
            navigate('/dashboard')
        else
            alert("Invalid password")
    }
  return (
    <div className='bg-[#474747] flex justify-center items-center h-screen w-full'>
        <div className='bg-[#1d1d1d] flex flex-col w-[400px] p-10 gap-7 rounded-md items-center'>
            <div className='w-full'>
                <img src={logo} alt="" className='object-cover' />
            </div>
            <form onSubmit={handleSubmit} className='flex flex-col w-full gap-5'>
                <input required type="email" value={formData.username} onChange={(e)=>setFormData({...formData,username:e.target.value})} placeholder='Username' className='px-2 py-1.5 rounded-md w-full border-none outline-none' />
                <input required type="password" value={formData.password} onChange={(e)=>setFormData({...formData,password:e.target.value})}  placeholder='Password' className='px-2 py-1.5 rounded-md w-full border-none outline-none' />
                <button type='submit' className='w-full px-4 py-1.5 bg-[#70be59] text-white rounded-md'>Login</button>
            </form>
            <a href='mailto:support@smartserv.io' className='w-full text-center underline text-[#bebfbe] text-sm cursor-pointer'>Forgot your password?</a>
        </div>
    </div>
  )
}

export default Login