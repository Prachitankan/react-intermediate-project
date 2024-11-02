import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = ({setIsLoggedIn}) => {

  const [formData, setFormData] = useState({
    email:"", password:""
  })

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false)

  function changeHandler(event) {

    setFormData((prev) => ({ 
      
          ...prev,
          [event.target.name] : event.target.value
      
        }));
  }


  function submitHandler(event){
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In");
    console.log("Printing the login form data")
    console.log(formData);
    navigate("/dashboard");
  }

  return (
    <form onSubmit={submitHandler}
    className='flex flex-col w-full gap-y-4 mt-6'
    >
        <label className='w-full'>
            <p className='text-[0.875rem] text-[#e8e7fd] mb-1 loading-[1.375rem]'>
                Email Address<sup className='text-red-500'>*</sup>
            </p>
            <input
            requered
            type='email'
            value={formData.email}
            onChange={changeHandler}
            placeholder='Enter email address'
            name='email'
            className='bg-[#25252e] rounded-[0.5rem] text-[#afabc9] w-full p-[12px]'
            />
        </label>

        <label className='w-full relative'>
            <p className='text-[0.875rem] text-[#e8e7fd] mb-1 loading-[1.375rem]'>
                Password<sup className='text-red-500'>*</sup>
            </p>
            <input
            requered
            type={showPassword ? ("text") : ("password")}
            value={formData.password}
            onChange={changeHandler}
            placeholder='Enter Password'
            name='password'
            className='bg-[#25252e] rounded-[0.5rem] text-[#afabc9] w-full p-[12px]'

            />

          <span
          className='absolute right-3 top-[38px] cursor-pointer'
          onClick={() => setShowPassword((prev) => !prev)}>
            {showPassword ?
             (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 
             
             (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
          </span>
          <Link to="#">
            <p className='text-xs mt-1 text-blue-400 max-w-max ml-auto'>Forget Password</p>
          </Link>

        </label>

        <button className='bg-yellow-400 rounded-[8px] font-medium text-black px-[12px] py-[8px] mt-6'>Sign In</button>
    </form>
  )
}

export default LoginForm;