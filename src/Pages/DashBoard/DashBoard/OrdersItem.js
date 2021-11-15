import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Order from './Order';

const OrdersItem = () => {
    const { user } = useAuth()

    const [ordersItem, setOrdersItem] = useState([])

    useEffect(() => {
        const url = `https://enigmatic-headland-73975.herokuapp.com/orders?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setOrdersItem(data)
            })
    }, [])
    return (
        <div>
            <h2 className='text-center text-4xl m-5 p-5'>Your All Orders</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    ordersItem.map(orderItem => <Order key={orderItem._id} orderItem={orderItem}></Order>)
                }
            </div>

        </div>
    );
};

export default OrdersItem;