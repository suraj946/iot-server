import { Schedule } from "../models/schedule.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const addSchedule = asyncHandler(async(req, res) => {
    const {schedule} = req.body;

    if(!schedule || schedule.length === 0){
        throw new Error("Schedules can't be empty");
    }

    const data = await Schedule.create({schedule});
    if(!data){
        throw new Error("Something went wrong");
    }

    res.status(201).json({
        success:true,
        data
    });
});

const getSchedule = asyncHandler(async(req, res) => {
    const data = await Schedule.findOne().sort({_id:-1});
    const toSent = [];

    data.schedule?.forEach(d => {
        if((d.minutes < 10) && (d.hours < 10)){
            toSent.push(`0${d.hours}:0${d.minutes}:00`);
        }else if((d.minutes < 10) && (d.hours >= 10)){
            toSent.push(`${d.hours}:0${d.minutes}:00`);
        }else if((d.minutes >= 10) && (d.hours < 10)){
            toSent.push(`0${d.hours}:${d.minutes}:00`);
        }else{
            toSent.push(`${d.hours}:${d.minutes}:00`);
        }
    });
    res.status(200).json({
        success:true,
        schedule:toSent
    });
});

const getDetails = asyncHandler(async(req, res) => {
    const data = await Schedule.find();
    res.status(200).json({
        success:true,
        data
    });
});

const deleteSchedule = asyncHandler(async(req, res) => {
    const {id} = req.params;
    await Schedule.findByIdAndDelete(id);
    res.status(201).json({
        success:true,
    });
});

export {
    addSchedule,
    getSchedule,
    getDetails,
    deleteSchedule
}