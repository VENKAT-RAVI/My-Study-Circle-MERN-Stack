import react from 'react';
import Header from "../Header/Header";
import Main from "../Main/Main";
import Instructors from "../Instructors/Instructors";
import LoginComponent from "../LandingLoginComponent/LoginComponent.js";
import Footer from "../Footer/Footer";


class Home extends react.Component {

    render() {

        return (
            <div>
                <Header />
                <Main />
                <Instructors />
                <LoginComponent />   
                <Footer />
            </div>
        )
    }
}

export default Home;