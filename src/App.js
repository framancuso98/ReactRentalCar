import React from 'react';
import './App.css';
import Home from './components/Home';
import ListaUtenti from './components/ListaUtenti';
import ListaAuto from './components/ListaAuto';
import ListaPrenotazione from './components/ListaPrenotazione';
import AggiungiAuto from './components/AggiungiAuto';
import AggiungiUtente from './components/AggiungiUtente';
import ModificaUtente from './components/ModificaUtente';
import ModificaAuto from './components/ModificaAuto';
import Welcome from './components/Welcome';
import Login from './components/Login';
import SignIn from './components/SignIn';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
          
            <Route exact path="/" component={Welcome}  />
            <Route exact path="/home" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signIn" component={SignIn} />

        
            <Route exact path="/allUtenti" component={ListaUtenti}/>



            <Route exact path="/allAuto" component={ListaAuto} />
            <Route exact path="/allPrenotazioni" component={ListaPrenotazione} />
            <Route exact path="/addUtente" component={AggiungiUtente} />
            <Route exact path="/addAuto" component={AggiungiAuto} />
            <Route path="/utente/:id" component={ModificaUtente} />
            <Route path="/auto/:id" component={ModificaAuto} />
          
        
      </Router>
    );
  }
}

export default App;
