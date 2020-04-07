import React from 'react'
import 'tachyons';

const Cards = ({ id, name, country, Stats }) => {
    return(
        <div className='tc dib br3 bg-light-red white ba pa2 grow ma2 shadow-5'>
            <img alt='face' src={`https://robohash.org/${id}?200x200`}></img>
            <h2>{name}</h2>
            <p>{country}</p>
            <p>{Stats}</p>
        </div>
    );
}

export default Cards;