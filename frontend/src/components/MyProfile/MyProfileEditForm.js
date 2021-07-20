import react from 'react';
import BecomeInstructor from './BecomeInstructor'

class MyProfileEditForm extends react.Component {

    constructor(props) {
        super(props);
        this.state = {
            instructor:'',
            name: '',
            email: '',
            password: ''
        }
        this.onChangeValue = this.onChangeValue.bind(this);
        // this.formSubmit = this.formSubmit(this);
        this.changeHandler = this.changeHandler.bind(this);    
    }

    onChangeValue(event) {
        if(event.target.value === "yes"){
            this.setState({
                instructor:"no"
            })
            console.log(this.state.instructor)
        }
        else if(event.target.value === "no"){
            this.setState({
                instructor:"yes"
            })
            console.log(this.state.instructor)
        }
    }

    changeHandler = (e) => {
        e.preventDefault()
        this.setState({ [e.target.name]: e.target.value })
    }



    editProfile =(e) =>{
        e.preventDefault();
        console.log(this.state.instructor)
        fetch(`http://localhost:9000/app/users/${this.props.profileDetails._id}`, {
            method: 'PUT',
            headers: { 'content-type':'application/json'},
            body: JSON.stringify(this.state),
          })
            .then(response => response.json())
            .then(data => {

              window.location.reload();
              console.log(data)
            })
            .catch(error => alert('Error posting data: ', error));
    }

    componentWillMount(){
        fetch(`http://localhost:9000/app/users/${this.props.profileDetails._id}`)
      .then((response) => response.json())
      .then((data) => {
        // storing todo data from API to the state variable
        this.setState({
          name: data.name,
          email:data.email,
          password:data.password,
          instructor:data.instructor
        });
      });
    }


    render() {

        return (
            <div className="editable-form">
                <form onSubmit={this.editProfile}>
                    <label for="name" className="label-name">
                        <span className="content-name">Username</span>
                    </label>
                    <input type="text" name="name" defaultValue={this.props.profileDetails.name} required onChange={this.changeHandler}></input>

                    <label for="email" className="email">
                        <span className="content-email">Email</span>
                    </label>
                    <input type="email" name="email" defaultValue={this.props.profileDetails.email} required onChange={this.changeHandler}></input>

                    <label for="name" className="password">
                        <span className="content-password">Password</span>
                    </label>
                    <input type="password" name="password" required onChange={this.changeHandler}></input>

                    <br></br>
                    <br></br>
                   
                    <button className="btn-text-blue">Update</button>

                </form>


            </div>
        )
    }
}

export default MyProfileEditForm;