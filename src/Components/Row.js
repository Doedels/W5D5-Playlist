import React from 'react';

const row = (props) => {
    return (
        <div className='newRow' >
            <p>{props.titel}</p>
            <p>{props.artiest}</p>
            <p>{props.genre}</p>
            <p>{props.rating}</p>
        </div>)
};

export default row; 