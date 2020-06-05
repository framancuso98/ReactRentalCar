import React from 'react';
import { Link } from 'react-router-dom';

class Welcome extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>Welcome in</h1>
          <h2>Rental Car</h2>
        </div>
        <div className="grid grid-pad">
          <div className="row">
            <div className="col-12 col-md-6">
              <Link to="/login">
                <button className="col-md-8 button module">
                  <h4>LOGIN</h4>
                </button>
              </Link>
            </div>
            <div className="col-12 col-md-6">
              <Link to="/signIn">
                <button className="col-md-8 button module">
                  <h4>REGISTRATI</h4>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;