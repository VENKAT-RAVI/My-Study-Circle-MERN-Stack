import jwt from 'jsonwebtoken'
require('dotenv').config();
import expressJwt from 'express-jwt'
import User from '../models/users';
// import authService from '../services/auth.service';

//Signup
const signup = async (req, res) => {
    const userExists = await User.findOne({ email: req.body.email });
    if (userExists)
        return res.status(403).json({
            error: 'Email is taken!'
        });
    const user = await new User(req.body);
    await user.save();
    res.status(200).json({ message: 'Signup success! Please login.' });
};

//Signin
const signin = (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email }, (err, user) => {

        // if error or no user exists
        if (err || !user) {
            return res.status(401).json({
                error: 'User with that email does not exist. Please signup.'
            });
        }

        // if user is found make sure the email and password match
        // create authenticate method in model and use here
        if (!user.authenticate(password)) {
            return res.status(401).json({
                error: 'Email and password do not match'
            });
        }

        // generate a token with user id and secret
        const token = jwt.sign({ _id: user._id}, "secret");

        // persist the token as 't' in cookie with expiry date and time
        res.cookie('t', token, { expire: new Date() + 9999 });

        // return response with user and token to frontend client
        const { _id, name, email, instructor } = user;
        return res.json({ token, user: { _id, email, name, instructor } });
    });
}

//signout
const signout = (req, res) => {
    res.clearCookie('t');
    return res.json({ message: 'Signout success!' });
};

//Express JWT package Error - newer version
const requireSignin = expressJwt({
    secret: "secret",
    algorithms: ['HS256'],
    userProperty: 'auth'
});


export default {
    signup: signup,
    signin:signin,
    signout:signout,
    requireSignin:requireSignin
}

