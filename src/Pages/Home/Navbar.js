import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import logo from '../../images/logo.png'

const Navbar = () => {
    const { user, logOut } = useAuth();
    return (
        <nav className="bg-green-500 flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <img src={logo} alt="" />
                <span className="font-semibold text-xl tracking-tight mx-2 text-yellow-600">DRONE LAB</span>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <Link to='/home' className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        Home
                    </Link>
                    <Link to='/products' className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        Products
                    </Link>

                    <Link to='/register' className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        Register
                    </Link>
                    <Link to='/dashboard' className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                        Dashboard
                    </Link>

                    {
                        user?.email ? <button onClick={logOut} className="block mx-4 mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 text-yellow-400">LogOut</button> : <Link to='/login' className="mx-4 block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 text-yellow-400">
                            Login
                        </Link>
                    }

                </div>
                {
                    user?.displayName && <h2>Welcome: {user.displayName}</h2>
                }
            </div>
        </nav>
    );
};

export default Navbar;