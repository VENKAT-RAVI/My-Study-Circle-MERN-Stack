import react from "react";
import "./navbar.scss";

class Navbar extends react.Component {
  render() {
    return (
      <div>
        {/* <div class="title">
          <a href="#elearning">E-Learning</a>
        </div> */}
        <div class="topnav">
          <a href="#signup">
            Signup
          </a>
          <a href="#signin">Signin</a>
          <a href="#courses">Courses</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
      </div>
    );
  }
}

export default Navbar;

