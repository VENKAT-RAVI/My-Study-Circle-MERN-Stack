import React from "react";
import "./Signup.scss";

class Signup extends React.Component {

    constructor() {

        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            error: "",
            open: false
        };
    }

    handleChange = name => event => {
    this.setState({error:""})
        this.setState({ [name]: event.target.value });
    };

    clickSubmit = event => {
        event.preventDefault();
        const { name, email, password } = this.state;
        const user = {
            name,
            email,
            password
        };

        this.signup(user)
        .then(data => {
        if(data.error) this.setState({error:data.error})
        else this.setState({
            error:"",
            name:"",
            email:"",
            password:"",
            open:true
        })
        })

    };

    signup = user => {
    return fetch("http://localhost:9000/app/auth/signup", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(response => {
                return response.json();
            })
            .catch(err => console.log(err));
    }

    render() {
        const { name, email, password, error, open } = this.state;

        return (

            <section className="section-login">
                <div className="row">
                    <div className="signup">
                        <div className="login_form">
                            <form action="#" className="form" onSubmit={this.clickSubmit} >
                                <h3 class="heading-secondary-login">
                                    Signup to create an account and enroll in courses
                                </h3>
                                <div className="form_group">
                                    <div
                                        className="form_input"
                                        style={{ display: error ? "" : "none" }}
                                    >
                                        {error}
                                    </div>
                                    <br></br>
                                    <div
                                        className="form_input"
                                        style={{ display: open ? "" : "none" }}
                                    >
                                        New account is successfully created. Please Sign In.
                                    </div>
                                </div>
                                <div className="form_group">
                                    <input

                                        type="text"
                                        className="form_input"
                                        placeholder="Name"
                                        id="fName"
                                        value={name}
                                        onChange={this.handleChange("name")}
                                    ></input>
                                    <label for="fName" className="form_label">
                                        First Name
                    </label>
                                </div>

                                <div className="form_group">
                                    <input
                                        type="email"
                                        className="form_input"
                                        placeholder="Email"
                                        id="email"
                                    
                                        value={email}
                                        onChange={this.handleChange("email")}
                                    ></input>
                                    <label for="email" className="form_label">
                                        Email
                    </label>
                                </div>
                                <div className="form_group">
                                    <input
                                        type="password"
                                        className="form_input"
                                        placeholder="Password"
                                        id="password"
                                        
                                        value={password}
                                        onChange={this.handleChange("password")}
                                    ></input>
                                    <label for="password" className="form_label">
                                        Create Password
                    </label>
                                </div>
                                <div className="form_group">
                                    <button className="btn-submit">SignUp</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}


export default Signup;