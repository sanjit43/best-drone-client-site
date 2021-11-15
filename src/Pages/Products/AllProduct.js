import React from 'react';
import { Link } from 'react-router-dom';

const AllProduct = ({ product }) => {
    const { _id, name, Description, Price, image } = product
    return (


        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={image} alt={name} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base">
                    {Description}
                </p>
            </div>
            <div className='text-center'>
                <h3>${Price}</h3>
            </div>
            <div className="px-6 pt-2 pb-2 text-center ">
                <Link to={`/purchase/${_id}`}><button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>Order Now</button></Link>

            </div>
        </div>


    );
};

export default AllProduct;