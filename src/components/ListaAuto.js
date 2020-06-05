import React from 'react';
import AutoDataService from '../services/auto.service';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

class ListaAuto extends React.Component {
  
  constructor(props) {
    super(props);
    this.riceviAuto = this.riceviAuto.bind(this);
    this.eliminaAuto = this.eliminaAuto.bind(this);
    this.modificaAuto = this.modificaAuto.bind(this);

    this.state = {
      lista: [],
    }
  };

  componentDidMount() {
    this.riceviAuto();
  };

  riceviAuto() {
    AutoDataService.getAll()
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




  eliminaAuto(id) {
    console.log(id);
    AutoDataService.delete(id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/allAuto');
        this.riceviAuto();
      })
      .catch(e => {
        console.log(e);
      })
  }

  modificaAuto(id) {
    console.log(id);
  }



  render() {
    return (
      <div>
        <Navbar />
        <h1>LISTA AUTO</h1>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>COSTRUTTORE</th>
              <th>MODELLO</th>
              <th>TARGA</th>
              <th>ANNO DI IMMATRICOLAZIONE</th>
              <th>CATEGORIA</th>
              <th>ELIMINA</th>
              <th>MODIFICA</th>
            </tr>
          </thead>
          <tbody>
            {this.state.lista.map((auto) => (
              <tr key={auto.id.toString()}>
                <td>{auto.id}</td>
                <td>{auto.costruttore}</td>
                <td>{auto.modello}</td>
                <td>{auto.targa}</td>
                <td>{auto.anno}</td>
                <td>{auto.categoriumId}</td>
                <td>
                  <button onClick={this.eliminaAuto.bind(this, auto.id)}>
                    Elimina
                  </button>
                </td>
                <td>
                  <Link to ={`/auto/${auto.id}`} >
                    <button onClick={this.modificaAuto.bind(this, auto.id)}>
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



export default ListaAuto;