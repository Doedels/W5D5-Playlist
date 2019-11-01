import React from 'react';
import Row from './Row';

const main = (props) => {

    const rows = props.allRows.map(row => {
        return (
            <Row key={row.titel + row.artiest} titel={row.titel} artiest={row.artiest} genre={row.genre} rating={row.rating} />
        )
    })

    return (
        <div>
            <div className='headRow' >
                <p>Titel</p>
                <p>Artiest</p>
                <p>Genre</p>
                <p>Rating</p>
            </div>
            {rows}
        </div>
    )
};

export default main; 