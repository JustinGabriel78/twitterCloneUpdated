const Post = require('../models/postModels')
const User = require('../models/userModels')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '1d'})
}

const signupUser = async(req,res) => {
    const {username, email, password} = req.body;
    try{
        const newUser = await User.signup(username, email, password)
        
        // create a token
        const token = createToken(newUser._id)

        res.status(201).json({data: newUser, token, message: "SignUp sucessfully", sucess: true})

    } catch(error) {
        res.status(400).json({data: null, message: error.message, sucess: false})
    }
}

const loginUser = async(req, res) => {
    const {email, password} = req.body;

    try{
        const user = await User.login(email, password)
        //create a token
        const token = createToken(user._id)
        res.status(201).json({data: user, token, message: "Login sucessfully", sucess: true})

    } catch(error) {
        res.status(400).json({data: null, message: error.message, sucess: false})
    }
}



module.exports = {
    signupUser,
    loginUser
}