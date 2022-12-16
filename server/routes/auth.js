const express = require("express");
const User = require("../models/user");

const authRouter = express.Router();

authRouter.post("/api/signup", async (req, res) => {
    console.log("signup");
    try {
        const {name, email, password} =  req.body;

        const existingUser = await User.findOne({email});
        
        if(existingUser) {
            return res.status(400).json({msg: "User with same email already exists!"});
        }

        let user = new User({
            email,
            password,
            name
        })
        user = await user.save();
        console.log(user);
        res.json(user);
    } catch (e) {
        res.status(500);
    }
});

module.exports = authRouter;