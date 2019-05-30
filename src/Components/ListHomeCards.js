
import React from 'react';
import HomeCard from './HomeCard';
import '../Styles/ListHomeCards.css';

const ListHomeCards = (props) => (
    <div className='listHomeCards'>
        {
            props.listHomeCards.map((elem, index) => (
                <HomeCard homeCard={elem} key={index}>
                </HomeCard>
            ))
        }
    </div>
)

export default ListHomeCards;