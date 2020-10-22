import React from 'react';

export class MovieItem extends React.Component{
// returns the title the year and the image 
    render(){
        return(
            <div>
                <h4>{this.props.movie.Title}</h4>
                <p>{this.props.movie.Year}</p>
                <img src={this.props.movie.Poster} width="200" height="200"></img>
            </div>
        );
    }
}