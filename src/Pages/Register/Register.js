import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Navbar from '../Home/Navbar';

const Register = () => {
    const [registerData, setRegisterData] = useState({})
    const history = useHistory()

    const { error, user, handleRegisterUser, loading } = useAuth()
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = { ...registerData };
        newRegisterData[field] = value;
        console.log(field, value, newRegisterData)
        setRegisterData(newRegisterData);
    }
    const handleRegisterForm = e => {
        if (registerData.password !== registerData.password2) {
            alert('Your password did not matched!')
            return;
        }
        console.log(registerData)
        handleRegisterUser(registerData.email, registerData.password, registerData.name, history)
        e.preventDefault()
    }
    return (
        <div>
            <Navbar></Navbar>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
                <div>
                    <h2 className='text-center m-2'>Register Please</h2>
                    {!loading && <form onSubmit={handleRegisterForm} className="w-full max-w-sm m-5">
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                                    Full Name
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input name='name' onBlur={handleOnBlur} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="Jane Doe" />
                            </div>
                        </div>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                                    Your Email
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input name='email' onBlur={handleOnBlur} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="email" placeholder="Email" />
                            </div>
                        </div>

                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
                                    Password
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input name='password' onBlur={handleOnBlur} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="******************" />
                            </div>
                        </div>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
                                    Retype Password
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input name='password2' onBlur={handleOnBlur} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="******************" />
                            </div>
                        </div>
                        <div className="md:flex md:items-center">
                            <div className="md:w-1/3"></div>
                            <div className="md:w-2/3">
                                <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </form>}
                    {user?.email && <h2>Register Successfully</h2>}
                    {loading && <h2>Processing....</h2>}
                    <Link to='/login' style={{ textDecoration: 'underline', color: 'orange' }}>Already Register? please login</Link>
                    {error && <h2>{error}</h2>}
                </div>
            </div>

        </div>
    );
};

export default Register;