import User from './../models/users';

const search = (params)=>{
    const promise = User.find(params).exec();
    return promise;
}
 
const save = (newUser) => {
    const user = new User(newUser);
    const promise = user.save();
    return promise;
}

const getOneUser = (id)=>{
    const promise = User.findById(id).exec();
    return promise;
}

const update = (id, username, email, password, instructor) => {
    const promise = User.findOneAndUpdate(
        {_id:id},
        {name: username, email: email, password: password, instructor:instructor},
        {new: true}
    ).exec();
    return promise
}

const remove = (id) => {
    const promise= User.findByIdAndRemove({
        _id: id 
    }).exec();
    return promise;
}

export default {
    search:search,
    save:save,
    getOneUser:getOneUser,
    update:update,
    remove:remove
}