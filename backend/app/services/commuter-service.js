//Importing .js file and creating variable
import Commuter from '../models/commuter.js';

//Creating save service which is called from controllers
export const save = async(newCommuter) => {
    const commuter = new Commuter(newCommuter);
    return commuter.save();
}

//Creating update service which is called from controllers
export const update = async (id, updatedCommuter) => {
    const commuterwithdate  = {...updatedCommuter, lastUpdatedDate: Date.now()}
    const commuter = Commuter.findByIdAndUpdate(id, commuterwithdate, {new: true}).exec();
    return commuter;      
}

//Creating get service which is called from controllers
export const get = async (id) => {
    const commuter = Commuter.findById(id).exec();
    return commuter;
}


//Creating remove service which is called from controllers
export const remove = async (id) => {
    const commuter = Commuter.findByIdAndDelete(id).exec();
    return commuter;
}

//Creating search service which is called from controllers
export const search = async (params) => {
    const commuter = Commuter.find(params).exec();
    return commuter;
}