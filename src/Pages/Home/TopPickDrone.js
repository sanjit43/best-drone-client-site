import React, { useEffect, useState } from 'react';
import Product from './Product';

const TopPickDrone = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://enigmatic-headland-73975.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h2 className='text-center m-5 text-5xl font-bold'>PICK YOUR FAVORITE DRONE</h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-3">
                {
                    products.slice(0, 6).map(product => <Product key={product.key} product={product}></Product>)
                }
            </div>
            <hr className='m-5'></hr>
        </div>
    );
};

export default TopPickDrone;