import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import App from './components/news';
import Weather from './components/weather';
import Giphy from './components/giphy';


class App1 extends Component {
  constructor(props){
    super(props);
    this.state = { show: 0}
    this.onWeather = this.onWeather.bind(this);
    this.onNews = this.onNews.bind(this);
    this.onGiphy = this.onGiphy.bind(this);
  }
  
  onWeather (){
    this.setState({show: 1});
  }
  onNews (){
    this.setState({show: 0});
  }
  
  onGiphy (){
    this.setState({show: 2});
  }
  
  render() {
    return (
      <div>
          <nav>
            <div className="nav-wrapper">
              <a href="#" className="brand-logo">Awesome React App</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="#" onClick = {this.onNews} >News</a></li>
                <li><a href="#" onClick = {this.onWeather}>Weather</a></li>
                <li><a href="#" onClick = {this.onGiphy}>Giphy</a></li>
              </ul>
            </div>
          </nav>
      { this.state.show == 0  ?
          <App />
       : this.state.show==1 ?
      <Weather /> : <Giphy />}
      </div>
    );
  }
}

export default App1;
