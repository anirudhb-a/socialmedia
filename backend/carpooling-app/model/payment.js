import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
    /* RiderName: {
        type: String,
       // required: 'The title field is required.'
    },
    RiderEmail: {
        type: String,
      //  required: 'The Details field is required.'
    }, */
   //PickupLocation: {
   //     type: String,
      //  required: 'Starting Location is required.'
   // },
    cost: {
        type: Number,
       // required: 'Starting Location is required.'
    }
   
}, 

);
const payment = mongoose.model('Payment',paymentSchema);

export default payment;