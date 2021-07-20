import Course from './../models/courses';


const search = (params)=>{
    const promise = Course.find(params).exec();
    return promise;
    
}

const save = (newCourse) => {
    const course = new Course(newCourse);
    const promise = course.save();
    return promise;
}

const getOneCourse = (id) => {
    const promise = Course.findById(id).exec();
    return promise;
}

const updateCourse = (id, courseName, description, category, lessons) =>{
    const promise = Course.findOneAndUpdate(
        {_id:id},
        {name:courseName,description:description,category:category, lessons:lessons  },
        {new:true}
    ).exec()
    return promise;
}

// future scope
const getMyCourses = (id) => {
    const promise = Course.find({
        instructor:id
    }).exec()
    return promise;
}

const deleteCourse = (id)=> {
    const promise= Course.findByIdAndRemove({
        _id: id 
    }).exec();
    return promise;
}



export default {
    search:search,
    save:save,
    getOneCourse:getOneCourse,
    updateCourse:updateCourse,
    deleteCourse:deleteCourse,
    getMyCourses:getMyCourses
    // deleteLesson:deleteLesson
}