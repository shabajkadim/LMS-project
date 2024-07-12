import userSchema from "../models/user.Schema.js";
import bcrypt from 'bcrypt';
import validator from "validator";
import jwt from 'jsonwebtoken';


export const Register = async (req, res) => {
    try {
        // const { firstname,  email, password, confirmPassword } = req.body;
        const { firstname,  email, password, confirmPassword } = req.body.data;

        if (!firstname || !email || !password || !confirmPassword) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: "Please enter a valid email" });
        }

        const emailIsExist = await userSchema.findOne({ email: email });

        if (emailIsExist) {
            return res.status(400).json({ success: false, message: "Email already exists" });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ success: false, message: "Password and confirm password do not match" });
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const user = new userSchema({
            firstname: firstname,
            email: email,
            password: hashPassword
        });

        await user.save();
        return res.status(201).json({ success: true, message: "Registration successful" });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
};

export const Login = async (req, res) => {
    try {
        // const { email, password } = req.body
        const { email, password } = req.body.loginData;

        if (!email || !password) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        const user = await userSchema.findOne({ email: email });

        if (!user) {
            return res.status(400).json({ success: false, message: "User not found" });
        }

        const isCorrectPassword = await bcrypt.compare(password, user.password);

        if (!isCorrectPassword) {
            return res.status(400).json({ success: false, message: "Incorrect password" });
        }

        const token = await jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
        // console.log(token, "token");

        return res.status(200).json({ success: true, message: "Login successful", token: token , user:{userId:user._id, firstname:user.firstname, email:user.email}});
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
};



export const getCurrentUser=async(req,res)=>{
    try{
        const {token}=req.body
		    if(!token){
            return res.status(404).json({success:false, messsage:"token is reuired"})
        }

        const decodedData=await jwt.verify(token,process.env.JWT_SECRET)
        // console.log("ytdeytdyhykj",decodedData.userId,"decodedData");

        const user=await UserSchema.findById(decodedData.userId)
        // console.log(user,"user");
		
		if (!user) {
            return res.status(404).json({ success: false })
        }
        return res.status(200).json({success:true, user: { firstname: user.firstname, email: user.email, userId: user._id }})
    }catch(error){
        return res.status(500).json({success:false, error:error})
    }
}



export const GetAllUser = async (req, res) => {
    try {
        const users = await userSchema.find({}, 'firstname'); // Select only 'firstName' field
        // console.log(users, "users");
        res.status(200).json({ success: true, user: users });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
