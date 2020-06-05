import React from 'react';
import { Link } from 'react-router-dom';
import utenteService from '../services/utente.service';

/*function ModificaUtente(props) {
  const id = props.match.params.id;
  console.log(id);
  return id;
}*/



class ModificaUtente extends React.Component {

  constructor(props) {
    super(props);
    this.cercaUtente = this.cercaUtente.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeNome = this.onChangeNome.bind(this);
    this.onChangeCognome = this.onChangeCognome.bind(this);
    this.onChangeData = this.onChangeData.bind(this);
    this.onChangeRuolo = this.onChangeRuolo.bind(this);
    this.salvaModifiche = this.salvaModifiche.bind(this);

    this.state = {
      id: props.match.params.id,

      username: " ",
      password: " ",
      nome: " ",
      cognome: " ",
      data_nascita: "0000-00-00",
      ruoloId: 0,


    }
  };



  componentDidMount() {
    this.cercaUtente();
  };


  cercaUtente(id) {
    console.log(this.state);
    utenteService.findOne(this.state.id)
      .then(response => {
        this.setState({
          username: response.data.username,
          password: response.data.password,
          nome: response.data.nome,
          cognome: response.data.cognome,
          data_nascita: response.data.data_nascita,
          ruoloId: response.data.ruoloId,

        })
        console.log(this.state);
      })
      .catch(e => {
        console.log(e);
      });

  }

  onChangeUsername = (e) => {

    this.setState({

      username: e.target.value

    })
  }

  onChangeNome = (e) => {

    this.setState({

      nome: e.target.value

    })
    console.log(e.target.value)
  };

  onChangeCognome = (e) => {

    this.setState({

      cognome: e.target.value

    })
    console.log(e.target.value)
  };

  onChangeData = (e) => {

    this.setState({

      data_nascita: e.target.value

    })
    console.log(e.target.value)
  };

  onChangeRuolo = (e) => {

    this.setState({

      ruoloId: e.target.value

    })
    console.log(e.target.value)
  };

  salvaModifiche(id) {
    const data = {
      username: this.state.username,
      nome: this.state.nome,
      cognome: this.state.cognome,
      data_nascita: this.state.data_nascita,
      ruoloId: this.state.ruoloId,
    };

    utenteService.update(this.state.id, data)
      .then(response => {
        console.log(response.data)
        this.props.history.push('/allUtenti');
      })
      .catch(e => {
        console.log(e)
      })
  }




  render() {
    return (
      <div >
        <h1>Modifica Utente!</h1>
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
        <div class="form-group">
          <label htmlFor="ruolo">Ruolo</label>
          <select id="ruolo" className="form-control" name="ruolo"
            onChange={this.onChangeRuolo}
            value={this.state.ruoloId} >
            <option value="1">ADMIN</option>
            <option value="2">USER</option>
          </select>
        </div>
        
          <button onClick={this.salvaModifiche}>
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

export default ModificaUtente;