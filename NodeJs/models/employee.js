const mongoose = require('mongoose');
var Employee = mongoose.model('Employee', {
    name: { type: String },
    salary: { type: Number },
    gender: { type: String },
    team: { type: String },
    address: { type: String }

});

module.exports = {
    Employee
};