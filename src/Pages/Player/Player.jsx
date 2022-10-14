import React from 'react';
import {useParams} from 'react-router-dom';
const Player = () => {
    const {id}=useParams();
    return (
        <div>
            <h1> player page 🔥 {id} </h1> 

    <hr />
    
    
        </div>
    );
}

export default Player;
