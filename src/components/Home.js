import React from 'react';
import Navbar from './Navbar';
import { Redirect } from 'react-router-dom';

class Home extends React.Component {
  render() {
    const utente = localStorage.getItem("utente")
    if (utente != null){
    
       return (
        <div >
          <Navbar />
            <h1>HOME!</h1>
        </div>
    );
     
    } else {
      return(
       <Redirect to="/login"/>
      );
    }
   
  }
}

export default Home;