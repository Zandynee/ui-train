import React, { useState } from 'react';

const Carousel = ({ card }) => {
    const [currentIndex, setCurrentcardIndex] = useState(0);

    const nextcard = () => {
        setCurrentcardIndex((prevIndex) => (prevIndex + 1) % card.length);
    };

    const previouscard = () => {
        setCurrentcardIndex((prevIndex) => (prevIndex - 1 + card.length) % card.length);
    };

    return (
        <div className="carousel">
            <button onClick={previouscard}>&#11014;</button>
            <div>{card}</div>
            <button onClick={nextcard}>&#11015;</button>
          
        </div>
    );
};

export default Carousel;