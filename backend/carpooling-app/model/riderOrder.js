import mongoose from "mongoose";

const riderOrderSchema = new mongoose.Schema({
    riderOrderNumber: {
        type: String,
        //required: 'The title field is required.'
    },
    DriverOrderNumber:{
        type: Number,
        //required: 'Number of Seats is required.'
    },
    RiderId: {
        type: String,
      //  required: 'The Details field is required.'
    },
    DriverId: {
        type: String,
       // required: 'Starting Location is required.'
    },
    StartingLocation: {
        type: String,
       // required: 'Starting Location is required.'
    },
    Destination: {
        type: String,
        //required: 'Destination is required.'
    },
    PickUpTime: {
        type: Date,
        default: Date.now()
    },
    DriverPostStatus:{
        type: String,
       // required: 'Number of Seats is required.'
    },
    CommuteStatus:{
        type: String,
       // required: 'Number of Seats is required.'
    },
    Cost:{
        type: Number,
       // required: 'Number of Seats is required.'
    },
    OriginLatitude:{
        type: String,
        //required: 'Number of Seats is required.'
    },
    OriginLongitude:{
        type: String,
       // required: 'Number of Seats is required.'
    },
    DestinationLatitude:{
        type: String,
        //required: 'Number of Seats is required.'
    },
    DestinationLongitude:{
        type: String,
       // required: 'Number of Seats is required.'
    }


}, 

);
const riderOrder = mongoose.model('RiderOrder',riderOrderSchema);

export default riderOrder;
