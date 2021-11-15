import React, { useState } from 'react';
import Navbar from '../../Home/Navbar';

const Review = () => {
    const [review, setReview] = useState({})
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newReview = { ...review };
        newReview[field] = value;
        setReview(newReview)
    }

    const handleReview = e => {
        const totalReview = { ...review }
        fetch('https://enigmatic-headland-73975.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(totalReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('review submited successfully')
                }
            })

        e.preventDefault()
    }
    return (
        <div>
            <Navbar></Navbar>
            <h2 className='text-center text text-4xl m-5 p-5'>Enter your review here</h2>
            <form onSubmit={handleReview} className='text-center'>
                <input name='name' onBlur={handleOnBlur} style={{ width: '600px' }} className='border border-2 border-gray-500 m-2' type='text' placeholder='Your Name'></input>
                <br />
                <input name='image' onBlur={handleOnBlur} style={{ width: '600px' }} className='border border-2 border-gray-500 m-2' type='text' placeholder='image'></input>
                <br />
                <textarea name='description' onBlur={handleOnBlur} style={{ width: '600px' }} className='border border-2 border-gray-500 m-2' placeholder='Input your review'></textarea>
                <br />
                <input name='rating' onBlur={handleOnBlur} style={{ width: '600px' }} className='border border-2 border-gray-500 m-2' type='text' placeholder='Rating'></input>
                <br />
                <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>Submit</button>
            </form>
        </div>
    );
};

export default Review;