//import * as ReminderService from './../services/Reminder-service.js';
import {save,get,remove,search,update} from '../services/commuter-service.js';

// Post operation called, using save to create the data
export const post = async (request,response) => {
    try{
    const newReminder = request.body;
    const savedReminder = await save(newReminder);
    setSuccessfulResponse(savedReminder,response);
    } catch (err) {
        setErrorResponse(err,response);
    }
}

// Index operation called, using search operation to get all the data
export const index = async(request, response) => {
    try {
        const params = {};
        const reminder = await search(params);
        setSuccessfulResponse(reminder,response);
    } catch (err) {
        setErrorResponse(err,response);
    }
}

// find operation called, using get operation to get one value
export const find= async(request, response) =>{
    try{
        const id = request.params.id;
        const reminder = await get(id);
        setSuccessfulResponse(reminder,response);
    } catch (err) {
        setErrorResponse(err,response);

    }

}

// deleteReminder operation called, using remove operation to delete one value

export const deleteReminder  = async(request, response) => {
try{
    const id = request.params.id;
    const reminder = await remove(id);
    setSuccessfulResponse(reminder,response);

}catch(err){
    setErrorResponse(err,response);
}
}

// updateReminder operation called, using update operation to update one value
export const updateReminder  = async(request, response) => {
    try{
        const id = request.params.id;
        const body = request.body;
        const reminder = await update(id,body);
        setSuccessfulResponse(reminder,response);
    
    }catch(err){
        setErrorResponse(err,response);
    }
  }

// 200 ok for successfull operation
const setSuccessfulResponse = (obj,response) => {
    response.status(200);
    response.json(obj);
}

// 500 for error message
const setErrorResponse = (err,response) => {
    response.status(500);
    response.json({
        error: {
            message: err
        }
    });
}
