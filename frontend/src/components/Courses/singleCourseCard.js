import react from "react";
import "./courses.scss";
import { Link } from "react-router-dom";
class SingleCourseCard extends react.Component {
  
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
                  
                  <li>{this.props.course.created.toLocaleString()}</li>
                </ul>
              </div>
            </div>
            <div class="card__side card__side--back card__side--back-1">
              <button class="card__cta">
                <Link to={`courses/${this.props.course._id}`}>Study Now!</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleCourseCard;
