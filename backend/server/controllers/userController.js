import User from '../models/users';
import userService from './../services/userService'


const getAllUsers = (req, res)=>{
   
    const promise = userService.search();
    promise.then((courses)=>{
        res.status(200);
        res.json(courses);
    })
    .catch(handleError(res));
}

const addUser = (req, res) =>{
    const course = {...req.body};
    const promise = userService.save(course);
    promise.then((newCourse)=>{
        res.status(200);
        res.json(newCourse);
    })
    .catch(handleError(res));
}

const getOneUser = (req, res) =>{
    const id = req.params.userId;
    const promise = userService.getOneUser(id);
    promise.then((user)=>{
        res.status(200)
        res.json(user)
    })
    .catch(handleError(res));
}


const updateUser = (req, res)=>{
    const id = req.params.userId;
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const instructor = req.body.instructor;

    const promise = userService.update(id, name, email, password, instructor);
    promise.then((updatedUser)=>{
        res.status(200);
        res.json(updatedUser)
    })
    .catch(handleError(res));
}

const deleteUser = (req, res) => {
    const id = req.params.userId;
    const promise = userService.remove(id);
    promise.then((user)=>{
        res.status(200);
        res.json({
            "message":"Deleted account successfully"
        })
    })
    .catch(handleError(res)); 
}

const userById =(req, res, next, id) => {
    User.findById(id).exec((err, user)=> {
        if(err || !user){
            return res.status(400).json({
                error:"User not found"
            })
        }
        req.profile = user; 
    })
}

//Authorization check
const hasAuthorization =(req, res, next) => {
    const authorized = req.profile && req.auth && req.profile._id === req.auth._id;
    if(!authorized){
        return res.status(403).json({
            error:"User is not authorised"
        });
    }
};

const handleError = (response) => {
    return (error) => {
        response.status(500);
        response.json({
            message: error.message
        })
    };
}

export default {
    getAllUsers:getAllUsers,
    addUser:addUser,
    getOneUser:getOneUser,
    updateUser:updateUser,
    deleteUser:deleteUser,
    userById:userById,
    hasAuthorization:hasAuthorization
}