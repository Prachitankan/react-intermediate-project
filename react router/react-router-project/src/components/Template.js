import React from 'react'
import frameImage from "../assests/frame.png"
import SignupForm from "./SignupForm"
import LoginForm from './LoginForm'
import { FcGoogle } from "react-icons/fc";



const Template = ({ title, desc1, desc2, image, formtype, setIsLoggedIn }) => {
    return (
        <div className='flex justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0'>
            <div className='w-11/12 max-w-[450px]'>
                <h1
                    className='text-[#ddd7f8] font-semibold text-[1.875rem] loading-[2.375rem] font'
                >
                    {title}
                </h1>

                <p className='text-[1.125rem] loading-[1.625rem] mt-4 flex flex-col'>
                    <span className='text-[#b9b5d3]'>{desc1}</span>
                    <span className='text-[#62addf] italic'>{desc2}</span>
                </p>


                {formtype === "signup" ? (
                    <SignupForm setIsLoggedIn={setIsLoggedIn} />
                ) : (
                    <LoginForm setIsLoggedIn={setIsLoggedIn} />
                )}
                <div className='flex w-full items-center my-4 gap-x-2'>
                    <div className='w-full h-[1px] bg-gray-800'></div>
                    <p className='text-gray-800 font-medium loading[1.375rem]'>
                        OR
                    </p>
                    <div className='w-full h-[1px] bg-gray-800'></div>
                </div>

                <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-[#9390a5]
                border border-[#3c3a42] px-[12px] py-[8px] gap-x-2 mt-6'>
                    <FcGoogle />
                    <p>Sign in with Google</p>
                </button>

            </div>

            <div className='relative w-11/12 max-w-[450px]'>
                <img src={frameImage}
                    alt='Pattern'
                    width={558}
                    height={504}
                    loading='lazy' />

                <img src={image}
                    alt='Students'
                    width={558}
                    height={490}
                    loading='lazy'
                    className='absolute -top-4 right-4'
                    />
            </div>
        </div>
    )
}

export default Template;