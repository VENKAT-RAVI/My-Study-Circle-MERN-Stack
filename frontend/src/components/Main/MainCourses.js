import react from 'react';
import './MainCourses.scss';
import {Link} from 'react-router-dom'
import img1 from '../images/block_chain.jpg';
import img2 from '../images/machine_learning.jpg';
import img3 from '../images/mern.jpg';

class MainCourses extends react.Component {

    render() {

        return (
            <div class="project">
                <div class="flex">
                    <div class="image__overlay">
                        <img src={img1} alt=""></img>
                        <div>
                            <p class="center">Block Chain</p>
                        </div>
                    </div>
                    <div class="image__overlay">
                        <img src={img2} alt="" />
                        <div>
                            <p class="center">Machine Learning</p>
                        </div>
                    </div>
                    <div class="image__overlay">
                        <img src={img3} alt="" />
                        <div>
                            <p class="center">Web Development</p>
                        </div>
                    </div>
                </div>
                <div class="center">
                    <Link to="/courses" class="btn-text">Study Now &rarr;</Link>

                </div>
            </div>
        )
    }
}

export default MainCourses;