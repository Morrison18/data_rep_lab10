const express = require('express')
const app = express()
// changed port to 4000 so it doesnt clash with localhost:3000
const port = 4000
const cors = require('cors');
const bodyParser = require('body-parser')
const mongoose =require('mongoose');
const path = require('path');

//add just under import section at the top of server,js
// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../build'))),
app.use('/static', express.static(path.join(__dirname, 'build/static')));


// allows use to indicate a different domian and load its resources
// app.use(cors());
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//     res.header("Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//     });
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

app.put('/api/movies/:id', (req,res)=>{

    console.log("Update movie: "+ req.params.id);
    console.log(req.body);
// finds the movie by the id 
    movieModel.findByIdAndUpdate(req.params.id, req.body, {new:true},
        (err,data)=>{
        res.send(data);
    })
})

// this allow you to get the movie data from the DB with the id 
app.get('/api/movies/:id', (req,res)=>{

    console.log(req.params.id);
// finds the movie by the id and updates it 
    movieModel.findById(req.params.id, (err,data)=>{
        res.json(data);
    })
})
// listens for delete method 
app.delete('/api/movies/:id', (req, res)=>{ 
    console.log(req.params.id);

    movieModel.deleteOne({ _id: req.params.id }, function (err, data) {
        if (err) res.send(err);
              res.send(data);
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
//add at the bottom just over app.listen
// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/../build/index.html'));
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)

})
