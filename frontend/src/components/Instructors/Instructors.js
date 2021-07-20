import react from "react";
import "./Instructors.scss";
import i1 from "../images/i1.png";
import easeOlearning from "../images/easeOlearning.jpg";
import coursecatalog from "../images/coursecatalog.jpg";
import multiplediscipline from "../images/multiplediscipline.jpg";
import freelearning from "../images/freelearning.jpg";

class Features extends react.Component {
  render() {
    return (
      <div>
        <section class="instructors">
          <h1 class="instructor-heading">FEATURES OF THE PORTAL</h1>
          <div class="row">
            <div class="col-1-of-4">
              <div class="box">
                <img class="box_image" src={easeOlearning}></img>
                <h3 class="box_heading">Ease of learning</h3>
                <p class="box_text">
                  With a stable internet connection, you can literally learn
                  from anywhere
                </p>
              </div>
            </div>

            <div class="col-1-of-4">
              <div class="box">
                <img class="box_image" src={coursecatalog}></img>
                <h3 class="box_heading">Catalog</h3>
                <p class="box_text">
                  With our new and enhanced coursework, learning is not a chore
                  anymore.
                </p>
              </div>
            </div>

            <div class="col-1-of-4">
              <div class="box">
                <img class="box_image" src={multiplediscipline}></img>
                <h3 class="box_heading">Multiple Disciplines</h3>
                <p class="box_text">
                  The course catalog has wide range of courses from multiple
                  disciplines.
                </p>
              </div>
            </div>

            <div class="col-1-of-4">
              <div class="box">
                <img class="box_image" src={freelearning}></img>
                <h3 class="box_heading">Free learning for all</h3>
                <p class="box_text">
                  This portal has the vision to make quality education
                  accessible to all for free.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Features;
