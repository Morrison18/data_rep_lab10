import React from 'react';
import { Movies } from './movies'; //import component 
import axios from 'axios'; // promised based HTTP client npm install axios

export class Read extends React.Component {

    // state is an object with a movies array in it 
    state = {
        movies: []
    };
    // when this is visible in the web app the method gets executed
    componentDidMount() {
        //this package is getting JSON data from the url  and returns a promise 
        axios.get('http://localhost:4000/api/movies')
            .then(
                (response) => {
                    //setting state to be equal to movies array
                    this.setState({ movies: response.data.movies })
                }
            )// if an error occurs error hgets logged to the console
            .catch(
                (error) => {
                    console.log('Error')
                }
            );
    }
    render() {
        return (
            //embedded Movies component into read.js
            <div>
                <h3>
                    Hello from read component.
                </h3>

                <Movies movies={this.state.movies}></Movies>
            </div>
        );
    }
}