import React from 'react';
//import { Link } from 'react-router-dom';

import AuthDataService from '../services/auth.service';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeNome = this.onChangeNome.bind(this);
        this.onChangeCognome = this.onChangeCognome.bind(this);
        this.onChangeData = this.onChangeData.bind(this);
        this.salvaUtente = this.salvaUtente.bind(this);

        this.state = {
            username: " ",
            password: " ",
            nome: " ",
            cognome: " ",
            data_nascita: "0000-00-00",
            ruoloId: 2,
        }
    }

    onChangeUsername(e) {
        this.setState({

            username: e.target.value

        })
    }
    onChangePassword(e) {
        this.setState({

            password: e.target.value

        })
    }

    onChangeNome(e) {

        this.setState({

            nome: e.target.value

        })
        console.log(e.target.value)
    };

    onChangeCognome(e) {

        this.setState({

            cognome: e.target.value

        })
        console.log(e.target.value)
    };

    onChangeData(e) {

        this.setState({

            data_nascita: e.target.value

        })
        console.log(e.target.value)
    };

    salvaUtente() {
        const data = {
            username: this.state.username,
            password: this.state.password,
            nome: this.state.nome,
            cognome: this.state.cognome,
            data_nascita: this.state.data_nascita,
            ruoloId: this.state.ruoloId,
        };

        AuthDataService.signIn(data)
            .then(response => {
                console.log(response.data)
                console.log("Utente registrato successo!")
                this.props.history.push('/home');
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
                        <h1>REGISTRATI</h1>
                    </div>
                </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label >Email</label>
                            <input type="email" className="form-control" id="inputUsername4" required onChange ={this.onChangeUsername}
                                name="username" />
                        </div>
                        <div className="form-group col-md-6">
                            <label >Password</label>
                            <input type="password" className="form-control" id="inputPassword4" required name="password" onChange={this.onChangePassword} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label >Nome</label>
                            <input type="text" className="form-control" id="inputNome" required onChange={this.onChangeNome}
                                name="nome" />
                        </div>
                        <div className="form-group col-md-6">
                            <label>Cognome</label>
                            <input type="text" className="form-control" id="inputCognome" required onChange={this.onChangeCognome}
                                name="cognome" />
                        </div>
                    </div>
                    <div className="form-row"></div>
                    <div className="form-group col-md-6">
                        <label >Data di nascita </label>
                        <input type="date" className="form-control" id="inputDataNascita" required onChange={this.onChangeData}
                            name="data_nascita" />
                    </div>
                    <div className="form-row">
                        <div className="col-lg-12">
                            <button type="submit" className="btn btn-primary" onClick={this.salvaUtente}>
                                <i className="fa fa-floppy-o" aria-hidden="true">Sign in</i>
                            </button>
                        </div>
                    </div>
            </div>
        );
    }
}

export default SignIn;