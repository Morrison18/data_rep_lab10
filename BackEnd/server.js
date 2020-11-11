const express = require('express')
const app = express()
// changed port to 4000 so it doesnt clash with localhost:3000
const port = 4000
const cors = require('cors');
const bodyParser = require('body-parser')


// allows use to indicate a different domian and load its resources
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/api/movies', (req, res)=>{
    // creating an array 
    const mymovies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
            },
            {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
            }
    ];
    // status code 200 ok
    res.status(200).json({
        message: "All is good",
        movies:mymovies
    });
})


//when data passed up this takes the data and includes it into the array
app.post('/api/movies', (req, res)=>{
    console.log('Movie received ')
    console.log(req.body.Title);
    console.log(req.body.Year);
    console.log(req.body.Poster);
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)

})
