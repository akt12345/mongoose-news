//follow same format for Note
var mongoose = require("mongoose");
var schema = mongoose.Schema
var headlineBlueprint = new schema({
  // meat of the schema - what the collection looks like
  headline:{
    type: String,
    required: true}
})
//export
var Headline = mongoose.model("Headline", headlineBlueprint)
module.exports = Headline

//follow same format for Note
