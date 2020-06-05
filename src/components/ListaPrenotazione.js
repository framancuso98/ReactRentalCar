import React from 'react';
import PrenotazioneDataService from '../services/prenotazione.service';
import Navbar from './Navbar';

class ListaPrenotazioni extends React.Component {


  constructor(props) {
    super(props);
    this.riceviPrenotazione = this.riceviPrenotazione.bind(this);
    this.accettaPrenotazione = this.accettaPrenotazione.bind(this);
    this.rifiutaPrenotazione = this.rifiutaPrenotazione.bind(this);

    this.state = {
      lista: [],
    }
  };

  componentDidMount() {
    this.riceviPrenotazione();
  };

  riceviPrenotazione() {
    PrenotazioneDataService.getAll()
      .then(response => {
        this.setState({
          lista: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }




  accettaPrenotazione(id) {
    console.log(id);
    PrenotazioneDataService.accetta(id)
      .then(response => {
        console.log(response.data);
        //this.props.history.push('/allPrenotazioni');
        this.riceviPrenotazione();
      })
      .catch(e => {
        console.log(e);
      })
  }

  rifiutaPrenotazione(id) {
    console.log(id);
    PrenotazioneDataService.rifiuta(id)
      .then(response => {
        console.log(response.data);
        //this.props.history.push('/allPrenotazioni');
        this.riceviPrenotazione();
      })
      .catch(e => {
        console.log(e);
      })
  }

  modificaPrenotazione(id) {
    console.log(id);
  }


  render() {
    return (
      <div >
        <Navbar />
        <h1>ListaPrenotazioni!</h1>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>COSTRUTTORE</th>
              <th>MODELLO</th>
              <th>TARGA</th>
              <th>ANNO DI IMMATRICOLAZIONE</th>
              <th>USERNAME</th>
              <th>NOME</th>
              <th>COGNOME</th>
              <th>DATA DI NASCITA</th>
              <th>STATO</th>
              <th>ACCETTA</th>
              <th>RIFIUTA</th>
            </tr>
          </thead>
          <tbody>
            {this.state.lista.map((prenotazione) => (
              <tr key={prenotazione.id.toString()}>
                <td>{prenotazione.id}</td>
                <td>{prenotazione.auto.costruttore}</td>
                <td>{prenotazione.auto.modello}</td>
                <td>{prenotazione.auto.modello}</td>
                <td>{prenotazione.auto.anno}</td>
                <td>{prenotazione.utente.username}</td>
                <td>{prenotazione.utente.nome}</td>
                <td>{prenotazione.utente.cognome}</td>
                <td>{prenotazione.utente.data_nascita}</td>
                <td>{prenotazione.stato}</td>
                <td>
                  <button onClick={this.accettaPrenotazione.bind(this, prenotazione.id)} >
                    Accetta
                  </button>
                </td>
                <td>
                  <button onClick={this.rifiutaPrenotazione.bind(this, prenotazione.id)} >
                    Rifiuta
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListaPrenotazioni;