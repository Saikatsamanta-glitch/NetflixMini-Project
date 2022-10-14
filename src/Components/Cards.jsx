import React from 'react';
import {Link} from 'react-router-dom';
import '../card.css'
const Cards = ({img,name}) => {
    const url="/player/"+name;
    return (
        <div>
            <Link to={url} className="card">
                <img src={img} className="card__image" alt="" />
                <div className="card__overlay">
                    <div className="card__header">
                        <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                        <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
                        <div className="card__header-text">
                            <h3 className="card__title">{name}</h3>
                            <span className="card__status">1 hour ago</span>
                        </div>
                    </div>
                    <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
                </div>
            </Link>
        </div>
    );
}

export default Cards;
