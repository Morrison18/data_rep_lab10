import React from 'react';
import Card from 'react-bootstrap/Card'; // import the bootstrap card 
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export class MovieItem extends React.Component{
    
    constructor(){ 
        super();
        this.DeleteMovie = this.DeleteMovie.bind(this);
        
       
     }
        
        //this function uses axios to go to the url below and gets the movie by the id and deletes it 
        DeleteMovie(e){
            e.preventDefault(); 
            axios.delete('http://localhost:4000/api/movies/'+this.props.movie._id) 
            .then(()=>{
                this.props.ReloadData();
            })
            .catch()
            }
        
// returns the title the year and the image in a boootstrap card 
    render(){
       
        return(
            <div>
                <Card style={{ textAlign: 'center'} }>
  
  <Card.Body>
    <Card.Title style={{fontSize: '40px'}}>{this.props.movie.Title}</Card.Title>
    <Card.Text>
    <img src={this.props.movie.Poster} width="200" height="300"></img>
    </Card.Text>
   <p style={{fontSize: '30px'}}>{this.props.movie.Year}</p>
  </Card.Body>

<Button variant="danger" onClick={this.DeleteMovie}>Delete</Button>
</Card>
            </div>
        );
    }
}