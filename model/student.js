const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {  type: String,  required: false },
    mobile: {type: String, required: false},
    email: {type: String, required: false },
    password: { type: String,  required: false },
    Class : {   type: mongoose.Schema.ObjectId,   required: false  },

});

module.exports = new mongoose.model('student', studentSchema);
