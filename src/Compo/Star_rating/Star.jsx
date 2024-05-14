import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";
import './style.css';

const Star = ({ Nostar }) => {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handle(index) {
        setRating(index);
    }

    function handleMove(index) {
        setHover(index);
    }

    function handleLeave() {
        setHover(rating);
    }

    return (
        <div className='flex flex-row justify-center my-[200px]'>   
            {[...Array(Nostar)].map((_, index) => {
                const starValue = index + 1;
                return (
                    <FaStar 
                        className={starValue <= (hover || rating) ? 'active' : 'inactive'}
                        className='text-3xl text-center'
                        key={index}
                        onClick={() => handle(starValue)}
                        onMouseMove={() => handleMove(starValue)}
                        onMouseLeave={handleLeave} 
                    />
                );
            })}
        </div>
    );
};

export default Star;
