import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

const LogIn = ({ setIsLoggedIn }) => {

    const [formData, setFormdata] = useState({
        email: "", password: ""
    });

    function changeHandler(event) {
        setFormdata((prevData) => {
            return {
                ...prevData,
                [event.target.name]: event.target.value
            }
        })
    }

    const [showPass, setShowPass] = useState(false);

    const navigate = useNavigate();

    function submitHandler(event) {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        console.log("printing the form data : ");
        console.log(formData);
        navigate('/dashboard');

    }
    return (
        <form onSubmit={submitHandler}
            className='flex flex-col gap-y-4 mt-6 w-full'>
            <label htmlFor=""
                className='w-full'>
                <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>
                    Email Address <sup className='text-pink-400'>*</sup>
                </p>
                <input
                    className='bg-gray-800 rounded-[0.5rem] text-gray-50 w-full p-[12px] border-b-2 border-b-gray-600'
                    type="email"
                    id="email"
                    required
                    name='email'
                    value={formData.email}
                    onChange={changeHandler}
                    placeholder="Enter email id"
                />
            </label>

            <label htmlFor="" className='relative w-full'>
                <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>
                    Password <sup className='text-pink-400'>*</sup>
                </p>
                <input
                    className='bg-gray-800 rounded-[0.5rem] text-gray-50 w-full p-[12px] border-b-2 border-b-gray-600'
                    type={showPass ? ("text") : "password"}
                    required
                    name='password'
                    value={formData.password}
                    onChange={changeHandler}
                    placeholder="Enter Password"
                />

                <span onClick={() => setShowPass((prev) => !prev)}
                    className='absolute right-3 top-[38px] cursor-pointer'
                >
                    {showPass ?
                        (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) :
                        (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
                </span>

                <Link to="#">
                    <p className='text-xs mt-1 text-blue-500 flex justify-end'>Forgot Password</p>
                </Link>
            </label>

            <button className='bg-yellow-400 rounded-[8px] font-medium px-[12px] py-[8px] mt-4 mb-4'>
                Sign In
            </button>
        </form>
    )
}

export default LogIn