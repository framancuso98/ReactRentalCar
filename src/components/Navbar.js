import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

class Navbar extends React.Component {
  
constructor(props){
  super(props);
  this.logout = this.logout.bind(this);
  
}

logout(){
  const utente =localStorage.getItem("utente");
  if(utente){
    localStorage.removeItem("utente")
  }
 
}


  render() {
    return (
      <div >
        <nav className="navbar navbar-expand-lg ">
          <p className="nav-link">Navbar</p>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <Link to="/home">
                <li className="nav-item active">
                  <p className="nav-link">Home</p>
                </li>
              </Link>
              <Link to="allUtenti">
                <li className="nav-item">
                <p className="nav-link">Lista Utenti</p> 
                </li>
              </Link>
              <Link to="addUtente">
                <li className="nav-item">
                <p className="nav-link">Aggiungi Utente</p>
                </li>
              </Link>
              <Link to="allAuto">
                <li className="nav-item">
                <p className="nav-link">Lista Auto</p>
                </li>
              </Link>
              <Link to="addAuto">
                <li className="nav-item">
                <p className="nav-link">Aggiungi Auto</p> 
                  
                </li>
              </Link>
              <Link to="allPrenotazioni">
                <li className="nav-item">
                <p className="nav-link">Lista Prenotazioni</p>
                  
                </li>
              </Link>
              <Link to="">
              <button type="button" className="btn btn-dark" onClick = {this.logout}>
              Logout
              </button>
              </Link>

            </ul>
          </div>
        </nav>





      </div>
    );
  }
}

export default Navbar;