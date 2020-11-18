const express = require('express')
const app = express()
// changed port to 4000 so it doesnt clash with localhost:3000
const port = 4000
const cors = require('cors');
const bodyParser = require('body-parser')
const mongoose =require('mongoose');

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

// setting up connecting to the database server 
const strConnection = 'mongodb+srv://brian:welcome20@cluster0.wvvof.mongodb.net/FilmsDB?retryWrites=true&w=majority';
// connecting to database 
mongoose.connect(strConnection, {useNewUrlParser: true});

const Schema = mongoose.Schema;

// creating an object for the schema 
const movieSchema = new Schema({
    Title:String,
    Year:String,
    Poster:String
})
// create object movieModel 
const movieModel = mongoose.model('film', movieSchema);



app.get('/api/movies', (req, res)=>{
    console.log(req.body);
   
    // going to database finding all docs and returning it in json format 
    movieModel.find((err,data)=>{
        res.json(data);
    })
   
})
// 
app.get('/api/movies/:id', (req,res)=>{

    console.log(req.params.id);

    movieModel.findById(req.params.id, (err,data)=>{
        res.json(data);
    })
})

//when data passed up this takes the data and includes it into the array
app.post('/api/movies', (req, res)=>{
    movieModel.create({
        Title:req.body.Title,
        Year:req.body.Year,
        TPostertle:req.body.Poster

    })
    .then()
    .catch();

    res.send('Movie received ')
    console.log(req.body.Title);
    console.log(req.body.Year);
    console.log(req.body.Poster);
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)

})
