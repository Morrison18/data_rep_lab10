import React from 'react';
import axios from 'axios';

export class Create extends React.Component {
    
    //constructor first inherits from the super 
    constructor() {
        super();
        //binding the method to this instance 
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this);

        this.state = {
            Title: '',
            Year: '',
            Poster: ''
        }
    }

    onChangeTitle(e) {
        //updates state when value changes
        this.setState({
            // pulls value back out of onchange title which gets the value from the this.state.Title
            Title: e.target.value
        });
    }

    onChangeYear(e) {
        //updates state when value changes
        this.setState({
             // takes the value that is input and assigns it to Year
            Year: e.target.value
        });
    }
    onChangePoster(e) {
        //updates state when value changes
        this.setState({
            // takes the value that is input and assigns it to Poster
            Poster: e.target.value
        })
    }
    //when button is clicked alerts the inputs 
    onSubmit(e) {
        // this stops us from calling the button multiple times
        e.preventDefault();
        alert("Movie: " + this.state.Title + " " + this.state.Year + " " + this.state.Poster);
        
        const newMovie = {
            Title: this.state.Title,
            Year: this.state.Year,
            Poster: this.state.Poster
        };
        // on submit passes the data from the form up to server
        axios.post('http://localhost:4000/api/movies', newMovie)
        // call back fuction that gets exe when comes back and logs to console
        .then(response => console.log(response.data))
        // have an error logs to console
        .catch(error => console.log(error));

    }

    render() {
        return (
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Add Movie Title: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Title}
                            onChange={this.onChangeTitle}></input>
                    </div>
                    <div className='form-group'>
                        <label>Add Movie Year: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Year}
                            onChange={this.onChangeYear}></input>
                    </div>
                    <div className='form-group'>
                        <label>Add Movie Poster: </label>
                        <textarea type='text'
                            className='form-control'
                            value={this.state.Poster}
                            onChange={this.onChangePoster}>
                        </textarea>
                    </div>

                    <div className='form-group'>
                        <input type='submit'
                            value='Add Movie'
                            className='btn btn-primary'>
                        </input>
                    </div>



                </form>
            </div>
        );
    }
}