const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({

    class : {type: String,required: true }
    
})
module.exports = new mongoose.model('class',classSchema);
