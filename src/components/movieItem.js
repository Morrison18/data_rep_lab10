import React from 'react';
import Card from 'react-bootstrap/Card'; // import the bootstrap card 

export class MovieItem extends React.Component{
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
</Card>
            </div>
        );
    }
}