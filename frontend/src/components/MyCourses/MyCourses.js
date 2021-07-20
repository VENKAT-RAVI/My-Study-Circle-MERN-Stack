import react, {useState} from 'react';
import './MyCourses.scss';
import  data from './MyCourseData';

class MyCourses extends react.Component {
    constructor() {
        super();
        // CREATE A STATE VARIABLE TO STORE ALL COURSES ENROLLED
        this.state = {
            MyCoursesData: data
        }
        
    }

   
render() {
    const MyCoursesComponents = this.state.MyCoursesData.map(MyCourses => <MyCourses key={MyCourses._id} MyCourses={MyCourses} handleChange={this.handleChange} />)
    return(
        <div>
            <div>
                {MyCoursesComponents}
            </div>
        </div>
    )

    }
}

export default MyCourses;