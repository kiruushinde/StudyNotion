import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
const SignUpForm = ({ setIsLoggedIn }) => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: "", lastName: "", email: "", password: "", confirmPassword: ""
    })

    function changeHandler(event) {
        setFormData((prevData) => {
            return {
                ...prevData,
                [event.target.name]: event.target.value
            }
        })
    }

    function submitHandler(event) {
        event.preventDefault();

        if (formData.password != formData.confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        setIsLoggedIn(true);
        toast.success("Account Created");

        console.log("printing final account data : ");

        const accountData = {
            ...formData
        };

        const finalData = {
            ...accountData,
            accountType
        };

        console.log(finalData);


        navigate("/dashboard");
    }
    const [showPass, setShowPass] = useState(false);

    const [showPass2, setShowPass2] = useState(false);

    const [accountType, setAccountType] = useState("student");


    return (
        <div className='overflow-x-hidden p-1'>
            {/* student instructor tab */}
            <div className='flex bg-gray-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>

                <button
                    className={`${accountType === "student" ? "bg-gray-600 text-gray-50" : "bg-transparent text-gray-200"} py-2 px-5 rounded-full transition-all duration-200 `}
                    onClick={() => setAccountType("student")}>Student</button>


                <button
                    className={`${accountType === "instructor" ? "bg-gray-600 text-gray-50" : "bg-transparent text-gray-200"} py-2 px-5 rounded-full transition-all duration-200 `}
                    onClick={() => setAccountType("instructor")}>Instructor</button>
            </div>

            <form onSubmit={submitHandler} >
                {/* first name and last name */}
                <div className='flex gap-x-5 justify-between mt-4'>
                    <label htmlFor="">
                        <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>First Name<sup className='text-pink-400'>*</sup></p>
                        <input type="text"
                            name='firstName'
                            onChange={changeHandler}
                            placeholder='Enter First Name'
                            value={formData.firstName}
                            required
                            className='bg-gray-800 rounded-[0.5rem] text-gray-50 w-full p-[12px] border-b-2 border-b-gray-600' />
                    </label>

                    <label htmlFor="">
                        <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>Last Name<sup className='text-pink-400'>*</sup></p>
                        <input type="text"
                            name='lastName'
                            onChange={changeHandler}
                            placeholder='Enter First Name'
                            value={formData.lastName}
                            required
                            className='bg-gray-800 rounded-[0.5rem] text-gray-50 w-full p-[12px] border-b-2 border-b-gray-600' />
                    </label>
                </div>

                {/* email address */}
                <label htmlFor="" className='mt-4'>
                    <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>
                        Email Address <sup className='text-pink-400'>*</sup>
                    </p>
                    <input type="text"
                        required
                        name='email'
                        value={formData.email}
                        onChange={changeHandler}
                        placeholder="Enter Email Address"
                        className='bg-gray-800 rounded-[0.5rem] text-gray-50 w-full p-[12px] border-b-2 border-b-gray-600'
                    />
                </label>

                {/* create password and confirm password */}
                <div className='flex justify-between w-full mt-4'>
                    <label htmlFor="" className='relative'>
                        <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>
                            Password <sup className='text-pink-400'>*</sup>
                        </p>
                        <input type={showPass ? ("text") : "password"}
                            required
                            name='password'
                            value={formData.password}
                            onChange={changeHandler}
                            placeholder="Enter Password"
                            className='bg-gray-800 rounded-[0.5rem] text-gray-50 w-full p-[12px] border-b-2 border-b-gray-600'
                        />

                        <span className='absolute right-3 top-[38px] cursor-pointer' onClick={() => setShowPass((prev) => !prev)}>
                            {showPass ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
                        </span>
                    </label>

                    <label htmlFor="" className='relative'>
                        <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>
                            Confirm Password <sup className='text-pink-400'>*</sup>
                        </p>
                        <input type={showPass2 ? ("text") : "password"}
                            required
                            name='confirmPassword'
                            value={formData.confirmPassword}
                            onChange={changeHandler}
                            placeholder="Enter Password"
                            className='bg-gray-800 rounded-[0.5rem] text-gray-50 w-full p-[12px] border-b-2 border-b-gray-600'
                        />

                        <span
                            className='absolute right-3 top-[38px] cursor-pointer'
                            onClick={() => setShowPass2((prev) => !prev)}>
                            {showPass2 ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
                        </span>
                    </label>
                </div>

                <button className='bg-yellow-400 rounded-[8px] w-full font-medium px-[12px] py-[8px] mt-4 mb-4'>
                    Create Account
                </button>
            </form>
        </div>
    )
}

export default SignUpForm