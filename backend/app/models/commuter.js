import mongoose from "mongoose";
//creating schema for mongoose and for the body
const commuterSchema = new mongoose.Schema({
    RName: {
        type: String,
        required: 'The title field is required.'
    },
    Details: {
        type: String,
        required: 'The Details field is required.'
    },
    Time: {
        type: String,
        required: 'The Time field is required.'
    },
    Status: {
        type: String,
        required: 'The dueDate field is required.'
    },
    creationdate: {
        type: Date,
        default: Date.now()
    },
    lastUpdatedDate: {
        type: Date,
        default: Date.now()
    }
}, {versionKey: false}

);
/* Schema.virtual('id', () => this._id.toHexString());
Schema.set('toJSON', { virtuals: true }); */

const Commuter = mongoose.model('Commuter',commuterSchema);


export default  Commuter;