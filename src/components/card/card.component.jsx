import React from 'react';
import './card.styles.css'

export const Card = (props) => {
    return (
        <div className="card-container">
            <img src={`https://robohash.org/AY${props.monster.id}.png?set=set2&size=180x180`} alt="monster"/>
            <h1>{props.monster.name}</h1>
            <h3>{props.monster.email}</h3>
        </div>

    )
}