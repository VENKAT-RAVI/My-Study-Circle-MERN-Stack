import react from "react";
import "./Main.scss";
import MainCourses from "./MainCourses";

class Main extends react.Component {
  render() {
    return (
      <main>
        <section class="section-about">
          <div class="align-center">
            <h2 class="heading-secondary">Most Popluar Technologies</h2>
          </div>
          <div class="most-pop-course flex-col">
            <div class="textComponent flex-col">
              <h3 class="heading-tertiary">
                Learn most popular courses with us!!
              </h3>
              <p class="paragraph">
                Our portal has has well furnished and tailored courses that is
                sought after by the students. We guarantee that a student will
                have the best learning experience through our portal. Our
                learned and experienced instructors help in the learning
                process.
              </p>
            </div>
          </div>
          <MainCourses />
        </section>
      </main>
    );
  }
}

export default Main;
