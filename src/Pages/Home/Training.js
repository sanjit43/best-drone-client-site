import React from 'react';
import training from '../../images/training.jpg'

const Training = () => {
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 m-5'>
            <img style={{ height: '400px', width: '500px', margin: '20px' }} src={training}></img>
            <div className='m-5'>
                <h2 className='text-3xl m-5'>Drone pilots <br />
                    Training courses</h2>
                <hr className='m-5 w-24 border border-4 border-red-400'></hr>
                <h3 className='text-2xl m-5'>Our specialists will teach you the correct tuning, high-quality control and stunning shooting from the drones.</h3>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-5'>Read More</button>
            </div>
        </div>
    );
};

export default Training;