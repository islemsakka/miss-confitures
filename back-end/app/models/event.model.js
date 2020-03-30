const mongoose = require('mongoose');

const EventSchema = mongoose.Schema({
    Event_Name: { type: String },
    Event_Date: { type: Date },
    Event_Hour: { type: Date },
    Event_Place: { type: String },
    Event_Description: { type: String },

}, {
    timestamps: true
},

    { collection: 'Eventlist' }

);

module.exports = mongoose.model('Event', EventSchema);