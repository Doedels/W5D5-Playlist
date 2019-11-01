import React, { Component } from 'react';
import Input from '../Components/Input';

class Body extends Component {
    state = {
        titel: null,
        artiest: null,
        genre: null,
        rating: null
    }

    inputHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <div>
                <Input inputHandler={this.inputHandler} />
                <h1>{this.state.titel}</h1>
                <h1>{this.state.artiest}</h1>
                <h1>{this.state.genre}</h1>
                <h1>{this.state.rating}</h1>
            </div>
        )
    }
}

export default Body; 