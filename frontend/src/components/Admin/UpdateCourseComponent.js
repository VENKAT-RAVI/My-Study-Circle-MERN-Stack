import react from "react";
import "./DeleteCourse.scss";
import { Link } from "react-router-dom";

class UpdateCourseCard extends react.Component {
  
    updateCourse= id => event =>  {
        event.preventDefault();
        let requestHeaders = {
          method: 'PUT'
        };
        fetch('http://localhost:9000/app/courses/' + id, requestHeaders)
          .then(response => response.text())
          .then(res => {
            alert("Updated Successfully ", res);
            window.location.reload();
          })
          .catch(error => alert("Cannot Update Course item ", error));
      }
    

  render() {
    return (
      <div class="row">
        <div class="col-1-of-3">
          <div class="card">
            <div class="card__side card__side--front">
              <div class="card__picture card__picture--1">&nbsp;</div>
              <h4 class="card__heading">
                <span class="card__heading-span card__heading-span--1">
                  {this.props.course.name}
                </span>
              </h4>
              <div class="card__details">
                <ul>
                <li>{this.props.course.description}</li>
                  <li>{this.props.course.created}</li>
                </ul>
              </div>
            </div>
            <div class="card__side card__side--back card__side--back-1">
              <button class="card__cta">
                  {/* <button onClick={this.updateCourse(this.props.course._id)}>Update</button> */}
                <Link to={`/update/${this.props.course._id}`}>Update</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateCourseCard;
