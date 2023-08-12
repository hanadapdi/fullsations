const mongoose = require('mongoose');
const Attendance = mongoose.Schema({
    Tittel : String,
    Name : String,
    Date : String,
    AttendanceId: Boolean
})

module.exports = mongoose.model('Attendance' , Attendance);