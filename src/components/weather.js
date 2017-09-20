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
    this.clipboardupdate = this.clipboardupdate.bind(this);
  }

  updatedata(e){
    this.setState({ input: e.target.value});
  
  }
  
  getData(e){  
    e.preventDefault();
    var url = "http://samples.openweathermap.org/data/2.5/weather?appid=54b7c680015da1f02eb920c431c9e1ba&q="+ this.state.input ;
    alert(url);
    fetch(url,{mode: 'no-cors'})
    .then (d => console.log(url,d));
   
  }

  clipboardupdate(e){
   e.clipboardData = "hellow";
  }
  render() {
    return (
      <div className="form-group-1">
        
        <form onSubmit={this.getData} >
        <input type="text" className="searchInput" placeholder = "Enter Location" onChange={this.updatedata} value={this.state.input}/>
        </form>
      </div>  
    );
  }
}

export default Weather;
