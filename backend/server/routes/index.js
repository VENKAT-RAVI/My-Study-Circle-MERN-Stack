import CourseRouter from './courseRoutes';
import UserRouter from './usersRoutes';


/* GET home page. */
export default (app)=>{
  app.use('/', CourseRouter);
}

