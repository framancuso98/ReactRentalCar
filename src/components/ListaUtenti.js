import React from 'react';
import UtenteDataService from '../services/utente.service';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

/*const lista = (utenti) => utenti.map((utente) => (
<tr key={utente.id.toString()}>
  <td>{utente.id}</td>
  <td>{utente.username}</td>
  <td>{utente.nome}</td>
  <td>{utente.cognome}</td>
  <td>{utente.data_nascita}</td>
  <td>{utente.ruoloId}</td>
  <td>
              <button>
                  Elimina
              </button>
            </td>
            <td>
              <button>
                  Modifica
              </button>
            </td>
</tr>
));*/

class ListaUtenti extends React.Component {
  
  constructor(props) {
    super(props);
    this.riceviUtenti = this.riceviUtenti.bind(this);
    this.eliminaUtente = this.eliminaUtente.bind(this);
    this.modificaUtente = this.modificaUtente.bind(this);

    this.state = {
      utentis: [],
    }
  };

  componentDidMount() {
    this.riceviUtenti();
  };

  riceviUtenti() {
    UtenteDataService.getAll()
      .then(response => {
        this.setState({
          utentis: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }




  eliminaUtente(id) {
    console.log(id);
    UtenteDataService.delete(id)
      .then(response => {
        console.log(response.data);
        //this.props.history.push('utente/all');
        this.riceviUtenti();
      })
      .catch(e => {
        console.log(e);
      })
  }

  modificaUtente(id) {
    console.log(id);
  }



  render() {
    return (
      <div>
        <Navbar />
        <h1>LISTA UTENTI</h1>
        <table className="table table-hover table-dark">
          <thead>
            <tr>
              <th>#</th>
              <th>USERNAME</th>
              <th>NOME</th>
              <th>COGNOME</th>
              <th>DATA DI NASCITA</th>
              <th>RUOLO</th>
              <th>ELIMINA</th>
              <th>MODIFICA</th>
            </tr>
          </thead>
          <tbody>
            {this.state.utentis.map((utente) => (
              <tr key={utente.id.toString()}>
                <td>{utente.id}</td>
                <td>{utente.username}</td>
                <td>{utente.nome}</td>
                <td>{utente.cognome}</td>
                <td>{utente.data_nascita}</td>
                <td>{utente.ruoloId}</td>
                <td>
                  <button type="button" className="btn btn-outline-danger"onClick={this.eliminaUtente.bind(this, utente.id)}>
                    Elimina
                  </button>
                </td>
                <td>
                  <Link to ={`/utente/${utente.id}`} >
                    <button type="button" className="btn btn-outline-warning" onClick={this.modificaUtente.bind(this, utente.id)}>
                      Modifica
                  </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}



export default ListaUtenti;