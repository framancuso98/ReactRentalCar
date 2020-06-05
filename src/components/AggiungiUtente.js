import React from 'react';
import UtenteDataService from '../services/utente.service';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

class AggiungiUtente extends React.Component {

  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeNome = this.onChangeNome.bind(this);
    this.onChangeCognome = this.onChangeCognome.bind(this);
    this.onChangeData = this.onChangeData.bind(this);
    this.onChangeRuolo = this.onChangeRuolo.bind(this);
    this.salvaUtente = this.salvaUtente.bind(this);

    this.state = {
      username: " ",
      password: "1234",
      nome: " ",
      cognome: " ",
      data_nascita: "0000-00-00",
      ruoloId: 0,
    }
  }

  onChangeUsername(e) {
    this.setState({

      username: e.target.value

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

  onChangeRuolo(e) {

    this.setState({

      ruoloId: e.target.value

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

    UtenteDataService.create(data)
      .then(response => {
        console.log(response.data)
        console.log("Utente aggiunto con successo!")
        this.props.history.push('/allUtenti');
      })
      .catch(e => {
        console.log(e)
      })

    console.log(this.state)
  }

  render() {
    return (
      <div >
        <Navbar />
        <h1>Aggiungi Utente!</h1>
        <div className="from-group">
          <label htmlFor="username"> Username</label>
          <input
            type="text"
            className="from-group"
            id="username"
            required
            value={this.state.username}
            onChange={this.onChangeUsername}
            name="username"
          />
        </div>
        <div className="from-group">
          <label htmlFor="nome"> Nome</label>
          <input
            type="text"
            className="from-group"
            id="nome"
            required
            value={this.state.nome}
            onChange={this.onChangeNome}
            name="nome"
          />
        </div>
        <div className="from-group">
          <label htmlFor="cognome"> Cognome</label>
          <input
            type="text"
            className="from-group"
            id="cognome"
            required
            value={this.state.cognome}
            onChange={this.onChangeCognome}
            name="cognome"
          />
        </div>
        <div className="from-group">
          <label htmlFor="data"> Data Nascita</label>
          <input
            type="date"
            className="from-group"
            id="data"
            required
            value={this.state.data_nascita}
            onChange={this.onChangeData}
            name="data"
          />
        </div>
        <div className="form-group">
          <label htmlFor="ruolo">Ruolo</label>
          <select id="ruolo" className="form-control" name="ruolo"
            onChange={this.onChangeRuolo}
            value={this.state.ruoloId} >
            <option value="1">ADMIN</option>
            <option value="2">USER</option>
          </select>
        </div>
          <button onClick={this.salvaUtente}>
            Salva
          </button>
          <Link to="/allUtenti">
          <button >
            Indietro
            </button>
        </Link>
      </div>
    );
  }
}

export default AggiungiUtente;