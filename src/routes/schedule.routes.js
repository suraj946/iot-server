import { Router } from 'express';
import { addSchedule, getSchedule, getDetails, deleteSchedule } from '../controllers/schedule.controllers.js';


const router = Router();

router.route("/add-schedule").post(addSchedule);
router.route("/get-schedule").get(getSchedule);
router.route("/get-all-details").get(getDetails);
router.route("/delete/:id").delete(deleteSchedule);


export default router;