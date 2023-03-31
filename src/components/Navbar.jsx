import React from 'react'
import logo from "../assets/Logo.svg"
import { Link } from 'react-router-dom'
import { toast } from 'react-hot-toast'
const Navbar = (props) => {

    /*
        here, we are accessing a boolean value from app.js, which tells us is user logged in or not
        
        when user is not logged in then, you will display logIn and sign up buttons

        in other case you will show logout and dashboard buttons

    */
    const isLoggedIn = props.isLoggedIn;
    let setLoggedIn = props.setLoggedIn;

    return (
        <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>

            <Link to="/">
                <img src={logo} alt="logo" width={160} height={32} />
            </Link>

            <nav>
                <ul className='flex text-[16px] gap-x-6 text-white font-medium'>
                    <Link to="/" className='hover:underline underline-offset-2'>Home</Link>
                    <Link to="/" className='hover:underline underline-offset-2'>About</Link>
                    <Link to="/" className='hover:underline underline-offset-2'>Contact</Link>
                </ul>
            </nav>

            {/* buttons 
                here we are using conditions that is why we used {} to write buttons
            
            */}
            <div className='flex items-center gap-x-4'>
                {
                    !isLoggedIn &&
                    <Link to="/login">
                        <button className='bg-gray-800 text-gray-50 py-[8px] px-[12px] rounded-[8px] border border-gray-600'>Log in</button>
                    </Link>
                }
                {
                    !isLoggedIn &&
                    <Link to="/signup">
                        <button onClick={() => {
                            // setLoggedIn(false);
                            // toast.success("Signed In");
                        }} className='bg-gray-800 text-white py-[8px] px-[12px] rounded-[8px] border border-gray-600'>Sign up</button>
                    </Link>
                }
                {
                    // when you logout then you come back to the home page so, we gave path "/"


                    // on logout you need define event listener which will set isLoggedIn value to false and there is one toast 
                    isLoggedIn &&
                    <Link to="/">
                        <button className='bg-gray-800 text-white py-[8px] px-[12px] rounded-[8px] border border-gray-600' onClick={() => {
                            setLoggedIn(false);
                            toast.success("Logged Out");
                        }}>
                            Log Out
                        </button></Link>
                }
                {
                    isLoggedIn &&
                    <Link to="/dashboard">
                        <button className='bg-gray-800 text-white py-[8px] px-[12px] rounded-[8px] border border-gray-600'>Dashboard</button>
                    </Link>
                }
            </div>
        </div>
    )
}

export default Navbar