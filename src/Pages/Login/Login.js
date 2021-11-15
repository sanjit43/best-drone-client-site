import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Navbar from '../Home/Navbar';

const Login = () => {
    const [loginData, setLoginData] = useState({})

    const location = useLocation()
    const history = useHistory()

    const { user, login, error, hanldeGoogleSignIn } = useAuth()

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value
        setLoginData(newLoginData)

    }

    const handleLoginSubmit = e => {
        login(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }

    const handleGoogleLogin = () => {
        hanldeGoogleSignIn(location, history)
    }
    return (
        <div>
            <Navbar></Navbar>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
                <div>
                    <h2 className='text-center'>Login Please</h2>
                    <div className="w-full max-w-xs">
                        <form onSubmit={handleLoginSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input name="email" onBlur={handleOnBlur} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Your Email" />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input name="password" onBlur={handleOnBlur} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                                <p className="text-red-500 text-xs italic">Please choose a password.</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                    Sign In
                                </button>
                            </div>
                            {user.email && <h2>Login Successfully</h2>}
                            {error && <h2>{error}</h2>}
                        </form>
                        <button onClick={handleGoogleLogin} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Sigin In With Google
                        </button>
                        <br />
                        <Link to='/register' style={{ textDecoration: 'underline', color: 'orange', margin: '20px' }}>New User? please Register</Link>
                        <p className="text-center text-gray-500 text-xs m-3">
                            &copy;2021 Drone Lab. All rights reserved.
                        </p>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Login;