var mongoose = require('mongoose');

// define the schema
var QuoteSchema = new mongoose.Schema({
    content: { type: String, require: true, minlength: 3}
}, {timestamps: true}); 

// pass the schema and set the model for the entire app
mongoose.model('Quote', QuoteSchema);