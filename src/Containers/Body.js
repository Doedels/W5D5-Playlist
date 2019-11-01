import React, { Component } from 'react';
import Input from '../Components/Input';
import Main from '../Components/Main';
import axios from 'axios';

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

    componentDidMount() {
        axios.get('https://burger-builder-c15f4.firebaseio.com/playlist.json')
            .then(response => this.setState({ allRows: response.data }))
    }

    inputHandler = (event) => {
        const rowCopy = { ...this.state.row };
        rowCopy[event.target.name] = event.target.value
        this.setState({ row: rowCopy });
    }

    addSongHandler = () => {
        const allRowsCopy = this.state.allRows.concat(this.state.row);
        this.setState({ allRows: allRowsCopy })
        axios.put('https://burger-builder-c15f4.firebaseio.com/playlist.json', allRowsCopy);
    }

    render() {
        return (
            <div>
                <Input inputHandler={this.inputHandler} addSongHandler={this.addSongHandler} />
                <Main allRows={this.state.allRows} />

            </div>
        )
    }
}

export default Body; 