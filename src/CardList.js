import React from 'react';
import Cards from './Cards';

const CardList = ({ HornyBuns }) => {
const cardComponents = HornyBuns.map((users, i) => {
    return(
        <Cards 
        key={i}
        id={HornyBuns[i].id} 
        name={HornyBuns[i].name} 
        country={HornyBuns[i].country} 
        Stats={HornyBuns[i].Stats}
        />
    );
}) 
    return(
        <div>
           {cardComponents}
        </div>
    );
}

export default CardList;