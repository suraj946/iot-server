import mongoose from "mongoose";

const connectDB = async() => {
    try {
        console.log("Connecting to database...");
        const connectionInstance = await mongoose.connect(`${process.env.DB_URI}/${"iotProject"}`);
        console.log(`database connected !! HOST : ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED : ", error);
        process.exit(1);
    }
}

export default connectDB;