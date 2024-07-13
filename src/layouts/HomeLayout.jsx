import React, { useEffect } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../Redux/Slices/AuthSlice';

const HomeLayout = ({ children }) => {

    const authState = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    async function handleLogout() {
        dispatch(logout());
        navigate('/login');
    }

    // if we are not logged in then we will not be able to access the homepage --->LOGIC
    useEffect(() => {
        if(!authState.isLoggedIn) navigate('/login');
    },[]);

    return (
        <div className='min-h-[90vh]'>
            <div className='drawer absolute left-0 right-0 cursor-pointer mt-4 ml-4'>
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <label htmlFor="my-drawer" >
                        <RxHamburgerMenu
                            size={"40px"}
                            className='cursor-pointer'
                        />
                    </label>
                </div>

                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                        <li><a>View all Tickets</a></li>
                        <li><a>Dashboard</a></li>

                        <li className='absolute bottom-8 w-3/4'>
                            <div className=' mx-16 flex justify-center items-center'>
                                {
                                    !authState.isLoggedIn ? (
                                        <>
                                            <Link to='/login' className='btn btn-primary px-2 py-1 rounded-md font-semibold w-full'>
                                                
                                                Login
                                           
                                        </Link>
                                        <Link to='/signup' className='btn btn-secondary px-2 py-1 rounded-md font-semibold w-full'>
                                            
                                                Signup
                                        </Link>
                                        </>
                                    ) : (

                                        <>
                                            <button className='btn btn-primary px-2 py-1 rounded-md font-semibold w-full'
                                            onClick={handleLogout}
                                            >
                                                
                                                    Logout
                                               
                                            </button>
                                            <Link to='/signup' className='btn btn-secondary px-2 py-1 rounded-md font-semibold w-full'>
                                                
                                                    Profile
                                            </Link>
                                        </>
                                    )
                                }

                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='flex items-start justify-center'>
                <div className="w-3/4">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default HomeLayout