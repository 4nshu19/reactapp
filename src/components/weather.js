import React, { Component } from 'react';
import './weather.css';

class Weather extends Component {
  constructor(props){
    super(props);
    this.state =  {input: '',
                apidata: ''
    }
    this.updatedata = this.updatedata.bind(this);
    this.getData = this.getData.bind(this);
    this.setData = this.setData.bind(this);
  }

  updatedata(e){
    this.setState({ input: e.target.value});
  
  }
  
  getData(e){  
    e.preventDefault();
    var url = "http://api.wunderground.com/api/560d211d4e155d9d/conditions/q/CA/"+ this.state.input+ ".json" ;
    fetch(url)
      .then (d => d.json())
        .then (result => this.setState({apidata: result}))
   
  }

  setData(data){

  }
  
  render() {
    return (
     
      <div className="form-group-1">
         <br /> <br />
        <form onSubmit={this.getData} >
        <input type="text" className="searchInput" placeholder = "Enter Location" onChange={this.updatedata} value={this.state.input}/>
        </form>
        Current Temperature in Celcius: { this.state.apidata && this.state.apidata.current_observation.temp_c}<br />
        Relative Humidity: { this.state.apidata && this.state.apidata.current_observation.relative_humidity} <br />
        Wind Speed(mph): { this.state.apidata && this.state.apidata.current_observation.wind_mph} <br />
        Pressure(mb): { this.state.apidata && this.state.apidata.current_observation.pressure_mb}
      
      </div>  
    );
  }
}

export default Weather;
