import mongoose from 'mongoose'
export type UserType={
    _id:string;
    email:string;
    password:true;
    firstname:true;
    lastname:true;
}

const userSchema=new mongoose.Schema({
        email:{type:String,required:true,unique:true},
        password:{type:String,required:true},
        firstname:{type:String,required:true},
        lastname:{type:String,required:true},
})
const User=mongoose.model<UserType>("User",userSchema);
export default User;