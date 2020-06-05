import React from 'react';
import { Link } from 'react-router-dom';


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
          Navbar
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <Link to="/home">
                <li className="nav-item active">
                  Home 
                </li>
              </Link>
              <Link to="allUtenti">
                <li className="nav-item">
                  Lista Utenti
                </li>
              </Link>
              <Link to="addUtente">
                <li className="nav-item">
                  Aggiungi Utente
                </li>
              </Link>
              <Link to="allAuto">
                <li className="nav-item">
                  Lista Auto
                </li>
              </Link>
              <Link to="addAuto">
                <li className="nav-item">
                  Aggiungi Auto
                  
                </li>
              </Link>
              <Link to="allPrenotazioni">
                <li className="nav-item">
                  Lista Prenotazioni
                  
                </li>
              </Link>
              <Link to="">
              <button onClick = {this.logout}>
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