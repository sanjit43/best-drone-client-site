import React from 'react';
import Navbar from '../../Home/Navbar';

const AddProduct = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h2 className='text-center text-3xl m-5'>Add More Products</h2>
            <form className='text-center'>
                <input type='text' style={{ width: '600px' }} className='border border-2 border-gray-500 m-2 p-3' placeholder='product name'></input>
                <br /><br />
                <input type='text' style={{ width: '600px' }} className='border border-2 border-gray-500 m-2 p-3' placeholder='product description'></input>
                <br /><br />
                <input type='text' style={{ width: '600px' }} className='border border-2 border-gray-500 m-2 p-3' placeholder='image url'></input>
                <br /><br />
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-5'>Submit</button>
            </form>


        </div>
    );
};

export default AddProduct;