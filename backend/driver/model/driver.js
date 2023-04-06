import mongoose from "mongoose";

const driverSchema = new mongoose.Schema({
    DriverName: {
        type: String,
        required: 'The title field is required.'
    },
   DriverEmail: {
        type: String,
      //  required: 'The Details field is required.'
    },
    StartingLocation: {
        type: String,
        required: 'Starting Location is required.'
    },
    Destination: {
        type: String,
        required: 'Destination is required.'
    },
    PickUpTime: {
        type: Date,
        default: Date.now()
    },
    SeatsAvailable:{
        type: Number,
        required: 'Number of Seats is required.'
    },

}, 

);
const driver = mongoose.model('Driver',driverSchema);

export default driver;
