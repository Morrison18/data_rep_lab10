import React from 'react';
import { MovieItem } from './movieItem'; //import component

export class Movies extends React.Component{

    // this returns the properties of the movies Array and the map breaks each appart into seperate parts
    render(){
        return this.props.movies.map( (movie)=>{
            return <MovieItem movie={movie} ReloadData={this.props.ReloadData}></MovieItem>
        })
    }
}
