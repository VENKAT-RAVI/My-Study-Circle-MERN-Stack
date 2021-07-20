import react from "react";
import "./DeleteCourse.scss";
import UpdateCourseComponent from './UpdateCourseComponent';
class Courses extends react.Component {
  constructor() {
    super();
    this.state = {
      coursesData: [],
    };
  }

  componentWillMount() {
    fetch("http://localhost:9000/app/courses")
      .then((response) => response.json())
      .then((data) => {
        // storing data from API to the state variable
        this.setState({
          coursesData: data,
        });
      });
  }

  render() {
    const singleCourseComponents = this.state.coursesData.map((course) => (
      <UpdateCourseComponent key={course._id} course={course}></UpdateCourseComponent>
    ));

    return (
      <div>
        <header class="allcourses">
          <div class="text-bo">
            <h1 class="heading-primary">
              <span class="heading-primary-main">ALL COURSES</span>
              <span class="heading-primary-sub">
                Choose a course to expand your knowledge
              </span>
            </h1>
          </div>
        </header>
        <section class="section-tours" id="section-tours">
          <div class="u-center-text u-margin-bottom-big">
            {/* <h2 class="heading-secondary">ALL COURSES</h2> */}
          </div>
          <div className="flexbox">{singleCourseComponents}</div>

          
        </section>
      </div>
    );
  }
}

export default Courses;
