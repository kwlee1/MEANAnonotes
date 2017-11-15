var mongoose = require('mongoose')
var Quote = mongoose.model('Quote')
module.exports = {
    getAll: function(req,res){
        Quote.find({},null,{sort:'-date'},function(error,quotes){
            if(error){
                console.log(error)
            }
            else{
                res.send(quotes)
            }
        })
    },
    addQuote: function(req,res){
        var newQuote = new Quote({content: req.body.content})
        newQuote.save(function(error,success){
            if(error){
                console.log(error)
            }
            else{
                res.json(newQuote)
            }
        })
    }
}