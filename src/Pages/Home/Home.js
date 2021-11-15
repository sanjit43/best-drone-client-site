import React from 'react';
import Banner from './Banner';
import Footer from './Footer';
import Navbar from './Navbar';
import Testimonial from './Testimonial';
import TopPickDrone from './TopPickDrone';
import Training from './Training';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <TopPickDrone></TopPickDrone>
            <Training></Training>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>

    );
};

export default Home;