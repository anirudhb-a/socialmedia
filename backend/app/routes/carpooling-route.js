import express from 'express';
import * as commuterController from '../controllers/commuter-controller.js';

const router = express.Router();

// ROute to call the controllers for CRUD operations
router.route('/')
    .post(commuterController.post)
    .get(commuterController.index);

router.route('/:id')
    .get(commuterController.find)
    .delete(commuterController.deleteReminder)
    .patch(commuterController.updateReminder)
    .put(commuterController.updateReminder);

export default router;
