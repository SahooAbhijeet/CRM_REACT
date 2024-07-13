import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signup } from '../../Redux/Slices/AuthSlice';

const Signup = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const dropDownRef = useRef(null);
    const [signupDetails, setSignupDetails] = useState({
        name: "",
        email: "",
        password: "",
        userType: "",
        userStatus: "",
        clientName: ""

    });

    function handleChangeInput(e) {
        const { name, value } = e.target;
        setSignupDetails({
            ...signupDetails,
            [name]: value
        });
        console.log(name, value)
    }

    function resetSignupState() {
        setSignupDetails({
            name: "",
            email: "",
            password: "",
            userType: "",
            userStatus: "",
            clientName: ""

        })
    }
    async function handleSubmit() {
        if (
            !signupDetails.name ||
            !signupDetails.email ||
            !signupDetails.password ||
            !signupDetails.userType ||
            !signupDetails.clientName ||
            !signupDetails.userStatus
        ) return;
        const response = await dispatch(signup(signupDetails));
        console.log("res", response);
        // if (response.payload) {
        //     navigate("/")
        // } else {
        //     resetSignupState();
        // }
    }

    function handleUserType(e) {
        const userTypeSelected = e.target.textContent;
        setSignupDetails({
            ...signupDetails,
            userType: userTypeSelected,
            userStatus: (userTypeSelected === 'customer') ? 'approved' : 'suspended'
        });

        if (dropDownRef.current) {
            dropDownRef.current.open = false;
        }
    }

    return (
        <div className=' flex  justify-center items-center h-[90vh]'>
            <div className="card card-side bg-blue-950 shadow-xl">

                <div className="card-body w-96 h-fit">
                    <h2 className="card-title justify-center items-center text-3xl">SIGNUP</h2>
                    <div>

                        <label className="input input-bordered flex items-center gap-2 mt-5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                            </svg>
                            <input

                                name='name'
                                type="text"
                                value={signupDetails.name}
                                className="grow"
                                placeholder="Username"
                                onChange={handleChangeInput}
                            />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 mt-2 ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path
                                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input
                                onChange={handleChangeInput}
                                name='email'
                                value={signupDetails.email}
                                type="email"
                                className="grow"
                                placeholder="Email"
                            />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 mt-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    fillRule="evenodd"
                                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                    clipRule="evenodd" />
                            </svg>
                            <input
                                onChange={handleChangeInput}
                                name='password'
                                value={signupDetails.password}
                                type="password"
                                className="grow"
                                placeholder='********'
                            />
                        </label>

                        <label className="input input-bordered flex items-center gap-2 mt-2 ">


                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                            </svg>

                            <input
                                onChange={handleChangeInput}
                                name='clientName'
                                value={signupDetails.clientName}
                                type="text"
                                className="grow"
                                placeholder='ClientName'
                            />
                        </label>


                        <details className="dropdown" id='dropDownContent' ref={dropDownRef}>
                            <summary className="btn mt-3">{(!signupDetails.userType) ? 'User Type' : signupDetails.userType}</summary>
                            <ul onClick={handleUserType} className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 mt-0.5 shadow">
                                <li><a>customer</a></li>
                                <li><a>engineer</a></li>
                                <li><a>admin</a></li>

                            </ul>
                        </details>
                    </div>



                    <div className="card-actions">
                        <button onClick={handleSubmit} className="btn btn-primary w-full text-xl mt-5">Submit</button>
                    </div>
                    <p className='mt-3 text-lg ml-7'>Already have an account? <Link className='font-bold text-yellow-500 text-bold hover:text-white' to='/login' >Login </Link> </p>
                </div>

            </div>
        </div>
    )
}

export default Signup