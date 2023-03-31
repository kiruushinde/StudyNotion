import React from 'react'
import SignUpForm from './SignUpForm'
import LogInForm from './LogInForm'
import frameImg from '../assets/frame.png'
import { FcGoogle } from 'react-icons/fc'

const Template = ({ title, desc1, desc2, image, formType, setIsLoggedIn }) => {
    return (
        <div className='w-11/12 flex max-w-[1160px] py-12 items-center p-10 mx-auto justify-between gap-x-12 gap-y-0'>
            <div className='w-11/12 max-w-[450px]'>
                <h1 className='text-white font-semibold text-[1.875rem] leading-[2.375rem]'>{title}</h1>

                <p className='text-[1.125rem] leading-[1.625rem] mt-4'>
                    <span className='text-gray-50'>{desc1}</span>
                    <br />
                    <span className='text-blue-500 italic'>{desc2}</span>
                </p>

                <div>
                    {formType === "signUp" ? (<SignUpForm setIsLoggedIn={setIsLoggedIn} />) : (<LogInForm setIsLoggedIn={setIsLoggedIn} />)}
                </div>

                <div className='flex w-full items-center gap-x-2'>
                    <div className='w-full h-[1px] bg-gray-700'></div>
                    <p className='text-gray-800 font-medium leading-[1.375rem]'>OR</p>
                    <div className='w-full h-[1px] bg-gray-700'></div>
                </div>

                <button className='w-full flex items-center justify-center rounded-[8px] font-medium text-gray-100 border border-gray-100 px-[12px] py-[8px] gap-x-2 mt-6'>
                    <FcGoogle />
                    <p> Sign up with Google</p>
                </button>
            </div>

            <div className='relative w-11/12 max-w-[450px] '>
                <img src={frameImg} alt="" loading='lazy' width={558} height={504} />

                <img src={image} width={558} height={409} loading='lazy' alt="" className='absolute -top-4 right-4' />
            </div>
        </div>
    )
}

export default Template