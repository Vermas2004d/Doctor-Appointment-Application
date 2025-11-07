import mongoose from 'mongoose'

//to store the information of the doctors

const doctorSchema = new mongoose.Schema({
    name: {type: String , required: true}, 
    email: {type:String , required: true , unique: true},
    password: {type: String , required: true}, 
    image: {type: String , required: true},
    speciality:  {type: String , required: true},
    degree:  {type: String , required: true},
    experience:  {type: String , required: true},
    about:  {type: String , required: true},
    available:  {type: Boolean , required: true},
    fees:  {type: Boolean , required: true},
    address:  {type: Object , required: true},
    date: {type: Number , required: true},
    slots_booked: {type: Object , default : {}}
    

}, {minimize: false}) 
//minimise --> false is for to use the empty object as the default value..

const doctorModel = mongoose.models.doctor || mongoose.model('doctor' , doctorSchema)
//The mongoose.model() function creates and returns a MongoDB collection.


export default doctorModel