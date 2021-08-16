import { User } from "../models"
import { Router } from "express";
const router = Router();


router.post('/register', async (req, res) => {
    try {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })   

        const user = await newUser.save();
        res.status(201).json({
            message: 'User Register Succesfully',
        })
    } catch(err) {
        res.status(500).json(err)
    }
})


router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({email: req.body.email});
        !user && res.status(401).json("invailid User Credentials e");

        const isMatched = req.body.password === user.password
        !isMatched && res.status(401).json("invailid User Credentials p")
        
        const {password, ...info} = user._doc;    
        res.status(200).json({...info})
    } catch(err) {
        res.status(500).json(err)
    }
})


export default router