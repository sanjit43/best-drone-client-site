import React from 'react';

const Order = ({ orderItem }) => {
    const { productName, name, address } = orderItem
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2"><h2 style={{ color: 'green' }}>Product Name:</h2>{productName}</div>
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2"><h2 style={{ color: 'green' }}>Your Name:</h2>{name}</div>
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2"><h2 style={{ color: 'green' }}>Address:</h2>{address}</div>
            </div>

        </div>
    );
};

export default Order;