import Driver from '../model/driver.js';

export const saveDriver = async (newDriver) =>{
    //return value of asyn func is promise
   const driver = new Driver(newDriver);
   return driver.save();
}

export const getDriver = async (id) =>{
    //return value of asyn func is promise
   const driver =  Driver.findById(id).exec();
   return driver;
}
export const removeDriver = async (id) =>{
    //return value of asyn func is promise
   const driver =  Driver.findByIdAndDelete(id).exec();
   return driver;
}

//Creating update service which is called from controllers
export const updateDriver = async (id, updatedDriver) =>{
    //return value of asyn func is promise
    //const reminderwithdate  = {...updatedReminder, lastModifiedDate: Date.now()}
    const driverNew = {...updateDriver};
   const driver =  Driver.findByIdAndUpdate(id,driverNew,{new: true}).exec();
   return driver;
}

/* 
export const updateDriver = async (id, updatedCommuter) => {
    const driverwithdate  = {...updateDriver, lastUpdatedDate: Date.now()}
    const driver = Driver.findByIdAndUpdate(id, driverwithdate, {new: true}).exec();
    return driver;      
} */

export const searchDriver = async (params) =>{
    //return value of asyn func is promise
   const drivers =  Driver.find(params).exec();
   return drivers;
}
