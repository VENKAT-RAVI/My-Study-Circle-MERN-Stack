import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainRouter from './MainRouter'


function App() {
  return (
    <Router>
      <div>
        <MainRouter></MainRouter> 
        {/* <Header />
        <Main />
        <Instructors />
        <LoginComponent />
        <Signup />
        <Footer /> */}
        {/* <Login />
        <Signup /> */}
        {/* <Login></Login> */}
      </div>
    </Router>

  );
}

export default App;