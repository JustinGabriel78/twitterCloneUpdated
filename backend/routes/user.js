const express = require('express');
const router = express.Router()
const {signupUser, loginUser} = require('../controllers/userController')
const {post} = require('../controllers/postController')
const {emailAndUsernameExist} = require('../middlewares/userMiddleware')
const signUpValidation= require('../validations/signUpValidation')
const passwordValidation = require('../validations/passwordValidation')
const SignInValidation = require('../validations/signInValidation')

router.post('/signup', signUpValidation(), emailAndUsernameExist(), passwordValidation(), signupUser);
router.post('/login', SignInValidation(),loginUser);

router.post('/post',post)
module.exports = router