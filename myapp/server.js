//using express framework
const express = require('express')
const { url } = require('inspector')
const app = express()
//port to access this server
const port = 3000
//body-parser
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//Listen to a call to http://localhost:3000/
app.get('/', (req, res) => {
    res.send('Hello World')
})

//Listens to a call to http://localhost:3000/datarep
app.get('/datarep', (req, res) => {
    res.send('Welcome to Data Representation & Querying')
})

//Listens to a call to http://localhost:3000/hello
app.get('/hello', (req, res) => {
    res.send('Hello')
})

//Listens to a call to http://localhost:3000/hello/... the next field is also sent back
app.get('/hello/:name', (req, res) => {
    res.send('Hello ' + req.params.name)
})

//Listens to a call to http://localhost:3000/test and sends back a html file
app.get('/test', (req, res)=>{
    res.sendFile(__dirname+'/index.html')
})

//Listens to a call to http://localhost:3000/name and sends back a html file with the information provided in the html form
app.get('/name', (req, res)=>{
    res.send('Hello ' + req.query.fname + ' ' + req.query.lname);
})

//Listens to a call to http://localhost:3000/name and posts the information provided, url remains the same
app.post('/name', (req, res)=>{
    res.send('Hello Post ' + req.body.fname + ' ' + req.body.lname);
})

//Listens to a call to http://localhost:3000/api/books to send back json data
app.get('/api/books', (req, res) => {

    const books = [
        {
            "title": "Learn Git in a Month of Lunches",
            "isbn": "1617292419",
            "pageCount": 0,
            "thumbnailUrl":
                "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
            "status": "MEAP",
            "authors": ["Rick Umali"],
            "categories": []
        },
        {
            "title": "MongoDB in Action, Second Edition",
            "isbn": "1617291609",
            "pageCount": 0,
            "thumbnailUrl":
                "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
            "status": "MEAP",
            "authors": [
                "Kyle Banker",
                "Peter Bakkum",
                "Tim Hawkins",
                "Shaun Verch",
                "Douglas Garrett"
            ],
            "categories": []
        },
        {
            "title": "Getting MEAN with Mongo, Express, Angular, and Node",
            "isbn": "1617292036",
            "pageCount": 0,
            "thumbnailUrl":
                "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
            "status": "MEAP",
            "authors": ["Simon Holmes"],
            "categories": []
        }
    ]

    res.json({
        myBooks: books
    })
})

//Sends message when port is used
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})