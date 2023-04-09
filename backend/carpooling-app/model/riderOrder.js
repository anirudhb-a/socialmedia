import mongoose from "mongoose";

const riderOrderSchema = new mongoose.Schema({
    riderOrderNumber: {
        type: String,
        required: 'The title field is required.'
    },
    DriverOrderNumber:{
        type: Number,
        required: 'Number of Seats is required.'
    },
    RiderId: {
        type: String,
      //  required: 'The Details field is required.'
    },
    DriverId: {
        type: String,
        required: 'Starting Location is required.'
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
    Status:{
        type: Number,
        required: 'Number of Seats is required.'
    },
    Cost:{
        type: Number,
        required: 'Number of Seats is required.'
    }

}, 

);
const riderOrder = mongoose.model('RiderOrder',riderOrderSchema);

export default riderOrder;
