import React, { useState } from 'react';
import Navbar from '../Home/Navbar';

const Admin = () => {
    const [email, setEmail] = useState('');
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdmin = e => {
        const user = { email }
        fetch(' https://enigmatic-headland-73975.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Admin created successfully')
                }
            })
        e.preventDefault()
    }
    return (
        <div>
            <Navbar></Navbar>
            <h2 className='text-center text-3xl m-5'>Make An Admin</h2>
            <form onSubmit={handleAdmin} className='text-center'>
                <input onBlur={handleOnBlur} type='email' style={{ width: '600px', padding: '10px' }} className='border border-2 border-gray-500 rounded-xl' placeholder='Enter Email'></input>
                <br /> <br />
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>Make Admin</button>
            </form>
        </div>
    );
};

export default Admin;