import React, { useEffect, useState } from 'react';
import AllProduct from './AllProduct';

const AllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://enigmatic-headland-73975.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h2 className='text-center text-5xl m-5 font-extrabold text-pink-700'>BEST DRONES FOR SALE</h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-3 mt-3">
                {
                    products.map(product => <AllProduct key={product.key} product={product}></AllProduct>)
                }
            </div>
        </div>

    );
};

export default AllProducts;