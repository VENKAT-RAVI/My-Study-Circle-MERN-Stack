import express from 'express';
import userController from '../controllers/userController';
import courseController from './../controllers/courseController'
import authCtrl from './../controllers/auth'

const router = express.Router();

router.route('/')
.get(  courseController.getAllCourses)
.post( courseController.addCourse)

router.route('/:courseId')
.get( courseController.getOneCourse)
.put( courseController.updateCourse)
.delete(courseController.deleteCourse)

//Future scope
router.route('/mycourses/:userId')
.get(courseController.getMyCourses)

router.route('/:courseId/:lessonId')
.delete(courseController.deleteLesson);


router.param("userId", userController.userById)


export default router;
