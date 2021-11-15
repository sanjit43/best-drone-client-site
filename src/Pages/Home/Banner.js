import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../images/banner.jpg'

const Banner = () => {
    return (
        <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-3 p-5 bg-red-200'>
            <div>
                <h2 className='text-3xl'> <span className='text-green-400'>Professional</span> <br /> DRONE <br /> FOR SALE</h2>
                <p className='mt-5'>See prices, features, and drone camera specs in our shopping guide to drones with camera for drone pilots in photography, filmmaking, aerial mapping, ...</p>
                <Link to='/products'><button className='border-4 rounded-2xl bg-blue-300 p-2 text-white mt-5 font-bold'>EXPLORE MORE</button></Link>
            </div>

            <div>
                <img className='border-2 border-gray-300 rounded-lg' src={image} alt="" />
            </div>
        </div>

    );
};

export default Banner;