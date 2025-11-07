import mongoose from "mongoose";

const connectDB = async () => {

    //displays the message when the database is connected
    mongoose.connection.on('connected' , () => console.log('Database Connected'))

    await mongoose.connect(`${process.env.MONGODB_URI}/prescripto`)
    ///prescripto is the datavbase name
    ///when our system is connected with the mongodb atlas then it will 
    //automatically create a database named of prescripto
}


export default connectDB