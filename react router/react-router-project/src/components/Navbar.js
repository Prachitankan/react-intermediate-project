import React from 'react'
import logo from "../assests/Logo.svg"
import { Link } from 'react-router-dom'
import {toast} from "react-hot-toast"

const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className='flex items-center justify-between py-4 w-11/12 max-w-[1160px] mx-auto'>

        <Link to="/">
            <img src={logo} alt='logo' width={160} height={32} loading='lazy'/>
        </Link>

        <nav>
            <ul className='text-[#c7cada] flex gap-x-6'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/'>About</Link>
                </li>
                <li>
                    <Link to='/'>Contact</Link>
                </li>
            </ul>
        </nav>

        {/* Login - Signup - LogOut - DashBoard */}

        <div className='flex items-center gap-x-4 overflow-hidden'>
            {   !isLoggedIn &&
                <Link to="/login">
                    <button className="bg-gray-900 text-[#b4b5bd] py-[8px] px-[12px] rounded-[8px] border border-richblack-400">
                        Log in
                    </button>
                </Link>
            }
            {   !isLoggedIn &&
                <Link to="/signup">
                    <button className='bg-gray-900 text-[#b4b5bd] py-[8px] px-[12px] rounded-[8px] border border-richblack-400'>
                        Sign up
                    </button>
                </Link>
            }
            {   isLoggedIn &&
                <Link to="/">
                    <button onClick={() => {
                        setIsLoggedIn(false);
                        toast.success("Logged Out");
                    }} className='bg-gray-900 text-[#b4b5bd] py-[8px] px-[12px] rounded-[8px] border border-richblack-400'>
                        Log out
                    </button>
                </Link>
            }
            {   isLoggedIn &&
                <Link to="/dashboard">
                    <button className='bg-gray-900 text-[#b4b5bd] py-[8px] px-[12px] rounded-[8px] border border-richblack-400'>
                        Dashboard
                    </button>
                </Link>
            }
        </div>

    </div>
  )
}

export default Navbar;
