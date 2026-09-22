"use client"
import React, { useState } from 'react'
import { DynamicIcon } from 'lucide-react/dynamic'

export default function signUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    userName: "",
    password: ""
  })

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
  }

  return (
    <div className='w-screen h-screen bg-[#FBFBFB] flex justify-center items-center'>
      <form onSubmit={handleSubmit} className='w-153 h-fit bg-[#ffffff] rounded-4xl py-10 px-10 flex flex-col items-center shadow-lg'>
        <h1 className='text-black font-medium text-3xl text-center'>Sign up</h1>
        <div className='w-fit h-fit pt-10 flex flex-wrap gap-5 justify-center items-center'>
          <input className='w-59.5 h-11 pl-4 bg-[#F7F7F9] text-black font-medium outline-none placeholder-gray-400 rounded-2xl' type="text" placeholder='First name' name='firstName' onChange={handleChange} />
          <input className='w-59 h-11 pl-4 bg-[#F7F7F9] text-black font-medium outline-none placeholder-gray-400 rounded-2xl' type="text" placeholder='Last name' name='lastName' onChange={handleChange} />
          <input className='w-124.25 h-11 pl-4 bg-[#F7F7F9] text-black font-medium outline-none placeholder-gray-400 rounded-2xl' type="text" placeholder='Email' name='email' onChange={handleChange} />
          <input className='w-59 h-11 pl-4 bg-[#F7F7F9] text-black font-medium outline-none placeholder-gray-400 rounded-2xl' type="text" placeholder='Username' name='userName' onChange={handleChange} />
          <input className='w-59 h-11 pl-4 bg-[#F7F7F9] text-black font-medium outline-none placeholder-gray-400 rounded-2xl' type="password" placeholder='Password' name='password' onChange={handleChange} />
          <button className='w-59.5 h-11 flex justify-center items-center gap-3 text-white bg-[#313131] rounded-2xl mt-4 transition-all hover:bg-[#464646]'><DynamicIcon name="user-plus" size={20} />Sign up</button>
        </div>
        {/* <div className='w-full h-px bg-[#707070]/25 mt-8'></div> */}
        <div className="flex items-center gap-4 w-full pt-6 px-6">
          <hr className="flex-1 border-t border-gray-300" />
          <span className="text-gray-500 text-sm">or</span>
          <hr className="flex-1 border-t border-gray-300" />
        </div>
        <button className='w-62 h-11 bg-[#F7F7F9] rounded-2xl mt-6 text-black font-medium flex justify-center items-center gap-3 transition-all hover:bg-[#e7e7e7]'>
          <img className='size-5' src="\google.svg" alt="" />Continue with Google</button>
        <button className='w-62 h-11 bg-[#F7F7F9] rounded-2xl mt-6 text-black font-medium flex justify-center items-center gap-3 transition-all hover:bg-[#e7e7e7]'>
          <img className='size-5' src="\github.svg" alt="" />Continue with Github</button>
        <h3 className='text-black mt-6'>Already have an account? <a className='underline' href="/auth/sign-in">login</a></h3>
      </form>
    </div>
  )
}
