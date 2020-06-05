import React from 'react';
//import { Link } from 'react-router-dom';
import AuthDataService from '../services/auth.service';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.loginUtente = this.loginUtente.bind(this);
        
        this.state = {
            username:"",
            password: "",
        }
    }


    onChangeUsername(e){
        this.setState({
            username: e.target.value,
        })
    }

    onChangePassword(e){
        this.setState({
            password: e.target.value,
        })
    }

    loginUtente(){
        alert(this.state.username, this.state.password)
        alert(this.state.password)
        const data={
            username: this.state.username,
            password: this.state.password,
        };

        AuthDataService.login(data)
        .then(response => {
            console.log(response.data)
            console.log("Login ok")
            localStorage.setItem("utente", JSON.stringify(response.data));
            this.props.history.push('/home');
            console.log(localStorage.getItem("utente"))
        })
        .catch(e => {
            console.log(e)
        })
        console.log(this.state)
    }




    render() {
        return (
            <div className="container">
                <div className="row ">
                    <div className="col-md-6 col-md-offset-3">
                        <h1>FORM DI LOGIN</h1>
                            <div className="form-body">
                                <div className="form-group">
                                    <label >Email</label>
                                    <input name="email" type="email" className="form-control"
                                        required  onChange={this.onChangeUsername} />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input name="password" type="password" className="form-control"
                                        required minLength="5"   onChange={this.onChangePassword}/>
                                </div>
                                <button className="btn btn-primary form-buttons" onClick={this.loginUtente}>
                                    Login
                                </button>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;