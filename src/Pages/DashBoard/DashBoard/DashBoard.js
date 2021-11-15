import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Navbar from '../../Home/Navbar';
import OrdersItem from './OrdersItem';

const DashBoard = () => {
    const { admin } = useAuth()
    return (
        <div>
            <Navbar></Navbar>
            <div className='h-24' style={{ display: 'grid', gridTemplateColumns: '1fr 3fr' }}>
                <div style={{ borderRight: '2px solid gray', margin: '20px' }}>
                    <Link to='/dashboard' style={{ textDecoration: 'underline' }} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200">
                        Dashboard
                    </Link>
                    <br /><br />
                    <Link to='/payment' style={{ textDecoration: 'underline' }} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200">
                        Pay
                    </Link>
                    <br /><br />
                    <Link to='/review' style={{ textDecoration: 'underline' }} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200">
                        Review
                    </Link>
                    <br /><br />
                    {admin && <div>
                        <Link to='/admin' style={{ textDecoration: 'underline' }} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200">
                            Make Admin
                        </Link>
                        <br /><br />
                        <Link to='/addproduct' style={{ textDecoration: 'underline' }} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200">
                            Add Product
                        </Link>
                    </div>}

                </div>
                <div style={{ margin: '20px', backgroundColor: 'orange' }}>
                    <OrdersItem></OrdersItem>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;