import react from 'react'
import { Link, withRouter } from 'react-router-dom'
import './menu.scss'

const isActive = (history, path) => {
    if (history.location.pathname === path) return { color: "red" }
    else return { color: "black" }
}

const isAuthenticated = () => {
    if (typeof window == 'undefined') {
        return false;
    }

    if (localStorage.getItem('jwt')) {
        return JSON.parse(localStorage.getItem('jwt'));
    } else {
        return false;
    }
}


export const signout = (next) => {
    if (typeof window !== "undefined") localStorage.removeItem("jwt")
    next()
    return fetch("http://localhost:9000/app/auth/signout", {
        mehtod: "GET"
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err))
}


const Menu = ({ history }) => (
    <div>
        <ul className="nav nav-tabs primary">
            <li className="nav-item">
                <Link className="nav-link" style={isActive(history, '/')} to="/">
                    Home
                </Link>
            </li>



            {!isAuthenticated() && (
                <react.Fragment>
                    <li className="nav-item ">
                        <Link className="nav-link" style={isActive(history, '/signin')} to="/signin">
                            Sign In
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" style={isActive(history, '/signup')} to="/signup">
                            Sign Up
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" style={isActive(history, '/courses')} to="/courses">
                            courses
                        </Link>
                    </li>
                </react.Fragment>
            )}

            {isAuthenticated() && isAuthenticated().user.instructor === "yes" && (
                <li className="nav-item">
                    <Link to={`/admin`} style={isActive(history, `/admin`)} className="nav-link">
                        Manage Courses
                    </Link>
                </li>
            )}

            {isAuthenticated() && (
                <react.Fragment>


                    <li className="nav-item">
                        <Link
                            to={`/user/${isAuthenticated().user._id}`}
                            style={isActive(history, `/user/${isAuthenticated().user._id}`)}
                            className="nav-link"
                        >
                            {`${isAuthenticated().user.name}'s profile`}
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" style={isActive(history, '/courses')} to="/courses">
                            courses
                        </Link>
                    </li>

                    <li className="nav-item">
                        <span
                            className="nav-link"
                            style={{ cursor: 'pointer', color: 'black' }}
                            onClick={() => signout(() => history.push('/'))}
                        >
                            Sign Out
                        </span>
                    </li>
                </react.Fragment>
            )}
        </ul>
    </div>
)


export default withRouter(Menu);
