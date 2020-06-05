import React from 'react';
import { Link } from 'react-router-dom';
import AutoDataService from '../services/auto.service';





class ModificaAuto extends React.Component {

  constructor(props) {
    super(props);
    this.cercaAuto = this.cercaAuto.bind(this);
    this.onChangeCostruttore = this.onChangeCostruttore.bind(this);
    this.onChangeModello = this.onChangeModello.bind(this);
    this.onChangeTarga = this.onChangeTarga.bind(this);
    this.onChangeAnno = this.onChangeAnno.bind(this);
    this.onChangeCategoria = this.onChangeCategoria.bind(this);
    this.salvaModifiche = this.salvaModifiche.bind(this);

    this.state = {
      id: props.match.params.id,
      costruttore: " ",
      modello: " ",
      targa: " ",
      anno: "0000-00-00",
      categoriumId: 0,
    }
  };



  componentDidMount() {
    this.cercaAuto();
  };


  cercaAuto(id) {
    console.log(this.state);
    AutoDataService.findOne(this.state.id)
      .then(response => {
        this.setState({
          costruttore: response.data.costruttore,
          modello: response.data.modello,
          targa: response.data.targa,
          anno: response.data.anno,
          categoriumId: response.data.categoriumId,


        })
        console.log(this.state);
      })
      .catch(e => {
        console.log(e);
      });

  }

  onChangeCostruttore(e) {

    this.setState({

      costruttore: e.target.value

    })
  }

  onChangeModello(e) {

    this.setState({

      modello: e.target.value

    })
    console.log(e.target.value)
  };

  onChangeTarga(e) {

    this.setState({

      targa: e.target.value

    })
    console.log(e.target.value)
  };

  onChangeAnno(e) {

    this.setState({

      anno: e.target.value

    })
    console.log(e.target.value)
  };

  onChangeCategoria(e) {

    this.setState({

      categoriumId: e.target.value

    })
    console.log(e.target.value)
  };

  salvaModifiche(id) {
    const data = {
      costruttore: this.state.costruttore,
      modello: this.state.modello,
      targa: this.state.targa,
      anno: this.state.anno,
      categoriumId: this.state.categoriumId,
    };

    AutoDataService.update(this.state.id, data)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/allAuto');
      })
      .catch(e => {
        console.log(e)
      })
  }




  render() {
    return (
      <div >
        <h1>Modifica Auto!</h1>
        <div className="from-group">
          <label htmlFor="costruttore"> Costruttore</label>
          <input
            type="text"
            className="from-group"
            id="costruttore"
            required
            value={this.state.costruttore}
            onChange={this.onChangeCostruttore}
            name="costruttore"
          />
        </div>
        <div className="from-group">
          <label htmlFor="modello"> Modello</label>
          <input
            type="text"
            className="from-group"
            id="modello"
            required
            value={this.state.modello}
            onChange={this.onChangeModello}
            name="modello"
          />
        </div>
        <div className="from-group">
          <label htmlFor="targa"> targa</label>
          <input
            type="text"
            className="from-group"
            id="targa"
            required
            value={this.state.targa}
            onChange={this.onChangeTarga}
            name="targa"
          />
        </div>
        <div className="from-group">
          <label htmlFor="anno"> Data di Immatricolazione</label>
          <input
            type="date"
            className="from-group"
            id="anno"
            required
            value={this.state.anno}
            onChange={this.onChangeAnno}
            name="anno"
          />
        </div>
        <div className="form-group">
          <label htmlFor="categoria">Categoria</label>
          <select id="ruolo" className="form-control" name="categoria"
            onChange={this.onChangeCategoria}
            value={this.state.categoriumId} >
            <option value="1">City Car</option>
            <option value="2">SUV</option>
            <option value="3">Monovolume</option>

          </select>
        </div>
          <button onClick={this.salvaModifiche}>
            Salva
            </button>
        <Link to="/allAuto">
          <button >
            Indietro
            </button>
        </Link>

      </div>
    );
  }
}

export default ModificaAuto;