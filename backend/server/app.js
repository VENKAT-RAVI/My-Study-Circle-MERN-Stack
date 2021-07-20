import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';
import UserRouter from './routes/usersRoutes';
import CourseRouter from './routes/courseRoutes';
import AuthRouter from './routes/auth';
import dotenv from 'dotenv'
// import routes from './routes';
import session from 'express-session';
import model from './models'
import User from './models/users';
import bcrypt from 'bcryptjs';
import { Console } from 'console';
import 'regenerator-runtime/runtime';
import 'babel-runtime/regenerator';


const app = express();
mongoose.connect('mongodb://localhost:27017/projectTest', { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
	console.log("Connected to DB")
}).catch((e)=>{
	console.error(e)
});

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
dotenv.config();

app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT,PATCH, DELETE');
	res.setHeader("Access-Control-Allow-Headers", "Content-Type,Accept, Access-Control-Allow-Headers, Authorization, X-Requested-With");
	res.setHeader('Access-Control-Allow-Credentials', 'true');
	res.setHeader("Content-Type", "application/json");
	next();
});

// Handeling Unauthorized users
app.use(function(err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
	
        res.status(401).json({ error: 'Unauthorized!' });
    }
	else{
		res.send('Error');
	}
});

app.use(cookieParser());

app.use('/app/users', UserRouter)
app.use('/app/courses', CourseRouter)
app.use('/app/auth', AuthRouter);



export default app;
