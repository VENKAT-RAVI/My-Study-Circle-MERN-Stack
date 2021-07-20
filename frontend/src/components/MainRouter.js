import react from 'react';
import {Route, Switch} from 'react-router-dom'
import MyProfile from './MyProfile/MyProfile'
import Courses from './Courses/courses'
import CourseDetails from './CourseDetails/CourseDetails'
import Home from './Home/Home'
import Menu from './Navbar/menu'
import Signin from './LandingLoginComponent/LoginComponent';
import Signup from './Signup/Signup';
import PrivateRoute from './auth/PrivateRoute'
import addNewItem from './AddNewCourse/AddCourseItem'
import AdminPage from './Admin/AdminPage';
import deleteCourse from './Admin/deleteCourse';
import updateCourse from './Admin/UpdateCourse';
import UpdateSingleCourse from './Admin/UpdateSingleCourse';

class Mainrouter extends react.Component{

    render(){

        return(

            <div>
                <Menu />
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <PrivateRoute exact path="/user/:userId" component={MyProfile} />
                    <Route path="/courses" exact component={Courses}></Route>
                    <PrivateRoute exact path="/courses/:courseId" component={CourseDetails} />
                    <Route exact path="/signin" component={Signin}></Route>
                    <Route exact path="/signup" component={Signup}></Route>
                    <PrivateRoute exact path="/admin" component={AdminPage}></PrivateRoute>
                    <PrivateRoute exact path="/admin/add" component={addNewItem}></PrivateRoute>
                    <PrivateRoute exact path="/admin/delete" component={deleteCourse}></PrivateRoute>
                    <PrivateRoute exact path="/admin/update" component={updateCourse}></PrivateRoute>
                    <PrivateRoute exact path="/update/:courseId" component={UpdateSingleCourse}></PrivateRoute>
                </Switch>
            </div>
        ) 
    }
}

export default Mainrouter;