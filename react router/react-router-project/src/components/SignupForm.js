import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';

const SignupForm = ({ setIsLoggedIn }) => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState({
        password: false,
        confirmPassword: false
    });

    const [accountType, setAccountType] = useState("student");

    function changeHandler(event) {
        setFormData((prev) => ({
            ...prev,
            [event.target.name]: event.target.value
        }));
    }

    function togglePasswordVisibility(field) {
        setShowPassword((prev) => ({
            ...prev,
            [field]: !prev[field]
        }));
    }

    function submitHandler(event) {
        event.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account Created");
        navigate("/dashboard");

        const accountData = {
            ...formData
        };

        const finalData ={
            ...accountData,
            accountType
        }
        console.log("Printing final account data");
        console.log(finalData);
    }

    return (
        <div>
            {/* student Instructor page */}
            <div className='flex bg-gray-900 p-1 gap-x-1 my-6 rounded-full max-w-max'>
                <button
                className={`${accountType === "student" 
                    ?
                    "bg-[#000013] text-[#e8e7fd]"
                    :"bg-transparent text-[#afabc9] "} py-2 px-5 rounded-full transition-all duration-200`}
                onClick={() => setAccountType("student")}>
                    Student
                </button>
                <button
                className={`${accountType === "instructor" 
                    ?
                    "bg-[#000013] text-[#e8e7fd]"
                    :"bg-transparent text-[#afabc9] "} py-2 px-5 rounded-full transition-all duration-200`}
                onClick={() => setAccountType("instructor")}>
                    Instructor
                </button>
            </div>

            <form className='flex flex-col w-full gap-y-4 mt-6' onSubmit={submitHandler}>
                <div className='flex gap-x-4'>
                    <label className='w-full'>
                        <p className='text-[0.875rem] text-[#e8e7fd] mb-1 loading-[1.375rem]'>
                            First Name<sup className='text-red-500'>*</sup>
                        </p>
                        <input
                            required
                            type='text'
                            name='firstName'
                            onChange={changeHandler}
                            placeholder='Enter first name'
                            value={formData.firstName}
                            className='bg-[#25252e] rounded-[0.5rem] text-[#afabc9] w-full p-[12px]'
                        />
                    </label>

                    <label className='w-full'>
                        <p className='text-[0.875rem] text-[#e8e7fd] mb-1 loading-[1.375rem]'>
                            Last Name<sup className='text-red-500'>*</sup>
                        </p>
                        <input
                            required
                            type='text'
                            name='lastName'
                            onChange={changeHandler}
                            placeholder='Enter last name'
                            value={formData.lastName}
                            className='bg-[#25252e] rounded-[0.5rem] text-[#afabc9] w-full p-[12px]'
                        />
                    </label>
                </div>

                <label className='w-full'>
                    <p className='text-[0.875rem] text-[#e8e7fd] mb-1 loading-[1.375rem]'>
                        Email Address<sup className='text-red-500'>*</sup>
                    </p>
                    <input
                        required
                        type='email'
                        name='email'
                        onChange={changeHandler}
                        placeholder='Enter email address'
                        value={formData.email}
                        className='bg-[#25252e] rounded-[0.5rem] text-[#afabc9] w-full p-[12px]'
                    />
                </label>

                <div className='w-full flex gap-x-4 mx-0'>
                    <label className='w-full relative'>
                        <p className='text-[0.875rem] text-[#e8e7fd] mb-1 loading-[1.375rem]'>
                            Create Password<sup className='text-red-500'>*</sup>
                        </p>
                        <input
                            required
                            type={showPassword.password ? "text" : "password"}
                            name='password'
                            onChange={changeHandler}
                            placeholder='Enter Password'
                            value={formData.password}
                            className='bg-[#25252e] rounded-[0.5rem] text-[#afabc9] w-full p-[12px]'
                        />
                        <span
                            className='absolute right-3 top-[38px] cursor-pointer'
                            onClick={() => togglePasswordVisibility("password")}
                        >
                            {showPassword.password ?
                                <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> :
                                <AiOutlineEye fontSize={24} fill='#AFB2BF' />}
                        </span>
                    </label>

                    <label className='w-full relative'>
                        <p className='text-[0.875rem] text-[#e8e7fd] mb-1 loading-[1.375rem]'>
                            Confirm Password<sup className='text-red-500'>*</sup>
                        </p>
                        <input
                            required
                            type={showPassword.confirmPassword ? "text" : "password"}
                            name='confirmPassword'
                            onChange={changeHandler}
                            placeholder='Confirm Password'
                            value={formData.confirmPassword}
                            className='bg-[#25252e] rounded-[0.5rem] text-[#afabc9] w-full p-[12px]'
                        />
                        <span
                            className='absolute right-3 top-[38px] cursor-pointer'
                            onClick={() => togglePasswordVisibility("confirmPassword")}
                        >
                            {showPassword.confirmPassword ?
                                <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> :
                                <AiOutlineEye fontSize={24} fill='#AFB2BF' />}
                        </span>
                    </label>
                </div>

                <button className='w-full bg-yellow-400 rounded-[8px] font-medium text-black px-[12px] py-[8px] mt-6'>
                    Create Account
                </button>
            </form>
        </div>
    )
}

export default SignupForm;
