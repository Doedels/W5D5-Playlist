import React, { Component } from 'react';
import Input from '../Components/Input';

class Body extends Component {
    state = {
        row: {
            titel: null,
            artiest: null,
            genre: null,
            rating: null
        },
        allRows: []
    }

    inputHandler = (event) => {
        const rowCopy = { ...this.state.row };
        rowCopy[event.target.name] = event.target.value
        this.setState({ row: rowCopy });
    }

    addSongHandler = () => {
        const allRowsCopy = this.state.allRows.concat(this.state.row);
        this.setState({ allRows: allRowsCopy })
    }

    render() {
        return (
            <div>
                <Input inputHandler={this.inputHandler} addSongHandler={this.addSongHandler} />
                <h1>{this.state.allRows.map(row => `${row.titel} ${row.artiest} ${row.genre} ${row.rating}`)}</h1>

            </div>
        )
    }
}

export default Body; 