import React from "react";
import { Redirect } from 'react-router-dom';
import './LoginComponent.scss'


class LoginComponent extends React.Component {

    constructor() {

        super();
        this.state = {
            email: "",
            password: "",
            error: "",
            redirectToReferer:false
        };
    }

    handleChange = name => event => {
        this.setState({ error: "" });
        this.setState({ [name]: event.target.value });
    };

    authenticate = (jwt, next) => {
        if(typeof window !== "undefined"){ 
            localStorage.setItem("jwt", JSON.stringify(jwt))
            next();
        }
    }

    clickSubmit = event => {
        event.preventDefault();
        const { email, password } = this.state;
        const user = {
        
            email,
            password
        };
        this.signin(user)
        .then(data => {
            if(data.error){
                this.setState({error:data.error})
            } 
            else{
                this.authenticate(data, ()=>{
                    this.setState({redirectToReferer:true})
                })
            } 
          })
    };

    signin = user => {
        return fetch("http://localhost:9000/app/auth/signin", {
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
        const { email, password, error, redirectToReferer } = this.state;

        if(redirectToReferer){
            return <Redirect to="/courses"></Redirect>
        }

        return (

            <section className="section-login">
                
                    <div className="login">
                        <div className="login_form">
                            <form action="#" className="form" onSubmit={this.clickSubmit} >
                                <h3 class="heading-secondary-login">
                                    Login now to enroll!!
                                </h3>
                                <div className="form_group">
                                    <div
                                        className="form_input"
                                        style={{ display: error ? "" : "none" }}
                                    >
                                        {error}
                                    </div>
                                    <br></br>
                                    
                                </div>
                                

                                <div className="form_group">
                                    <input
                                        type="email"
                                        className="form_input"
                                        placeholder="Email"
                                        id="email"
                                        required
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
                                        required
                                        value={password}
                                        onChange={this.handleChange("password")}
                                    ></input>
                                    <label for="password" className="form_label">
                                        Create Password
                    </label>
                                </div>
                                <div className="form_group">
                                    <button className="btn-submit">Log In</button>
                                </div>
                            </form>
                        </div>
                    </div>
                
            </section>
        )
    }

}

export default LoginComponent;