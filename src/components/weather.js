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

 
  
  render() {
    return (
     
      <div className="form-group-1">
         <br /> <br />
        <form onSubmit={this.getData} >
        <input type="text" className="searchInput" placeholder = "Enter City to get weather info" onChange={this.updatedata} value={this.state.input}/>
        </form>
        {this.state.apidata  && this.state.apidata.current_observation &&     
        <table className = "striped">
        <thead>
          <tr>
              <th>Data</th>
              <th>Value</th>
          </tr>    
        </thead>

        <tbody>
          <tr>
            <td>Current Temperature in Celcius: </td>
            <td>{ this.state.apidata && this.state.apidata.current_observation.temp_c}</td>
            
          </tr>
          <tr>
            <td>Relative Humidity: </td>
            <td>{ this.state.apidata && this.state.apidata.current_observation.relative_humidity}</td>
          </tr>
          <tr>
            <td>Wind Speed(mph):  </td>
            <td>{ this.state.apidata && this.state.apidata.current_observation.wind_mph}</td>
          </tr>
          <tr>
            <td>Pressure(mb): </td>
            <td>{ this.state.apidata && this.state.apidata.current_observation.pressure_mb}</td>
          </tr>
          <tr>
            <td>Current Weather : </td>
            <td>{ this.state.apidata && this.state.apidata.current_observation.weather}</td>
          </tr>
          
        </tbody>
      </table>
        }
      </div>  
    );
  }
}

export default Weather;
