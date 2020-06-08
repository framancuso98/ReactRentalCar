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

const PrivateRoute = ({ component: Component, ...rest }) => (
  
  <Route {...rest} render={(props) => (
    isAuth() === true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
);

function isAuth() {
    const utente = localStorage.getItem("utente");
    if (utente){
      console.log("true")
      return true;
    } else {
      console.log("false")
      return false;
    }
  }
class App extends React.Component {
  

  
  render() {
    return (
      <Router>
          
            <Route exact path="/" component={Welcome}  />
            <Route exact path="/home" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signIn" component={SignIn} />
            
            
            <PrivateRoute exact path="/allUtenti" component={ListaUtenti} />
            <PrivateRoute exact path="/allAuto" component={ListaAuto} />
            <PrivateRoute exact path="/allPrenotazioni" component={ListaPrenotazione} />
            <PrivateRoute exact path="/addUtente" component={AggiungiUtente} />
            <PrivateRoute exact path="/addAuto" component={AggiungiAuto} />
            <PrivateRoute path="/utente/:id" component={ModificaUtente} />
            <PrivateRoute path="/auto/:id" component={ModificaAuto} />
         
        
      </Router>
    );
  }
}

export default App;
