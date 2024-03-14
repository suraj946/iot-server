import mongoose, {Schema} from "mongoose";

const scheduleSchema = new Schema({
    schedule:[
        {
            hours:{
                type:Number,
                required:true
            },
            minutes:{
                type:Number,
                required:true
            }
        }
    ]
}, {timestamps:true});

export const Schedule = mongoose.model("Schedule", scheduleSchema);