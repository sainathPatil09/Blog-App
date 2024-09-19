import React, { useState } from 'react'
import { useAuth } from '../context/AuthProvider';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'
import { CiMenuBurger } from "react-icons/ci";
import { BiSolidLeftArrowAlt } from "react-icons/bi";

const SideBar = ({ setComponent }) => {
    const { profile, setIsAuthenticated } = useAuth();
    const [show, setShow] = useState(false)
    //   console.log(profile?.photo?.url);
    //   console.log(isAuthenticated)
    const navigateTo = useNavigate()

    const handleComponents = (value) => {
        setComponent(value);
    }

    const gotoHome = () => {
        navigateTo('/');
    }

    const handleLogout = async (e) => {
        e.preventDefault();

        try {
            const { data } = await axios.get("https://blog-app-xygc.onrender.com/api/users/logout", { withCredentials: true });
            setIsAuthenticated(false)
            localStorage.removeItem("jwt")
            toast.success("Logout Succsefully")
            navigateTo('/login')
        } catch (error) {
            console.log(error)
            toast.error(error.message || "Failed in logout")
        }
    }
    return (
        <>
            <div
                className="sm:hidden fixed top-4 left-4 z-50"
                onClick={() => setShow(!show)}
            >
                <CiMenuBurger className="text-2xl" />
            </div>
            <div className={`w-64 h-full shadow-lg fixed top-0 left-0 bg-gray-50 transition-transform duration-300 transform sm:translate-x-0 ${show ? "translate-x-0" : "-translate-x-full"
                }`}>
                <div
                    className="sm:hidden absolute top-4 right-4 text-xl cursor-pointer"
                    onClick={() => setShow(!show)}>
                    <BiSolidLeftArrowAlt className="text-2xl" />
                </div>
                <div
                    className="sm:hidden absolute top-4 right-4 text-xl cursor-pointer"
                    onClick={() => setShow(!show)}>
                    <BiSolidLeftArrowAlt className="text-2xl" />
                </div>
                <div className='text-center'>
                    <img
                        className='w-24 h-24 rounded-full mx-auto mb-2'
                        src={profile?.photo?.url} alt="" />
                    <p className='text-lg font-semibold '>{profile?.name}</p>
                </div>

                <ul className='space-y-4 mx-4'>
                    <button
                        className='bg-green-400 rounded-lg hover:bg-green-600 hover:text-white font-semibold transition duration-300 w-full px-4 py-2 '
                        onClick={() => { handleComponents("My Blogs") }}
                    >
                        My BLOGS
                    </button>
                    <button className='bg-blue-500 rounded-lg hover:bg-blue-700 hover:text-white font-semibold transition duration-300 w-full px-4 py-2 '
                        onClick={() => { handleComponents("Create Blog") }}
                    >
                        CREATE BLOG
                    </button>
                    <button className='bg-yellow-500 rounded-lg hover:bg-yellow-600 hover:text-white font-semibold transition duration-300 w-full px-4 py-2 '
                        onClick={() => { handleComponents("My Profile") }}
                    >
                        MY PROFILE
                    </button>
                    <button className='bg-violet-700 rounded-lg hover:bg-violet-900 hover:text-white font-semibold transition duration-300 w-full px-4 py-2 '
                        onClick={gotoHome}
                    >
                        HOME
                    </button>
                    <button className='bg-red-500 rounded-lg hover:bg-red-600 hover:text-white font-semibold transition duration-300 w-full px-4 py-2 '
                        onClick={handleLogout}
                    >
                        LOGOUT
                    </button>
                </ul>
            </div>
        </>
    )
}

export default SideBar
