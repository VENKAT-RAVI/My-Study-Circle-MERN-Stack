import react from "react";
import "./Footer.scss";

class Footer extends react.Component {
  render() {
    return (
      <footer class="footer">
        <div class="row">
          <div class="col-1-of-2">
            <div class="footer__navigation">
              <ul class="footer__list">
                <li class="footer__item">Classroom Project </li>
                <li class="footer__item">Contact us</li>
                <li class="footer__item">Tutors</li>
                <li class="footer__item">Privacy policy</li>
                <li class="footer__item">Terms</li>
              </ul>
            </div>
          </div>
          <div class="col-1-of-2">
            <p class="footer__copyright">
              Project conceived and created by Aditya, Raghu , Ravi. Copyright
              &copy; by Aditya, Raghu , Ravi. The classroom project is an
              innovative and intuitive way to create synergy between the
              students and the tutors. This is an excellent way to learn and
              gain essential knowledge with ease of access to the favourite
              courses of the students.
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
