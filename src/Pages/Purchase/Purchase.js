import React, { useEffect, useState } from 'react';
import Navbar from '../Home/Navbar';
import { useForm } from "react-hook-form";
import axios from 'axios';
import useAuth from '../../Hooks/useAuth';
import { useParams } from 'react-router';

const Purchase = () => {
    const { register, handleSubmit, reset } = useForm();
    const [product, setProduct] = useState({})
    const { id } = useParams();
    console.log(id)

    const { user } = useAuth()

    useEffect(() => {
        fetch(`https://enigmatic-headland-73975.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProduct(data)
            })
    }, [])

    const onSubmit = data => {
        if (!data.productName) {
            data.productName = product.name
        }
        if (!data.name) {
            data.name = user.displayName
        }
        if (!data.email) {
            data.email = user.email
        }
        axios.post('https://enigmatic-headland-73975.herokuapp.com/orders', data)
            .then(res => {
                if (res.data.acknowledged) {
                    alert('Submited Succesfully')
                    reset()
                }
            })

    }
    return (
        <div>
            <Navbar></Navbar>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div>
                    <h2 className='text-3xl mb-3 text-center'>Enter Product Name and Your Details</h2>
                    <form className='border border-2 border-red-700 text-center' style={{ width: '600px' }} onSubmit={handleSubmit(onSubmit)}>
                        <input style={{ width: '500px', margin: '10px', padding: '10px' }} className='border border-2 border-gray-600 m-3' {...register("productName")} placeholder='Product Name' defaultValue={product.name} disabled /> <br />
                        <input style={{ width: '500px', margin: '10px', padding: '10px' }} className='border border-2 border-gray-600 m-3' {...register("name")} defaultValue={user.displayName} /> <br />
                        <input style={{ width: '500px', margin: '10px', padding: '10px' }} className='border border-2 border-gray-600 m-3' {...register("email")} defaultValue={user.email} /> <br />
                        <input style={{ width: '500px', margin: '10px', padding: '10px' }} className='border border-2 border-gray-600 m-3' {...register("address")} placeholder='Enter your City' /><br />
                        <input className='bg-blue-700 p-2 m-2' type="submit" />
                    </form>
                </div>

            </div>

        </div>


    );
};

export default Purchase;