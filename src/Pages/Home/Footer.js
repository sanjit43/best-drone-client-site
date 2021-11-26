import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-gray-200'>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-5 p-5'>
                <div>
                    <h2 className="m-2 text-2xl">Learn More</h2>
                    <Link className='m-2' to='#'>About Us</Link>
                    <br />
                    <Link className='m-2' to='#'>Contact</Link>
                </div>
                <div>
                    <input type='email' style={{ width: '300px', padding: '10px' }} className='border border-2 border-gray-500 rounded-xl' placeholder='Email'></input>
                    <br />
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2'>Subscribe</button>
                </div>
                <div>
                    <h2 className="m-2 text-2xl">Legal</h2>
                    <Link className='m-2' to='#'>Privacy Policy</Link>
                    <br />
                    <Link className='m-2' to='#'>Terms of Service</Link>
                </div>
            </div>
            <h2 className='text-center'>&copy; All right reserved by Drone Lab!!</h2>
        </div>
    );
};

export default Footer;