import express from "express";
import * as driverController from '../controller/driver-controller.js';

const router = express.Router();

//route the methods with controller logic
router.route('/')
   .post(driverController.post)
   .get(driverController.index);
 
//route the paramterized methods with controller logic 
router.route('/:id')
   .get(driverController.find)
   .delete(driverController.deleteDriver)
   .patch(driverController.updateDriver)
   .put(driverController.updateDriver);


  export default router;

