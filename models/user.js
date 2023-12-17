import {schema,model,models} from 'mongoose'

const UserSchema= newSchema({
    email:{
        type:String,
        unique:[true,"Email already exist!"],
        required:[true,"Emial is required"]
    },
    username:{
        type:String, 
        unique:[true,'User name is required'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
    },
    image:{
        type:String
    }
});

const User=models.user || model("User",UserSchema);

export default User;