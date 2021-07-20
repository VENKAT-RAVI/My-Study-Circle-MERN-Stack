import courseService from './../services/course.service'
import Course from './../models/courses'

const getAllCourses = (req, res) => {

    const promise = courseService.search();
    promise.then((courses) => {
        res.status(200);
        res.json(courses);
    })
        .catch(handleError(res));
}

const addCourse = (req, res) => {
    const course = { ...req.body };
    const promise = courseService.save(course);
    promise.then((newCourse) => {
        res.status(200);
        res.json(newCourse);
    })
        .catch(handleError(res));
}

const getOneCourse = (req, res) => {
    const id = req.params.courseId;
    const promise = courseService.getOneCourse(id);
    promise.then((course) => {
        res.status(200)
        res.json(course)
    })
        .catch(handleError(res));
}

const updateCourse = (req, res) => {
    const id = req.params.courseId;
    const name = req.body.name;
    const description = req.body.description;
    const category = req.body.category;
    const lessons = req.body.lessons;


    const promise = courseService.updateCourse(id, name, description, category, lessons);
    promise.then((updatedCourse) => {
        res.status(200);
        res.json(updatedCourse)
    })
        .catch(handleError(res));
}

const deleteCourse = (req, res) => {
    const id = req.params.courseId;
    const promise = courseService.deleteCourse(id);
    promise.then((course) => {
        res.status(200);
        res.json({
            "message": "Deleted Course successfully"
        })
    })
        .catch(handleError(res));
}

//future scope
const deleteLesson = (req, res) => {
    const id = req.params.lessonId;
    const promise = courseService.deleteLesson(id);
    promise.then((lesson) => {
        res.status(200);
        res.json({
            "message": "Deleted Lesson successfully"
        })
    })
        .catch(handleError(res));
}

const getMyCourses = (req, res) => {
    // const instructor  = req.params.userId
    res.send('instructor');
    // console.log(req.params);
    // Course.find({ instructor: instructor })
    //     .then(course => {
    //         return res.status(200).json({ course })
    //     })
    //     .catch(err => {
    //         return res.status(400).json({ msg: "No Courses" })
    //     })
}

const handleError = (response) => {
    return (error) => {
        response.status(500);
        response.json({
            message: error.message
        })
    };
}



export default {
    getAllCourses: getAllCourses,
    addCourse: addCourse,
    getOneCourse: getOneCourse,
    updateCourse: updateCourse,
    deleteCourse: deleteCourse,
    //future scope
    deleteLesson: deleteLesson,
    getMyCourses: getMyCourses
}