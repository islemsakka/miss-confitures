const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    First_Name: { type: String },
    Last_Name: { type: String },
    Email: { type: String },
    Phone_Number: { type: Number }
}, {
    timestamps: true
},

    { collection: 'userlist' }


);

module.exports = mongoose.model('User', UserSchema);





