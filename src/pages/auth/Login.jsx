import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../../Redux/Slices/AuthSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loginDetails, setLoginDetails] = useState({
        email: "",
        password: ""
    });

    function handleChangeInput(e) {
        const { name, value } = e.target;
        setLoginDetails({
            ...loginDetails,
            [name]: value
        });
        console.log(name, value)
    }

    function resetLoginState() {
        setLoginDetails({
            email: "",
            password: "",
        })
    }
    async function handleSubmit() {
        if (!loginDetails.email || !loginDetails.password) return;
        const response = await dispatch(login(loginDetails));
        console.log("res", response.payload?.data);
        if (response.payload) {
            navigate("/")
        } else {
            resetLoginState();
        }
    }
    return (
        <div className=' flex  justify-center items-center h-[90vh]'>
            <div className="card card-side bg-blue-950 shadow-xl">

                <div className="card-body w-96 h-80">
                    <h2 className="card-title justify-center items-center text-3xl">LOGIN</h2>


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
                            type="text"
                            value={loginDetails.email}
                            className="grow"
                            placeholder="Email"
                        />
                    </label>

                    <label className="input input-bordered flex items-center gap-2">
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
                            type="password"
                            value={loginDetails.password}
                            className="grow"
                            placeholder='********'
                        />
                    </label>
                    <div className="card-actions ">
                        <button onClick={handleSubmit} className="btn btn-primary w-full text-xl mt-5">Submit</button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Login