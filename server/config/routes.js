// require in your controllers, if we have multiple controllers we require all of them!

// example

const quotes = require('./../controllers/quotes.js')
const path = require('path');

// routing exports a function that takes app
module.exports = function(app){

    app.get('/quotes',function(req,res){
        quotes.getAll(req,res);
    })

    app.post('/quotes',function(req,res){
        console.log(req.body)
        quotes.addQuote(req,res)
    })

    // catch all to serve the index
    // make sure your file path matches the name of your angular app folder
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))
    });
};