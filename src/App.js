import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import SuccessMessage from './SuccessMessage';

/**
 * @name Login
 * @description A login component with success message on submission
 * @example
 *  <App
 *    {this.state.complete ? (
 *      <SuccessMessage />
 *      ) : (
 *      <Login submit={this.handleSubmit} input={this.handleInput} />
 *    )}
 *  />
 */

class App extends Component {
  state = {complete: false, firstName: '', pokemon: {}};

  handleSubmit = e => {
    e.preventDefault();
    this.setState({complete: true});
    document.cookie = `firstName=${this.state.firstName}`;
  };

  handleInput = e => {
    this.setState({firstName: e.currentTarget.value});
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <nav className="navbar">
            <ul>
              <li className="nav-li">
                <a href="http://localhost:3000">Batman</a>
              </li>
              <li className="nav-li">
                <a href="http://localhost:3000">Supermman</a>
              </li>
              <li className="nav-li">
                <a href="http://localhost:3000">Aquaman</a>
              </li>
              <li className="nav-li">
                <a href="http://localhost:3000">Wonder Woman</a>
              </li>
            </ul>
          </nav>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Break Pixel Test</p>
        {this.state.complete ? (
          <SuccessMessage />
        ) : (
          <Login submit={this.handleSubmit} input={this.handleInput} />
        )}
      </div>
    );
  }
}

export default App;
