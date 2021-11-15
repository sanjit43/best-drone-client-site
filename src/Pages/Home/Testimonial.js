import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';

const Testimonial = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://enigmatic-headland-73975.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='text-center m-5'>
            <hr />
            <h4 className='text-5xl m-3'>Testimonials</h4>
            <h3 className='text-3xl m-5'>What our clients say</h3>
            <hr className='m-3' />

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review => <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <img className="w-full" src={review.image} alt="Sunset in the mountains" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{review.name}</div>
                            <p className="text-gray-700 text-base">
                                {review.description}
                            </p>
                            <Rating
                                style={{ color: 'gold' }}
                                initialRating={review.rating}
                                emptySymbol="far fa-star"
                                fullSymbol="fas fa-star"
                            ></Rating>
                        </div>
                    </div>)
                }

            </div>
            <hr className='m-5' />
        </div>
    );
};

export default Testimonial;