import react from 'react';
import './BecomeInstructor.scss'
class BecomeInstructor extends react.Component {


    render() {
        return (

            <div>
                <h1 className="heading-secondary-profile instructor">Do you want to become an Instructor</h1>
                <div className="radio-group">
                    <input type="radio" className="radio-input" id="yes" value="asds" name="instructor"></input>
                    <label for="yes" className="radio-label">
                        <span className="radio-button"></span>
                        Yes
                    </label>
                </div>
                <div className="radio-group">
                    <input type="radio" className="radio-input" id="no" name="instructor"></input>
                    <label for="no" className="radio-label">
                        <span className="radio-button"></span>
                        No
                    </label>
                </div>
            </div>


        )
    }
}
export default BecomeInstructor