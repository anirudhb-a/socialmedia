import Rider from '../model/rider.js';

export const saveRider = async (newRider) =>{
    //return value of asyn func is promise
   const rider = new Rider(newRider);
   return rider.save();
}

export const getRider = async (id) =>{
    //return value of asyn func is promise
   const rider =  Rider.findById(id);
   return rider;
}
export const removeRider = async (id) =>{
    //return value of asyn func is promise
   const rider =  Rider.findByIdAndDelete(id).exec();
   return rider;
}

export const updateRider = async (id, updatedRider) =>{
    //return value of asyn func is promise
    //const reminderwithdate  = {...updatedReminder, lastModifiedDate: Date.now()}
    const riderNew = {...updateRider};
   const rider =  Rider.findByIdAndUpdate(id,riderNew,{new: true}).exec();
   return rider;
}

export const searchRider = async (params) =>{
    //return value of asyn func is promise
   const riders =  Rider.find(params).exec();
   return riders;
}

